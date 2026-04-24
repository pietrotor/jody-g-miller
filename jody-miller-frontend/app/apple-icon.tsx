import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";

export const size = { width: 180, height: 180 };

export const contentType = "image/png";

const BACKGROUND_COLOR = "#f4f1ea";
const INK_COLOR = "#1a1a17";
const ACCENT_COLOR = "#a66d5b";
const FONT_SIZE = 150;
const FONT_FAMILY_NAME = "EB Garamond";
const FONT_PATH_ITALIC = "public/fonts/eb-garamond-latin-400-italic.woff";

export default async function AppleIcon() {
  const fontData = readFileSync(join(process.cwd(), FONT_PATH_ITALIC));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BACKGROUND_COLOR,
          fontFamily: FONT_FAMILY_NAME,
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: FONT_SIZE,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        <span style={{ color: INK_COLOR }}>J</span>
        <span style={{ color: ACCENT_COLOR, marginLeft: -8 }}>.</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: FONT_FAMILY_NAME,
          data: fontData,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
