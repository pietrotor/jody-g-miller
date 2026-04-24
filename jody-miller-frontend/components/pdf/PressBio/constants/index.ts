/**
 * Design tokens for the Press Bio PDF — mirrors the web's "Digital Monograph"
 * design system (see `app/globals.css`). Kept as plain constants so they can
 * be passed into `@react-pdf/renderer` StyleSheet objects.
 */

export const PDF_COLORS = {
  background: "#f4f1ea",
  surfaceLow: "#eeebe3",
  surfaceContainer: "#e8e5dc",
  heading: "#1a1a17",
  body: "#4a4a40",
  sage: "#7c8375",
  border: "#d1cfc9",
  accent: "#a66d5b",
  accentDark: "#8c5948",
  white: "#ffffff",
} as const;

export const PDF_FONT_FAMILY = {
  serif: "EB Garamond",
  sans: "Inter",
} as const;

export const PDF_FONT_SIZE = {
  xxs: 7,
  xs: 8.5,
  sm: 10,
  base: 11,
  md: 12,
  lg: 14,
  xl: 18,
  xl2: 24,
  xl3: 32,
  display: 44,
} as const;

export const PDF_LINE_HEIGHT = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.75,
} as const;

export const PDF_LETTER_SPACING = {
  label: 1.6,
  heading: -0.4,
  body: 0,
} as const;

export const PDF_PAGE = {
  size: "LETTER" as const,
  padding: {
    top: 48,
    right: 56,
    bottom: 56,
    left: 56,
  },
} as const;

export const PDF_SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 28,
  xl2: 40,
  xl3: 56,
} as const;

export const PDF_RULE_THICKNESS = 0.5;
export const PDF_PORTRAIT_BORDER = 0.75;

export const PDF_LABEL_TRACKING = 1.4;

export const PRESS_BIO_FILENAME = "jody-greenstone-miller-press-bio.pdf";

export const PRESS_BIO_NAME_LABEL = "Jody Greenstone Miller";
