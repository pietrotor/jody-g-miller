import type {
  ArchiveItem,
  Bio,
  BtgAccomplishments,
  BtgHistory,
  BtgInvestors,
  BtgMission,
  ContentType,
  PressLogo,
  SelectedPiece,
  Speaking,
  TheDetails,
} from "./types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
const REVALIDATE = 60;

interface StrapiMedia {
  url: string;
}

interface StrapiResponse<T> {
  data: T;
}

interface StrapiCollectionResponse<T> {
  data: T[];
  meta: { pagination: { total: number } };
}

/**
 * Generic fetch wrapper for Strapi REST API.
 * Adds revalidation and base URL handling.
 */
async function fetchStrapi<T>(
  path: string,
  params?: Record<string, string>,
): Promise<T> {
  const url = new URL(`/api${path}`, STRAPI_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.set(key, value),
    );
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText} — ${url.pathname}`);
  }

  return res.json() as Promise<T>;
}

/**
 * Resilient wrapper around `fetchStrapi`.
 *
 * Returns the provided fallback when Strapi is unreachable or responds with
 * an error, so SSG/ISR builds never crash (e.g. when Strapi is not running
 * during `next build`). When Strapi is reachable, this behaves identically
 * to `fetchStrapi`. A warning is written to stderr so silent fallbacks are
 * still visible in build/CI logs.
 *
 * @param path Strapi REST endpoint path (without `/api` prefix).
 * @param params Optional query params appended to the URL.
 * @param fallback Value returned if the request fails.
 * @returns The parsed response, or `fallback` on failure.
 */
async function fetchStrapiSafe<T>(
  path: string,
  params: Record<string, string> | undefined,
  fallback: T,
): Promise<T> {
  try {
    return await fetchStrapi<T>(path, params);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(
      `[strapi] using fallback for ${path} (${message})\n`,
    );
    return fallback;
  }
}

function emptyCollection<T>(): StrapiCollectionResponse<T> {
  return {
    data: [],
    meta: { pagination: { total: 0 } },
  };
}

function mediaUrl(media: StrapiMedia | null | undefined): string | undefined {
  if (!media?.url) return undefined;
  if (media.url.startsWith("http")) return media.url;
  return `${STRAPI_URL}${media.url}`;
}

// ── Archive Items ──────────────────────────────────────────────────────

interface StrapiArchiveItem {
  id: number;
  documentId: string;
  title: string;
  type: string;
  year: number;
  description: string | null;
  source: string | null;
  featured: boolean;
  externalUrl: string | null;
  youtubeId: string | null;
  embedUrl: string | null;
  duration: string | null;
  publishedDate: string;
  pdf: StrapiMedia | null;
  category: { name: string } | null;
}

function mapArchiveItem(item: StrapiArchiveItem): ArchiveItem {
  return {
    id: item.documentId,
    title: item.title,
    type: item.type.toLowerCase() as ContentType,
    description: item.description ?? "",
    source: item.source ?? "",
    category: item.category?.name ?? "",
    year: item.year,
    date: item.publishedDate,
    featured: item.featured,
    externalUrl: item.externalUrl ?? undefined,
    pdfUrl: mediaUrl(item.pdf),
    youtubeId: item.youtubeId ?? undefined,
    embedUrl: item.embedUrl ?? undefined,
    duration: item.duration ?? undefined,
  };
}

export async function fetchArchiveItems(): Promise<ArchiveItem[]> {
  const res = await fetchStrapiSafe<StrapiCollectionResponse<StrapiArchiveItem>>(
    "/archive-items",
    {
      "populate[category]": "true",
      "populate[pdf]": "true",
      "pagination[pageSize]": "200",
      "sort[0]": "publishedDate:desc",
    },
    emptyCollection<StrapiArchiveItem>(),
  );
  return res.data.map(mapArchiveItem);
}

export async function fetchFeaturedItems(): Promise<ArchiveItem[]> {
  const res = await fetchStrapiSafe<StrapiCollectionResponse<StrapiArchiveItem>>(
    "/archive-items",
    {
      "filters[featured][$eq]": "true",
      "populate[category]": "true",
      "populate[pdf]": "true",
      "sort[0]": "publishedDate:desc",
      "pagination[pageSize]": "10",
    },
    emptyCollection<StrapiArchiveItem>(),
  );
  return res.data.map(mapArchiveItem);
}

// ── Categories ─────────────────────────────────────────────────────────

interface StrapiCategory {
  id: number;
  name: string;
  slug: string;
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetchStrapiSafe<StrapiCollectionResponse<StrapiCategory>>(
    "/categories",
    { "sort[0]": "name:asc" },
    emptyCollection<StrapiCategory>(),
  );
  return res.data.map((c) => c.name);
}

// ── Selected Pieces (single type with repeatable component) ───────────

interface StrapiSelectedPieceEntry {
  id: number;
  personalIntro: string;
  image: StrapiMedia | null;
  archiveItem: StrapiArchiveItem | null;
}

interface StrapiSelectedPiecesPage {
  pieces: StrapiSelectedPieceEntry[];
}

export async function fetchSelectedPieces(): Promise<SelectedPiece[]> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiSelectedPiecesPage>>(
    "/selected-pieces-page",
    {
      "populate[pieces][populate][image]": "true",
      "populate[pieces][populate][archiveItem]": "true",
      "populate[pieces][populate][archiveItem][populate][pdf]": "true",
    },
    { data: { pieces: [] } },
  );
  return (res.data.pieces ?? [])
    .filter((p) => p.archiveItem)
    .map((p, index) => {
      const a = p.archiveItem!;
      return {
        id: String(p.id),
        title: a.title,
        source: a.source ?? "",
        type: a.type.toLowerCase() as ContentType,
        year: a.year,
        personalIntro: p.personalIntro,
        imageUrl: mediaUrl(p.image),
        externalUrl: a.externalUrl ?? undefined,
        pdfUrl: mediaUrl(a.pdf),
        youtubeId: a.youtubeId ?? undefined,
        embedUrl: a.embedUrl ?? undefined,
        order: index,
      };
    });
}

// ── Press Logos ─────────────────────────────────────────────────────────

interface StrapiPressLogo {
  id: number;
  name: string;
  order: number;
}

export async function fetchPressLogos(): Promise<PressLogo[]> {
  const res = await fetchStrapiSafe<StrapiCollectionResponse<StrapiPressLogo>>(
    "/press-logos",
    { "sort[0]": "order:asc", "pagination[pageSize]": "50" },
    emptyCollection<StrapiPressLogo>(),
  );
  return res.data.map((l) => ({
    id: String(l.id),
    name: l.name,
    order: l.order,
  }));
}

// ── Bio (Single Type) ──────────────────────────────────────────────────

interface StrapiBio {
  headline: string | null;
  biography: string | null;
  photo: StrapiMedia | null;
  downloadablePdf: StrapiMedia | null;
  linkedinUrl: string | null;
  familyLinks: { label: string; url: string }[];
}

export async function fetchBio(): Promise<Bio> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiBio>>(
    "/bio",
    {
      "populate[photo]": "true",
      "populate[downloadablePdf]": "true",
      "populate[familyLinks]": "true",
    },
    {
      data: {
        headline: null,
        biography: null,
        photo: null,
        downloadablePdf: null,
        linkedinUrl: null,
        familyLinks: [],
      },
    },
  );
  const d = res.data;
  return {
    headline: d.headline ?? "Redefining the way the world works.",
    biography: d.biography ?? "",
    photoUrl: mediaUrl(d.photo),
    downloadablePdfUrl: mediaUrl(d.downloadablePdf),
    linkedinUrl: d.linkedinUrl ?? undefined,
    familyLinks: d.familyLinks ?? [],
  };
}

// ── BTG (Single Type) ──────────────────────────────────────────────────

interface StrapiBtgRaw {
  missionIntro: string | null;
  missionQuote: string | null;
  missionClosing: string | null;
  historyIntro: string | null;
  timelineEvents: { year: string; event: string }[];
  milestones: { text: string }[];
  recognitions: { label: string; description: string }[];
  investors: { name: string; description: string }[];
  boardMembers: { name: string; role: string }[];
}

const EMPTY_BTG: StrapiResponse<StrapiBtgRaw> = {
  data: {
    missionIntro: null,
    missionQuote: null,
    missionClosing: null,
    historyIntro: null,
    timelineEvents: [],
    milestones: [],
    recognitions: [],
    investors: [],
    boardMembers: [],
  },
};

export async function fetchBtgMission(): Promise<BtgMission> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiBtgRaw>>(
    "/btg",
    {
      "populate[timelineEvents]": "false",
      "populate[milestones]": "false",
      "populate[recognitions]": "false",
      "populate[investors]": "false",
      "populate[boardMembers]": "false",
    },
    EMPTY_BTG,
  );
  const d = res.data;
  return {
    missionIntro: d.missionIntro ?? "",
    missionQuote: d.missionQuote ?? "",
    missionClosing: d.missionClosing ?? "",
  };
}

export async function fetchBtgHistory(): Promise<BtgHistory> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiBtgRaw>>(
    "/btg",
    { "populate[timelineEvents]": "true" },
    EMPTY_BTG,
  );
  const d = res.data;
  return {
    historyIntro: d.historyIntro ?? "",
    timelineEvents: d.timelineEvents ?? [],
  };
}

export async function fetchBtgAccomplishments(): Promise<BtgAccomplishments> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiBtgRaw>>(
    "/btg",
    {
      "populate[milestones]": "true",
      "populate[recognitions]": "true",
    },
    EMPTY_BTG,
  );
  const d = res.data;
  return {
    milestones: d.milestones ?? [],
    recognitions: d.recognitions ?? [],
  };
}

export async function fetchBtgInvestors(): Promise<BtgInvestors> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiBtgRaw>>(
    "/btg",
    {
      "populate[investors]": "true",
      "populate[boardMembers]": "true",
    },
    EMPTY_BTG,
  );
  const d = res.data;
  return {
    investors: d.investors ?? [],
    boardMembers: d.boardMembers ?? [],
  };
}

// ── Speaking (Single Type) ─────────────────────────────────────────────

interface StrapiSpeakingRaw {
  topics: { title: string; description: string }[];
  advisoryAreas: { text: string }[];
  contactIntro: string | null;
}

export async function fetchSpeaking(): Promise<Speaking> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiSpeakingRaw>>(
    "/speaking",
    {
      "populate[topics]": "true",
      "populate[advisoryAreas]": "true",
    },
    { data: { topics: [], advisoryAreas: [], contactIntro: null } },
  );
  const d = res.data;
  return {
    topics: d.topics ?? [],
    advisoryAreas: (d.advisoryAreas ?? []).map((a) => a.text),
    contactIntro: d.contactIntro ?? "",
  };
}

// ── The Details (Single Type) ──────────────────────────────────────────

interface StrapiTheDetails {
  entrepreneurial: string | null;
  executive: string | null;
  boards: string | null;
  government: string | null;
  nonprofit: string | null;
}

export async function fetchTheDetails(): Promise<TheDetails> {
  const res = await fetchStrapiSafe<StrapiResponse<StrapiTheDetails>>(
    "/the-details",
    undefined,
    {
      data: {
        entrepreneurial: null,
        executive: null,
        boards: null,
        government: null,
        nonprofit: null,
      },
    },
  );
  const d = res.data;
  return {
    entrepreneurial: d.entrepreneurial ?? "",
    executive: d.executive ?? "",
    boards: d.boards ?? "",
    government: d.government ?? "",
    nonprofit: d.nonprofit ?? "",
  };
}

