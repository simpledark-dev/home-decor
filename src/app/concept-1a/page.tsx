"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Concept1() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroOffset, setHeroOffset] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const countersRef = useRef<HTMLDivElement>(null);

  const counterTargets = [15, 500, 50, 98];
  const counterSuffixes = ["+", "+", "+", "%"];

  // Animate counters
  const animateCounters = useCallback(() => {
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCounters(counterTargets.map((target) => Math.round(target * eased)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    // Scroll-reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("c1-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".c1-reveal").forEach((el) => observer.observe(el));

    // Counter observer
    const counterObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
          animateCounters();
          counterObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (countersRef.current) counterObserver.observe(countersRef.current);

    // Scroll handler for parallax + progress + nav
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavScrolled(scrollY > 80);
      setHeroOffset(scrollY * 0.4);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [countersStarted, animateCounters]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "Đội ngũ Nội Thất Việt đã biến ngôi nhà của chúng tôi thành một tác phẩm nghệ thuật. Mỗi góc nhỏ đều mang lại cảm giác sang trọng và ấm cúng.",
      name: "Nguyễn Minh Anh",
      title: "Chủ nhân Penthouse Quận 2",
    },
    {
      quote: "Sự chuyên nghiệp và tận tâm của đội ngũ khiến tôi hoàn toàn yên tâm. Dự án hoàn thành đúng tiến độ với chất lượng vượt xa mong đợi.",
      name: "Trần Đức Huy",
      title: "Giám đốc Công ty BĐS",
    },
    {
      quote: "Phong cách thiết kế tinh tế, hiểu rõ xu hướng quốc tế nhưng vẫn giữ được nét Việt. Tôi đã giới thiệu cho rất nhiều bạn bè.",
      name: "Lê Thanh Hà",
      title: "Chủ nhân Biệt thự Quận 7",
    },
  ];

  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "#1a1a1a",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        .c1-serif { font-family: 'Playfair Display', serif; }
        .c1-sans { font-family: 'Inter', sans-serif; }
        .c1-gold { color: #C9A96E; }
        .c1-bg-gold { background-color: #C9A96E; }

        /* Scroll progress bar */
        .c1-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #C9A96E, #e8d5a8);
          z-index: 200;
          transition: width 0.1s linear;
        }

        /* Nav */
        .c1-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 150;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .c1-nav-scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-bottom-color: rgba(0,0,0,0.05);
          box-shadow: 0 4px 30px rgba(0,0,0,0.04);
        }
        .c1-nav-logo {
          transition: opacity 0.4s ease;
        }
        .c1-nav-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }
        .c1-nav-scrolled .c1-nav-link {
          color: #1a1a1a;
        }
        .c1-nav-link:hover {
          color: #C9A96E !important;
        }
        .c1-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C9A96E;
          transition: width 0.3s ease;
        }
        .c1-nav-link:hover::after {
          width: 100%;
        }

        /* Buttons */
        .c1-btn {
          display: inline-block;
          background: #C9A96E;
          color: #fff;
          padding: 16px 48px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }
        .c1-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #1a1a1a;
          transition: left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 0;
        }
        .c1-btn:hover::before {
          left: 0;
        }
        .c1-btn span {
          position: relative;
          z-index: 1;
        }

        .c1-btn-outline {
          display: inline-block;
          background: transparent;
          color: #C9A96E;
          padding: 16px 48px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid #C9A96E;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
        }
        .c1-btn-outline:hover {
          background: #C9A96E;
          color: #fff;
        }
        .c1-btn-white {
          display: inline-block;
          background: transparent;
          color: #fff;
          padding: 16px 48px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
        }
        .c1-btn-white:hover {
          background: #fff;
          color: #1a1a1a;
          border-color: #fff;
        }

        .c1-section-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 16px;
        }

        /* Images */
        .c1-img {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #f0ede8;
        }

        /* Image clip-path reveal */
        .c1-img-reveal {
          clip-path: inset(0 0 100% 0);
          transition: clip-path 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-visible .c1-img-reveal,
        .c1-reveal.c1-visible .c1-img-reveal {
          clip-path: inset(0 0 0% 0);
        }

        /* Image zoom on hover */
        .c1-img-zoom {
          overflow: hidden;
        }
        .c1-img-zoom .c1-img {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-img-zoom:hover .c1-img {
          transform: scale(1.05);
        }

        /* Scroll-reveal animations */
        .c1-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-reveal.c1-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Reveal from left */
        .c1-reveal-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-reveal-left.c1-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Reveal from right */
        .c1-reveal-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-reveal-right.c1-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Stagger children */
        .c1-stagger > * {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-stagger.c1-visible > *:nth-child(1) { transition-delay: 0s; opacity: 1; transform: translateY(0); }
        .c1-stagger.c1-visible > *:nth-child(2) { transition-delay: 0.15s; opacity: 1; transform: translateY(0); }
        .c1-stagger.c1-visible > *:nth-child(3) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
        .c1-stagger.c1-visible > *:nth-child(4) { transition-delay: 0.45s; opacity: 1; transform: translateY(0); }

        /* Hero animations */
        .c1-hero-text {
          opacity: 0;
          transform: translateY(40px);
          animation: c1HeroText 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }
        .c1-hero-text-d2 {
          animation-delay: 0.5s;
        }
        .c1-hero-text-d3 {
          animation-delay: 0.7s;
        }
        .c1-hero-text-d4 {
          animation-delay: 0.9s;
        }
        @keyframes c1HeroText {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Gold line grow */
        .c1-line-grow {
          width: 0;
          transition: width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-visible .c1-line-grow {
          width: 60px;
        }

        /* Parallax image divider */
        .c1-parallax-divider {
          height: 500px;
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .c1-parallax-divider::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
        }

        /* Service card hover */
        .c1-service-card {
          padding: 56px 40px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        .c1-service-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #C9A96E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-service-card:hover {
          border-color: rgba(201,169,110,0.3);
          transform: translateY(-4px);
        }
        .c1-service-card:hover::before {
          transform: scaleX(1);
        }

        /* Process step */
        .c1-process-step {
          position: relative;
          text-align: center;
          padding: 0 20px;
        }

        /* Testimonial transition */
        .c1-testimonial {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .c1-testimonial-active {
          opacity: 1;
          transform: translateY(0);
        }
        .c1-testimonial-hidden {
          opacity: 0;
          transform: translateY(20px);
          position: absolute;
          pointer-events: none;
        }

        /* Testimonial dot */
        .c1-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #C9A96E;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .c1-dot-active {
          background: #C9A96E;
          transform: scale(1.2);
        }

        /* Marquee */
        .c1-marquee {
          overflow: hidden;
          white-space: nowrap;
        }
        .c1-marquee-inner {
          display: inline-flex;
          animation: c1Marquee 30s linear infinite;
        }
        @keyframes c1Marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Footer links */
        .c1-footer-link {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .c1-footer-link:hover {
          color: #C9A96E;
        }

        @media (max-width: 768px) {
          .c1-parallax-divider {
            background-attachment: scroll;
          }
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <div className="c1-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className={`c1-nav ${navScrolled ? "c1-nav-scrolled" : ""}`}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "24px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="c1-serif c1-nav-logo" style={{ fontSize: 24, fontWeight: 600, letterSpacing: 1, color: navScrolled ? "#1a1a1a" : "#fff" }}>
            <span className="c1-gold">NỘI THẤT</span> VIỆT
          </div>
          <div
            className="c1-sans"
            style={{
              display: "flex",
              gap: 40,
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {["Trang chủ", "Dự án", "Dịch vụ", "Về chúng tôi", "Liên hệ"].map((item) => (
              <a key={item} href="#" className="c1-nav-link">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="c1-btn" style={{ padding: "12px 32px", fontSize: 11 }}>
            <span>Tư Vấn Miễn Phí</span>
          </a>
        </div>
      </nav>

      {/* ===== HERO — Full-bleed parallax ===== */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Parallax background */}
        <div
          className="c1-img"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80')",
            transform: `translateY(${heroOffset}px) scale(1.1)`,
            willChange: "transform",
          }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)" }} />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", padding: "0 48px", width: "100%" }}>
          <div className="c1-hero-text c1-section-label" style={{ color: "rgba(255,255,255,0.7)" }}>
            Studio Thiết Kế Nội Thất Cao Cấp
          </div>
          <h1
            className="c1-serif c1-hero-text c1-hero-text-d2"
            style={{
              fontSize: 80,
              fontWeight: 400,
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: 32,
              maxWidth: 800,
            }}
          >
            Kiến Tạo
            <br />
            Không Gian
            <br />
            <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Đẳng Cấp</span>
          </h1>
          <p
            className="c1-sans c1-hero-text c1-hero-text-d3"
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 520,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Chúng tôi mang đến những thiết kế nội thất tinh tế, nơi mỗi chi tiết
            đều được chau chuốt để tạo nên không gian sống hoàn hảo cho gia đình bạn.
          </p>
          <div className="c1-hero-text c1-hero-text-d4" style={{ display: "flex", gap: 16 }}>
            <a href="#contact" className="c1-btn"><span>Đặt Lịch Tư Vấn</span></a>
            <a href="#projects" className="c1-btn-white"><span>Xem Dự Án</span></a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="c1-hero-text c1-hero-text-d4"
          style={{
            position: "absolute",
            bottom: 48,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div className="c1-sans" style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
            Cuộn xuống
          </div>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ===== Trust Indicators — Animated Counters ===== */}
      <section style={{ background: "#fafaf8", padding: "80px 48px" }}>
        <div
          ref={countersRef}
          className="c1-reveal c1-stagger"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
            textAlign: "center",
          }}
        >
          {[
            { label: "Năm Kinh Nghiệm" },
            { label: "Dự Án Hoàn Thành" },
            { label: "Giải Thưởng Thiết Kế" },
            { label: "Khách Hàng Hài Lòng" },
          ].map((stat, i) => (
            <div key={stat.label} style={{ padding: "24px 0" }}>
              <div
                className="c1-serif c1-gold"
                style={{ fontSize: 52, fontWeight: 600, marginBottom: 8, lineHeight: 1 }}
              >
                {counters[i]}{counterSuffixes[i]}
              </div>
              <div
                className="c1-sans"
                style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#999" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Featured Projects — Asymmetric grid + clip-path reveal ===== */}
      <section id="projects" style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Portfolio</div>
            <h2 className="c1-serif" style={{ fontSize: 48, fontWeight: 400, marginBottom: 16 }}>
              Dự Án <span className="c1-gold" style={{ fontStyle: "italic" }}>Nổi Bật</span>
            </h2>
            <div className="c1-bg-gold c1-line-grow" style={{ height: 1, margin: "0 auto" }} />
          </div>

          {/* Large featured project */}
          <div
            className="c1-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 64,
              alignItems: "center",
              marginBottom: 80,
            }}
          >
            <div className="c1-img-zoom" style={{ overflow: "hidden" }}>
              <div className="c1-img-reveal">
                <div
                  className="c1-img"
                  style={{
                    height: 560,
                    backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80')",
                  }}
                />
              </div>
            </div>
            <div>
              <div className="c1-sans" style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#C9A96E", marginBottom: 16 }}>
                Căn Hộ Cao Cấp — 280m²
              </div>
              <h3 className="c1-serif" style={{ fontSize: 36, fontWeight: 500, marginBottom: 20, lineHeight: 1.2 }}>
                Penthouse Thảo Điền
              </h3>
              <p className="c1-sans" style={{ fontSize: 15, lineHeight: 1.9, color: "#777", fontWeight: 300, marginBottom: 32 }}>
                Không gian sống đẳng cấp với tầm nhìn panorama thành phố. Sự kết hợp hoàn hảo
                giữa phong cách hiện đại và nét sang trọng cổ điển, tạo nên một tác phẩm nghệ thuật sống.
              </p>
              <a href="#" className="c1-btn-outline" style={{ fontSize: 12 }}>Xem Chi Tiết</a>
            </div>
          </div>

          {/* Two smaller projects */}
          <div
            className="c1-reveal c1-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
          >
            {[
              {
                title: "Biệt Thự Phú Mỹ Hưng",
                category: "Biệt Thự",
                size: "450m²",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
                desc: "Biệt thự phong cách Indochine với vật liệu tự nhiên cao cấp.",
              },
              {
                title: "Villa Đà Lạt",
                category: "Nghỉ Dưỡng",
                size: "350m²",
                img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
                desc: "Không gian nghỉ dưỡng hòa mình với thiên nhiên núi rừng.",
              },
            ].map((project) => (
              <div key={project.title} style={{ cursor: "pointer" }}>
                <div className="c1-img-zoom" style={{ overflow: "hidden", marginBottom: 24 }}>
                  <div className="c1-img-reveal">
                    <div
                      className="c1-img"
                      style={{ height: 380, backgroundImage: `url('${project.img}')` }}
                    />
                  </div>
                </div>
                <div className="c1-sans" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#C9A96E", marginBottom: 8 }}>
                  {project.category} — {project.size}
                </div>
                <h3 className="c1-serif" style={{ fontSize: 26, fontWeight: 500, marginBottom: 10 }}>
                  {project.title}
                </h3>
                <p className="c1-sans" style={{ fontSize: 14, lineHeight: 1.7, color: "#888", fontWeight: 300 }}>
                  {project.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="c1-reveal" style={{ textAlign: "center", marginTop: 72 }}>
            <a href="#" className="c1-btn-outline">Xem Tất Cả Dự Án</a>
          </div>
        </div>
      </section>

      {/* ===== Parallax Image Divider ===== */}
      <div
        className="c1-parallax-divider"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div className="c1-serif" style={{ fontSize: 48, color: "#fff", fontWeight: 400, lineHeight: 1.3 }}>
              &ldquo;Thiết kế không chỉ là thẩm mỹ,
              <br />
              <span style={{ color: "#C9A96E", fontStyle: "italic" }}>mà là cách sống.&rdquo;</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Services — Enhanced cards ===== */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "140px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Dịch Vụ</div>
            <h2 className="c1-serif" style={{ fontSize: 48, fontWeight: 400, color: "#fff" }}>
              Giải Pháp Thiết Kế <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Toàn Diện</span>
            </h2>
          </div>
          <div
            className="c1-reveal c1-stagger"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}
          >
            {[
              {
                title: "Thiết Kế Nội Thất",
                desc: "Từ ý tưởng đến bản vẽ 3D chi tiết, chúng tôi kiến tạo không gian sống phản ánh cá tính và phong cách riêng của bạn.",
                num: "01",
              },
              {
                title: "Thi Công Trọn Gói",
                desc: "Đội ngũ thợ lành nghề với quy trình quản lý chất lượng nghiêm ngặt, đảm bảo mỗi chi tiết đều hoàn hảo.",
                num: "02",
              },
              {
                title: "Tư Vấn & Quản Lý",
                desc: "Tư vấn phong thủy, lựa chọn vật liệu cao cấp và quản lý dự án chuyên nghiệp từ A đến Z.",
                num: "03",
              },
            ].map((service) => (
              <div key={service.title} className="c1-service-card">
                <div className="c1-serif" style={{ fontSize: 48, fontWeight: 300, color: "rgba(201,169,110,0.15)", marginBottom: 32, lineHeight: 1 }}>
                  {service.num}
                </div>
                <h3 className="c1-serif" style={{ fontSize: 24, fontWeight: 500, marginBottom: 16, color: "#fff" }}>
                  {service.title}
                </h3>
                <p className="c1-sans" style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Design Process — with connecting line ===== */}
      <section style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Quy Trình</div>
            <h2 className="c1-serif" style={{ fontSize: 48, fontWeight: 400 }}>
              Hành Trình <span className="c1-gold" style={{ fontStyle: "italic" }}>Sáng Tạo</span>
            </h2>
          </div>
          <div
            className="c1-reveal c1-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div style={{
              position: "absolute",
              top: 36,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "linear-gradient(90deg, transparent, #C9A96E 20%, #C9A96E 80%, transparent)",
              opacity: 0.3,
            }} />
            {[
              { step: "01", title: "Tư Vấn", desc: "Lắng nghe nhu cầu, tìm hiểu phong cách sống và ngân sách của bạn." },
              { step: "02", title: "Thiết Kế", desc: "Phát triển concept, bản vẽ 2D/3D và lựa chọn vật liệu phù hợp." },
              { step: "03", title: "Thi Công", desc: "Triển khai thi công với đội ngũ chuyên nghiệp, giám sát chặt chẽ." },
              { step: "04", title: "Bàn Giao", desc: "Hoàn thiện, bàn giao và hỗ trợ bảo hành dài hạn cho công trình." },
            ].map((item) => (
              <div key={item.step} className="c1-process-step">
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: "1px solid #C9A96E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  background: "#fff",
                  position: "relative",
                  zIndex: 1,
                }}>
                  <span className="c1-serif c1-gold" style={{ fontSize: 22, fontWeight: 500 }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="c1-serif" style={{ fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p className="c1-sans" style={{ fontSize: 14, lineHeight: 1.8, color: "#888", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Marquee — Awards/Partners ===== */}
      <section style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "32px 0", overflow: "hidden" }}>
        <div className="c1-marquee">
          <div className="c1-marquee-inner">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} style={{ display: "flex", alignItems: "center", gap: 80, paddingRight: 80 }}>
                {[
                  "VOGUE LIVING", "ELLE DECORATION", "ARCHITECTURAL DIGEST",
                  "WALLPAPER*", "DWELL", "DEZEEN", "DESIGN BOOM", "HOUSE & GARDEN"
                ].map((name) => (
                  <span
                    key={`${setIdx}-${name}`}
                    className="c1-sans"
                    style={{ fontSize: 12, letterSpacing: 4, color: "#bbb", textTransform: "uppercase", whiteSpace: "nowrap" }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials — Auto-rotating ===== */}
      <section style={{ background: "#fafaf8", padding: "140px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="c1-section-label">Khách Hàng Nói Gì</div>
            <h2 className="c1-serif" style={{ fontSize: 48, fontWeight: 400 }}>
              Niềm Tin <span className="c1-gold" style={{ fontStyle: "italic" }}>Được Gửi Gắm</span>
            </h2>
          </div>

          <div className="c1-reveal" style={{ position: "relative", minHeight: 280, textAlign: "center" }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`c1-testimonial ${i === activeTestimonial ? "c1-testimonial-active" : "c1-testimonial-hidden"}`}
                style={{ width: "100%" }}
              >
                <div className="c1-serif c1-gold" style={{ fontSize: 80, lineHeight: 1, marginBottom: 8, opacity: 0.25 }}>
                  &ldquo;
                </div>
                <p className="c1-serif" style={{ fontSize: 24, lineHeight: 1.7, color: "#444", fontWeight: 400, marginBottom: 40, fontStyle: "italic", maxWidth: 700, margin: "0 auto 40px" }}>
                  {t.quote}
                </p>
                <div className="c1-bg-gold" style={{ width: 40, height: 1, margin: "0 auto 20px" }} />
                <div className="c1-serif" style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                  {t.name}
                </div>
                <div className="c1-sans" style={{ fontSize: 12, color: "#999", letterSpacing: 1 }}>
                  {t.title}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 48 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`c1-dot ${i === activeTestimonial ? "c1-dot-active" : ""}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Consultation CTA — Full-width with image ===== */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="c1-img"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80')",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div className="c1-reveal" style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 48px", textAlign: "center" }}>
          <div className="c1-section-label" style={{ color: "rgba(255,255,255,0.6)" }}>Bắt Đầu Hành Trình</div>
          <h2
            className="c1-serif"
            style={{ fontSize: 52, fontWeight: 400, color: "#fff", marginBottom: 24, lineHeight: 1.2 }}
          >
            Biến Giấc Mơ Thành
            <br />
            <span className="c1-gold" style={{ fontStyle: "italic" }}>Hiện Thực</span>
          </h2>
          <p
            className="c1-sans"
            style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.65)", marginBottom: 48, fontWeight: 300 }}
          >
            Đặt lịch tư vấn miễn phí với đội ngũ chuyên gia của chúng tôi.
            Hãy để chúng tôi lắng nghe và kiến tạo không gian sống trong mơ của bạn.
          </p>
          <a href="#contact" className="c1-btn" style={{ fontSize: 13 }}>
            <span>Nhận Tư Vấn Miễn Phí</span>
          </a>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" style={{ padding: "140px 48px" }}>
        <div
          className="c1-reveal"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
          }}
        >
          <div>
            <div className="c1-section-label">Liên Hệ</div>
            <h2 className="c1-serif" style={{ fontSize: 44, fontWeight: 400, marginBottom: 24 }}>
              Hãy Để Chúng Tôi
              <br />
              <span className="c1-gold" style={{ fontStyle: "italic" }}>Lắng Nghe Bạn</span>
            </h2>
            <p className="c1-sans" style={{ fontSize: 15, lineHeight: 1.9, color: "#666", marginBottom: 48, fontWeight: 300 }}>
              Liên hệ với chúng tôi để được tư vấn miễn phí. Đội ngũ chuyên gia sẵn sàng
              đồng hành cùng bạn trong mọi dự án.
            </p>
            <div className="c1-sans" style={{ fontSize: 14, color: "#666", lineHeight: 2.8 }}>
              {[
                { label: "Địa chỉ", value: "123 Nguyễn Huệ, Quận 1, TP.HCM" },
                { label: "Điện thoại", value: "(028) 1234 5678" },
                { label: "Email", value: "hello@noithatviet.vn" },
                { label: "Giờ làm việc", value: "T2 - T7: 8:00 - 18:00" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 16 }}>
                  <span style={{ color: "#C9A96E", fontWeight: 500, minWidth: 100 }}>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 28 }}
            >
              {[
                { label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                { label: "Số điện thoại", type: "tel", placeholder: "0901 234 567" },
                { label: "Email", type: "email", placeholder: "email@example.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="c1-sans" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#999", display: "block", marginBottom: 10 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      padding: "14px 0",
                      border: "none",
                      borderBottom: "1px solid #ddd",
                      fontSize: 15,
                      fontFamily: "'Inter', sans-serif",
                      outline: "none",
                      transition: "border-color 0.3s",
                      background: "transparent",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#C9A96E")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ddd")}
                  />
                </div>
              ))}
              <div>
                <label className="c1-sans" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#999", display: "block", marginBottom: 10 }}>
                  Nội dung
                </label>
                <textarea
                  placeholder="Mô tả yêu cầu của bạn..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    border: "none",
                    borderBottom: "1px solid #ddd",
                    fontSize: 15,
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s",
                    background: "transparent",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#C9A96E")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#ddd")}
                />
              </div>
              <button type="submit" className="c1-btn" style={{ marginTop: 16, alignSelf: "flex-start" }}>
                <span>Gửi Yêu Cầu</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer style={{ background: "#0c0c0c", padding: "80px 48px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 64, marginBottom: 64 }}>
            <div>
              <div className="c1-serif" style={{ fontSize: 24, color: "#fff", marginBottom: 16 }}>
                <span className="c1-gold">NỘI THẤT</span> VIỆT
              </div>
              <p className="c1-sans" style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", fontWeight: 300, maxWidth: 300 }}>
                Studio thiết kế nội thất cao cấp hàng đầu Việt Nam. Kiến tạo không gian sống đẳng cấp.
              </p>
            </div>
            <div>
              <div className="c1-sans" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#C9A96E", marginBottom: 20 }}>
                Điều hướng
              </div>
              {["Trang chủ", "Dự án", "Dịch vụ", "Về chúng tôi"].map((link) => (
                <a key={link} href="#" className="c1-footer-link c1-sans" style={{ display: "block", fontSize: 14, marginBottom: 12 }}>
                  {link}
                </a>
              ))}
            </div>
            <div>
              <div className="c1-sans" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#C9A96E", marginBottom: 20 }}>
                Dịch vụ
              </div>
              {["Thiết kế nội thất", "Thi công trọn gói", "Tư vấn thiết kế", "Quản lý dự án"].map((link) => (
                <a key={link} href="#" className="c1-footer-link c1-sans" style={{ display: "block", fontSize: 14, marginBottom: 12 }}>
                  {link}
                </a>
              ))}
            </div>
            <div>
              <div className="c1-sans" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#C9A96E", marginBottom: 20 }}>
                Liên hệ
              </div>
              <div className="c1-sans" style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 2.2 }}>
                <div>123 Nguyễn Huệ, Q.1</div>
                <div>TP. Hồ Chí Minh</div>
                <div>(028) 1234 5678</div>
                <div>hello@noithatviet.vn</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="c1-sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: 1 }}>
              © 2024 Nội Thất Việt. Thiết kế bởi đam mê.
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {["Facebook", "Instagram", "Pinterest"].map((social) => (
                <a key={social} href="#" className="c1-footer-link c1-sans" style={{ fontSize: 12, letterSpacing: 1 }}>
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
