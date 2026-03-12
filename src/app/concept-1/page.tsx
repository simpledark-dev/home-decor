"use client";

import { useState, useEffect } from "react";

export default function Concept1() {
  const [navScrolled, setNavScrolled] = useState(false);

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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".c1-reveal").forEach((el) => observer.observe(el));

    // Nav background on scroll
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "#1a1a1a",
        background: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        .c1-serif { font-family: 'Playfair Display', serif; }
        .c1-sans { font-family: 'Inter', sans-serif; }
        .c1-gold { color: #C9A96E; }
        .c1-bg-gold { background-color: #C9A96E; }
        .c1-border-gold { border-color: #C9A96E; }

        .c1-fade-in {
          animation: c1FadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes c1FadeIn {
          to { opacity: 1; }
        }

        .c1-line-reveal {
          animation: c1LineReveal 1s ease-out forwards;
          width: 0;
        }
        @keyframes c1LineReveal {
          to { width: 60px; }
        }

        .c1-hover-lift {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease;
        }
        .c1-hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .c1-btn {
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
          transition: all 0.4s ease;
        }
        .c1-btn:hover {
          background: #1a1a1a;
        }

        .c1-btn-outline {
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
        }
        .c1-btn-outline:hover {
          background: #C9A96E;
          color: #fff;
        }

        .c1-section-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 16px;
        }

        .c1-img-placeholder {
          background: linear-gradient(135deg, #f5f5f0 0%, #e8e4df 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .c1-img {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #f5f5f0;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-hover-lift:hover .c1-img {
          transform: scale(1.03);
        }

        /* Scroll-reveal animations */
        .c1-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-reveal.c1-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger children */
        .c1-stagger > * {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-stagger.c1-visible > *:nth-child(1) { transition-delay: 0s; opacity: 1; transform: translateY(0); }
        .c1-stagger.c1-visible > *:nth-child(2) { transition-delay: 0.15s; opacity: 1; transform: translateY(0); }
        .c1-stagger.c1-visible > *:nth-child(3) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
        .c1-stagger.c1-visible > *:nth-child(4) { transition-delay: 0.45s; opacity: 1; transform: translateY(0); }

        /* Scale-in variant */
        .c1-reveal-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .c1-reveal-scale.c1-visible {
          opacity: 1;
          transform: scale(1);
        }

        /* Hero text slide */
        .c1-hero-slide {
          opacity: 0;
          transform: translateX(-30px);
          animation: c1HeroSlide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .c1-hero-slide-delay {
          animation-delay: 0.2s;
        }
        .c1-hero-img {
          opacity: 0;
          transform: scale(1.05);
          animation: c1HeroImg 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        @keyframes c1HeroSlide {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes c1HeroImg {
          to { opacity: 1; transform: scale(1); }
        }

        /* Gold line grow */
        .c1-line-grow {
          width: 0;
          transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c1-visible .c1-line-grow,
        .c1-reveal.c1-visible .c1-line-grow {
          width: 60px;
        }

        /* Nav transition */
        .c1-nav {
          transition: box-shadow 0.4s ease, background 0.4s ease;
        }
        .c1-nav-scrolled {
          box-shadow: 0 4px 30px rgba(0,0,0,0.06);
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`c1-nav ${navScrolled ? "c1-nav-scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="c1-serif" style={{ fontSize: 24, fontWeight: 600, letterSpacing: 1 }}>
            <span className="c1-gold">NỘI THẤT</span> VIỆT
          </div>
          <div
            className="c1-sans"
            style={{
              display: "flex",
              gap: 40,
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {["Trang chủ", "Dự án", "Dịch vụ", "Về chúng tôi", "Liên hệ"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#1a1a1a",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              >
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="c1-btn" style={{ padding: "12px 32px", fontSize: 11 }}>
            Tư Vấn Miễn Phí
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="c1-hero-slide">
            <div className="c1-section-label">Studio Thiết Kế Nội Thất Cao Cấp</div>
            <h1
              className="c1-serif"
              style={{
                fontSize: 64,
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: 32,
              }}
            >
              Kiến Tạo
              <br />
              Không Gian
              <br />
              <span className="c1-gold" style={{ fontStyle: "italic" }}>Đẳng Cấp</span>
            </h1>
            <p
              className="c1-sans"
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#666",
                maxWidth: 440,
                marginBottom: 48,
                fontWeight: 300,
              }}
            >
              Chúng tôi mang đến những thiết kế nội thất tinh tế, nơi mỗi chi tiết
              đều được chau chuốt để tạo nên không gian sống hoàn hảo cho gia đình bạn.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="#contact" className="c1-btn">Đặt Lịch Tư Vấn</a>
              <a href="#projects" className="c1-btn-outline">Xem Dự Án</a>
            </div>
          </div>
          <div
            className="c1-img c1-hero-img"
            style={{
              height: 600,
              backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=960&q=80')",
            }}
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section style={{ background: "#fafaf8", padding: "80px 40px" }}>
        <div
          className="c1-reveal c1-stagger"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 60,
            textAlign: "center",
          }}
        >
          {[
            { number: "15+", label: "Năm Kinh Nghiệm" },
            { number: "500+", label: "Dự Án Hoàn Thành" },
            { number: "50+", label: "Giải Thưởng Thiết Kế" },
            { number: "98%", label: "Khách Hàng Hài Lòng" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="c1-serif c1-gold"
                style={{ fontSize: 48, fontWeight: 600, marginBottom: 8 }}
              >
                {stat.number}
              </div>
              <div
                className="c1-sans"
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Portfolio</div>
            <h2
              className="c1-serif"
              style={{ fontSize: 44, fontWeight: 400, marginBottom: 16 }}
            >
              Dự Án <span className="c1-gold" style={{ fontStyle: "italic" }}>Nổi Bật</span>
            </h2>
            <div
              className="c1-bg-gold c1-line-grow"
              style={{ height: 1, margin: "0 auto" }}
            />
          </div>
          <div
            className="c1-reveal c1-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 32,
            }}
          >
            {[
              {
                title: "Penthouse Thảo Điền",
                category: "Căn Hộ Cao Cấp",
                size: "280m²",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
              },
              {
                title: "Biệt Thự Phú Mỹ Hưng",
                category: "Biệt Thự",
                size: "450m²",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
              },
              {
                title: "Villa Đà Lạt",
                category: "Nghỉ Dưỡng",
                size: "350m²",
                img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
              },
            ].map((project) => (
              <div key={project.title} className="c1-hover-lift" style={{ cursor: "pointer" }}>
                <div style={{ overflow: "hidden", marginBottom: 24 }}>
                  <div
                    className="c1-img"
                    style={{ height: 400, backgroundImage: `url('${project.img}')` }}
                  />
                </div>
                <div
                  className="c1-sans"
                  style={{
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#C9A96E",
                    marginBottom: 8,
                  }}
                >
                  {project.category} — {project.size}
                </div>
                <h3
                  className="c1-serif"
                  style={{ fontSize: 24, fontWeight: 500 }}
                >
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="c1-reveal" style={{ textAlign: "center", marginTop: 64 }}>
            <a href="#" className="c1-btn-outline">Xem Tất Cả Dự Án</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Dịch Vụ</div>
            <h2
              className="c1-serif"
              style={{ fontSize: 44, fontWeight: 400, color: "#fff" }}
            >
              Giải Pháp Thiết Kế <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Toàn Diện</span>
            </h2>
          </div>
          <div
            className="c1-reveal c1-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                title: "Thiết Kế Nội Thất",
                desc: "Từ ý tưởng đến bản vẽ 3D chi tiết, chúng tôi kiến tạo không gian sống phản ánh cá tính và phong cách riêng của bạn.",
                icon: "✦",
              },
              {
                title: "Thi Công Trọn Gói",
                desc: "Đội ngũ thợ lành nghề với quy trình quản lý chất lượng nghiêm ngặt, đảm bảo mỗi chi tiết đều hoàn hảo.",
                icon: "✦",
              },
              {
                title: "Tư Vấn & Quản Lý",
                desc: "Tư vấn phong thủy, lựa chọn vật liệu cao cấp và quản lý dự án chuyên nghiệp từ A đến Z.",
                icon: "✦",
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  padding: 48,
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "border-color 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#C9A96E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
                }
              >
                <div className="c1-gold" style={{ fontSize: 24, marginBottom: 24 }}>
                  {service.icon}
                </div>
                <h3
                  className="c1-serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 500,
                    marginBottom: 16,
                    color: "#fff",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="c1-sans"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 300,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Quy Trình</div>
            <h2
              className="c1-serif"
              style={{ fontSize: 44, fontWeight: 400 }}
            >
              Hành Trình <span className="c1-gold" style={{ fontStyle: "italic" }}>Sáng Tạo</span>
            </h2>
          </div>
          <div
            className="c1-reveal c1-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 48,
            }}
          >
            {[
              { step: "01", title: "Tư Vấn", desc: "Lắng nghe nhu cầu, tìm hiểu phong cách sống và ngân sách của bạn." },
              { step: "02", title: "Thiết Kế", desc: "Phát triển concept, bản vẽ 2D/3D và lựa chọn vật liệu phù hợp." },
              { step: "03", title: "Thi Công", desc: "Triển khai thi công với đội ngũ chuyên nghiệp, giám sát chặt chẽ." },
              { step: "04", title: "Bàn Giao", desc: "Hoàn thiện, bàn giao và hỗ trợ bảo hành dài hạn cho công trình." },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div
                  className="c1-serif c1-gold"
                  style={{
                    fontSize: 56,
                    fontWeight: 300,
                    marginBottom: 24,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <div
                  className="c1-bg-gold"
                  style={{ width: 30, height: 1, margin: "0 auto 24px" }}
                />
                <h3
                  className="c1-serif"
                  style={{ fontSize: 22, fontWeight: 500, marginBottom: 12 }}
                >
                  {item.title}
                </h3>
                <p
                  className="c1-sans"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#888",
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#fafaf8", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="c1-reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c1-section-label">Khách Hàng Nói Gì</div>
            <h2
              className="c1-serif"
              style={{ fontSize: 44, fontWeight: 400 }}
            >
              Niềm Tin <span className="c1-gold" style={{ fontStyle: "italic" }}>Được Gửi Gắm</span>
            </h2>
          </div>
          <div
            className="c1-reveal c1-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                quote:
                  "Đội ngũ Nội Thất Việt đã biến ngôi nhà của chúng tôi thành một tác phẩm nghệ thuật. Mỗi góc nhỏ đều mang lại cảm giác sang trọng và ấm cúng.",
                name: "Nguyễn Minh Anh",
                title: "Chủ nhân Penthouse Quận 2",
              },
              {
                quote:
                  "Sự chuyên nghiệp và tận tâm của đội ngũ khiến tôi hoàn toàn yên tâm. Dự án hoàn thành đúng tiến độ với chất lượng vượt xa mong đợi.",
                name: "Trần Đức Huy",
                title: "Giám đốc Công ty BĐS",
              },
              {
                quote:
                  "Phong cách thiết kế tinh tế, hiểu rõ xu hướng quốc tế nhưng vẫn giữ được nét Việt. Tôi đã giới thiệu cho rất nhiều bạn bè.",
                name: "Lê Thanh Hà",
                title: "Chủ nhân Biệt thự Quận 7",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                style={{
                  background: "#fff",
                  padding: 48,
                  position: "relative",
                }}
              >
                <div
                  className="c1-serif c1-gold"
                  style={{
                    fontSize: 64,
                    lineHeight: 1,
                    marginBottom: 16,
                    opacity: 0.3,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  className="c1-sans"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#555",
                    fontWeight: 300,
                    marginBottom: 32,
                    fontStyle: "italic",
                  }}
                >
                  {testimonial.quote}
                </p>
                <div
                  className="c1-bg-gold"
                  style={{ width: 30, height: 1, marginBottom: 16 }}
                />
                <div
                  className="c1-serif"
                  style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}
                >
                  {testimonial.name}
                </div>
                <div
                  className="c1-sans"
                  style={{ fontSize: 12, color: "#999", letterSpacing: 1 }}
                >
                  {testimonial.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <div className="c1-reveal" style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="c1-section-label">Bắt Đầu Hành Trình</div>
          <h2
            className="c1-serif"
            style={{
              fontSize: 48,
              fontWeight: 400,
              color: "#fff",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Biến Giấc Mơ Thành
            <br />
            <span className="c1-gold" style={{ fontStyle: "italic" }}>Hiện Thực</span>
          </h2>
          <p
            className="c1-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Đặt lịch tư vấn miễn phí với đội ngũ chuyên gia của chúng tôi.
            Hãy để chúng tôi lắng nghe và kiến tạo không gian sống trong mơ của bạn.
          </p>
          <a href="#contact" className="c1-btn" style={{ fontSize: 13 }}>
            Nhận Tư Vấn Miễn Phí
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "120px 40px" }}>
        <div
          className="c1-reveal"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
          }}
        >
          <div>
            <div className="c1-section-label">Liên Hệ</div>
            <h2
              className="c1-serif"
              style={{ fontSize: 40, fontWeight: 400, marginBottom: 24 }}
            >
              Hãy Để Chúng Tôi
              <br />
              <span className="c1-gold" style={{ fontStyle: "italic" }}>Lắng Nghe Bạn</span>
            </h2>
            <p
              className="c1-sans"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#666",
                marginBottom: 40,
                fontWeight: 300,
              }}
            >
              Liên hệ với chúng tôi để được tư vấn miễn phí. Đội ngũ chuyên gia sẵn sàng
              đồng hành cùng bạn trong mọi dự án.
            </p>
            <div className="c1-sans" style={{ fontSize: 14, color: "#666", lineHeight: 2.5 }}>
              <div><strong style={{ color: "#1a1a1a" }}>Địa chỉ:</strong> 123 Nguyễn Huệ, Quận 1, TP.HCM</div>
              <div><strong style={{ color: "#1a1a1a" }}>Điện thoại:</strong> (028) 1234 5678</div>
              <div><strong style={{ color: "#1a1a1a" }}>Email:</strong> hello@noithatviet.vn</div>
              <div><strong style={{ color: "#1a1a1a" }}>Giờ làm việc:</strong> T2 - T7: 8:00 - 18:00</div>
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {[
                { label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                { label: "Số điện thoại", type: "tel", placeholder: "0901 234 567" },
                { label: "Email", type: "email", placeholder: "email@example.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="c1-sans"
                    style={{
                      fontSize: 11,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "#999",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
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
                <label
                  className="c1-sans"
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#999",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
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
                Gửi Yêu Cầu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1a1a1a",
          color: "rgba(255,255,255,0.4)",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        <div className="c1-serif" style={{ fontSize: 20, color: "#fff", marginBottom: 8 }}>
          <span className="c1-gold">NỘI THẤT</span> VIỆT
        </div>
        <div className="c1-sans" style={{ fontSize: 12, letterSpacing: 2 }}>
          © 2024 Nội Thất Việt. Thiết kế bởi đam mê.
        </div>
      </footer>
    </div>
  );
}
