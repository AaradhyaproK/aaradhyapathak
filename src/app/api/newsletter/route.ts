import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(req: NextRequest) {
  try {
    let email = "";
    let honeypot = "";
    let source = "website";

    const contentType = req.headers.get("content-type") || "";
    const acceptHeader = req.headers.get("accept") || "";
    const isHtmlNavigation = acceptHeader.includes("text/html");

    if (contentType.includes("application/json")) {
      const body = await req.json();
      email = body.email;
      honeypot = body.honeypot;
      source = body.source || "blog";
    } else {
      const formData = await req.formData();
      email = (formData.get("email") as string) || "";
      honeypot = (formData.get("honeypot") as string) || "";
      source = (formData.get("source") as string) || "blog";
    }

    // Anti-spam honeypot detection
    if (honeypot) {
      if (isHtmlNavigation) {
        return NextResponse.redirect(new URL("/blog?subscribed=true", req.url));
      }
      return NextResponse.json({ success: true, message: "Subscription simulated." });
    }

    if (!email || !email.includes("@")) {
      if (isHtmlNavigation) {
        return NextResponse.redirect(new URL("/blog?error=invalid_email", req.url));
      }
      return NextResponse.json(
        { success: false, error: "Valid email address is required." },
        { status: 400 }
      );
    }

    // Forward to Formspree endpoint so subscriber is captured in dashboard
    if (siteConfig.formspreeUrl) {
      try {
        await fetch(siteConfig.formspreeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            subject: `[Newsletter Subscriber] ${email}`,
            source,
            message: `New subscriber signed up for engineering newsletter from ${source}`,
          }),
        });
      } catch (err) {
        console.error("Formspree newsletter forwarding failed:", err);
      }
    }

    if (isHtmlNavigation) {
      const referer = req.headers.get("referer");
      const targetUrl = referer ? new URL(referer) : new URL("/blog", req.url);
      targetUrl.searchParams.set("subscribed", "true");
      return NextResponse.redirect(targetUrl);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to engineering updates!",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process subscription." },
      { status: 500 }
    );
  }
}
