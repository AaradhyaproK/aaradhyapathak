import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Aaradhya Pathak";
    const subtitle =
      searchParams.get("subtitle") ||
      "Full Stack Web Developer & Founder @ SNAB";
    const tag = searchParams.get("tag") || "Portfolio";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#0E0F0C",
            padding: "60px 80px",
            fontFamily: "sans-serif",
            border: "12px solid #191B15",
          }}
        >
          {/* Top Tag & Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                backgroundColor: "#23251D",
                color: "#C8F169",
                border: "1px solid #34362D",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
            <span
              style={{
                color: "#A7A997",
                fontSize: "16px",
                letterSpacing: "1.5px",
              }}
            >
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </span>
          </div>

          {/* Center Main Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h1
              style={{
                color: "#F2F0E6",
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: "-1.5px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "#A7A997",
                fontSize: "24px",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Bottom Branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #34362D",
              paddingTop: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  color: "#F2F0E6",
                  fontSize: "22px",
                  fontWeight: 800,
                }}
              >
                Aaradhya Pathak
              </span>
              <span style={{ color: "#C8F169", fontSize: "24px" }}>.</span>
            </div>
            <span
              style={{
                color: "#C8F169",
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Night Bento Architecture
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    });
  }
}
