"use client";

export default function Concept3() {
  return (
    <div
      className="concept-page"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        color: "#2D2D2D",
        background: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

        .c3-display { font-family: 'Archivo Black', sans-serif; }
        .c3-sans { font-family: 'DM Sans', sans-serif; }
        .c3-teal { color: #4A7C7E; }
        .c3-bg-teal { background-color: #4A7C7E; }
        .c3-concrete { color: #E8E4E0; }
        .c3-bg-concrete { background-color: #F5F3F0; }
        .c3-charcoal { color: #2D2D2D; }
        .c3-bg-charcoal { background-color: #2D2D2D; }

        .c3-img-placeholder {
          background: linear-gradient(135deg, #E8E4E0 0%, #D8D4CF 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .c3-btn {
          background: #4A7C7E;
          color: #fff;
          padding: 16px 44px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c3-btn:hover {
          background: #2D2D2D;
        }

        .c3-btn-dark {
          background: #2D2D2D;
          color: #fff;
          padding: 16px 44px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c3-btn-dark:hover {
          background: #4A7C7E;
        }

        .c3-btn-outline {
          background: transparent;
          color: #2D2D2D;
          padding: 16px 44px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          border: 2px solid #2D2D2D;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .c3-btn-outline:hover {
          background: #2D2D2D;
          color: #fff;
        }

        .c3-grid-card {
          transition: transform 0.4s ease;
        }
        .c3-grid-card:hover {
          transform: translateY(-4px);
        }

        .c3-geo-accent {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid rgba(74, 124, 126, 0.15);
          pointer-events: none;
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
          background: "rgba(255,255,255,0.98)",
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
            height: 72,
          }}
        >
          <div className="c3-display" style={{ fontSize: 18, letterSpacing: 2 }}>
            NTV<span className="c3-teal">.</span>STUDIO
          </div>
          <div
            className="c3-sans"
            style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500 }}
          >
            {["Trang chủ", "Công trình", "Dịch vụ", "Studio", "Liên hệ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{ color: "#2D2D2D", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4A7C7E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2D2D")}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <a href="#contact" className="c3-btn" style={{ padding: "10px 28px", fontSize: 13 }}>
            Liên Hệ Ngay
          </a>
        </div>
      </nav>

      {/* Hero — Full-Width Architectural */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background geometric pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "55%",
            background: "#F5F3F0",
            zIndex: 0,
          }}
        />
        <div
          className="c3-geo-accent"
          style={{ top: "15%", right: "20%", transform: "rotate(45deg)" }}
        />

        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "120px 48px 80px",
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="c3-sans c3-teal"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Interior Architecture Studio
            </div>
            <h1
              className="c3-display"
              style={{
                fontSize: 72,
                lineHeight: 1.05,
                marginBottom: 32,
                textTransform: "uppercase",
              }}
            >
              Kiến Trúc
              <br />
              <span className="c3-teal">Nội Thất</span>
              <br />
              Đương Đại
            </h1>
            <p
              className="c3-sans"
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#888",
                maxWidth: 420,
                marginBottom: 40,
                fontWeight: 300,
              }}
            >
              Chúng tôi thiết kế không gian với tư duy kiến trúc — nơi mỗi đường nét,
              tỷ lệ và vật liệu đều được tính toán chính xác để tạo nên sự hài hòa hoàn hảo.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="#contact" className="c3-btn">Tư Vấn Miễn Phí</a>
              <a href="#projects" className="c3-btn-outline">Xem Công Trình</a>
            </div>

            {/* Mini stats row */}
            <div
              style={{
                display: "flex",
                gap: 48,
                marginTop: 64,
                paddingTop: 32,
                borderTop: "1px solid #eee",
              }}
            >
              {[
                { num: "500+", label: "Công trình" },
                { num: "15", label: "Năm" },
                { num: "50+", label: "Giải thưởng" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="c3-display c3-teal" style={{ fontSize: 28 }}>
                    {s.num}
                  </div>
                  <div className="c3-sans" style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="c3-img-placeholder" style={{ height: 580, position: "relative" }}>
            Hero — Modern architectural interior
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                width: 120,
                height: 120,
                background: "#4A7C7E",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators — Horizontal Grid */}
      <section className="c3-bg-charcoal" style={{ padding: "60px 48px" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
          }}
        >
          {[
            { icon: "▲", label: "Top 10 Studio Việt Nam", sub: "Hội KTS Việt Nam" },
            { icon: "◆", label: "ISO 9001:2015", sub: "Chứng nhận quốc tế" },
            { icon: "●", label: "98% Đúng Tiến Độ", sub: "Cam kết thời gian" },
            { icon: "■", label: "Bảo Hành 5 Năm", sub: "An tâm tuyệt đối" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div className="c3-teal" style={{ fontSize: 20 }}>{item.icon}</div>
              <div>
                <div className="c3-sans" style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>
                  {item.label}
                </div>
                <div className="c3-sans" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects — Grid System */}
      <section id="projects" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
            }}
          >
            <div>
              <div
                className="c3-sans c3-teal"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Công Trình
              </div>
              <h2
                className="c3-display"
                style={{ fontSize: 44, textTransform: "uppercase" }}
              >
                DỰ ÁN <span className="c3-teal">TIÊU BIỂU</span>
              </h2>
            </div>
            <a href="#" className="c3-btn-outline" style={{ padding: "12px 32px" }}>
              Tất Cả Dự Án →
            </a>
          </div>

          {/* Architectural grid — mixed sizes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 20,
            }}
          >
            <div
              className="c3-grid-card"
              style={{ gridColumn: "span 7", cursor: "pointer" }}
            >
              <div className="c3-img-placeholder" style={{ height: 420, marginBottom: 20 }}>
                Penthouse Thảo Điền — 280m²
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div className="c3-sans c3-teal" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 6 }}>
                    CĂN HỘ / 280M²
                  </div>
                  <h3 className="c3-display" style={{ fontSize: 22, textTransform: "uppercase" }}>
                    Penthouse Thảo Điền
                  </h3>
                </div>
                <span className="c3-sans" style={{ fontSize: 13, color: "#aaa" }}>2024</span>
              </div>
            </div>
            <div
              className="c3-grid-card"
              style={{ gridColumn: "span 5", cursor: "pointer" }}
            >
              <div className="c3-img-placeholder" style={{ height: 420, marginBottom: 20 }}>
                Biệt Thự Phú Mỹ Hưng — 450m²
              </div>
              <div>
                <div className="c3-sans c3-teal" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 6 }}>
                  BIỆT THỰ / 450M²
                </div>
                <h3 className="c3-display" style={{ fontSize: 22, textTransform: "uppercase" }}>
                  Biệt Thự Phú Mỹ Hưng
                </h3>
              </div>
            </div>
            <div
              className="c3-grid-card"
              style={{ gridColumn: "span 5", cursor: "pointer" }}
            >
              <div className="c3-img-placeholder" style={{ height: 320, marginBottom: 20 }}>
                Villa Đà Lạt — 350m²
              </div>
              <div>
                <div className="c3-sans c3-teal" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 6 }}>
                  NGHỈ DƯỠNG / 350M²
                </div>
                <h3 className="c3-display" style={{ fontSize: 22, textTransform: "uppercase" }}>
                  Villa Nghỉ Dưỡng Đà Lạt
                </h3>
              </div>
            </div>
            <div
              className="c3-grid-card"
              style={{ gridColumn: "span 7", cursor: "pointer" }}
            >
              <div className="c3-img-placeholder" style={{ height: 320, marginBottom: 20 }}>
                Văn Phòng Sáng Tạo Q.3 — 200m²
              </div>
              <div>
                <div className="c3-sans c3-teal" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 6 }}>
                  THƯƠNG MẠI / 200M²
                </div>
                <h3 className="c3-display" style={{ fontSize: 22, textTransform: "uppercase" }}>
                  Văn Phòng Sáng Tạo Quận 3
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Structured Grid */}
      <section className="c3-bg-concrete" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div className="c3-sans c3-teal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, marginBottom: 12 }}>
              DỊCH VỤ
            </div>
            <h2 className="c3-display" style={{ fontSize: 44, textTransform: "uppercase", maxWidth: 600 }}>
              GIẢI PHÁP <span className="c3-teal">KIẾN TRÚC</span> NỘI THẤT
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {[
              {
                num: "01",
                title: "Thiết Kế Kiến Trúc Nội Thất",
                desc: "Phát triển concept, bản vẽ kỹ thuật, mô hình 3D và lựa chọn vật liệu theo tiêu chuẩn kiến trúc quốc tế.",
                items: ["Concept Design", "Bản vẽ 2D/3D", "Phối cảnh thực tế"],
              },
              {
                num: "02",
                title: "Thi Công & Quản Lý Dự Án",
                desc: "Triển khai thi công với đội ngũ kỹ sư và thợ lành nghề, quản lý tiến độ và chất lượng chặt chẽ.",
                items: ["Thi công trọn gói", "Giám sát công trình", "Quản lý tiến độ"],
              },
              {
                num: "03",
                title: "Tư Vấn Vật Liệu & Nội Thất",
                desc: "Tư vấn lựa chọn vật liệu cao cấp, nội thất nhập khẩu và giải pháp phong thuỷ phù hợp.",
                items: ["Vật liệu cao cấp", "Nội thất nhập khẩu", "Phong thuỷ"],
              },
            ].map((service) => (
              <div
                key={service.num}
                style={{
                  background: "#fff",
                  padding: 48,
                  transition: "box-shadow 0.4s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  className="c3-display c3-teal"
                  style={{ fontSize: 36, marginBottom: 24 }}
                >
                  {service.num}
                </div>
                <h3
                  className="c3-display"
                  style={{
                    fontSize: 18,
                    textTransform: "uppercase",
                    marginBottom: 16,
                    lineHeight: 1.4,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="c3-sans"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#888",
                    fontWeight: 300,
                    marginBottom: 24,
                  }}
                >
                  {service.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="c3-sans"
                      style={{
                        fontSize: 13,
                        padding: "8px 0",
                        borderTop: "1px solid #f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span className="c3-teal">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process — Horizontal Steps */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="c3-sans c3-teal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, marginBottom: 12 }}>
              QUY TRÌNH
            </div>
            <h2 className="c3-display" style={{ fontSize: 44, textTransform: "uppercase" }}>
              4 BƯỚC ĐẾN <span className="c3-teal">KHÔNG GIAN MƠ ƯỚC</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            {[
              { step: "01", title: "Khảo Sát", desc: "Đo đạc, khảo sát hiện trạng và tìm hiểu yêu cầu chi tiết từ khách hàng.", arrow: true },
              { step: "02", title: "Concept", desc: "Phát triển 2-3 phương án concept thiết kế, trình bày phối cảnh 3D.", arrow: true },
              { step: "03", title: "Thi Công", desc: "Triển khai thi công theo tiêu chuẩn, giám sát chất lượng từng giai đoạn.", arrow: true },
              { step: "04", title: "Bàn Giao", desc: "Nghiệm thu, bàn giao công trình và kích hoạt chế độ bảo hành 5 năm.", arrow: false },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "0 32px",
                  borderLeft: item.step !== "01" ? "1px solid #eee" : "none",
                }}
              >
                <div
                  className="c3-display c3-teal"
                  style={{ fontSize: 48, marginBottom: 20, lineHeight: 1 }}
                >
                  {item.step}
                </div>
                <h3
                  className="c3-display"
                  style={{
                    fontSize: 18,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="c3-sans"
                  style={{ fontSize: 14, lineHeight: 1.7, color: "#888", fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Cards */}
      <section className="c3-bg-concrete" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="c3-sans c3-teal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, marginBottom: 12 }}>
              ĐÁNH GIÁ
            </div>
            <h2 className="c3-display" style={{ fontSize: 44, textTransform: "uppercase" }}>
              KHÁCH HÀNG <span className="c3-teal">NÓI GÌ</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {[
              {
                quote: "NTV Studio mang đến cách tiếp cận hoàn toàn khác biệt — tư duy kiến trúc trong từng chi tiết nội thất. Kết quả là không gian vừa đẹp vừa logic, mọi thứ đều có lý do tồn tại.",
                name: "Nguyễn Minh Anh",
                role: "CEO, TechViet Corp",
                project: "Penthouse Thảo Điền",
              },
              {
                quote: "Từ bản vẽ 3D đến thực tế gần như không có sai lệch. Đội ngũ quản lý dự án rất chặt chẽ, luôn cập nhật tiến độ và xử lý mọi phát sinh nhanh chóng.",
                name: "Phạm Thị Thu Hương",
                role: "Chủ đầu tư Biệt thự Quận 7",
                project: "Biệt Thự Phú Mỹ Hưng",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#fff",
                  padding: 48,
                }}
              >
                <div className="c3-teal" style={{ fontSize: 32, marginBottom: 16 }}>★★★★★</div>
                <p
                  className="c3-sans"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "#555",
                    fontWeight: 300,
                    marginBottom: 32,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid #eee", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div className="c3-sans" style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    <div className="c3-sans" style={{ fontSize: 13, color: "#aaa", marginTop: 2 }}>{t.role}</div>
                  </div>
                  <div className="c3-sans c3-teal" style={{ fontSize: 12, fontWeight: 600 }}>{t.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Bold Geometric */}
      <section
        className="c3-bg-teal"
        style={{
          padding: "100px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 300,
            height: 300,
            border: "2px solid rgba(255,255,255,0.1)",
            transform: "rotate(45deg)",
          }}
        />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2
            className="c3-display"
            style={{
              fontSize: 48,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            BẮT ĐẦU DỰ ÁN
            <br />
            CỦA BẠN NGAY HÔM NAY
          </h2>
          <p
            className="c3-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Đặt lịch tư vấn miễn phí với đội ngũ kiến trúc sư của chúng tôi.
            Cùng nhau biến ý tưởng thành hiện thực.
          </p>
          <a
            href="#contact"
            className="c3-btn-dark"
            style={{ padding: "18px 52px" }}
          >
            Đặt Lịch Tư Vấn →
          </a>
        </div>
      </section>

      {/* Contact — Clean Grid */}
      <section id="contact" style={{ padding: "120px 48px" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 80,
          }}
        >
          <div>
            <div className="c3-sans c3-teal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, marginBottom: 12 }}>
              LIÊN HỆ
            </div>
            <h2
              className="c3-display"
              style={{ fontSize: 40, textTransform: "uppercase", marginBottom: 32 }}
            >
              NÓI CHUYỆN VỚI <span className="c3-teal">CHÚNG TÔI</span>
            </h2>
            <div className="c3-sans" style={{ fontSize: 15, lineHeight: 2.5, color: "#666" }}>
              <div><strong style={{ color: "#2D2D2D" }}>Studio:</strong> 123 Nguyễn Huệ, Q.1, TP.HCM</div>
              <div><strong style={{ color: "#2D2D2D" }}>Tel:</strong> (028) 1234 5678</div>
              <div><strong style={{ color: "#2D2D2D" }}>Email:</strong> hello@ntvstudio.vn</div>
              <div><strong style={{ color: "#2D2D2D" }}>Mở cửa:</strong> T2–T7 / 8:30–17:30</div>
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { label: "Họ tên", type: "text", placeholder: "Nguyễn Văn A" },
                  { label: "Điện thoại", type: "tel", placeholder: "0901 234 567" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="c3-sans" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "2px solid #eee",
                        fontSize: 14,
                        fontFamily: "'DM Sans', sans-serif",
                        outline: "none",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#4A7C7E")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#eee")}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="c3-sans" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "2px solid #eee",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#4A7C7E")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#eee")}
                />
              </div>
              <div>
                <label className="c3-sans" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
                  Mô tả dự án
                </label>
                <textarea
                  placeholder="Diện tích, phong cách mong muốn, ngân sách dự kiến..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "2px solid #eee",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#4A7C7E")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#eee")}
                />
              </div>
              <button type="submit" className="c3-btn" style={{ alignSelf: "flex-start" }}>
                Gửi Yêu Cầu →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="c3-bg-charcoal" style={{ padding: "48px", textAlign: "center" }}>
        <div className="c3-display" style={{ color: "#fff", fontSize: 16, letterSpacing: 2, marginBottom: 8 }}>
          NTV<span className="c3-teal">.</span>STUDIO
        </div>
        <div className="c3-sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2024 NTV Studio. Kiến trúc nội thất đương đại.
        </div>
      </footer>
    </div>
  );
}
