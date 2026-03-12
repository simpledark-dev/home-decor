"use client";

export default function Concept4() {
  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'Lato', sans-serif",
        color: "#3C2415",
        background: "#FAF6F0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Lato:wght@300;400;700&display=swap');

        .c4-serif { font-family: 'Cormorant Garamond', serif; }
        .c4-sans { font-family: 'Lato', sans-serif; }
        .c4-terra { color: #B87333; }
        .c4-bg-terra { background-color: #B87333; }
        .c4-brown { color: #3C2415; }
        .c4-bg-brown { background-color: #3C2415; }
        .c4-cream { color: #FAF6F0; }
        .c4-bg-cream { background-color: #FAF6F0; }
        .c4-bg-warm { background-color: #F3EDE4; }

        .c4-img-placeholder {
          background: linear-gradient(135deg, #E8DFD3 0%, #D9CEBC 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bba98f;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .c4-btn {
          background: #B87333;
          color: #FAF6F0;
          padding: 18px 48px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c4-btn:hover {
          background: #3C2415;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(184,115,51,0.3);
        }

        .c4-btn-outline {
          background: transparent;
          color: #B87333;
          padding: 18px 48px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 2px solid #B87333;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c4-btn-outline:hover {
          background: #B87333;
          color: #FAF6F0;
        }

        .c4-btn-white {
          background: #FAF6F0;
          color: #3C2415;
          padding: 18px 48px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c4-btn-white:hover {
          background: #3C2415;
          color: #FAF6F0;
        }

        .c4-card {
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease;
        }
        .c4-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(60,36,21,0.08);
        }

        .c4-rounded-img {
          border-radius: 16px;
          overflow: hidden;
        }

        .c4-divider {
          width: 48px;
          height: 2px;
          background: #B87333;
          border-radius: 2px;
        }

        .c4-leaf {
          position: absolute;
          opacity: 0.05;
          font-size: 200px;
          pointer-events: none;
          user-select: none;
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
          background: "rgba(250,246,240,0.95)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
          }}
        >
          <div className="c4-serif" style={{ fontSize: 28, fontWeight: 500 }}>
            <span className="c4-terra">nội thất</span> việt
          </div>
          <div
            className="c4-sans"
            style={{ display: "flex", gap: 36, fontSize: 13, fontWeight: 400, letterSpacing: 1 }}
          >
            {["Trang chủ", "Dự án", "Dịch vụ", "Câu chuyện", "Liên hệ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{ color: "#3C2415", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#B87333")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3C2415")}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <a href="#contact" className="c4-btn" style={{ padding: "12px 32px", fontSize: 11 }}>
            Tư Vấn Miễn Phí
          </a>
        </div>
      </nav>

      {/* Hero — Warm, Inviting, Centered */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        <div className="c4-leaf" style={{ top: -40, right: -60 }}>🍃</div>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 48px",
            width: "100%",
          }}
        >
          {/* Centered hero content */}
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 64px" }}>
            <div
              className="c4-sans c4-terra"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              ✦ Studio Thiết Kế Nội Thất ✦
            </div>
            <h1
              className="c4-serif"
              style={{
                fontSize: 72,
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: 28,
              }}
            >
              Nơi Thiên Nhiên
              <br />
              <span className="c4-terra" style={{ fontStyle: "italic", fontWeight: 500 }}>
                Gặp Gỡ
              </span>{" "}
              Nghệ Thuật Sống
            </h1>
            <p
              className="c4-sans"
              style={{
                fontSize: 17,
                lineHeight: 1.9,
                color: "#8B7355",
                fontWeight: 300,
                maxWidth: 560,
                margin: "0 auto 44px",
              }}
            >
              Chúng tôi tạo nên những không gian sống ấm áp, nơi chất liệu tự nhiên
              và ánh sáng hòa quyện, mang đến cảm giác thư thái cho mỗi ngày của bạn.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <a href="#contact" className="c4-btn">Khám Phá Ngay</a>
              <a href="#projects" className="c4-btn-outline">Xem Dự Án</a>
            </div>
          </div>

          {/* Hero image row — three rounded images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr 1fr",
              gap: 20,
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div className="c4-img-placeholder c4-rounded-img" style={{ height: 320 }}>
              Phòng ngủ ấm cúng
            </div>
            <div className="c4-img-placeholder c4-rounded-img" style={{ height: 320 }}>
              Phòng khách — ánh sáng tự nhiên
            </div>
            <div className="c4-img-placeholder c4-rounded-img" style={{ height: 320 }}>
              Chi tiết gỗ tự nhiên
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators — Warm Rounded Cards */}
      <section style={{ padding: "80px 48px 0" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {[
            { num: "15+", label: "Năm Kinh Nghiệm", icon: "◎" },
            { num: "500+", label: "Gia Đình Hạnh Phúc", icon: "♡" },
            { num: "50+", label: "Giải Thưởng", icon: "✦" },
            { num: "100%", label: "Vật Liệu Tự Nhiên", icon: "❋" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "36px 24px",
                background: "#F3EDE4",
                borderRadius: 16,
              }}
            >
              <div className="c4-terra" style={{ fontSize: 20, marginBottom: 12 }}>{stat.icon}</div>
              <div
                className="c4-serif c4-terra"
                style={{ fontSize: 40, fontWeight: 600, marginBottom: 4 }}
              >
                {stat.num}
              </div>
              <div
                className="c4-sans"
                style={{ fontSize: 12, color: "#8B7355", letterSpacing: 1, fontWeight: 300 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects — Rounded Cards */}
      <section id="projects" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="c4-divider" style={{ margin: "0 auto 20px" }} />
            <h2
              className="c4-serif"
              style={{ fontSize: 48, fontWeight: 400 }}
            >
              Những Tổ Ấm{" "}
              <span className="c4-terra" style={{ fontStyle: "italic" }}>Đáng Tự Hào</span>
            </h2>
            <p className="c4-sans" style={{ fontSize: 15, color: "#8B7355", marginTop: 16, fontWeight: 300 }}>
              Mỗi dự án là một câu chuyện riêng, được kể bằng chất liệu và ánh sáng
            </p>
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
                title: "Tổ Ấm Thảo Điền",
                category: "Căn hộ gia đình",
                size: "280m²",
                desc: "Gỗ sồi, đá tự nhiên và ánh nắng Sài Gòn",
              },
              {
                title: "Ngôi Nhà Phú Mỹ Hưng",
                category: "Biệt thự vườn",
                size: "450m²",
                desc: "Hòa mình vào khu vườn nhiệt đới xanh mát",
              },
              {
                title: "Nhà Nghỉ Dưỡng Đà Lạt",
                category: "Nghỉ dưỡng",
                size: "350m²",
                desc: "Chất liệu bản địa, hơi thở cao nguyên",
              },
            ].map((project) => (
              <div key={project.title} className="c4-card" style={{ cursor: "pointer", background: "#fff" }}>
                <div className="c4-img-placeholder" style={{ height: 340 }}>
                  {project.title}
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <div
                    className="c4-sans c4-terra"
                    style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}
                  >
                    {project.category.toUpperCase()} — {project.size}
                  </div>
                  <h3
                    className="c4-serif"
                    style={{ fontSize: 26, fontWeight: 500, marginBottom: 8 }}
                  >
                    {project.title}
                  </h3>
                  <p className="c4-sans" style={{ fontSize: 14, color: "#8B7355", fontWeight: 300 }}>
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href="#" className="c4-btn-outline">Khám Phá Thêm</a>
          </div>
        </div>
      </section>

      {/* Services — Warm Grid */}
      <section className="c4-bg-warm" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="c4-divider" style={{ margin: "0 auto 20px" }} />
            <h2 className="c4-serif" style={{ fontSize: 48, fontWeight: 400 }}>
              Dịch Vụ{" "}
              <span className="c4-terra" style={{ fontStyle: "italic" }}>Của Chúng Tôi</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              {
                icon: "✦",
                title: "Thiết Kế Nội Thất",
                desc: "Tạo nên không gian sống ấm áp với chất liệu tự nhiên — gỗ, đá, vải lanh — phản ánh phong cách và giá trị gia đình bạn.",
              },
              {
                icon: "❋",
                title: "Thi Công Trọn Gói",
                desc: "Đội ngũ thợ lành nghề với tay nghề truyền thống, sử dụng vật liệu thân thiện môi trường, cam kết chất lượng bền vững.",
              },
              {
                icon: "◎",
                title: "Tư Vấn & Styling",
                desc: "Tư vấn phong cách sống, lựa chọn nội thất thủ công và cây xanh, tạo nên không gian hài hòa với thiên nhiên.",
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#FAF6F0",
                  padding: 44,
                  borderRadius: 16,
                  textAlign: "center",
                  transition: "transform 0.4s, box-shadow 0.4s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(60,36,21,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="c4-terra" style={{ fontSize: 32, marginBottom: 20 }}>{service.icon}</div>
                <h3
                  className="c4-serif"
                  style={{ fontSize: 26, fontWeight: 500, marginBottom: 16 }}
                >
                  {service.title}
                </h3>
                <p
                  className="c4-sans"
                  style={{ fontSize: 14, lineHeight: 1.8, color: "#8B7355", fontWeight: 300 }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process — Flowing Timeline */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c4-divider" style={{ margin: "0 auto 20px" }} />
            <h2 className="c4-serif" style={{ fontSize: 48, fontWeight: 400 }}>
              Hành Trình{" "}
              <span className="c4-terra" style={{ fontStyle: "italic" }}>Cùng Bạn</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              {
                step: "01",
                title: "Trò Chuyện",
                desc: "Bên tách trà, chúng tôi lắng nghe câu chuyện gia đình, thói quen sinh hoạt và ước mơ về tổ ấm của bạn.",
              },
              {
                step: "02",
                title: "Lên Ý Tưởng",
                desc: "Phát triển concept thiết kế với moodboard, phối cảnh 3D và mẫu vật liệu thực tế để bạn cảm nhận.",
              },
              {
                step: "03",
                title: "Xây Dựng",
                desc: "Đội ngũ thợ lành nghề tỉ mỉ thi công, chúng tôi giám sát từng chi tiết để đảm bảo chất lượng.",
              },
              {
                step: "04",
                title: "Trao Tổ Ấm",
                desc: "Bàn giao ngôi nhà hoàn hảo với hương thơm gỗ mới, cùng chế độ chăm sóc dài hạn.",
              },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "#F3EDE4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <span
                    className="c4-serif c4-terra"
                    style={{ fontSize: 28, fontWeight: 600 }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="c4-serif"
                  style={{ fontSize: 24, fontWeight: 500, marginBottom: 12 }}
                >
                  {item.title}
                </h3>
                <p
                  className="c4-sans"
                  style={{ fontSize: 14, lineHeight: 1.7, color: "#8B7355", fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Warm Quotes */}
      <section className="c4-bg-warm" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="c4-divider" style={{ margin: "0 auto 20px" }} />
            <h2 className="c4-serif" style={{ fontSize: 48, fontWeight: 400 }}>
              Tình Cảm Được{" "}
              <span className="c4-terra" style={{ fontStyle: "italic" }}>Gửi Gắm</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              {
                quote:
                  "Ngôi nhà bây giờ thực sự là tổ ấm — nơi cả gia đình muốn trở về mỗi ngày. Mùi gỗ, ánh nắng chiều qua cửa sổ, tất cả đều hoàn hảo.",
                name: "Nguyễn Minh Anh",
                role: "Mẹ của hai bé, Quận 2",
              },
              {
                quote:
                  "Điều tôi thích nhất là cách họ lắng nghe. Họ không áp đặt phong cách mà tìm hiểu gia đình mình sống ra sao để thiết kế phù hợp nhất.",
                name: "Trần Đức Huy",
                role: "Doanh nhân, Phú Mỹ Hưng",
              },
              {
                quote:
                  "Vật liệu tự nhiên, tay nghề thủ công tuyệt vời. Sau 3 năm, ngôi nhà vẫn đẹp như ngày đầu. Gỗ còn đẹp hơn theo thời gian.",
                name: "Lê Thanh Hà",
                role: "Kiến trúc sư, Đà Lạt",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#FAF6F0",
                  padding: 40,
                  borderRadius: 16,
                }}
              >
                <div className="c4-terra" style={{ fontSize: 48, lineHeight: 1, marginBottom: 8, opacity: 0.4 }}>
                  &ldquo;
                </div>
                <p
                  className="c4-sans"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#5D4E3C",
                    fontWeight: 300,
                    fontStyle: "italic",
                    marginBottom: 28,
                  }}
                >
                  {t.quote}
                </p>
                <div className="c4-divider" style={{ marginBottom: 16, width: 32 }} />
                <div className="c4-serif" style={{ fontSize: 18, fontWeight: 600 }}>{t.name}</div>
                <div className="c4-sans" style={{ fontSize: 12, color: "#8B7355", marginTop: 4 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Warm Full Width */}
      <section
        className="c4-bg-brown"
        style={{
          padding: "100px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="c4-leaf" style={{ bottom: -60, left: -40, opacity: 0.03, color: "#fff" }}>🌿</div>
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
          <div className="c4-divider" style={{ margin: "0 auto 24px", background: "#B87333" }} />
          <h2
            className="c4-serif"
            style={{
              fontSize: 52,
              fontWeight: 400,
              color: "#FAF6F0",
              marginBottom: 20,
              lineHeight: 1.25,
            }}
          >
            Hãy Để Chúng Tôi
            <br />
            <span className="c4-terra" style={{ fontStyle: "italic" }}>Xây Tổ Ấm</span> Cùng Bạn
          </h2>
          <p
            className="c4-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(250,246,240,0.6)",
              marginBottom: 44,
              fontWeight: 300,
            }}
          >
            Đặt lịch gặp mặt miễn phí. Bên tách cà phê, hãy kể cho chúng tôi
            nghe về ngôi nhà mơ ước của bạn.
          </p>
          <a href="#contact" className="c4-btn-white">
            Đặt Lịch Gặp Mặt
          </a>
        </div>
      </section>

      {/* Contact — Warm Split */}
      <section id="contact" style={{ padding: "120px 48px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
          }}
        >
          <div>
            <div className="c4-divider" style={{ marginBottom: 24 }} />
            <h2
              className="c4-serif"
              style={{ fontSize: 44, fontWeight: 400, marginBottom: 24 }}
            >
              Kết Nối Với
              <br />
              <span className="c4-terra" style={{ fontStyle: "italic" }}>Chúng Tôi</span>
            </h2>
            <p
              className="c4-sans"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#8B7355",
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              Ghé thăm showroom để trải nghiệm không gian mẫu, hoặc đơn giản gọi cho chúng tôi
              để được tư vấn tận tâm.
            </p>
            <div className="c4-sans" style={{ fontSize: 15, lineHeight: 2.8, color: "#5D4E3C" }}>
              <div>📍 123 Nguyễn Huệ, Quận 1, TP.HCM</div>
              <div>📞 (028) 1234 5678</div>
              <div>✉️ hello@noithatviet.vn</div>
              <div>🕐 T2 – T7: 9:00 – 18:00</div>
            </div>
          </div>
          <div
            style={{
              background: "#F3EDE4",
              padding: 48,
              borderRadius: 20,
            }}
          >
            <h3 className="c4-serif" style={{ fontSize: 28, fontWeight: 500, marginBottom: 32 }}>
              Gửi yêu cầu tư vấn
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {[
                { label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                { label: "Số điện thoại", type: "tel", placeholder: "0901 234 567" },
                { label: "Email", type: "email", placeholder: "email@example.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="c4-sans"
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: "#8B7355",
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
                      padding: "14px 18px",
                      border: "none",
                      borderRadius: 10,
                      fontSize: 15,
                      fontFamily: "'Lato', sans-serif",
                      outline: "none",
                      background: "#FAF6F0",
                      transition: "box-shadow 0.3s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 2px #B87333")}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                  />
                </div>
              ))}
              <div>
                <label
                  className="c4-sans"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#8B7355",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Chia sẻ mong muốn
                </label>
                <textarea
                  placeholder="Kể cho chúng tôi về ngôi nhà mơ ước của bạn..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 15,
                    fontFamily: "'Lato', sans-serif",
                    outline: "none",
                    resize: "none",
                    background: "#FAF6F0",
                    transition: "box-shadow 0.3s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 2px #B87333")}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                />
              </div>
              <button type="submit" className="c4-btn" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                Gửi Yêu Cầu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="c4-bg-brown"
        style={{ padding: "48px", textAlign: "center" }}
      >
        <div className="c4-serif" style={{ fontSize: 22, color: "#FAF6F0", marginBottom: 8 }}>
          <span className="c4-terra">nội thất</span> việt
        </div>
        <div className="c4-sans" style={{ fontSize: 12, color: "rgba(250,246,240,0.4)", letterSpacing: 1 }}>
          © 2024 Nội Thất Việt — Kiến tạo tổ ấm bền vững
        </div>
      </footer>
    </div>
  );
}
