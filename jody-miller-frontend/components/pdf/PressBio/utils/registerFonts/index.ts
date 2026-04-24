import path from "node:path";
import { Font } from "@react-pdf/renderer";
import { PDF_FONT_FAMILY } from "../../constants";

let fontsRegistered = false;

const FONTS_PUBLIC_DIR = "public/fonts";

const FONT_FILES = {
  ebGaramondRegular: "eb-garamond-latin-400-normal.woff",
  ebGaramondItalic: "eb-garamond-latin-400-italic.woff",
  ebGaramondMedium: "eb-garamond-latin-500-normal.woff",
  ebGaramondSemiBold: "eb-garamond-latin-600-normal.woff",
  interLight: "inter-latin-300-normal.woff",
  interRegular: "inter-latin-400-normal.woff",
  interMedium: "inter-latin-500-normal.woff",
  interSemiBold: "inter-latin-600-normal.woff",
} as const;

/**
 * Resolve a font file shipped under `public/fonts/` to an absolute path the
 * Node.js runtime can read at render time.
 *
 * @param file Font filename (inside `public/fonts/`).
 * @returns Absolute filesystem path to the font file.
 */
function resolveFontPath(file: string): string {
  return path.resolve(process.cwd(), FONTS_PUBLIC_DIR, file);
}

/**
 * Register the EB Garamond (serif) and Inter (sans) font families with
 * `@react-pdf/renderer`. Safe to call repeatedly — a module-level guard
 * ensures fonts are only registered once per process.
 */
export function registerPressBioFonts(): void {
  if (fontsRegistered) return;

  Font.register({
    family: PDF_FONT_FAMILY.serif,
    fonts: [
      { src: resolveFontPath(FONT_FILES.ebGaramondRegular), fontWeight: 400 },
      {
        src: resolveFontPath(FONT_FILES.ebGaramondItalic),
        fontWeight: 400,
        fontStyle: "italic",
      },
      { src: resolveFontPath(FONT_FILES.ebGaramondMedium), fontWeight: 500 },
      { src: resolveFontPath(FONT_FILES.ebGaramondSemiBold), fontWeight: 600 },
    ],
  });

  Font.register({
    family: PDF_FONT_FAMILY.sans,
    fonts: [
      { src: resolveFontPath(FONT_FILES.interLight), fontWeight: 300 },
      { src: resolveFontPath(FONT_FILES.interRegular), fontWeight: 400 },
      { src: resolveFontPath(FONT_FILES.interMedium), fontWeight: 500 },
      { src: resolveFontPath(FONT_FILES.interSemiBold), fontWeight: 600 },
    ],
  });

  Font.registerHyphenationCallback((word) => [word]);

  fontsRegistered = true;
}
