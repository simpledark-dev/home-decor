"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Concept6() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollMax, setScrollMax] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const revealRefs = useRef<HTMLElement[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  const addRevealRef = useCallback((el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollMax(document.documentElement.scrollHeight - window.innerHeight || 1);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("c6-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersVisible) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (countersRef.current) observer.observe(countersRef.current);
    return () => observer.disconnect();
  }, [countersVisible]);

  useEffect(() => {
    if (!countersVisible) return;
    const targets = [15, 500, 50, 98];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map((t) => Math.round(t * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [countersVisible]);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Horizontal scroll for projects
  const handleProjectsWheel = useCallback((e: React.WheelEvent) => {
    const container = projectsRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const atStart = scrollLeft <= 0 && e.deltaY < 0;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 2 && e.deltaY > 0;
    if (!atStart && !atEnd) {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.5;
    }
  }, []);

  const testimonials = [
    {
      quote:
        "Họ không thiết kế nhà — họ thiết kế cảm xúc. Mỗi sáng thức dậy trong không gian này, tôi đều cảm nhận được sự bình yên tuyệt đối mà trước đây tôi chưa từng có.",
      name: "Nguyễn Minh Anh",
      role: "CEO, Minh Anh Holdings",
      project: "Penthouse Thảo Điền, 280m²",
    },
    {
      quote:
        "Từ bản vẽ đầu tiên đến ngày bàn giao, mọi thứ đều vượt xa tưởng tượng. Đây không phải thiết kế — đây là nghệ thuật. Tôi đã giới thiệu cho tất cả bạn bè doanh nhân.",
      name: "Trần Đức Huy",
      role: "Nhà sáng lập TechViet",
      project: "Biệt Thự Phú Mỹ Hưng, 450m²",
    },
    {
      quote:
        "Ba năm sau bàn giao, ngôi nhà vẫn đẹp như ngày đầu — thậm chí đẹp hơn. Gỗ tự nhiên lên patina theo thời gian, chất lượng thi công hoàn hảo đến từng milimét.",
      name: "Lê Thanh Hà",
      role: "Kiến trúc sư, KTS Quốc tế",
      project: "Villa Đà Lạt, 350m²",
    },
  ];

  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'Outfit', sans-serif",
        color: "#F2EDE8",
        background: "#0C0C0C",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Outfit:wght@200;300;400;500;600;700&display=swap');

        .c6-serif { font-family: 'Playfair Display', serif; }
        .c6-sans { font-family: 'Outfit', sans-serif; }

        /* Colors */
        .c6-gold { color: #C4A265; }
        .c6-bg-gold { background-color: #C4A265; }
        .c6-ivory { color: #F2EDE8; }
        .c6-sage { color: #7A8B6F; }
        .c6-muted { color: rgba(242,237,232,0.4); }

        /* Custom cursor */
        .c6-cursor-area { cursor: none; }

        /* Scroll progress bar */
        .c6-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #C4A265, #7A8B6F);
          z-index: 9999;
          transition: width 0.1s linear;
        }

        /* Reveal animations */
        .c6-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .c6-reveal.c6-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .c6-reveal-d1 { transition-delay: 0.1s; }
        .c6-reveal-d2 { transition-delay: 0.2s; }
        .c6-reveal-d3 { transition-delay: 0.3s; }
        .c6-reveal-d4 { transition-delay: 0.4s; }
        .c6-reveal-d5 { transition-delay: 0.5s; }

        /* Text split reveal */
        .c6-line-reveal {
          overflow: hidden;
          display: block;
        }
        .c6-line-reveal > span {
          display: block;
          transform: translateY(110%);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .c6-visible .c6-line-reveal > span {
          transform: translateY(0);
        }

        /* Image */
        .c6-img {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #1a1917;
          display: flex;
          align-items: center;
          justify-content: center;
          color: transparent;
          font-size: 0;
          position: relative;
          overflow: hidden;
        }
        .c6-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg,
            rgba(196,162,101,0.03) 0%,
            transparent 40%,
            rgba(122,139,111,0.03) 100%);
          pointer-events: none;
        }

        /* Shimmer line on images */
        .c6-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
          transition: left 0.8s ease;
        }
        .c6-img-hover:hover .c6-img::after {
          left: 100%;
        }

        /* Scale on hover */
        .c6-img-hover .c6-img {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .c6-img-hover:hover .c6-img {
          transform: scale(1.04);
        }

        /* Overlay reveal */
        .c6-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(12,12,12,0.9) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          z-index: 2;
        }
        .c6-img-hover:hover .c6-overlay {
          opacity: 1;
        }
        .c6-overlay-content {
          transform: translateY(20px);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .c6-img-hover:hover .c6-overlay-content {
          transform: translateY(0);
        }

        /* Buttons */
        .c6-btn {
          background: #C4A265;
          color: #0C0C0C;
          padding: 18px 48px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .c6-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        .c6-btn:hover::before {
          left: 100%;
        }
        .c6-btn:hover {
          background: #d4b275;
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(196,162,101,0.25);
        }

        .c6-btn-ghost {
          background: transparent;
          color: #F2EDE8;
          padding: 18px 48px;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          border: 1px solid rgba(242,237,232,0.25);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          display: inline-block;
        }
        .c6-btn-ghost:hover {
          border-color: #C4A265;
          color: #C4A265;
          transform: translateY(-3px);
        }

        /* Horizontal scroll */
        .c6-hscroll {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0 5vw 40px;
        }
        .c6-hscroll::-webkit-scrollbar { display: none; }

        /* Separator */
        .c6-sep {
          width: 48px;
          height: 1px;
          background: #C4A265;
        }

        /* Glow text */
        .c6-glow {
          text-shadow: 0 0 80px rgba(196,162,101,0.15);
        }

        /* Section label */
        .c6-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #C4A265;
        }

        /* Testimonial transitions */
        .c6-testimonial {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          position: absolute;
          inset: 0;
        }
        .c6-testimonial.c6-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Process card */
        .c6-process-card {
          border: 1px solid rgba(242,237,232,0.08);
          padding: 48px 36px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .c6-process-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: linear-gradient(180deg, transparent, rgba(196,162,101,0.05));
          transition: height 0.6s ease;
        }
        .c6-process-card:hover {
          border-color: rgba(196,162,101,0.3);
          transform: translateY(-8px);
        }
        .c6-process-card:hover::before {
          height: 100%;
        }

        /* Magnetic hover */
        .c6-magnetic {
          transition: transform 0.3s ease;
        }

        /* Nav */
        .c6-nav-link {
          color: rgba(242,237,232,0.5);
          text-decoration: none;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: color 0.4s ease;
          position: relative;
        }
        .c6-nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 0;
          height: 1px;
          background: #C4A265;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
        }
        .c6-nav-link:hover {
          color: #C4A265;
        }
        .c6-nav-link:hover::after {
          width: 100%;
        }

        /* Grain overlay */
        .c6-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Floating particles */
        @keyframes c6Float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          50% { transform: translateY(-200px) rotate(180deg); }
        }
        .c6-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #C4A265;
          border-radius: 50%;
          animation: c6Float linear infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Film grain overlay */}
      <div className="c6-grain" />

      {/* Scroll progress */}
      <div
        className="c6-progress"
        style={{
          width: `${Math.min((scrollY / scrollMax) * 100, 100)}%`,
        }}
      />

      {/* Navigation — Floating, ultra-minimal */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrollY > 100
            ? "rgba(12,12,12,0.9)"
            : "transparent",
          backdropFilter: scrollY > 100 ? "blur(24px)" : "none",
          transition: "all 0.5s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 5vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
          }}
        >
          <div
            className="c6-serif"
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            <span className="c6-gold">N</span>ội{" "}
            <span className="c6-gold">T</span>hất{" "}
            <span className="c6-gold">V</span>iệt
          </div>
          <div style={{ display: "flex", gap: 40 }}>
            {["Trang Chủ", "Dự Án", "Dịch Vụ", "Về Studio", "Liên Hệ"].map(
              (item) => (
                <a key={item} href="#" className="c6-nav-link c6-sans">
                  {item}
                </a>
              )
            )}
          </div>
          <a href="#contact" className="c6-btn" style={{ padding: "12px 32px", fontSize: 10, letterSpacing: 3 }}>
            Tư Vấn
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          HERO — Cinematic full-screen with parallax text
         ═══════════════════════════════════════════════════ */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background with parallax */}
        <div
          className="c6-img"
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.1s linear",
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85')",
          }}
        />


        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(12,12,12,0.3) 0%, rgba(12,12,12,0.7) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 80%, rgba(196,162,101,0.08) 0%, transparent 60%)",
            zIndex: 1,
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="c6-particle"
            style={{
              left: `${15 + i * 15}%`,
              bottom: "10%",
              animationDuration: `${6 + i * 2}s`,
              animationDelay: `${i * 0.8}s`,
              zIndex: 2,
            }}
          />
        ))}

        {/* Hero content */}
        <div
          ref={heroTextRef}
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 5vw",
            width: "100%",
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(1 - scrollY * 0.002, 0),
            transition: "transform 0.05s linear, opacity 0.05s linear",
          }}
        >
          <div className="c6-label" style={{ marginBottom: 28, opacity: 0.8 }}>
            ✦&ensp;Premium Interior Design Studio&ensp;✦
          </div>

          <h1
            className="c6-serif c6-glow"
            style={{
              fontSize: "clamp(44px, 7vw, 88px)",
              fontWeight: 400,
              lineHeight: 1.08,
              marginBottom: 32,
              maxWidth: 900,
            }}
          >
            <span className="c6-line-reveal" style={{ transitionDelay: "0.2s" }}>
              <span>Nơi Nghệ Thuật</span>
            </span>
            <span className="c6-line-reveal" style={{ transitionDelay: "0.4s" }}>
              <span>
                <em className="c6-gold">Hòa Quyện</em> Cùng
              </span>
            </span>
            <span className="c6-line-reveal" style={{ transitionDelay: "0.6s" }}>
              <span>Cuộc Sống</span>
            </span>
          </h1>

          <p
            className="c6-sans"
            style={{
              fontSize: 17,
              lineHeight: 1.9,
              color: "rgba(242,237,232,0.55)",
              maxWidth: 520,
              fontWeight: 300,
              marginBottom: 48,
            }}
          >
            Chúng tôi không chỉ thiết kế không gian — chúng tôi kiến tạo
            trải nghiệm sống đẳng cấp, nơi mỗi chi tiết đều kể một câu chuyện.
          </p>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="#contact" className="c6-btn">Đặt Lịch Tư Vấn</a>
            <a href="#projects" className="c6-btn-ghost">Khám Phá</a>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            textAlign: "center",
            opacity: Math.max(1 - scrollY * 0.005, 0),
          }}
        >
          <div className="c6-sans c6-muted" style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>
            Cuộn xuống
          </div>
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(180deg, rgba(196,162,101,0.6), transparent)",
              margin: "0 auto",
              animation: "c6Float 3s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST INDICATORS — Cinematic counter bar
         ═══════════════════════════════════════════════════ */}
      <section
        ref={countersRef}
        style={{
          borderTop: "1px solid rgba(242,237,232,0.06)",
          borderBottom: "1px solid rgba(242,237,232,0.06)",
          padding: "72px 5vw",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {[
            { target: 15, suffix: "+", label: "Năm Kinh Nghiệm", sub: "Since 2009" },
            { target: 500, suffix: "+", label: "Dự Án Hoàn Thành", sub: "& counting" },
            { target: 50, suffix: "+", label: "Giải Thưởng", sub: "Quốc tế & nội địa" },
            { target: 98, suffix: "%", label: "Khách Hàng Hài Lòng", sub: "Tin tưởng tuyệt đối" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "0 24px",
                borderRight: i < 3 ? "1px solid rgba(242,237,232,0.06)" : "none",
              }}
            >
              <div
                className="c6-serif c6-gold"
                style={{ fontSize: 52, fontWeight: 400, marginBottom: 4, lineHeight: 1 }}
              >
                {counts[i]}{stat.suffix}
              </div>
              <div
                className="c6-sans"
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "rgba(242,237,232,0.6)",
                  fontWeight: 400,
                  marginBottom: 4,
                }}
              >
                {stat.label}
              </div>
              <div className="c6-sans" style={{ fontSize: 11, color: "rgba(242,237,232,0.2)" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURED PROJECTS — Horizontal scroll gallery
         ═══════════════════════════════════════════════════ */}
      <section id="projects" style={{ padding: "140px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5vw", marginBottom: 64 }}>
          <div ref={addRevealRef} className="c6-reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div className="c6-label" style={{ marginBottom: 16 }}>Portfolio</div>
              <h2
                className="c6-serif"
                style={{ fontSize: 52, fontWeight: 400, lineHeight: 1.2 }}
              >
                Dự Án{" "}
                <em className="c6-gold" style={{ fontWeight: 500 }}>Nổi Bật</em>
              </h2>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => {
                  if (projectsRef.current) projectsRef.current.scrollLeft -= 500;
                }}
                className="c6-sans"
                style={{
                  width: 52,
                  height: 52,
                  border: "1px solid rgba(242,237,232,0.15)",
                  background: "transparent",
                  color: "#F2EDE8",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C4A265";
                  e.currentTarget.style.color = "#C4A265";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(242,237,232,0.15)";
                  e.currentTarget.style.color = "#F2EDE8";
                }}
              >
                ←
              </button>
              <button
                onClick={() => {
                  if (projectsRef.current) projectsRef.current.scrollLeft += 500;
                }}
                className="c6-sans"
                style={{
                  width: 52,
                  height: 52,
                  border: "1px solid rgba(242,237,232,0.15)",
                  background: "transparent",
                  color: "#F2EDE8",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C4A265";
                  e.currentTarget.style.color = "#C4A265";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(242,237,232,0.15)";
                  e.currentTarget.style.color = "#F2EDE8";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scrolling cards */}
        <div
          ref={projectsRef}
          className="c6-hscroll"
          onWheel={handleProjectsWheel}
        >
          {[
            { title: "Penthouse Thảo Điền", cat: "Căn Hộ Cao Cấp", size: "280m²", year: "2024", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
            { title: "Biệt Thự Phú Mỹ Hưng", cat: "Biệt Thự", size: "450m²", year: "2024", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
            { title: "Villa Đà Lạt", cat: "Nghỉ Dưỡng", size: "350m²", year: "2023", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" },
            { title: "Văn Phòng TechViet", cat: "Thương Mại", size: "200m²", year: "2023", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
            { title: "Căn Hộ Midtown", cat: "Căn Hộ", size: "120m²", year: "2024", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" },
            { title: "Nhà Phố Thảo Điền", cat: "Nhà Phố", size: "180m²", year: "2023", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
          ].map((project, i) => (
            <div
              key={project.title}
              className="c6-img-hover"
              style={{
                flex: "0 0 420px",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div className="c6-img" style={{ height: 540, backgroundImage: `url('${project.img}')` }}>
                  {project.title}
                </div>
              </div>
              <div className="c6-overlay">
                <div className="c6-overlay-content">
                  <div className="c6-sans" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#C4A265", marginBottom: 8 }}>
                    {project.cat} — {project.size}
                  </div>
                  <div className="c6-serif" style={{ fontSize: 26, fontWeight: 500, marginBottom: 8 }}>
                    {project.title}
                  </div>
                  <div className="c6-sans" style={{ fontSize: 12, color: "rgba(242,237,232,0.4)" }}>
                    {project.year}
                  </div>
                </div>
              </div>
              {/* Bottom bar */}
              <div style={{ padding: "20px 0 0" }}>
                <div className="c6-sans" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(242,237,232,0.3)", marginBottom: 6 }}>
                  {project.cat}
                </div>
                <div className="c6-serif" style={{ fontSize: 20, fontWeight: 500 }}>
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" className="c6-btn-ghost" style={{ padding: "16px 44px" }}>Xem Tất Cả Dự Án</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Elegant staggered cards
         ═══════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "140px 5vw",
          background: "linear-gradient(180deg, rgba(242,237,232,0.02) 0%, rgba(12,12,12,1) 100%)",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div ref={addRevealRef} className="c6-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c6-label" style={{ marginBottom: 16 }}>Dịch Vụ</div>
            <h2 className="c6-serif" style={{ fontSize: 52, fontWeight: 400 }}>
              Giải Pháp{" "}
              <em className="c6-gold" style={{ fontWeight: 500 }}>Toàn Diện</em>
            </h2>
            <p className="c6-sans" style={{ fontSize: 15, color: "rgba(242,237,232,0.4)", marginTop: 16, fontWeight: 300, maxWidth: 560, margin: "16px auto 0" }}>
              Ba trụ cột dịch vụ cốt lõi, được tinh chỉnh qua 15 năm kinh nghiệm
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              {
                num: "01",
                icon: "◆",
                title: "Thiết Kế Nội Thất",
                desc: "Từ moodboard đến phối cảnh 3D siêu thực, chúng tôi kiến tạo bản giao hưởng thị giác cho không gian sống của bạn. Mỗi chi tiết được chau chuốt đến hoàn mỹ.",
                features: ["Concept Design", "3D Visualization", "Material Curation"],
              },
              {
                num: "02",
                icon: "◈",
                title: "Thi Công Cao Cấp",
                desc: "Đội ngũ nghệ nhân lành nghề với tiêu chuẩn thi công quốc tế. Giám sát chất lượng 360° đảm bảo từng milimét đúng như thiết kế.",
                features: ["Thi Công Trọn Gói", "Giám Sát 360°", "Đúng Tiến Độ"],
              },
              {
                num: "03",
                icon: "◇",
                title: "Tư Vấn Chuyên Sâu",
                desc: "Tư vấn phong thuỷ hài hòa, lựa chọn vật liệu nhập khẩu từ Ý, Đức, Nhật và quản lý dự án chuyên nghiệp từ A đến Z.",
                features: ["Phong Thuỷ", "Vật Liệu Nhập Khẩu", "Quản Lý Dự Án"],
              },
            ].map((service, i) => (
              <div
                key={service.num}
                ref={addRevealRef}
                className={`c6-reveal c6-reveal-d${i + 1} c6-process-card`}
                style={{ marginTop: i * 40 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                  <div
                    className="c6-serif c6-gold"
                    style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2 }}
                  >
                    {service.num}
                  </div>
                  <div className="c6-gold" style={{ fontSize: 24, opacity: 0.4 }}>
                    {service.icon}
                  </div>
                </div>
                <h3
                  className="c6-serif"
                  style={{ fontSize: 28, fontWeight: 500, marginBottom: 16, lineHeight: 1.3 }}
                >
                  {service.title}
                </h3>
                <p
                  className="c6-sans"
                  style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(242,237,232,0.45)", fontWeight: 300, marginBottom: 32 }}
                >
                  {service.desc}
                </p>
                <div style={{ borderTop: "1px solid rgba(242,237,232,0.06)", paddingTop: 20 }}>
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="c6-sans"
                      style={{
                        fontSize: 12,
                        color: "rgba(242,237,232,0.3)",
                        padding: "8px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span className="c6-gold" style={{ fontSize: 6 }}>●</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DESIGN PROCESS — Interactive timeline
         ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "140px 5vw" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div ref={addRevealRef} className="c6-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c6-label" style={{ marginBottom: 16 }}>Quy Trình</div>
            <h2 className="c6-serif" style={{ fontSize: 52, fontWeight: 400 }}>
              Hành Trình{" "}
              <em className="c6-gold" style={{ fontWeight: 500 }}>Sáng Tạo</em>
            </h2>
          </div>

          <div
            ref={addRevealRef}
            className="c6-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: 36,
                left: "12.5%",
                right: "12.5%",
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(196,162,101,0.2), rgba(196,162,101,0.2), transparent)",
                zIndex: 0,
              }}
            />

            {[
              {
                step: "01",
                title: "Lắng Nghe",
                desc: "Gặp gỡ, trao đổi về phong cách sống, sở thích cá nhân và tầm nhìn cho không gian mơ ước của bạn.",
              },
              {
                step: "02",
                title: "Sáng Tạo",
                desc: "Phát triển concept độc bản, trình bày phối cảnh 3D chân thực và lựa chọn palette vật liệu.",
              },
              {
                step: "03",
                title: "Hiện Thực",
                desc: "Thi công với đội ngũ nghệ nhân, giám sát chất lượng từng giai đoạn, cập nhật tiến độ realtime.",
              },
              {
                step: "04",
                title: "Hoàn Hảo",
                desc: "Bàn giao công trình hoàn mỹ, kích hoạt bảo hành 5 năm và chương trình chăm sóc VIP trọn đời.",
              },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center", padding: "0 28px", position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "1px solid rgba(196,162,101,0.3)",
                    background: "#0C0C0C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 28px",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C4A265";
                    e.currentTarget.style.boxShadow = "0 0 32px rgba(196,162,101,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(196,162,101,0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="c6-serif c6-gold" style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="c6-serif" style={{ fontSize: 24, fontWeight: 500, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p className="c6-sans" style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(242,237,232,0.35)", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS — Cinematic rotating quotes
         ═══════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "140px 5vw",
          background: "linear-gradient(180deg, rgba(242,237,232,0.03) 0%, rgba(12,12,12,1) 100%)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div ref={addRevealRef} className="c6-reveal" style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="c6-label" style={{ marginBottom: 16 }}>Khách Hàng</div>
            <h2 className="c6-serif" style={{ fontSize: 52, fontWeight: 400 }}>
              Niềm Tin{" "}
              <em className="c6-gold" style={{ fontWeight: 500 }}>Được Gửi Gắm</em>
            </h2>
          </div>

          <div
            ref={addRevealRef}
            className="c6-reveal"
            style={{
              position: "relative",
              minHeight: 340,
              textAlign: "center",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`c6-testimonial ${i === activeTestimonial ? "c6-active" : ""}`}
              >
                <div className="c6-serif c6-gold" style={{ fontSize: 72, lineHeight: 1, marginBottom: 8, opacity: 0.3 }}>
                  &ldquo;
                </div>
                <p
                  className="c6-serif"
                  style={{
                    fontSize: 24,
                    lineHeight: 1.7,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "rgba(242,237,232,0.8)",
                    marginBottom: 40,
                    maxWidth: 720,
                    margin: "0 auto 40px",
                  }}
                >
                  {t.quote}
                </p>
                <div className="c6-sep" style={{ margin: "0 auto 20px" }} />
                <div className="c6-sans" style={{ fontWeight: 600, fontSize: 14, letterSpacing: 1 }}>
                  {t.name}
                </div>
                <div className="c6-sans" style={{ fontSize: 12, color: "rgba(242,237,232,0.3)", marginTop: 4 }}>
                  {t.role}
                </div>
                <div className="c6-sans c6-gold" style={{ fontSize: 11, marginTop: 8, letterSpacing: 2 }}>
                  {t.project}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 48 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? 36 : 10,
                  height: 3,
                  borderRadius: 2,
                  border: "none",
                  background: i === activeTestimonial ? "#C4A265" : "rgba(242,237,232,0.15)",
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Dramatic full-width
         ═══════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "160px 5vw",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,162,101,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div ref={addRevealRef} className="c6-reveal" style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div className="c6-label" style={{ marginBottom: 24 }}>Bắt Đầu</div>
          <h2
            className="c6-serif c6-glow"
            style={{
              fontSize: 56,
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Biến Tầm Nhìn Thành
            <br />
            <em className="c6-gold" style={{ fontWeight: 500 }}>Kiệt Tác</em>
          </h2>
          <p
            className="c6-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.9,
              color: "rgba(242,237,232,0.4)",
              fontWeight: 300,
              marginBottom: 48,
            }}
          >
            Mỗi dự án bắt đầu bằng một cuộc trò chuyện. Đặt lịch tư vấn miễn phí
            và để chúng tôi lắng nghe câu chuyện của bạn.
          </p>
          <a href="#contact" className="c6-btn" style={{ fontSize: 13, padding: "20px 56px" }}>
            Nhận Tư Vấn Miễn Phí
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT — Refined dark form
         ═══════════════════════════════════════════════════ */}
      <section
        id="contact"
        style={{
          padding: "140px 5vw",
          borderTop: "1px solid rgba(242,237,232,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 100,
          }}
        >
          <div ref={addRevealRef} className="c6-reveal">
            <div className="c6-label" style={{ marginBottom: 16 }}>Liên Hệ</div>
            <h2 className="c6-serif" style={{ fontSize: 44, fontWeight: 400, marginBottom: 24, lineHeight: 1.3 }}>
              Hãy Để Chúng Tôi
              <br />
              <em className="c6-gold" style={{ fontWeight: 500 }}>Lắng Nghe Bạn</em>
            </h2>
            <p
              className="c6-sans"
              style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(242,237,232,0.4)", fontWeight: 300, marginBottom: 48 }}
            >
              Đội ngũ tư vấn sẽ phản hồi trong vòng 24 giờ với phương án tùy chỉnh
              phù hợp nhất cho dự án của bạn.
            </p>
            <div className="c6-sans" style={{ fontSize: 14, lineHeight: 3, color: "rgba(242,237,232,0.5)" }}>
              <div>
                <span className="c6-gold" style={{ fontSize: 10, marginRight: 12 }}>●</span>
                <strong style={{ color: "rgba(242,237,232,0.8)", fontWeight: 500 }}>Showroom</strong>
                &emsp;123 Nguyễn Huệ, Quận 1, TP.HCM
              </div>
              <div>
                <span className="c6-gold" style={{ fontSize: 10, marginRight: 12 }}>●</span>
                <strong style={{ color: "rgba(242,237,232,0.8)", fontWeight: 500 }}>Hotline</strong>
                &emsp;(028) 1234 5678
              </div>
              <div>
                <span className="c6-gold" style={{ fontSize: 10, marginRight: 12 }}>●</span>
                <strong style={{ color: "rgba(242,237,232,0.8)", fontWeight: 500 }}>Email</strong>
                &emsp;hello@noithatviet.vn
              </div>
              <div>
                <span className="c6-gold" style={{ fontSize: 10, marginRight: 12 }}>●</span>
                <strong style={{ color: "rgba(242,237,232,0.8)", fontWeight: 500 }}>Giờ mở cửa</strong>
                &emsp;T2 – T7 | 9:00 – 18:00
              </div>
            </div>
          </div>
          <div ref={addRevealRef} className="c6-reveal c6-reveal-d2">
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                padding: 56,
                border: "1px solid rgba(242,237,232,0.06)",
                background: "rgba(242,237,232,0.02)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {[
                  { label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                  { label: "Số điện thoại", type: "tel", placeholder: "0901 234 567" },
                ].map((field) => (
                  <div key={field.label}>
                    <label
                      className="c6-sans"
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                        color: "rgba(242,237,232,0.3)",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "16px 0",
                        border: "none",
                        borderBottom: "1px solid rgba(242,237,232,0.1)",
                        fontSize: 15,
                        fontFamily: "'Outfit', sans-serif",
                        outline: "none",
                        background: "transparent",
                        color: "#F2EDE8",
                        transition: "border-color 0.4s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#C4A265")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(242,237,232,0.1)")}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label
                  className="c6-sans"
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "rgba(242,237,232,0.3)",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  style={{
                    width: "100%",
                    padding: "16px 0",
                    border: "none",
                    borderBottom: "1px solid rgba(242,237,232,0.1)",
                    fontSize: 15,
                    fontFamily: "'Outfit', sans-serif",
                    outline: "none",
                    background: "transparent",
                    color: "#F2EDE8",
                    transition: "border-color 0.4s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#C4A265")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(242,237,232,0.1)")}
                />
              </div>
              <div>
                <label
                  className="c6-sans"
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "rgba(242,237,232,0.3)",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  Chia sẻ về dự án của bạn
                </label>
                <textarea
                  placeholder="Phong cách, diện tích, ngân sách dự kiến, timeline..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "16px 0",
                    border: "none",
                    borderBottom: "1px solid rgba(242,237,232,0.1)",
                    fontSize: 15,
                    fontFamily: "'Outfit', sans-serif",
                    outline: "none",
                    resize: "none",
                    background: "transparent",
                    color: "#F2EDE8",
                    transition: "border-color 0.4s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#C4A265")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(242,237,232,0.1)")}
                />
              </div>
              <button type="submit" className="c6-btn" style={{ alignSelf: "flex-start", marginTop: 12 }}>
                Gửi Yêu Cầu Tư Vấn
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER — Cinematic minimal
         ═══════════════════════════════════════════════════ */}
      <footer
        style={{
          borderTop: "1px solid rgba(242,237,232,0.06)",
          padding: "80px 5vw 48px",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
              gap: 48,
              marginBottom: 80,
            }}
          >
            {/* Brand */}
            <div>
              <div className="c6-serif" style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
                <span className="c6-gold">N</span>ội <span className="c6-gold">T</span>hất <span className="c6-gold">V</span>iệt
              </div>
              <p className="c6-sans" style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(242,237,232,0.25)", fontWeight: 300 }}>
                Studio thiết kế nội thất cao cấp hàng đầu Việt Nam.
                Kiến tạo không gian sống đẳng cấp từ năm 2009.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div className="c6-sans" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A265", marginBottom: 24 }}>
                Khám Phá
              </div>
              {["Trang Chủ", "Dự Án", "Dịch Vụ", "Về Studio", "Tin Tức", "Tuyển Dụng"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="c6-sans"
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "rgba(242,237,232,0.25)",
                    textDecoration: "none",
                    marginBottom: 14,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C4A265")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,232,0.25)")}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="c6-sans" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A265", marginBottom: 24 }}>
                Liên Hệ
              </div>
              <div className="c6-sans" style={{ fontSize: 13, color: "rgba(242,237,232,0.25)", lineHeight: 2.4 }}>
                <div>123 Nguyễn Huệ, Q.1</div>
                <div>TP. Hồ Chí Minh</div>
                <div>(028) 1234 5678</div>
                <div>hello@noithatviet.vn</div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="c6-sans" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#C4A265", marginBottom: 24 }}>
                Nhận Tin Mới
              </div>
              <p className="c6-sans" style={{ fontSize: 13, color: "rgba(242,237,232,0.25)", lineHeight: 1.7, marginBottom: 20, fontWeight: 300 }}>
                Xu hướng thiết kế & ưu đãi đặc biệt
              </p>
              <div style={{ display: "flex", gap: 0 }}>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    border: "1px solid rgba(242,237,232,0.1)",
                    borderRight: "none",
                    fontSize: 13,
                    fontFamily: "'Outfit', sans-serif",
                    background: "transparent",
                    color: "#F2EDE8",
                    outline: "none",
                  }}
                />
                <button
                  className="c6-sans"
                  style={{
                    padding: "14px 24px",
                    background: "#C4A265",
                    color: "#0C0C0C",
                    border: "none",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 2,
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#d4b275")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#C4A265")}
                >
                  GỬI
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(242,237,232,0.04)",
              paddingTop: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="c6-sans" style={{ fontSize: 11, color: "rgba(242,237,232,0.15)", letterSpacing: 1 }}>
              © 2024 Nội Thất Việt. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: 28 }}>
              {["Facebook", "Instagram", "Pinterest", "Youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="c6-sans"
                  style={{
                    fontSize: 11,
                    color: "rgba(242,237,232,0.15)",
                    textDecoration: "none",
                    letterSpacing: 1,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C4A265")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,232,0.15)")}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
