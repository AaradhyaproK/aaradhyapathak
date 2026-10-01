import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          background: "#0E0F0C",
          borderRadius: 8,
          border: "1.5px solid #34362D",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        <span style={{ color: "#F2F0E6", fontSize: 16 }}>A</span>
        <span style={{ color: "#C8F169", fontSize: 16 }}>P</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
