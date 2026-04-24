import type { Bio, Speaking } from "@/lib/types";
import {
  BIO_ADVISORY_AREAS_FALLBACK,
  BIO_BIOGRAPHY_FALLBACK,
  BIO_CONTACT,
  BIO_EDUCATION,
  BIO_EXPERIENCE,
  BIO_HEADLINE_FALLBACK,
  BIO_MEDIA_CREDENTIALS,
  BIO_POSITIONING,
  BIO_SPEAKING_TOPICS_FALLBACK,
  BIO_STATS,
} from "@/lib/bio-data";
import { PRESS_BIO_NAME_LABEL } from "../../constants";
import type { IPressBioData, TPressBioPhoto } from "../../types";

interface IBuildPressBioDataArgs {
  bio: Bio;
  speaking: Speaking;
  photoSrc: TPressBioPhoto;
}

const SHORT_BIO_MAX_PARAGRAPHS = 1;

/**
 * Extract the first paragraph (or the first N) of a multi-paragraph body text,
 * used for the cover page summary so the masthead stays tight.
 *
 * @param text Full multi-paragraph body text.
 * @param maxParagraphs Maximum number of paragraphs to keep.
 * @returns A shortened string.
 */
function pickShortBio(text: string, maxParagraphs: number): string {
  return text
    .split("\n\n")
    .filter(Boolean)
    .slice(0, maxParagraphs)
    .join("\n\n");
}

/**
 * Split a raw biography string into its paragraphs, trimming whitespace and
 * removing empty entries.
 */
function splitParagraphs(text: string): string[] {
  return text.split("\n\n").map((p) => p.trim()).filter(Boolean);
}

/**
 * Combine live Strapi data with static fallbacks to produce the final shape
 * that the Press Bio PDF consumes. Strapi is preferred whenever it returns a
 * non-empty value, otherwise hardcoded `lib/bio-data` values are used.
 *
 * @param args Bio + speaking data from Strapi and an optional portrait path.
 * @returns Fully-populated press bio data ready to render into the PDF.
 */
export function buildPressBioData({
  bio,
  speaking,
  photoSrc,
}: IBuildPressBioDataArgs): IPressBioData {
  const biography = bio.biography?.trim()
    ? bio.biography
    : BIO_BIOGRAPHY_FALLBACK;

  const headline =
    bio.headline && bio.headline.trim().length > 0
      ? bio.headline
      : BIO_HEADLINE_FALLBACK;

  const topics =
    speaking.topics && speaking.topics.length > 0
      ? speaking.topics
      : BIO_SPEAKING_TOPICS_FALLBACK;

  const advisoryAreas =
    speaking.advisoryAreas && speaking.advisoryAreas.length > 0
      ? speaking.advisoryAreas
      : BIO_ADVISORY_AREAS_FALLBACK;

  return {
    name: "Jody Greenstone Miller",
    positioning: BIO_POSITIONING,
    headline,
    biographyParagraphs: splitParagraphs(biography),
    photoSrc,
    mediaCredentials: BIO_MEDIA_CREDENTIALS,
    stats: BIO_STATS,
    experience: BIO_EXPERIENCE,
    speakingTopics: topics,
    advisoryAreas,
    education: BIO_EDUCATION,
    contact: BIO_CONTACT,
    nameLabel: PRESS_BIO_NAME_LABEL,
  };
}

/**
 * Pull a concise version of the bio for the cover page (first paragraph).
 *
 * @param paragraphs Full biography paragraphs.
 * @returns A short lead paragraph suitable for the cover.
 */
export function getCoverShortBio(paragraphs: string[]): string {
  return pickShortBio(paragraphs.join("\n\n"), SHORT_BIO_MAX_PARAGRAPHS);
}
