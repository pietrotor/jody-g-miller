import type { Core } from "@strapi/strapi";

const PUBLIC_READ_CONTENT_TYPES = [
  "api::archive-item.archive-item",
  "api::category.category",
  "api::bio.bio",
  "api::the-details.the-details",
  "api::btg.btg",
  "api::speaking.speaking",
  "api::selected-pieces-page.selected-pieces-page",
  "api::press-logo.press-logo",
];

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await setPublicPermissions(strapi);
    await seedInitialData(strapi);
    await configureAdminLayouts(strapi);
  },
};

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });

  if (!publicRole) {
    strapi.log.warn(
      "[bootstrap] Public role not found — skipping permission setup",
    );
    return;
  }

  const existingPermissions = await strapi.db
    .query("plugin::users-permissions.permission")
    .findMany({ where: { role: publicRole.id } });

  const existingActions = new Set(
    existingPermissions.map((p: { action: string }) => p.action),
  );

  for (const uid of PUBLIC_READ_CONTENT_TYPES) {
    const actions = ["find", "findOne"];

    for (const action of actions) {
      const actionKey = `${uid}.${action}`;

      if (!existingActions.has(actionKey)) {
        await strapi.db.query("plugin::users-permissions.permission").create({
          data: { action: actionKey, role: publicRole.id },
        });
        strapi.log.info(`[bootstrap] Public permission granted: ${actionKey}`);
      }
    }
  }
}

async function seedInitialData(strapi: Core.Strapi) {
  const existingCategories = await strapi.documents("api::category.category").findMany({});
  if (existingCategories.length > 0) {
    strapi.log.info("[seed] Data already exists — skipping seed");
    return;
  }

  strapi.log.info("[seed] No data found — seeding initial content…");

  // ── Categories ───────────────────────────────────────────────────────
  const CATEGORIES = [
    { name: "Business Strategy", slug: "business-strategy" },
    { name: "Entrepreneurship", slug: "entrepreneurship" },
    { name: "Future of Work", slug: "future-of-work" },
    { name: "Leadership", slug: "leadership" },
    { name: "Women in Business", slug: "women-in-business" },
  ];

  const categoryMap = new Map<string, string>();
  for (const cat of CATEGORIES) {
    const created = await strapi.documents("api::category.category").create({
      data: cat,
      status: "published",
    });
    categoryMap.set(cat.name, created.documentId);
    strapi.log.info(`[seed] Category: ${cat.name}`);
  }

  // ── Archive Items ────────────────────────────────────────────────────
  const ARCHIVE_ITEMS = [
    { title: "The On-Demand Economy and the Future of Executive Talent", type: "video" as const, year: 2025, description: "Jody joins CNN to discuss how BTG is reshaping how companies access top-tier independent talent — and what that means for the workforce of the future.", source: "CNN", category: "Future of Work", publishedDate: "2025-02-18", youtubeId: "dQw4w9WgXcQ", featured: true },
    { title: "Why the Best Executives Are Going Independent", type: "article" as const, year: 2025, description: "The shift from corporate careers to independent consulting isn't a trend — it's a structural transformation that companies can no longer afford to ignore.", source: "Harvard Business Review", category: "Future of Work", publishedDate: "2025-01-14", externalUrl: "#", featured: true },
    { title: "Building BTG: The Story Behind the On-Demand Talent Marketplace", type: "podcast" as const, year: 2025, description: "Jody tells the unfiltered story of co-founding Business Talent Group — the pivots, the early skeptics, and the moment she knew it would work.", source: "How I Built This", category: "Entrepreneurship", publishedDate: "2025-01-07", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "52 min", featured: true },
    { title: "The Case for Flexible Leadership at the Top", type: "article" as const, year: 2024, description: "As organizations face relentless uncertainty, the rigid permanent hire is giving way to a more adaptive model — and the C-suite is not immune.", source: "The Wall Street Journal", category: "Leadership", publishedDate: "2024-11-20", externalUrl: "#", featured: false },
    { title: "Female Founders and the Persistent Funding Gap", type: "article" as const, year: 2024, description: "Despite record-breaking strides, women-led businesses still face systemic barriers to capital — and the numbers reveal just how wide that gap remains.", source: "Forbes", category: "Women in Business", publishedDate: "2024-09-11", externalUrl: "#", featured: false },
    { title: "Rethinking Talent Acquisition for the 2020s", type: "video" as const, year: 2024, description: "On Bloomberg TV, Jody breaks down why traditional hiring models are failing modern companies — and what the alternatives look like.", source: "Bloomberg", category: "Future of Work", publishedDate: "2024-08-28", youtubeId: "dQw4w9WgXcQ", featured: false },
    { title: "Leading Through Uncertainty", type: "podcast" as const, year: 2024, description: "Jody discusses frameworks for making decisions when the data is incomplete and the stakes are high — lessons drawn from two decades of building companies.", source: "Masters of Scale", category: "Leadership", publishedDate: "2024-07-15", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "44 min", featured: false },
    { title: "What 25 Years of Building Companies Taught Me About Failure", type: "article" as const, year: 2024, description: "The most important lessons aren't the ones you learn from success. A reflection on the pivots, wrong turns, and costly mistakes that ultimately made BTG possible.", source: "Inc. Magazine", category: "Entrepreneurship", publishedDate: "2024-06-02", externalUrl: "#", featured: false },
    { title: "The Boardroom Is Not Ready for the Future of Work", type: "article" as const, year: 2024, description: "Corporate boards are still operating on assumptions about talent and hierarchy that no longer reflect how work actually gets done.", source: "Fortune", category: "Business Strategy", publishedDate: "2024-04-17", externalUrl: "#", featured: false },
    { title: "The Power of Networks in the Independent Economy", type: "podcast" as const, year: 2024, description: "Why strategic relationships are more valuable than any single deal — and how to build them with authenticity in an era of transactional networking.", source: "The Tim Ferriss Show", category: "Entrepreneurship", publishedDate: "2024-03-04", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "1h 12 min", featured: false },
    { title: "The Myth of the Permanent Employee", type: "article" as const, year: 2023, description: "We've built our entire talent infrastructure around a model of employment that was invented in the industrial age. It's time to question the premise.", source: "Harvard Business Review", category: "Future of Work", publishedDate: "2023-11-08", externalUrl: "#", featured: false },
    { title: "Jody Greenstone Miller on the Next Chapter of BTG", type: "video" as const, year: 2023, description: "A candid conversation on CNBC about scaling a marketplace business, navigating the post-pandemic talent market, and what's next for Business Talent Group.", source: "CNBC", category: "Entrepreneurship", publishedDate: "2023-09-21", youtubeId: "dQw4w9WgXcQ", featured: false },
    { title: "Board Diversity Is Not Enough. We Need Board Expertise.", type: "article" as const, year: 2023, description: "Progress on diversity in boardrooms is real but insufficient. The next frontier is bringing in directors who actually understand the industries they oversee.", source: "The New York Times", category: "Leadership", publishedDate: "2023-07-30", externalUrl: "#", featured: false },
    { title: "Work, Redefined", type: "podcast" as const, year: 2023, description: "Jody joins Adam Grant to discuss how the meaning of work is shifting — and what leaders need to understand about a workforce that is rethinking everything.", source: "WorkLife with Adam Grant", category: "Future of Work", publishedDate: "2023-05-16", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "38 min", featured: false },
    { title: "Scaling with Purpose: How Not to Lose Your Company While Growing It", type: "article" as const, year: 2023, description: "Growth is the goal, but most founders fail to preserve the culture and clarity that made their company worth scaling in the first place.", source: "Fast Company", category: "Business Strategy", publishedDate: "2023-03-22", externalUrl: "#", featured: false },
    { title: "The Return-to-Office Debate Is Missing the Point", type: "article" as const, year: 2022, description: "The real question isn't where people work — it's how leaders can rebuild trust and performance in a world where the old rules no longer apply.", source: "The Wall Street Journal", category: "Future of Work", publishedDate: "2022-10-12", externalUrl: "#", featured: false },
    { title: "Women, Leadership, and the Path to the Top", type: "video" as const, year: 2022, description: "A TEDx talk on the structural and cultural barriers that still prevent talented women from reaching senior leadership — and what organizations must do differently.", source: "TEDx", category: "Women in Business", publishedDate: "2022-06-08", youtubeId: "dQw4w9WgXcQ", featured: false },
    { title: "Why Every Company Needs a Talent Marketplace Strategy", type: "article" as const, year: 2022, description: "Access to talent is increasingly the limiting factor for growth. Companies that fail to build flexible talent pipelines will find themselves outcompeted by those that do.", source: "Bloomberg Businessweek", category: "Business Strategy", publishedDate: "2022-04-19", externalUrl: "#", featured: false },
    { title: "The Great Resignation Was Never About Work-Life Balance", type: "article" as const, year: 2021, description: "Millions left their jobs not for more flexibility but for more meaning. Understanding why is the only way leaders can begin to respond.", source: "Harvard Business Review", category: "Future of Work", publishedDate: "2021-11-03", externalUrl: "#", featured: false },
    { title: "On-Demand Talent and the Post-Pandemic Organization", type: "podcast" as const, year: 2021, description: "How the pandemic accelerated a decade's worth of change in how companies think about their workforce — and what the talent marketplace model offers as an answer.", source: "Acquired", category: "Future of Work", publishedDate: "2021-08-25", embedUrl: "https://open.spotify.com/embed/episode/placeholder", duration: "1h 24 min", featured: false },
    { title: "Entrepreneurship After 40: The Advantage Nobody Talks About", type: "article" as const, year: 2021, description: "Most startup mythology celebrates youth. But the compounding returns of experience, network, and pattern recognition give older founders a durable edge.", source: "Inc. Magazine", category: "Entrepreneurship", publishedDate: "2021-05-14", externalUrl: "#", featured: false },
    { title: "Crisis Leadership: What the Best CEOs Did Differently in 2020", type: "article" as const, year: 2020, description: "The pandemic was a forcing function that separated leaders who lead from those who managed. Here's what distinguished the two.", source: "Fortune", category: "Leadership", publishedDate: "2020-12-08", externalUrl: "#", featured: false },
    { title: "The Independent Workforce: A Silver Lining of the Pandemic", type: "video" as const, year: 2020, description: "In this CNN segment, Jody argues that the disruption of 2020 permanently expanded the pool of high-end independent talent available to companies.", source: "CNN", category: "Future of Work", publishedDate: "2020-09-17", youtubeId: "dQw4w9WgXcQ", featured: false },
  ];

  const archiveMap = new Map<string, string>();
  for (const item of ARCHIVE_ITEMS) {
    const { category: catName, ...rest } = item;
    const catDocId = categoryMap.get(catName);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const created = await strapi.documents("api::archive-item.archive-item").create({
      data: {
        ...rest,
        category: catDocId ?? undefined,
      } as any,
      status: "published",
    });
    archiveMap.set(item.title, created.documentId);
    strapi.log.info(`[seed] Archive: ${item.title.slice(0, 50)}`);
  }

  // ── Selected Pieces (single type with repeatable component) ─────────
  const SELECTED_PIECES_ENTRIES = [
    { archiveTitle: "Why the Best Executives Are Going Independent", personalIntro: "This piece captures what I've been seeing at BTG for over a decade — the quiet exodus of exceptional talent from the corporate ladder toward independence. I wrote this because I wanted to put data behind what our own experience had already confirmed." },
    { archiveTitle: "The Myth of the Permanent Employee", personalIntro: "I've been making this argument in boardrooms for years. When HBR gave me the space to make it in full, I tried to write something that would actually challenge how executives think about the structure of their workforce — not just the perks they offer." },
    { archiveTitle: "Female Founders and the Persistent Funding Gap", personalIntro: "The numbers in this piece frustrated and motivated me in equal measure. The gap is real, it is measurable, and the excuses for it have long since expired. I hope this piece makes it harder to look away." },
    { archiveTitle: "The Great Resignation Was Never About Work-Life Balance", personalIntro: "When the Great Resignation conversation started dominating every leadership forum, I felt like something essential was being missed. This is my attempt to say what I actually think was happening — and what leaders got wrong in their response." },
    { archiveTitle: "What 25 Years of Building Companies Taught Me About Failure", personalIntro: "Writing this piece was genuinely uncomfortable. Talking about success is easy. Talking honestly about the decisions I got wrong, the hires I shouldn't have made, the pivots I made too late — that required a different kind of honesty. I'm glad I did it." },
    { archiveTitle: "Crisis Leadership: What the Best CEOs Did Differently in 2020", personalIntro: "I was watching leaders navigate 2020 in real time — many of them BTG clients. The contrast between those who rose and those who faltered was striking and instructive. I wrote this while the wound was still fresh." },
  ];

  await strapi.documents("api::selected-pieces-page.selected-pieces-page").create({
    data: {
      pieces: SELECTED_PIECES_ENTRIES.map((entry) => ({
        archiveItem: archiveMap.get(entry.archiveTitle) ?? undefined,
        personalIntro: entry.personalIntro,
      })),
    } as any,  // eslint-disable-line @typescript-eslint/no-explicit-any
    status: "published",
  });
  strapi.log.info("[seed] Selected Pieces page seeded");

  // ── Press Logos ──────────────────────────────────────────────────────
  const PRESS_LOGOS = [
    "WSJ", "The New York Times", "HBR", "Fortune", "Bloomberg",
    "CNN", "Fast Company", "Financial Times", "Inc.",
  ];

  for (let i = 0; i < PRESS_LOGOS.length; i++) {
    await strapi.documents("api::press-logo.press-logo").create({
      data: { name: PRESS_LOGOS[i], order: i + 1 },
    });
    strapi.log.info(`[seed] Logo: ${PRESS_LOGOS[i]}`);
  }

  // ── Bio (single type) ───────────────────────────────────────────────
  await strapi.documents("api::bio.bio").create({
    data: {
      headline: "Redefining the way the world works.",
      biography: "Jody Greenstone Miller is the Co-Founder and former CEO of Business Talent Group (BTG), the leading marketplace for high-end, on-demand executive talent. She built BTG over nearly two decades into a company that has placed thousands of independent executives with Fortune 500 companies, private equity firms, and high-growth startups worldwide.\n\nHer career spans across the private, public, and non-profit sectors, reflecting a deep commitment to institutional excellence, enterprise, and human dignity. Jody's insights on our changing landscape of labor have been featured on major business publications, the Wall Street Journal, and Fortune, positioning her at the forefront of discussions regarding the future of work and organizational agility.\n\nToday, she continues to shape frontier ideas and advise high-growth stage companies while advocating for a more flexible model of work post-industrial environment.",
      linkedinUrl: "https://www.linkedin.com/in/jodygreenstonemiller/",
      familyLinks: [
        { label: "Amelia Miller", url: "https://www.ameliagmiller.com" },
      ],
    } as any,  // eslint-disable-line @typescript-eslint/no-explicit-any
    status: "published",
  });
  strapi.log.info("[seed] Bio seeded");

  // ── BTG (single type) ───────────────────────────────────────────────
  await strapi.documents("api::btg.btg").create({
    data: {
      missionIntro: "Business Talent Group was founded on a deceptively simple idea: the most capable executives don't all work inside companies. Many of the best — the ones with the deepest expertise, the sharpest strategic judgment, the hardest-won pattern recognition — have chosen independence.\n\nBTG exists to make that talent accessible. We match independent executives — former C-suite leaders, functional experts, industry veterans — with organizations that need exactly what they offer, when they need it, without the overhead and permanence of a traditional hire.",
      missionQuote: "The best talent in the world should be free to work on their own terms. The best companies in the world should have access to it.",
      missionClosing: "The future of work is more flexible, more independent, and more meritocratic than the model it is replacing. BTG has been making that future real since 2007.",
      historyIntro: "BTG was born out of a conviction that the model of executive employment — the permanent hire, the long-term contract, the ladder — was increasingly misaligned with how the most talented people wanted to work and how the best organizations needed to access expertise. What follows is the story of building something that didn't exist yet.",
      timelineEvents: [
        { year: "2007", event: "Jody Greenstone Miller and Hillary Doyle co-found Business Talent Group in Los Angeles with the conviction that the on-demand model that had transformed other industries would eventually reshape executive talent." },
        { year: "2010", event: "BTG completes its first hundred engagements. Early clients include Fortune 500 companies navigating post-financial crisis restructuring." },
        { year: "2013", event: "The talent network grows to over 1,000 vetted independent executives. BTG publishes its first research on the independent executive phenomenon." },
        { year: "2016", event: "BTG opens its New York office and expands its client base significantly into financial services and private equity." },
        { year: "2019", event: "BTG releases landmark research on the 'Gig Economy' for executives, placing the company at the center of the national conversation about the future of work." },
        { year: "2021", event: "In the wake of the pandemic's seismic disruption to labor markets, BTG experiences its largest growth year on record." },
        { year: "2023", event: "BTG reaches a new milestone in total engagements completed, serving clients across North America, Europe, and Asia." },
      ],
      milestones: [
        { text: "Over 5,000 independent executives in the BTG talent network" },
        { text: "Thousands of engagements completed across Fortune 500 companies, PE firms, and high-growth businesses" },
        { text: "Clients in financial services, healthcare, technology, consumer, media, and the public sector" },
        { text: "Operations across North America, Europe, and Asia" },
        { text: "Pioneered the language and frameworks now used across the industry to describe independent executive work" },
      ],
      recognitions: [
        { label: "Inc. 5000", description: "Recognized as one of the fastest-growing private companies in America — multiple years." },
        { label: "Forbes", description: "Featured as a company changing the future of work and reshaping how executive talent is accessed and deployed." },
        { label: "Fast Company", description: "Cited among the most innovative companies in the talent and HR category." },
        { label: "Harvard Business Review", description: "BTG research on independent executive talent cited in multiple HBR articles and case studies on the future of work." },
        { label: "The Wall Street Journal", description: "Profiled as the defining company in the emerging on-demand executive marketplace." },
      ],
      investors: [
        { name: "Placeholder Ventures", description: "A leading growth equity firm focused on technology-enabled marketplace businesses." },
        { name: "Placeholder Capital", description: "Long-term investor in companies reshaping how work is organized and talent is deployed." },
        { name: "Placeholder Partners", description: "Strategic investor with deep networks in enterprise software and the future of work." },
      ],
      boardMembers: [
        { name: "Jody Greenstone Miller", role: "Co-Founder & former CEO" },
        { name: "Hillary Doyle", role: "Co-Founder" },
        { name: "Board Member Placeholder A", role: "Managing Partner, Placeholder Ventures" },
        { name: "Board Member Placeholder B", role: "Former COO, Placeholder Corporation" },
        { name: "Independent Director Placeholder", role: "Former SVP, Placeholder Global" },
      ],
    } as any,  // eslint-disable-line @typescript-eslint/no-explicit-any
    status: "published",
  });
  strapi.log.info("[seed] BTG seeded");

  // ── Speaking (single type) ──────────────────────────────────────────
  await strapi.documents("api::speaking.speaking").create({
    data: {
      topics: [
        { title: "The Future of Work", description: "The structural transformation underway in how talent is organized, deployed, and compensated — and what it means for leaders, companies, and the broader economy." },
        { title: "Building and Scaling Companies", description: "What it actually takes to build something from nothing and grow it without losing what made it valuable. Drawing on her experience building BTG and advising hundreds of founders." },
        { title: "Women in Leadership", description: "An unflinching look at the structural and cultural barriers that persist in organizations — and what companies, boards, and individual leaders can do differently." },
        { title: "Independent Talent and the On-Demand Economy", description: "How the rise of the independent executive is reshaping the competitive landscape — and why companies that fail to build flexible talent pipelines will find themselves outcompeted." },
        { title: "Leadership Under Uncertainty", description: "Frameworks for making consequential decisions without complete information — and the qualities that distinguish leaders who navigate ambiguity well from those who are paralyzed by it." },
        { title: "Entrepreneurship and the Long Game", description: "What a twenty-plus year entrepreneurial career teaches about resilience, reinvention, and the patience required to build something that lasts." },
      ],
      advisoryAreas: [
        { text: "Board governance and composition" },
        { text: "Talent strategy and the future of the workforce" },
        { text: "Executive team building and organizational design" },
        { text: "Growth strategy for marketplace businesses" },
        { text: "Women in leadership and equity in the workplace" },
        { text: "Entrepreneurial strategy for founder-led companies" },
      ],
      contactIntro: "For speaking inquiries, advisory conversations, or board opportunities, please reach out directly.",
    } as any,  // eslint-disable-line @typescript-eslint/no-explicit-any
    status: "published",
  });
  strapi.log.info("[seed] Speaking seeded");

  // ── The Details (single type) ───────────────────────────────────────
  await strapi.documents("api::the-details.the-details").create({
    data: {
      entrepreneurial: "Jody co-founded Business Talent Group in 2007 with a simple but radical premise: the most talented executives in the world should have the freedom to work independently, on their own terms — and companies should have ready access to them. Over nearly two decades, she built BTG into the leading marketplace for high-end, on-demand executive talent, completing thousands of projects for Fortune 500 companies, private equity firms, and high-growth startups.\n\nUnder her leadership, BTG pioneered the concept of the \"independent executive\" and helped legitimize a new model of professional engagement that has since become a structural feature of how organizations access senior expertise.",
      executive: "Before founding BTG, Jody held senior roles across media, law, and policy. She served as a senior executive at Hollinger International, one of the world's largest newspaper companies at the time, where she was responsible for significant operational and strategic functions.\n\nEarlier in her career she practiced law and worked in management consulting, developing the cross-sector fluency that has characterized her work ever since. She is equally comfortable in a boardroom, on a stage, in a newsroom, or in a policy meeting.",
      government: "Jody served as Chief of Staff at the Office of the Vice President during the Clinton Administration, working alongside senior White House staff during a period of significant domestic and foreign policy activity. The experience gave her a close view of how leadership functions — and fails — under pressure.",
      boards: "Jody serves and has served on the boards of several public, private, and nonprofit organizations. She brings to these roles a perspective shaped by decades of building, operating, and advising businesses — combined with a belief that boards are most valuable when they bring genuine operational expertise, not just oversight.\n\nShe is a partner at the Vail Leadership Institute and has been a visiting fellow and speaker at institutions including the University of Chicago and Northwestern University.",
      nonprofit: "Jody is a committed advocate for equal access to opportunity — particularly for women in business and underrepresented founders. She mentors early-stage entrepreneurs and has supported organizations focused on economic mobility, civic leadership, and education.",
    } as any,  // eslint-disable-line @typescript-eslint/no-explicit-any
    status: "published",
  });
  strapi.log.info("[seed] The Details seeded");

  strapi.log.info("[seed] ✅ Initial data seeding complete!");
}

// ── Admin layout configuration ─────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AdminConfig = Record<string, any>;

function editField(
  label: string,
  description = "",
  placeholder = "",
  extra: Record<string, unknown> = {},
) {
  return {
    edit: { label, description, placeholder, visible: true, editable: true, ...extra },
    list: { label, searchable: true, sortable: true },
  };
}

const HIDDEN_FIELD = {
  edit: { label: "", description: "", placeholder: "", visible: false, editable: true },
  list: { label: "", searchable: true, sortable: true },
};

async function upsertCMConfig(strapi: Core.Strapi, uid: string, config: AdminConfig) {
  const key = `plugin_content_manager_configuration_content_types::${uid}`;
  const existing = await strapi.db.query("strapi::core-store").findOne({ where: { key } });
  const value = JSON.stringify({ ...config, uid });

  if (existing) {
    await strapi.db.query("strapi::core-store").update({ where: { id: existing.id }, data: { value } });
  } else {
    await strapi.db.query("strapi::core-store").create({ data: { key, value, type: "object" } });
  }
  strapi.log.info(`[admin] Configured layout for ${uid}`);
}

async function configureAdminLayouts(strapi: Core.Strapi) {
  // ── Archive Item ─────────────────────────────────────────────────────
  await upsertCMConfig(strapi, "api::archive-item.archive-item", {
    settings: {
      bulkable: true,
      filterable: true,
      searchable: true,
      pageSize: 25,
      relationOpenMode: "modal",
      mainField: "title",
      defaultSortBy: "publishedDate",
      defaultSortOrder: "DESC",
    },
    metadatas: {
      id: { edit: {}, list: { label: "id", searchable: true, sortable: true } },
      documentId: { edit: {}, list: { label: "documentId", searchable: true, sortable: true } },
      title: editField("Title", "The headline of the article, video, or podcast"),
      type: editField("Content Type", "Article, Video, or Podcast — determines which fields below are relevant"),
      year: editField("Year", "Year of original publication"),
      description: editField("Description", "Short summary shown in archive listings and cards"),
      source: editField("Source / Publication", "Where this was published or aired", "e.g. Harvard Business Review, CNN"),
      featured: editField("Featured", "Mark as featured to highlight in archive listings"),
      publishedDate: editField("Published Date", "Original publication date (used for chronological sorting)"),
      category: editField("Category", "Topic category for filtering in the archive", "", { mainField: "name" }),
      externalUrl: editField("External Link", "URL to the original article, video page, or podcast page", "https://..."),
      youtubeId: editField("YouTube Video ID", "⚠️ Only for VIDEOS — the ID from the YouTube URL (the part after v=)", "e.g. dQw4w9WgXcQ"),
      embedUrl: editField("Podcast Embed URL", "⚠️ Only for PODCASTS — the Spotify or Apple Podcasts embed URL", "https://open.spotify.com/embed/episode/..."),
      duration: editField("Duration", "⚠️ Only for VIDEOS and PODCASTS", "e.g. 52 min"),
      pdf: editField("PDF File", "Optional — upload a PDF version of the article"),
      coverImage: editField("Cover Image", "Optional — a cover image for this item"),
      createdAt: HIDDEN_FIELD,
      updatedAt: HIDDEN_FIELD,
      createdBy: { ...HIDDEN_FIELD, edit: { ...HIDDEN_FIELD.edit, mainField: "firstname" } },
      updatedBy: { ...HIDDEN_FIELD, edit: { ...HIDDEN_FIELD.edit, mainField: "firstname" } },
    },
    layouts: {
      list: ["title", "type", "source", "year", "publishedDate", "category"],
      edit: [
        [{ name: "title", size: 8 }, { name: "type", size: 4 }],
        [{ name: "source", size: 5 }, { name: "year", size: 3 }, { name: "publishedDate", size: 4 }],
        [{ name: "description", size: 12 }],
        [{ name: "category", size: 6 }, { name: "featured", size: 6 }],
        [{ name: "externalUrl", size: 12 }],
        [{ name: "youtubeId", size: 6 }, { name: "embedUrl", size: 6 }],
        [{ name: "duration", size: 6 }],
        [{ name: "pdf", size: 6 }, { name: "coverImage", size: 6 }],
      ],
    },
  });

  // ── Selected Pieces Page (single type) ─────────────────────────────
  await upsertCMConfig(strapi, "api::selected-pieces-page.selected-pieces-page", {
    settings: {
      bulkable: true, filterable: true, searchable: true, pageSize: 10,
      relationOpenMode: "modal", mainField: "id",
      defaultSortBy: "createdAt", defaultSortOrder: "DESC",
    },
    metadatas: {
      id: { edit: {}, list: { label: "id", searchable: true, sortable: true } },
      documentId: { edit: {}, list: { label: "documentId", searchable: true, sortable: true } },
      pieces: editField("Selected Pieces", "Drag and drop to reorder. Each entry references an Archive Item and adds Jody's personal introduction."),
      createdAt: HIDDEN_FIELD,
      updatedAt: HIDDEN_FIELD,
      createdBy: { ...HIDDEN_FIELD, edit: { ...HIDDEN_FIELD.edit, mainField: "firstname" } },
      updatedBy: { ...HIDDEN_FIELD, edit: { ...HIDDEN_FIELD.edit, mainField: "firstname" } },
    },
    layouts: {
      list: ["id"],
      edit: [[{ name: "pieces", size: 12 }]],
    },
  });

  // ── Bio ──────────────────────────────────────────────────────────────
  await upsertCMConfig(strapi, "api::bio.bio", {
    settings: {
      bulkable: true, filterable: true, searchable: true, pageSize: 10,
      relationOpenMode: "modal", mainField: "headline",
      defaultSortBy: "createdAt", defaultSortOrder: "DESC",
    },
    metadatas: {
      id: { edit: {}, list: { label: "id", searchable: true, sortable: true } },
      documentId: { edit: {}, list: { label: "documentId", searchable: true, sortable: true } },
      headline: editField("Headline", "Short tagline shown at the top of the bio page", "e.g. Redefining the way the world works."),
      biography: editField("Biography", "The full biography text — separate paragraphs with a blank line"),
      photo: editField("Portrait Photo", "Professional photo of Jody (shown on bio page and home)"),
      downloadablePdf: editField("Downloadable Bio PDF", "PDF version of the bio that visitors can download"),
      linkedinUrl: editField("LinkedIn URL", "Jody's LinkedIn profile link", "https://linkedin.com/in/..."),
      familyLinks: editField("Family Links", "Links to family members' websites (shown at bottom of bio)"),
      createdAt: HIDDEN_FIELD,
      updatedAt: HIDDEN_FIELD,
      createdBy: { ...HIDDEN_FIELD, edit: { ...HIDDEN_FIELD.edit, mainField: "firstname" } },
      updatedBy: { ...HIDDEN_FIELD, edit: { ...HIDDEN_FIELD.edit, mainField: "firstname" } },
    },
    layouts: {
      list: ["headline"],
      edit: [
        [{ name: "headline", size: 12 }],
        [{ name: "biography", size: 12 }],
        [{ name: "photo", size: 6 }, { name: "downloadablePdf", size: 6 }],
        [{ name: "linkedinUrl", size: 12 }],
        [{ name: "familyLinks", size: 12 }],
      ],
    },
  });

  strapi.log.info("[admin] ✅ Admin layouts configured");
}
