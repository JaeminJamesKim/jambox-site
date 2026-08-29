import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 22,
            height: 16,
            border: "2px solid #1B1914",
            borderRadius: 4,
            background: "#FAF7F1",
            position: "relative",
            marginTop: 4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 6,
            width: 16,
            height: 6,
            background: "#B42318",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
