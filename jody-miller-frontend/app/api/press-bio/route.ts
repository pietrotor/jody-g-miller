import path from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { fetchBio, fetchSpeaking } from "@/lib/strapi";
import PressBioDocument from "@/components/pdf/PressBio";
import { buildPressBioData } from "@/components/pdf/PressBio/utils/buildPressBioData";
import { PRESS_BIO_FILENAME } from "@/components/pdf/PressBio/constants";
import type { TPressBioPhoto } from "@/components/pdf/PressBio/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PORTRAIT_PUBLIC_PATH = "public/images/jody-portrait.png";
const CACHE_CONTROL_HEADER =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

/**
 * Load the portrait image into a Buffer so `@react-pdf/renderer` can embed it
 * directly without relying on filesystem-path extension sniffing (which is
 * unreliable across Next.js bundling targets).
 *
 * @returns An `{ data, format }` object for `<Image>`, or null when the file
 *          is missing so the PDF falls back to its typographic placeholder.
 */
function loadPortrait(): TPressBioPhoto {
  const absolutePath = path.resolve(process.cwd(), PORTRAIT_PUBLIC_PATH);
  if (!existsSync(absolutePath)) return null;
  return { data: readFileSync(absolutePath), format: "png" };
}

export async function GET(): Promise<Response> {
  const [bio, speaking] = await Promise.all([fetchBio(), fetchSpeaking()]);

  const data = buildPressBioData({
    bio,
    speaking,
    photoSrc: loadPortrait(),
  });

  const buffer = await renderToBuffer(
    React.createElement(PressBioDocument, { data }),
  );

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${PRESS_BIO_FILENAME}"`,
      "Cache-Control": CACHE_CONTROL_HEADER,
    },
  });
}
