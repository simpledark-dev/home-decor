"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

export default function LienHePage() {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderBottomColor = "#C9A96E";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderBottomColor = "#ddd";
  };

  return (
    <>
      <ScrollReveal />
      <Navbar />

      <PageHero
        label="Liên Hệ"
        title="Hãy Để Chúng Tôi"
        highlight="Lắng Nghe Bạn"
        description="Mỗi không gian đều bắt đầu từ một cuộc trò chuyện. Hãy chia sẻ ý tưởng của bạn và nhận tư vấn miễn phí từ đội ngũ chuyên gia của chúng tôi."
      />

      {/* CTA Banner */}
      <section className="bg-cream py-16 px-10">
        <div className="max-w-[1200px] mx-auto text-center reveal">
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
            Bắt Đầu Dự Án Của Bạn
          </p>
          <p className="text-body text-lg font-light mb-6 max-w-[600px] mx-auto leading-relaxed">
            Gọi ngay cho chúng tôi để được tư vấn miễn phí và nhận báo giá trong vòng 24 giờ
          </p>
          <a
            href="tel:0935558252"
            className="font-serif text-[40px] text-dark hover:text-gold transition-colors duration-400 block mb-4"
          >
            093 555 82 52
          </a>
          <p className="text-muted text-sm font-light">
            Hoặc điền form bên dưới
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <div className="reveal">
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              Thông Tin Liên Hệ
            </p>
            <h2 className="font-serif text-[44px] font-normal text-dark mb-8">
              Ghé Thăm Showroom
            </h2>

            <div className="space-y-10">
              <div className="stagger">
                <p className="text-gold text-[13px] tracking-[2px] uppercase font-medium mb-2">
                  Địa chỉ
                </p>
                <p className="text-base leading-relaxed font-light text-body">
                  K634 Trưng Nữ Vương,
                  <br />
                  Hải Châu, Đà Nẵng
                </p>
              </div>

              <div className="stagger">
                <p className="text-gold text-[13px] tracking-[2px] uppercase font-medium mb-2">
                  Điện thoại
                </p>
                <a
                  href="tel:0935558252"
                  className="text-base leading-relaxed font-light text-body hover:text-gold transition-colors duration-300"
                >
                  093 555 82 52
                </a>
              </div>

              <div className="stagger">
                <p className="text-gold text-[13px] tracking-[2px] uppercase font-medium mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@thesea.vn"
                  className="text-base leading-relaxed font-light text-body hover:text-gold transition-colors duration-300"
                >
                  hello@thesea.vn
                </a>
              </div>

              <div className="stagger">
                <p className="text-gold text-[13px] tracking-[2px] uppercase font-medium mb-2">
                  Giờ làm việc
                </p>
                <p className="text-base leading-relaxed font-light text-body">
                  T2 - T7: 8:00 - 18:00
                </p>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-[#eee]">
              <p className="text-gold text-[13px] tracking-[2px] uppercase font-medium mb-5">
                Theo dõi chúng tôi
              </p>
              <div className="flex gap-8">
                <a
                  href="#"
                  className="text-body text-[15px] font-light hover:text-gold transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-body text-[15px] font-light hover:text-gold transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-body text-[15px] font-light hover:text-gold transition-colors duration-300"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="reveal">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-8"
            >
              <div>
                <label className="text-[13px] tracking-[1px] text-dark font-medium block mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nguyễn Văn A"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full py-3.5 border-0 border-b border-[#ddd] text-[15px] font-sans outline-none bg-transparent transition-colors duration-300 placeholder:text-subtle placeholder:font-light"
                />
              </div>

              <div>
                <label className="text-[13px] tracking-[1px] text-dark font-medium block mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="0912 345 678"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full py-3.5 border-0 border-b border-[#ddd] text-[15px] font-sans outline-none bg-transparent transition-colors duration-300 placeholder:text-subtle placeholder:font-light"
                />
              </div>

              <div>
                <label className="text-[13px] tracking-[1px] text-dark font-medium block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full py-3.5 border-0 border-b border-[#ddd] text-[15px] font-sans outline-none bg-transparent transition-colors duration-300 placeholder:text-subtle placeholder:font-light"
                />
              </div>

              <div>
                <label className="text-[13px] tracking-[1px] text-dark font-medium block mb-2">
                  Loại sản phẩm
                </label>
                <select
                  name="projectType"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full py-3.5 border-0 border-b border-[#ddd] text-[15px] font-sans outline-none bg-transparent transition-colors duration-300 appearance-none cursor-pointer text-body"
                >
                  <option value="">-- Chọn loại sản phẩm --</option>
                  <option value="sofa-may-do">Sofa may đo</option>
                  <option value="noi-that-go">Nội thất gỗ</option>
                  <option value="boc-lai-sofa">Bọc lại sofa</option>
                  <option value="khac">Khác</option>
                </select>
              </div>

              <div>
                <label className="text-[13px] tracking-[1px] text-dark font-medium block mb-2">
                  Kích thước mong muốn
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="VD: 2.4m x 0.9m"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full py-3.5 border-0 border-b border-[#ddd] text-[15px] font-sans outline-none bg-transparent transition-colors duration-300 placeholder:text-subtle placeholder:font-light"
                />
              </div>

              <div>
                <label className="text-[13px] tracking-[1px] text-dark font-medium block mb-2">
                  Nội dung yêu cầu
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Hãy chia sẻ ý tưởng, yêu cầu hoặc bất kỳ câu hỏi nào..."
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full py-3.5 border-0 border-b border-[#ddd] text-[15px] font-sans outline-none bg-transparent transition-colors duration-300 resize-none placeholder:text-subtle placeholder:font-light"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-gold text-white px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-dark transition-colors duration-400 w-full lg:w-auto"
                >
                  Gửi Yêu Cầu Tư Vấn
                </button>
                <p className="text-muted text-sm font-light mt-4">
                  Chúng tôi sẽ liên hệ lại trong vòng 24 giờ
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9!2d108.2095!3d16.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVHLGsG5nIE7hu68gVsawxqFuZywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The SEA - K634 Trưng Nữ Vương, Hải Châu, Đà Nẵng"
        />
      </section>

      <Footer />
    </>
  );
}
