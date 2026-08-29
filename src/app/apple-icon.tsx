import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F3EEE4",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 108,
            height: 78,
            border: "8px solid #1B1914",
            borderRadius: 16,
            background: "#FAF7F1",
            marginTop: 18,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 36,
            width: 86,
            height: 28,
            background: "#B42318",
            borderRadius: 10,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
