import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
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
          background: "#0E0F0C",
          borderRadius: 40,
          border: "4px solid #34362D",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        <span style={{ color: "#F2F0E6", fontSize: 90 }}>A</span>
        <span style={{ color: "#C8F169", fontSize: 90 }}>P</span>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#C8F169",
            marginLeft: 4,
            marginBottom: -28,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
