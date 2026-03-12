import Link from "next/link";

const concepts = [
  {
    id: 1,
    name: "Minimal Luxury",
    nameVi: "Sang Trọng Tối Giản",
    description:
      "Clean, gallery-like whitespace. Playfair Display + Inter. Black, white & gold (#C9A96E). Quiet opulence with refined details.",
    palette: ["#1a1a1a", "#ffffff", "#C9A96E", "#fafaf8"],
    typography: "Playfair Display + Inter",
    mood: "Gallery • Serene • Opulent",
  },
  {
    id: 2,
    name: "Editorial Magazine",
    nameVi: "Tạp Chí Biên Tập",
    description:
      "Bold typography, asymmetric layouts, story-driven. DM Serif Display + Space Grotesk. Navy, cream & crimson (#8B2635). Dramatic and narrative.",
    palette: ["#1A1A2E", "#F5F0E8", "#8B2635", "#d4cfc7"],
    typography: "DM Serif Display + Space Grotesk",
    mood: "Bold • Narrative • Dramatic",
  },
  {
    id: 3,
    name: "Modern Architectural",
    nameVi: "Kiến Trúc Hiện Đại",
    description:
      "Geometric precision, grid-based systems. Archivo Black + DM Sans. Charcoal, concrete & teal (#4A7C7E). Structured and professional.",
    palette: ["#2D2D2D", "#F5F3F0", "#4A7C7E", "#E8E4E0"],
    typography: "Archivo Black + DM Sans",
    mood: "Geometric • Precise • Cool",
  },
  {
    id: 4,
    name: "Warm Organic Luxury",
    nameVi: "Ấm Áp Tự Nhiên",
    description:
      "Flowing curves, rounded elements, natural textures. Cormorant Garamond + Lato. Cream, terracotta (#B87333) & deep brown. Inviting warmth.",
    palette: ["#3C2415", "#FAF6F0", "#B87333", "#F3EDE4"],
    typography: "Cormorant Garamond + Lato",
    mood: "Warm • Natural • Inviting",
  },
  {
    id: 5,
    name: "Contemporary Refined",
    nameVi: "Đương Đại Tinh Tế",
    description:
      "Inspired by AMY.vn — refined minimalism with dynamic interactions. Inter + Montserrat. White, off-white (#f1f0e8), charcoal & deep red (#950000). Scroll-reveal animations.",
    palette: ["#333333", "#f1f0e8", "#950000", "#f7f7f7"],
    typography: "Inter + Montserrat",
    mood: "Refined • Dynamic • Editorial",
  },
  {
    id: 6,
    name: "Cinematic Noir Luxury",
    nameVi: "Xa Hoa Điện Ảnh",
    description:
      "The showstopper. Dark cinematic aesthetic with parallax hero, animated counters, horizontal-scroll gallery, auto-rotating testimonials, film grain overlay, floating particles & scroll progress bar. Playfair Display + Outfit.",
    palette: ["#0C0C0C", "#F2EDE8", "#C4A265", "#7A8B6F"],
    typography: "Playfair Display + Outfit",
    mood: "Cinematic • Immersive • Noir",
  },
];

export default function ConceptSelector() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 48px 48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#666",
            marginBottom: 16,
          }}
        >
          Nội Thất Việt — Design Concepts
        </div>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 300,
            lineHeight: 1.3,
            marginBottom: 16,
          }}
        >
          Chọn Phong Cách Thiết Kế
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "#888",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          4 concept homepage hoàn chỉnh. Click vào mỗi concept để xem trang đầy đủ.
        </p>
      </div>

      {/* Concept Grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }}
      >
        {concepts.map((concept) => (
          <Link
            key={concept.id}
            href={`/concept-${concept.id}`}
            style={{
              textDecoration: "none",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: 40,
              transition: "all 0.4s ease",
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Concept Number */}
            <div
              style={{
                fontSize: 64,
                fontWeight: 200,
                color: "rgba(255,255,255,0.06)",
                position: "absolute",
                top: 16,
                right: 24,
                lineHeight: 1,
              }}
            >
              0{concept.id}
            </div>

            {/* Palette Preview */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {concept.palette.map((color) => (
                <div
                  key={color}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    background: color,
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            {/* Name */}
            <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 4 }}>
              {concept.name}
            </h2>
            <div
              style={{
                fontSize: 14,
                color: "#888",
                marginBottom: 16,
              }}
            >
              {concept.nameVi}
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "#999",
                marginBottom: 24,
              }}
            >
              {concept.description}
            </p>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 16,
                fontSize: 12,
                color: "#666",
              }}
            >
              <span>{concept.typography}</span>
              <span>{concept.mood}</span>
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: 24,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
                color: "#fff",
              }}
            >
              Xem Concept →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
