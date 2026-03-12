"use client";

import { useEffect, useRef } from "react";

export default function Concept5() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("c5-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "#333",
        background: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');

        .c5-sans { font-family: 'Inter', sans-serif; }
        .c5-display { font-family: 'Montserrat', sans-serif; }

        /* Colors */
        .c5-red { color: #950000; }
        .c5-bg-red { background-color: #950000; }
        .c5-charcoal { color: #58595b; }
        .c5-bg-offwhite { background-color: #f1f0e8; }
        .c5-bg-light { background-color: #f7f7f7; }

        /* Reveal animations */
        .c5-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .c5-reveal.c5-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .c5-reveal-delay-1 { transition-delay: 0.15s; }
        .c5-reveal-delay-2 { transition-delay: 0.3s; }
        .c5-reveal-delay-3 { transition-delay: 0.45s; }

        /* Image placeholders */
        .c5-img-placeholder {
          background: linear-gradient(135deg, #e8e6df 0%, #d8d5cc 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b5b0a3;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }
        .c5-img-placeholder::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .c5-img-hover:hover .c5-img-placeholder::after {
          opacity: 1;
        }
        .c5-img-hover:hover .c5-img-placeholder {
          transform: scale(1.03);
        }
        .c5-img-hover .c5-img-placeholder {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Buttons — pill style */
        .c5-btn {
          background: #950000;
          color: #fff;
          padding: 14px 40px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .c5-btn:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .c5-btn-outline {
          background: transparent;
          color: #333;
          padding: 14px 40px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: 1.5px solid #333;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c5-btn-outline:hover {
          background: #333;
          color: #fff;
        }

        .c5-btn-white {
          background: #fff;
          color: #333;
          padding: 14px 40px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c5-btn-white:hover {
          background: #950000;
          color: #fff;
        }

        /* Section spacing */
        .c5-section {
          padding: 140px 0;
        }
        .c5-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* Thin separator */
        .c5-sep {
          width: 48px;
          height: 1.5px;
          background: #950000;
        }

        /* Nav link hover */
        .c5-nav-link {
          position: relative;
          color: #333;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.3s;
        }
        .c5-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #950000;
          transition: width 0.3s ease;
        }
        .c5-nav-link:hover {
          color: #950000;
        }
        .c5-nav-link:hover::after {
          width: 100%;
        }

        /* Project overlay text */
        .c5-project-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px;
          color: #fff;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.5s ease;
          z-index: 2;
        }
        .c5-img-hover:hover .c5-project-info {
          opacity: 1;
          transform: translateY(0);
        }

        /* Subtle line */
        .c5-hairline {
          height: 1px;
          background: #ebebeb;
        }
      `}</style>

      {/* Navigation — Fixed, clean, minimal */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="c5-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 72,
          }}
        >
          <div
            className="c5-display"
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            NỘI THẤT <span className="c5-red">VIỆT</span>
          </div>
          <div style={{ display: "flex", gap: 36 }}>
            {["Trang Chủ", "Dự Án", "Dịch Vụ", "Về Chúng Tôi", "Tin Tức", "Liên Hệ"].map(
              (item) => (
                <a key={item} href="#" className="c5-nav-link">
                  {item}
                </a>
              )
            )}
          </div>
          <a href="#contact" className="c5-btn" style={{ padding: "10px 28px", fontSize: 11 }}>
            Tư Vấn
          </a>
        </div>
      </nav>

      {/* Hero — Full viewport, bottom-aligned text, dark overlay */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="c5-img-placeholder"
          style={{
            position: "absolute",
            inset: 0,
            fontSize: 14,
          }}
        >
          Hero — Không gian nội thất cao cấp, góc rộng
        </div>
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
            zIndex: 1,
          }}
        />

        {/* Bottom-positioned content (AMY style) */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: 0,
            right: 0,
            zIndex: 2,
            padding: "0 5vw",
          }}
        >
          <div style={{ maxWidth: 800 }}>
            <div
              className="c5-sans"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 20,
              }}
            >
              Interior Design Studio
            </div>
            <h1
              className="c5-display"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#fff",
                marginBottom: 24,
              }}
            >
              Tinh Hoa Trong
              <br />
              Từng Đường Nét
            </h1>
            <p
              className="c5-sans"
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
                maxWidth: 500,
                fontWeight: 300,
                marginBottom: 36,
              }}
            >
              Kiến tạo không gian sống đẳng cấp, nơi sự tinh tế và công năng
              hòa quyện hoàn hảo trong mỗi thiết kế.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="#contact" className="c5-btn">Khám Phá Ngay</a>
              <a
                href="#projects"
                className="c5-btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#333";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                }}
              >
                Xem Dự Án
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicators (AMY style) */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5vw",
            zIndex: 2,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {[1, 2, 3, 4].map((dot, i) => (
            <div
              key={dot}
              style={{
                width: i === 0 ? 32 : 8,
                height: 3,
                borderRadius: 2,
                background: i === 0 ? "#fff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators — Clean horizontal bar */}
      <section className="c5-bg-offwhite" style={{ padding: "64px 0" }}>
        <div className="c5-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {[
              { number: "15+", label: "Năm Kinh Nghiệm" },
              { number: "500+", label: "Dự Án Hoàn Thành" },
              { number: "50+", label: "Giải Thưởng Thiết Kế" },
              { number: "98%", label: "Khách Hàng Hài Lòng" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                ref={addRevealRef}
                className={`c5-reveal c5-reveal-delay-${Math.min(i, 3)}`}
                style={{
                  textAlign: "center",
                  padding: "20px 0",
                  borderRight: i < 3 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <div
                  className="c5-display"
                  style={{ fontSize: 40, fontWeight: 700, marginBottom: 6, color: "#333" }}
                >
                  {stat.number}
                </div>
                <div
                  className="c5-sans c5-charcoal"
                  style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 400 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction — Clean two-column with generous whitespace */}
      <section className="c5-section">
        <div className="c5-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div ref={addRevealRef} className="c5-reveal">
              <div className="c5-sep" style={{ marginBottom: 24 }} />
              <div
                className="c5-display"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#858585",
                  marginBottom: 20,
                }}
              >
                Về Chúng Tôi
              </div>
              <h2
                className="c5-display"
                style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.25, marginBottom: 24 }}
              >
                Thiết Kế Tinh Tế
                <br />
                Cho Cuộc Sống
                <br />
                <span className="c5-red">Đẳng Cấp</span>
              </h2>
              <p
                className="c5-sans"
                style={{ fontSize: 15, lineHeight: 1.9, color: "#7c7c7c", fontWeight: 300, marginBottom: 32 }}
              >
                Với hơn 15 năm kinh nghiệm, Nội Thất Việt tự hào là studio thiết kế
                hàng đầu, mang đến những không gian sống vượt thời gian. Chúng tôi kết hợp
                tinh hoa kiến trúc quốc tế với bản sắc Việt Nam trong mỗi dự án.
              </p>
              <a href="#projects" className="c5-btn-outline">Tìm Hiểu Thêm</a>
            </div>
            <div
              ref={addRevealRef}
              className="c5-reveal c5-reveal-delay-1"
            >
              <div className="c5-img-placeholder" style={{ height: 520 }}>
                Studio showroom — không gian trưng bày
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects — Grid with hover overlays */}
      <section id="projects" className="c5-bg-light c5-section">
        <div className="c5-container">
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
            }}
          >
            <div>
              <div className="c5-sep" style={{ marginBottom: 20 }} />
              <div
                className="c5-display"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#858585",
                  marginBottom: 16,
                }}
              >
                Dự Án Nổi Bật
              </div>
              <h2 className="c5-display" style={{ fontSize: 40, fontWeight: 700 }}>
                Công Trình <span className="c5-red">Tiêu Biểu</span>
              </h2>
            </div>
            <a href="#" className="c5-btn-outline" style={{ padding: "12px 32px" }}>
              Xem Tất Cả
            </a>
          </div>

          {/* AMY-style grid: large left + stacked right */}
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 20,
            }}
          >
            {/* Large featured */}
            <div className="c5-img-hover" style={{ cursor: "pointer", position: "relative" }}>
              <div style={{ overflow: "hidden" }}>
                <div className="c5-img-placeholder" style={{ height: 560, aspectRatio: "14/9" }}>
                  Penthouse Thảo Điền — 280m²
                </div>
              </div>
              <div className="c5-project-info">
                <div className="c5-sans" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>
                  Căn Hộ Cao Cấp — 280m²
                </div>
                <div className="c5-display" style={{ fontSize: 24, fontWeight: 700 }}>
                  Penthouse Thảo Điền
                </div>
              </div>
            </div>

            {/* Stacked right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Biệt Thự Phú Mỹ Hưng", cat: "Biệt Thự — 450m²" },
                { title: "Villa Nghỉ Dưỡng Đà Lạt", cat: "Nghỉ Dưỡng — 350m²" },
              ].map((project) => (
                <div
                  key={project.title}
                  className="c5-img-hover"
                  style={{ cursor: "pointer", position: "relative", flex: 1 }}
                >
                  <div style={{ overflow: "hidden", height: "100%" }}>
                    <div className="c5-img-placeholder" style={{ height: "100%", minHeight: 265 }}>
                      {project.title}
                    </div>
                  </div>
                  <div className="c5-project-info">
                    <div className="c5-sans" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.7, marginBottom: 6 }}>
                      {project.cat}
                    </div>
                    <div className="c5-display" style={{ fontSize: 20, fontWeight: 700 }}>
                      {project.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row — three equal */}
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginTop: 20,
            }}
          >
            {[
              { title: "Văn Phòng Sáng Tạo", cat: "Thương Mại — 200m²" },
              { title: "Căn Hộ Midtown", cat: "Căn Hộ — 120m²" },
              { title: "Nhà Phố Quận 3", cat: "Nhà Phố — 180m²" },
            ].map((project) => (
              <div
                key={project.title}
                className="c5-img-hover"
                style={{ cursor: "pointer", position: "relative" }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div className="c5-img-placeholder" style={{ height: 280, aspectRatio: "16/9" }}>
                    {project.title}
                  </div>
                </div>
                <div className="c5-project-info">
                  <div className="c5-sans" style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.7, marginBottom: 6 }}>
                    {project.cat}
                  </div>
                  <div className="c5-display" style={{ fontSize: 18, fontWeight: 700 }}>
                    {project.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Minimal cards with red accents */}
      <section className="c5-section">
        <div className="c5-container">
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{ textAlign: "center", marginBottom: 80 }}
          >
            <div className="c5-sep" style={{ margin: "0 auto 20px" }} />
            <div
              className="c5-display"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#858585",
                marginBottom: 16,
              }}
            >
              Dịch Vụ
            </div>
            <h2 className="c5-display" style={{ fontSize: 40, fontWeight: 700 }}>
              Giải Pháp <span className="c5-red">Thiết Kế Toàn Diện</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                num: "01",
                title: "Thiết Kế Nội Thất",
                desc: "Phát triển concept sáng tạo, phối cảnh 3D chân thực và hồ sơ thiết kế chi tiết. Mỗi dự án là một câu chuyện riêng được kể qua không gian.",
              },
              {
                num: "02",
                title: "Thi Công Trọn Gói",
                desc: "Đội ngũ kỹ sư và thợ lành nghề triển khai thi công theo tiêu chuẩn quốc tế, cam kết tiến độ và chất lượng vượt trội.",
              },
              {
                num: "03",
                title: "Tư Vấn & Cung Cấp",
                desc: "Tư vấn lựa chọn vật liệu nhập khẩu cao cấp, nội thất thiết kế riêng và giải pháp chiếu sáng chuyên nghiệp.",
              },
            ].map((service, i) => (
              <div
                key={service.num}
                ref={addRevealRef}
                className={`c5-reveal c5-reveal-delay-${Math.min(i, 3)}`}
                style={{
                  padding: "48px 36px",
                  border: "1px solid #ebebeb",
                  borderRadius: 4,
                  transition: "border-color 0.4s, box-shadow 0.4s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#950000";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ebebeb";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="c5-display c5-red"
                  style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}
                >
                  {service.num}
                </div>
                <h3
                  className="c5-display"
                  style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, lineHeight: 1.4 }}
                >
                  {service.title}
                </h3>
                <p
                  className="c5-sans"
                  style={{ fontSize: 14, lineHeight: 1.8, color: "#7c7c7c", fontWeight: 300 }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process — Horizontal with connecting line */}
      <section className="c5-bg-offwhite c5-section">
        <div className="c5-container">
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{ textAlign: "center", marginBottom: 80 }}
          >
            <div className="c5-sep" style={{ margin: "0 auto 20px" }} />
            <div
              className="c5-display"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#858585",
                marginBottom: 16,
              }}
            >
              Quy Trình Làm Việc
            </div>
            <h2 className="c5-display" style={{ fontSize: 40, fontWeight: 700 }}>
              Từ Ý Tưởng Đến <span className="c5-red">Hiện Thực</span>
            </h2>
          </div>

          <div
            ref={addRevealRef}
            className="c5-reveal"
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
                top: 28,
                left: "12.5%",
                right: "12.5%",
                height: 1,
                background: "#ddd",
                zIndex: 0,
              }}
            />

            {[
              { step: "01", title: "Tư Vấn", desc: "Lắng nghe yêu cầu, khảo sát thực tế và đánh giá nhu cầu chi tiết của khách hàng." },
              { step: "02", title: "Thiết Kế", desc: "Phát triển concept, trình bày phối cảnh 3D và hoàn thiện hồ sơ thiết kế kỹ thuật." },
              { step: "03", title: "Thi Công", desc: "Triển khai thi công với đội ngũ chuyên nghiệp, giám sát chất lượng từng giai đoạn." },
              { step: "04", title: "Bàn Giao", desc: "Nghiệm thu, bàn giao công trình hoàn hảo và kích hoạt chế độ bảo hành." },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#fff",
                    border: "2px solid #950000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 28px",
                  }}
                >
                  <span className="c5-display c5-red" style={{ fontSize: 16, fontWeight: 700 }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="c5-display" style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p className="c5-sans" style={{ fontSize: 13, lineHeight: 1.7, color: "#7c7c7c", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Clean quote cards */}
      <section className="c5-section">
        <div className="c5-container">
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{ textAlign: "center", marginBottom: 80 }}
          >
            <div className="c5-sep" style={{ margin: "0 auto 20px" }} />
            <div
              className="c5-display"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#858585",
                marginBottom: 16,
              }}
            >
              Khách Hàng
            </div>
            <h2 className="c5-display" style={{ fontSize: 40, fontWeight: 700 }}>
              Phản Hồi <span className="c5-red">Từ Khách Hàng</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {[
              {
                quote: "Sự chuyên nghiệp ở mọi khâu — từ tư vấn, thiết kế đến thi công. Kết quả cuối cùng khiến cả gia đình tôi ngỡ ngàng vì đẹp hơn cả bản 3D.",
                name: "Nguyễn Minh Anh",
                role: "Chủ nhân Penthouse, Quận 2",
              },
              {
                quote: "Điều ấn tượng nhất là khả năng lắng nghe và thấu hiểu. Họ không chỉ thiết kế không gian đẹp mà còn thiết kế đúng cách chúng tôi muốn sống.",
                name: "Trần Đức Huy",
                role: "CEO, TechViet Corporation",
              },
              {
                quote: "Chất lượng thi công xuất sắc, đúng tiến độ cam kết. Sau 2 năm sử dụng, mọi thứ vẫn hoàn hảo như ngày bàn giao. Rất đáng tin cậy.",
                name: "Phạm Thu Hương",
                role: "Chủ đầu tư Biệt thự, Quận 7",
              },
            ].map((t, i) => (
              <div
                key={t.name}
                ref={addRevealRef}
                className={`c5-reveal c5-reveal-delay-${Math.min(i, 3)}`}
                style={{
                  padding: 44,
                  background: "#f7f7f7",
                  borderRadius: 4,
                }}
              >
                <div className="c5-red" style={{ fontSize: 48, lineHeight: 1, marginBottom: 12, fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </div>
                <p
                  className="c5-sans"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: "#58595b",
                    fontWeight: 300,
                    fontStyle: "italic",
                    marginBottom: 32,
                  }}
                >
                  {t.quote}
                </p>
                <div className="c5-hairline" style={{ marginBottom: 20 }} />
                <div className="c5-display" style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
                  {t.name}
                </div>
                <div className="c5-sans" style={{ fontSize: 12, color: "#adadad", fontWeight: 400 }}>
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA — Full-width dark with red accent */}
      <section
        style={{
          background: "#333",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative element */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(149,0,0,0.08)",
          }}
        />
        <div className="c5-container" style={{ textAlign: "center", position: "relative" }}>
          <div
            ref={addRevealRef}
            className="c5-reveal"
            style={{ maxWidth: 680, margin: "0 auto" }}
          >
            <div className="c5-sep" style={{ margin: "0 auto 24px", background: "#950000" }} />
            <h2
              className="c5-display"
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              Sẵn Sàng Kiến Tạo
              <br />
              Không Gian Trong Mơ?
            </h2>
            <p
              className="c5-sans"
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                marginBottom: 44,
                fontWeight: 300,
              }}
            >
              Đặt lịch tư vấn miễn phí với đội ngũ chuyên gia của chúng tôi.
              Cùng nhau hiện thực hóa ý tưởng về ngôi nhà hoàn hảo.
            </p>
            <a href="#contact" className="c5-btn-white">
              Đặt Lịch Tư Vấn Miễn Phí
            </a>
          </div>
        </div>
      </section>

      {/* Contact — Clean two-column */}
      <section id="contact" className="c5-section">
        <div className="c5-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 80,
            }}
          >
            <div ref={addRevealRef} className="c5-reveal">
              <div className="c5-sep" style={{ marginBottom: 24 }} />
              <div
                className="c5-display"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#858585",
                  marginBottom: 16,
                }}
              >
                Liên Hệ
              </div>
              <h2 className="c5-display" style={{ fontSize: 40, fontWeight: 700, marginBottom: 32 }}>
                Kết Nối
                <br />
                <span className="c5-red">Với Chúng Tôi</span>
              </h2>
              <p
                className="c5-sans"
                style={{ fontSize: 15, lineHeight: 1.8, color: "#7c7c7c", fontWeight: 300, marginBottom: 40 }}
              >
                Hãy để lại thông tin, đội ngũ tư vấn sẽ liên hệ trong vòng 24 giờ
                để lắng nghe và tư vấn phương án phù hợp nhất cho dự án của bạn.
              </p>
              <div className="c5-sans" style={{ fontSize: 14, lineHeight: 2.8, color: "#58595b" }}>
                <div><strong style={{ color: "#333", fontWeight: 600 }}>Showroom:</strong> 123 Nguyễn Huệ, Quận 1, TP.HCM</div>
                <div><strong style={{ color: "#333", fontWeight: 600 }}>Hotline:</strong> (028) 1234 5678</div>
                <div><strong style={{ color: "#333", fontWeight: 600 }}>Email:</strong> hello@noithatviet.vn</div>
                <div><strong style={{ color: "#333", fontWeight: 600 }}>Giờ mở cửa:</strong> T2 – T7 | 9:00 – 18:00</div>
              </div>
            </div>
            <div ref={addRevealRef} className="c5-reveal c5-reveal-delay-1">
              <div
                style={{
                  background: "#f7f7f7",
                  padding: 48,
                  borderRadius: 8,
                }}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    {[
                      { label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                      { label: "Số điện thoại", type: "tel", placeholder: "0901 234 567" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label
                          className="c5-display"
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: 1,
                            textTransform: "uppercase",
                            color: "#858585",
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
                            padding: "14px 16px",
                            border: "1.5px solid #ebebeb",
                            borderRadius: 4,
                            fontSize: 14,
                            fontFamily: "'Inter', sans-serif",
                            outline: "none",
                            transition: "border-color 0.3s",
                            background: "#fff",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#950000")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "#ebebeb")}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      className="c5-display"
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        color: "#858585",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1.5px solid #ebebeb",
                        borderRadius: 4,
                        fontSize: 14,
                        fontFamily: "'Inter', sans-serif",
                        outline: "none",
                        transition: "border-color 0.3s",
                        background: "#fff",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#950000")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#ebebeb")}
                    />
                  </div>
                  <div>
                    <label
                      className="c5-display"
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        color: "#858585",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Nội dung yêu cầu
                    </label>
                    <textarea
                      placeholder="Mô tả dự án, diện tích, phong cách mong muốn..."
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1.5px solid #ebebeb",
                        borderRadius: 4,
                        fontSize: 14,
                        fontFamily: "'Inter', sans-serif",
                        outline: "none",
                        resize: "none",
                        transition: "border-color 0.3s",
                        background: "#fff",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#950000")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#ebebeb")}
                    />
                  </div>
                  <button type="submit" className="c5-btn" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                    Gửi Yêu Cầu Tư Vấn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Multi-column, newsletter style */}
      <footer style={{ background: "#333", padding: "80px 0 48px" }}>
        <div className="c5-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr 1.3fr",
              gap: 48,
              marginBottom: 64,
            }}
          >
            {/* Brand */}
            <div>
              <div
                className="c5-display"
                style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: 2, marginBottom: 16 }}
              >
                NỘI THẤT <span className="c5-red">VIỆT</span>
              </div>
              <p className="c5-sans" style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                Studio thiết kế nội thất cao cấp hàng đầu Việt Nam. Kiến tạo không gian sống
                đẳng cấp từ năm 2009.
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="c5-display" style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
                Liên Kết
              </div>
              {["Trang chủ", "Dự án", "Dịch vụ", "Về chúng tôi", "Tin tức", "Tuyển dụng"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="c5-sans"
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    marginBottom: 12,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="c5-display" style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
                Liên Hệ
              </div>
              <div className="c5-sans" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 2.2 }}>
                <div>123 Nguyễn Huệ, Q.1, TP.HCM</div>
                <div>(028) 1234 5678</div>
                <div>hello@noithatviet.vn</div>
                <div>T2 – T7 | 9:00 – 18:00</div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="c5-display" style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
                Nhận Tin Mới
              </div>
              <p className="c5-sans" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>
                Đăng ký để nhận xu hướng thiết kế và ưu đãi đặc biệt.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 50,
                    fontSize: 13,
                    fontFamily: "'Inter', sans-serif",
                    background: "transparent",
                    color: "#fff",
                    outline: "none",
                  }}
                />
                <button
                  className="c5-btn"
                  style={{ padding: "12px 24px", fontSize: 11, whiteSpace: "nowrap" }}
                >
                  Đăng Ký
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="c5-sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              © 2024 Nội Thất Việt. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {["Facebook", "Instagram", "Pinterest", "Youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="c5-sans"
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
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
