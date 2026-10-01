"""
Generate high-fidelity, Night-Bento styled 1200x675 WebP cover images for Aaradhya Pathak's engineering blog.
Theme: #0E0F0C (bg), #191B15 (surface), #23251D (surface-2), #34362D (border), #C8F169 (accent lime), #F2F0E6 (text).
All text is strictly bounded and wrapped to eliminate any overflow or clipping.
"""

import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 675
OUT_DIR = "public/images/blog"
os.makedirs(OUT_DIR, exist_ok=True)

FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_MONO = "/System/Library/Fonts/Menlo.ttc"

def get_fonts():
    try:
        title_font = ImageFont.truetype(FONT_REGULAR, 36)
        title_bold = ImageFont.truetype(FONT_REGULAR, 36)
        subtitle_font = ImageFont.truetype(FONT_REGULAR, 18)
        badge_font = ImageFont.truetype(FONT_MONO, 15)
        badge_bold = ImageFont.truetype(FONT_MONO, 16)
        large_stat_font = ImageFont.truetype(FONT_REGULAR, 44)
        meta_font = ImageFont.truetype(FONT_MONO, 14)
        pill_font = ImageFont.truetype(FONT_MONO, 13)
    except Exception:
        title_font = title_bold = subtitle_font = badge_font = badge_bold = large_stat_font = meta_font = pill_font = ImageFont.load_default()
    return {
        "title": title_font,
        "title_bold": title_bold,
        "subtitle": subtitle_font,
        "badge": badge_font,
        "badge_bold": badge_bold,
        "stat": large_stat_font,
        "meta": meta_font,
        "pill": pill_font,
    }

def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    current_line = []
    for word in words:
        test_line = " ".join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        w = bbox[2] - bbox[0]
        if w <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(" ".join(current_line))
                current_line = [word]
            else:
                lines.append(word)
                current_line = []
    if current_line:
        lines.append(" ".join(current_line))
    return lines

def create_base_canvas(category: str, tag: str):
    img = Image.new("RGBA", (W, H), (14, 15, 12, 255))
    draw = ImageDraw.Draw(img)

    # Subtle technical grid lines
    grid_color = (35, 37, 29, 120)
    for x in range(0, W, 60):
        draw.line([(x, 0), (x, H)], fill=grid_color, width=1)
    for y in range(0, H, 60):
        draw.line([(0, y), (W, y)], fill=grid_color, width=1)

    # Ambient glow in top-right
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([W - 350, -100, W + 150, 400], fill=(200, 241, 105, 30))
    glow_draw.ellipse([80, H - 250, 450, H + 100], fill=(200, 241, 105, 18))
    glow = glow.filter(ImageFilter.GaussianBlur(60))
    img = Image.alpha_composite(img, glow)

    # Central Night Bento container
    bento = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(bento)
    b_draw.rounded_rectangle([48, 48, W - 48, H - 48], radius=28, fill=(25, 27, 21, 230), outline=(52, 54, 45, 255), width=2)
    img = Image.alpha_composite(img, bento)

    draw = ImageDraw.Draw(img)
    fonts = get_fonts()

    # Category Pill
    draw.rounded_rectangle([80, 75, 270, 110], radius=16, fill=(35, 37, 29, 255), outline=(52, 54, 45, 255), width=1)
    draw.text((96, 85), category.upper(), font=fonts["pill"], fill=(200, 241, 105, 255))

    # Tag Pill
    draw.rounded_rectangle([282, 75, 430, 110], radius=16, fill=(14, 15, 12, 255), outline=(52, 54, 45, 255), width=1)
    draw.text((298, 85), f"#{tag}", font=fonts["pill"], fill=(167, 169, 151, 255))

    # Bottom author metadata bar
    draw.line([(80, H - 90), (W - 80, H - 90)], fill=(52, 54, 45, 200), width=1)
    draw.text((80, H - 75), "Aaradhya Pathak • Founder @ SNAB Innovations", font=fonts["meta"], fill=(242, 240, 230, 255))
    draw.text((W - 250, H - 75), "aaradhyapathak.com", font=fonts["meta"], fill=(200, 241, 105, 255))

    return img

def render_left_content(draw, fonts, title_part1: str, title_part2: str, subtitle: str):
    max_title_width = 620
    curr_y = 145

    # Title Part 1 (white)
    lines1 = wrap_text(draw, title_part1, fonts["title"], max_title_width)
    for line in lines1:
        draw.text((80, curr_y), line, font=fonts["title"], fill=(242, 240, 230, 255))
        curr_y += 44

    # Title Part 2 (lime accent)
    lines2 = wrap_text(draw, title_part2, fonts["title_bold"], max_title_width)
    for line in lines2:
        draw.text((80, curr_y), line, font=fonts["title_bold"], fill=(200, 241, 105, 255))
        curr_y += 44

    # Subtitle
    curr_y += 18
    sub_lines = wrap_text(draw, subtitle, fonts["subtitle"], max_title_width)
    for line in sub_lines:
        draw.text((80, curr_y), line, font=fonts["subtitle"], fill=(167, 169, 151, 255))
        curr_y += 28

def generate_ai_interview_cover():
    img = create_base_canvas("AI & Full Stack", "Gemini 1.5 Pro")
    draw = ImageDraw.Draw(img)
    fonts = get_fonts()

    render_left_content(
        draw, fonts,
        "Architecting an AI Interview",
        "Assessment Platform with Gemini",
        "Real-time speech streaming with AssemblyAI, multimodal evaluation rubrics, and automated candidate screening at scale."
    )

    # Right side graphic card (bounded within x=760 to x=1110)
    rx, ry, rw, rh = 760, 140, 350, 390
    draw.rounded_rectangle([rx, ry, rx + rw, ry + rh], radius=22, fill=(35, 37, 29, 255), outline=(52, 54, 45, 255), width=2)
    
    # Inner Badge
    draw.rounded_rectangle([rx + 20, ry + 20, rx + rw - 20, ry + 60], radius=10, fill=(14, 15, 12, 255), outline=(52, 54, 45, 255))
    draw.text((rx + 36, ry + 30), "INTERVIEWXPERT ENGINE", font=fonts["pill"], fill=(200, 241, 105, 255))

    # Waveform visualization
    wave_y = ry + 120
    for i in range(24):
        h = int(8 + 24 * math.sin(i * 0.45) ** 2)
        wx = rx + 35 + i * 11
        draw.line([(wx, wave_y - h), (wx, wave_y + h)], fill=(200, 241, 105, 230), width=3)

    # Metric Container
    draw.rounded_rectangle([rx + 20, ry + 175, rx + rw - 20, ry + 270], radius=14, fill=(14, 15, 12, 255), outline=(200, 241, 105, 120), width=1)
    draw.text((rx + 36, ry + 192), "ACCURACY SCORE", font=fonts["pill"], fill=(167, 169, 151, 255))
    draw.text((rx + 36, ry + 215), "96.4% MATCH", font=fonts["title_bold"], fill=(200, 241, 105, 255))

    # Bottom bullet points
    draw.text((rx + 24, ry + 295), "✓ Gemini 1.5 Pro Multimodal", font=fonts["meta"], fill=(242, 240, 230, 220))
    draw.text((rx + 24, ry + 325), "✓ AssemblyAI Speech Stream", font=fonts["meta"], fill=(242, 240, 230, 220))
    draw.text((rx + 24, ry + 355), "✓ 100 Daily Concurrent Tests", font=fonts["meta"], fill=(200, 241, 105, 255))

    out_path = os.path.join(OUT_DIR, "ai-interview-architecture.webp")
    img.save(out_path, "WEBP", quality=95, method=6)
    print("Saved", out_path)

def generate_ai_tools_cover():
    img = create_base_canvas("AI & Engineering", "5x Velocity")
    draw = ImageDraw.Draw(img)
    fonts = get_fonts()

    render_left_content(
        draw, fonts,
        "The 2026 AI Developer Toolkit:",
        "5x Velocity for Freelancers",
        "Autonomous agent workflows, zero-server browser utilities (FileZenith), automated billing (FeeKit), and automated QA verification."
    )

    # Right side: Terminal Window Card (bounded within x=760 to x=1110)
    rx, ry, rw, rh = 760, 140, 350, 390
    draw.rounded_rectangle([rx, ry, rx + rw, ry + rh], radius=22, fill=(14, 15, 12, 255), outline=(52, 54, 45, 255), width=2)

    # Terminal header
    draw.ellipse([rx + 20, ry + 22, rx + 32, ry + 34], fill=(255, 95, 86, 255))
    draw.ellipse([rx + 40, ry + 22, rx + 52, ry + 34], fill=(255, 189, 46, 255))
    draw.ellipse([rx + 60, ry + 22, rx + 72, ry + 34], fill=(39, 201, 63, 255))
    draw.line([(rx, ry + 50), (rx + rw, ry + 50)], fill=(52, 54, 45, 255), width=1)

    # Terminal commands
    draw.text((rx + 24, ry + 75), "$ snab --pipeline test", font=fonts["badge_bold"], fill=(200, 241, 105, 255))
    draw.text((rx + 24, ry + 115), "✓ FileZenith: 50+ WASM tools", font=fonts["meta"], fill=(242, 240, 230, 220))
    draw.text((rx + 24, ry + 150), "✓ FeeKit: Auto Billing Active", font=fonts["meta"], fill=(242, 240, 230, 220))
    draw.text((rx + 24, ry + 185), "✓ Velite Type-Safe MDX OK", font=fonts["meta"], fill=(242, 240, 230, 220))
    draw.text((rx + 24, ry + 220), "✓ Shiki Build Highlighting OK", font=fonts["meta"], fill=(242, 240, 230, 220))

    # Highlight box
    draw.rounded_rectangle([rx + 20, ry + 270, rx + rw - 20, ry + 360], radius=14, fill=(35, 37, 29, 255), outline=(200, 241, 105, 150), width=1)
    draw.text((rx + 36, ry + 288), "DELIVERY VELOCITY", font=fonts["pill"], fill=(167, 169, 151, 255))
    draw.text((rx + 36, ry + 312), "5.2x FASTER OUTPUT", font=fonts["title_bold"], fill=(200, 241, 105, 255))

    out_path = os.path.join(OUT_DIR, "ai-freelance-tools.webp")
    img.save(out_path, "WEBP", quality=95, method=6)
    print("Saved", out_path)

def generate_nextjs_seo_cover():
    img = create_base_canvas("Technical SEO", "Next.js 15")
    draw = ImageDraw.Draw(img)
    fonts = get_fonts()

    render_left_content(
        draw, fonts,
        "Technical SEO Architecture in",
        "Next.js 15: 100 Lighthouse",
        "Pre-allocated zero-CLS AdSense slots, Google Consent Mode v2, unified JSON-LD schema graphs, and static App Router performance."
    )

    # Right side: Scorecard (bounded within x=760 to x=1110)
    rx, ry, rw, rh = 760, 140, 350, 390
    draw.rounded_rectangle([rx, ry, rx + rw, ry + rh], radius=22, fill=(35, 37, 29, 255), outline=(52, 54, 45, 255), width=2)
    draw.text((rx + 24, ry + 22), "LIGHTHOUSE 100 AUDIT", font=fonts["pill"], fill=(200, 241, 105, 255))

    metrics = [
        ("Performance", "98"),
        ("Accessibility", "98"),
        ("Best Practices", "96"),
        ("Technical SEO", "100"),
    ]

    for idx, (label, score) in enumerate(metrics):
        my = ry + 65 + idx * 55
        draw.text((rx + 24, my + 8), label, font=fonts["badge"], fill=(242, 240, 230, 255))
        draw.rounded_rectangle([rx + rw - 70, my, rx + rw - 20, my + 38], radius=8, fill=(14, 15, 12, 255), outline=(200, 241, 105, 255), width=1)
        draw.text((rx + rw - 58, my + 10), score, font=fonts["badge_bold"], fill=(200, 241, 105, 255))

    # Bottom zero-cls pill
    draw.rounded_rectangle([rx + 20, ry + 325, rx + rw - 20, ry + 365], radius=10, fill=(14, 15, 12, 255), outline=(52, 54, 45, 255))
    draw.text((rx + 36, ry + 337), "⚡ CLS Score: 0.000 (Zero Shift)", font=fonts["pill"], fill=(200, 241, 105, 255))

    out_path = os.path.join(OUT_DIR, "nextjs-seo-guide.webp")
    img.save(out_path, "WEBP", quality=95, method=6)
    print("Saved", out_path)

def generate_student_roadmap_cover():
    img = create_base_canvas("Founder & Career", "IIT Bombay #64")
    draw = ImageDraw.Draw(img)
    fonts = get_fonts()

    render_left_content(
        draw, fonts,
        "Student Developer to Founder:",
        "AIR 64 at IIT Bombay & Clients",
        "How I maintained an 8.2 CGPA while building SNAB Innovations, FileZenith, and securing commercial software clients."
    )

    # Right side: Trophy Showcase (bounded within x=760 to x=1110)
    rx, ry, rw, rh = 760, 140, 350, 390
    draw.rounded_rectangle([rx, ry, rx + rw, ry + rh], radius=22, fill=(200, 241, 105, 255), outline=(14, 15, 12, 255), width=2)
    
    # Top badge
    draw.text((rx + 24, ry + 22), "IIT BOMBAY NEC 2025", font=fonts["badge_bold"], fill=(14, 15, 12, 255))

    # Inner dark trophy card (290px wide, perfectly centered)
    draw.rounded_rectangle([rx + 20, ry + 55, rx + rw - 20, ry + 195], radius=16, fill=(14, 15, 12, 255))
    draw.text((rx + 36, ry + 72), "ALL INDIA RANK", font=fonts["pill"], fill=(167, 169, 151, 255))
    draw.text((rx + 36, ry + 98), "#64", font=fonts["stat"], fill=(200, 241, 105, 255))
    draw.text((rx + 36, ry + 158), "National Entrepreneurship", font=fonts["pill"], fill=(242, 240, 230, 220))

    # Bottom credentials on lime background
    draw.rounded_rectangle([rx + 20, ry + 215, rx + rw - 20, ry + 265], radius=10, fill=(14, 15, 12, 255))
    draw.text((rx + 36, ry + 230), "CGPA: 8.2 • Comp Engineering", font=fonts["badge"], fill=(242, 240, 230, 255))

    draw.rounded_rectangle([rx + 20, ry + 280, rx + rw - 20, ry + 330], radius=10, fill=(14, 15, 12, 255))
    draw.text((rx + 36, ry + 295), "Google Gemini Ambassador", font=fonts["badge"], fill=(200, 241, 105, 255))

    draw.text((rx + 24, ry + 355), "Founder @ SNAB Innovations", font=fonts["badge_bold"], fill=(14, 15, 12, 255))

    out_path = os.path.join(OUT_DIR, "student-developer-roadmap.webp")
    img.save(out_path, "WEBP", quality=95, method=6)
    print("Saved", out_path)

if __name__ == "__main__":
    generate_ai_interview_cover()
    generate_ai_tools_cover()
    generate_nextjs_seo_cover()
    generate_student_roadmap_cover()
