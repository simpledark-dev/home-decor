"use client";

export default function Concept2() {
  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#1A1A2E",
        background: "#F5F0E8",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .c2-serif { font-family: 'DM Serif Display', serif; }
        .c2-sans { font-family: 'Space Grotesk', sans-serif; }
        .c2-accent { color: #8B2635; }
        .c2-bg-accent { background-color: #8B2635; }
        .c2-navy { color: #1A1A2E; }
        .c2-bg-navy { background-color: #1A1A2E; }
        .c2-cream { color: #F5F0E8; }
        .c2-bg-cream { background-color: #F5F0E8; }

        .c2-img-placeholder {
          background: linear-gradient(135deg, #d4cfc7 0%, #c2bbb0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a09888;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .c2-editorial-line {
          width: 100%;
          height: 1px;
          background: #1A1A2E;
          opacity: 0.15;
        }

        .c2-tag {
          display: inline-block;
          border: 1px solid #1A1A2E;
          padding: 6px 16px;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
        }

        .c2-btn-primary {
          background: #8B2635;
          color: #F5F0E8;
          padding: 18px 52px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c2-btn-primary:hover {
          background: #1A1A2E;
        }

        .c2-btn-outline {
          background: transparent;
          color: #1A1A2E;
          padding: 18px 52px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 2px solid #1A1A2E;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c2-btn-outline:hover {
          background: #1A1A2E;
          color: #F5F0E8;
        }

        .c2-marquee {
          overflow: hidden;
          white-space: nowrap;
        }
        .c2-marquee-inner {
          display: inline-block;
          animation: c2Scroll 20s linear infinite;
        }
        @keyframes c2Scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .c2-hover-img:hover .c2-img-placeholder {
          transform: scale(1.03);
        }
        .c2-hover-img .c2-img-placeholder {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(245,240,232,0.95)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "24px 0",
            }}
          >
            <div className="c2-serif" style={{ fontSize: 28 }}>
              NỘI THẤT <span className="c2-accent">VIỆT</span>
            </div>
            <div
              className="c2-sans"
              style={{
                display: "flex",
                gap: 36,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {["Câu Chuyện", "Bộ Sưu Tập", "Dịch Vụ", "Tạp Chí", "Liên Hệ"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "#1A1A2E",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#8B2635")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A2E")}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <a href="#contact" className="c2-btn-primary" style={{ padding: "12px 28px", fontSize: 11 }}>
              Đặt Lịch Hẹn
            </a>
          </div>
          <div className="c2-editorial-line" />
        </div>
      </nav>

      {/* Hero — Editorial Asymmetric */}
      <section style={{ paddingTop: 120, minHeight: "100vh" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 48px 0" }}>
          {/* Large headline spanning full width */}
          <h1
            className="c2-serif"
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              marginBottom: 48,
              maxWidth: 900,
            }}
          >
            Nghệ Thuật
            <br />
            <span className="c2-accent" style={{ fontStyle: "italic" }}>Kiến Tạo</span> Không Gian
          </h1>

          {/* Asymmetric grid: text left, image right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "35% 1fr",
              gap: 48,
              alignItems: "end",
            }}
          >
            <div style={{ paddingBottom: 40 }}>
              <div className="c2-editorial-line" style={{ marginBottom: 32 }} />
              <p
                className="c2-sans"
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "#666",
                  fontWeight: 300,
                  marginBottom: 40,
                }}
              >
                Mỗi không gian là một câu chuyện. Chúng tôi là những người kể chuyện
                — qua đường nét, chất liệu và ánh sáng, biến nơi ở thành nơi thuộc về.
              </p>
              <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <a href="#contact" className="c2-btn-primary">Khám Phá Ngay</a>
                <span className="c2-sans" style={{ fontSize: 13, color: "#999" }}>
                  Số 47 / Mùa Xuân 2024
                </span>
              </div>
            </div>
            <div
              className="c2-img-placeholder"
              style={{ height: 520 }}
            >
              Hero Image — Editorial full-bleed interior
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Text */}
      <section style={{ padding: "48px 0", overflow: "hidden" }}>
        <div className="c2-marquee">
          <div className="c2-marquee-inner c2-serif" style={{ fontSize: 18, opacity: 0.3 }}>
            {Array(3)
              .fill("THIẾT KẾ  ✦  SÁNG TẠO  ✦  ĐẲNG CẤP  ✦  TINH TẾ  ✦  CAO CẤP  ✦  NGHỆ THUẬT  ✦  ")
              .join("")}
          </div>
        </div>
      </section>

      {/* Trust Indicators — Editorial Stats Bar */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c2-editorial-line" style={{ marginBottom: 40 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {[
              { number: "15+", label: "Năm hoạt động" },
              { number: "500+", label: "Dự án hoàn thành" },
              { number: "50+", label: "Giải thưởng" },
              { number: "98%", label: "Khách hàng hài lòng" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  padding: "32px 0",
                  borderRight: i < 3 ? "1px solid rgba(26,26,46,0.1)" : "none",
                }}
              >
                <div
                  className="c2-serif c2-accent"
                  style={{ fontSize: 42, marginBottom: 4 }}
                >
                  {stat.number}
                </div>
                <div
                  className="c2-sans"
                  style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#999" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="c2-editorial-line" style={{ marginTop: 0 }} />
        </div>
      </section>

      {/* Featured Projects — Magazine Layout */}
      <section id="projects" style={{ padding: "0 48px 120px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
            }}
          >
            <div>
              <div className="c2-tag" style={{ marginBottom: 20 }}>Bộ Sưu Tập</div>
              <h2
                className="c2-serif"
                style={{ fontSize: 52, lineHeight: 1.1 }}
              >
                Những Tác Phẩm
                <br />
                <span className="c2-accent" style={{ fontStyle: "italic" }}>Đáng Tự Hào</span>
              </h2>
            </div>
            <a href="#" className="c2-btn-outline" style={{ padding: "14px 36px" }}>
              Xem Tất Cả
            </a>
          </div>

          {/* Magazine Grid — asymmetric */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 24,
            }}
          >
            {/* Large feature */}
            <div className="c2-hover-img" style={{ cursor: "pointer" }}>
              <div style={{ overflow: "hidden", marginBottom: 20 }}>
                <div className="c2-img-placeholder" style={{ height: 500 }}>
                  Penthouse Thảo Điền — 280m²
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <span className="c2-tag">Căn Hộ</span>
                <span className="c2-tag">2024</span>
              </div>
              <h3 className="c2-serif" style={{ fontSize: 32 }}>
                Penthouse Thảo Điền
              </h3>
              <p className="c2-sans" style={{ color: "#888", fontSize: 14, marginTop: 8, fontWeight: 300 }}>
                Nơi ánh sáng Sài Gòn hòa quyện cùng nghệ thuật sống đương đại.
              </p>
            </div>

            {/* Stacked smaller features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  title: "Biệt Thự Phú Mỹ Hưng",
                  tag: "Biệt Thự",
                  desc: "Cổ điển Pháp gặp gỡ hiện đại Việt Nam.",
                },
                {
                  title: "Villa Nghỉ Dưỡng Đà Lạt",
                  tag: "Nghỉ Dưỡng",
                  desc: "Hòa mình vào thiên nhiên cao nguyên.",
                },
              ].map((project) => (
                <div key={project.title} className="c2-hover-img" style={{ cursor: "pointer", flex: 1 }}>
                  <div style={{ overflow: "hidden", marginBottom: 16 }}>
                    <div className="c2-img-placeholder" style={{ height: 230 }}>
                      {project.title}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                    <span className="c2-tag">{project.tag}</span>
                  </div>
                  <h3 className="c2-serif" style={{ fontSize: 24 }}>
                    {project.title}
                  </h3>
                  <p className="c2-sans" style={{ color: "#888", fontSize: 13, marginTop: 4, fontWeight: 300 }}>
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services — Bold Numbered List */}
      <section className="c2-bg-navy" style={{ padding: "120px 48px", color: "#F5F0E8" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c2-tag" style={{ borderColor: "#F5F0E8", color: "#F5F0E8", marginBottom: 32 }}>
            Dịch Vụ Của Chúng Tôi
          </div>
          <h2 className="c2-serif" style={{ fontSize: 52, marginBottom: 64, maxWidth: 700 }}>
            Giải Pháp Toàn Diện Cho{" "}
            <span className="c2-accent" style={{ fontStyle: "italic" }}>Mọi Không Gian</span>
          </h2>
          <div>
            {[
              {
                num: "01",
                title: "Thiết Kế Nội Thất Trọn Gói",
                desc: "Từ concept đến bản vẽ chi tiết 3D, chúng tôi tạo ra bản giao hưởng thị giác hoàn hảo cho không gian của bạn.",
              },
              {
                num: "02",
                title: "Thi Công & Giám Sát",
                desc: "Đội ngũ thợ lành nghề cùng quy trình giám sát chặt chẽ, đảm bảo từng chi tiết đúng như thiết kế.",
              },
              {
                num: "03",
                title: "Tư Vấn Phong Thuỷ & Vật Liệu",
                desc: "Kết hợp hài hòa giữa phong thuỷ truyền thống và thẩm mỹ hiện đại, lựa chọn vật liệu nhập khẩu cao cấp.",
              },
            ].map((service, i) => (
              <div key={service.num}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 1fr",
                    gap: 40,
                    padding: "48px 0",
                    alignItems: "start",
                    borderTop: "1px solid rgba(245,240,232,0.15)",
                  }}
                >
                  <div
                    className="c2-serif c2-accent"
                    style={{ fontSize: 36 }}
                  >
                    {service.num}
                  </div>
                  <h3
                    className="c2-serif"
                    style={{ fontSize: 28, lineHeight: 1.3 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="c2-sans"
                    style={{
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "rgba(245,240,232,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process — Editorial Timeline */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c2-tag" style={{ marginBottom: 24 }}>Quy Trình Làm Việc</div>
            <h2 className="c2-serif" style={{ fontSize: 52 }}>
              Từ Ý Tưởng Đến <span className="c2-accent" style={{ fontStyle: "italic" }}>Hiện Thực</span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {[
              { step: "I", title: "Gặp Gỡ & Lắng Nghe", desc: "Tìm hiểu phong cách sống, sở thích và mong muốn của bạn trong buổi tư vấn đầu tiên." },
              { step: "II", title: "Phác Thảo & Concept", desc: "Phát triển concept thiết kế độc đáo, trình bày bản vẽ 2D/3D và moodboard." },
              { step: "III", title: "Triển Khai Thi Công", desc: "Thi công với đội ngũ chuyên nghiệp, cập nhật tiến độ minh bạch hàng tuần." },
              { step: "IV", title: "Bàn Giao & Chăm Sóc", desc: "Bàn giao công trình hoàn hảo kèm chế độ bảo hành và chăm sóc dài hạn." },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  padding: "40px 32px",
                  borderLeft: i > 0 ? "1px solid rgba(26,26,46,0.1)" : "none",
                  textAlign: "center",
                }}
              >
                <div
                  className="c2-serif c2-accent"
                  style={{ fontSize: 48, marginBottom: 20 }}
                >
                  {item.step}
                </div>
                <h3
                  className="c2-serif"
                  style={{ fontSize: 20, marginBottom: 12 }}
                >
                  {item.title}
                </h3>
                <p
                  className="c2-sans"
                  style={{
                    fontSize: 13,
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

      {/* Testimonials — Editorial Quote Style */}
      <section style={{ padding: "0 48px 120px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="c2-editorial-line" style={{ marginBottom: 64 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 80,
            }}
          >
            <div>
              <div className="c2-tag" style={{ marginBottom: 32 }}>Lời Chia Sẻ</div>
              <h2 className="c2-serif" style={{ fontSize: 44, marginBottom: 24 }}>
                Từ Những Người Đã{" "}
                <span className="c2-accent" style={{ fontStyle: "italic" }}>Tin Tưởng</span>
              </h2>
              <p className="c2-sans" style={{ fontSize: 15, lineHeight: 1.8, color: "#888", fontWeight: 300 }}>
                Sự hài lòng của khách hàng là thước đo cho mọi nỗ lực của chúng tôi.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                {
                  quote: "Họ không chỉ thiết kế không gian — họ thiết kế cảm xúc. Mỗi lần bước vào nhà, tôi đều cảm nhận được sự bình yên mà mình tìm kiếm bấy lâu.",
                  name: "Nguyễn Minh Anh",
                  role: "Doanh nhân, Quận 2",
                },
                {
                  quote: "Tính chuyên nghiệp và sự sáng tạo không giới hạn. Đội ngũ Nội Thất Việt đã vượt xa mong đợi của tôi trong mọi khía cạnh.",
                  name: "Trần Đức Huy",
                  role: "Kiến trúc sư, Quận 7",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  style={{
                    borderLeft: "3px solid #8B2635",
                    paddingLeft: 32,
                  }}
                >
                  <p
                    className="c2-serif"
                    style={{
                      fontSize: 22,
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      marginBottom: 20,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="c2-sans" style={{ fontWeight: 600, fontSize: 14 }}>
                    {t.name}
                  </div>
                  <div className="c2-sans" style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA — Bold Full-Width */}
      <section
        className="c2-bg-accent"
        style={{ padding: "100px 48px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            className="c2-serif"
            style={{
              fontSize: 56,
              color: "#F5F0E8",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Sẵn Sàng Viết Nên
            <br />
            <span style={{ fontStyle: "italic" }}>Câu Chuyện Của Bạn?</span>
          </h2>
          <p
            className="c2-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.7)",
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Mỗi ngôi nhà đều xứng đáng có một câu chuyện đẹp. Hãy để chúng tôi
            cùng bạn viết nên chương tiếp theo.
          </p>
          <a
            href="#contact"
            className="c2-btn-outline"
            style={{ borderColor: "#F5F0E8", color: "#F5F0E8" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F5F0E8";
              e.currentTarget.style.color = "#8B2635";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#F5F0E8";
            }}
          >
            Bắt Đầu Cuộc Hẹn
          </a>
        </div>
      </section>

      {/* Contact — Editorial Split */}
      <section id="contact" style={{ padding: "120px 48px" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
          }}
        >
          <div>
            <div className="c2-tag" style={{ marginBottom: 24 }}>Liên Hệ</div>
            <h2 className="c2-serif" style={{ fontSize: 44, marginBottom: 32 }}>
              Bắt Đầu
              <br />
              <span className="c2-accent" style={{ fontStyle: "italic" }}>Trang Mới</span>
            </h2>
            <div className="c2-editorial-line" style={{ marginBottom: 32 }} />
            <div className="c2-sans" style={{ fontSize: 15, lineHeight: 2.5, color: "#666" }}>
              <div><strong style={{ color: "#1A1A2E" }}>Showroom:</strong> 123 Nguyễn Huệ, Q.1, TP.HCM</div>
              <div><strong style={{ color: "#1A1A2E" }}>Hotline:</strong> (028) 1234 5678</div>
              <div><strong style={{ color: "#1A1A2E" }}>Email:</strong> hello@noithatviet.vn</div>
              <div><strong style={{ color: "#1A1A2E" }}>Mở cửa:</strong> T2 – T7 | 9:00 – 18:00</div>
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {[
                { label: "Họ và tên *", type: "text", placeholder: "Nguyễn Văn A" },
                { label: "Số điện thoại *", type: "tel", placeholder: "0901 234 567" },
                { label: "Email", type: "email", placeholder: "email@example.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="c2-sans"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: 1,
                      textTransform: "uppercase",
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
                      padding: "16px",
                      border: "2px solid rgba(26,26,46,0.1)",
                      fontSize: 15,
                      fontFamily: "'Space Grotesk', sans-serif",
                      outline: "none",
                      transition: "border-color 0.3s",
                      background: "transparent",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#8B2635")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26,26,46,0.1)")}
                  />
                </div>
              ))}
              <div>
                <label
                  className="c2-sans"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Yêu cầu của bạn
                </label>
                <textarea
                  placeholder="Chia sẻ ý tưởng của bạn..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "16px",
                    border: "2px solid rgba(26,26,46,0.1)",
                    fontSize: 15,
                    fontFamily: "'Space Grotesk', sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s",
                    background: "transparent",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#8B2635")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(26,26,46,0.1)")}
                />
              </div>
              <button type="submit" className="c2-btn-primary" style={{ alignSelf: "flex-start" }}>
                Gửi Yêu Cầu Tư Vấn
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="c2-bg-navy" style={{ padding: "48px", textAlign: "center" }}>
        <div className="c2-serif c2-cream" style={{ fontSize: 22, marginBottom: 12 }}>
          NỘI THẤT <span className="c2-accent">VIỆT</span>
        </div>
        <div className="c2-sans" style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", letterSpacing: 2 }}>
          © 2024 NỘI THẤT VIỆT — Nghệ thuật kiến tạo không gian sống
        </div>
      </footer>
    </div>
  );
}
