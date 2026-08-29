import { ImageResponse } from "next/og";

export const alt = "JamBox — Independent app studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3EEE4",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#B42318",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          Independent app studio · Seoul
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              color: "#1B1914",
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            JamBox
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 32,
              color: "#5C574D",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            Software for the table we gather around.
          </div>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#5C574D",
            fontFamily: "sans-serif",
          }}
        >
          jambox.site
        </div>
      </div>
    ),
    { ...size },
  );
}
