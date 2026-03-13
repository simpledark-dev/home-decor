import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              Sofa May Đo & Nội Thất Hiện Đại
            </div>
            <h1 className="font-serif text-5xl lg:text-[64px] font-normal leading-[1.1] mb-8">
              <span className="text-gold italic">Đơn Giản / Hiện Đại / Đa Công Năng</span>
            </h1>
            <p className="text-base leading-relaxed text-body max-w-[440px] mb-12 font-light">
              The SEA chuyên sofa may đo và nội thất gỗ hiện đại tại Đà Nẵng.
              Thiết kế đơn giản, chất lượng bền đẹp, giá tối ưu — phù hợp cho mọi không gian sống.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/lien-he"
                className="bg-gold text-white px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-dark transition-colors duration-400"
              >
                Đặt Hàng Ngay
              </Link>
              <Link
                href="/du-an"
                className="border border-gold text-gold px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-gold hover:text-white transition-colors duration-400"
              >
                Xem Sản Phẩm
              </Link>
            </div>
          </div>
          <div
            className="h-[400px] lg:h-[600px] bg-cover bg-center bg-no-repeat bg-[#f5f5f0]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=960&q=80')",
            }}
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-cream py-20 px-10">
        <div className="reveal stagger max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { number: "5+", label: "Năm Kinh Nghiệm" },
            { number: "500+", label: "Sản Phẩm Đã Giao" },
            { number: "100%", label: "May Đo Theo Yêu Cầu" },
            { number: "95%", label: "Khách Hàng Hài Lòng" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-gold text-5xl font-semibold mb-2">
                {stat.number}
              </div>
              <div className="text-xs tracking-[3px] uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader label="Bộ Sưu Tập" title="Sản Phẩm" highlight="Nổi Bật" />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/du-an/${project.slug}`}
                className="group block hover-lift cursor-pointer"
              >
                <div className="overflow-hidden mb-6 img-zoom">
                  <div
                    className="img-cover h-[400px] bg-cover bg-center bg-no-repeat bg-[#f5f5f0]"
                    style={{ backgroundImage: `url('${project.img}')` }}
                  />
                </div>
                <div className="text-[11px] tracking-[3px] uppercase text-gold mb-2">
                  {project.category} — {project.area}
                </div>
                <h3 className="font-serif text-2xl font-medium group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="reveal text-center mt-16">
            <Link
              href="/du-an"
              className="inline-block border border-gold text-gold px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-gold hover:text-white transition-colors duration-400"
            >
              Xem Tất Cả Sản Phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark text-white py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader label="Dịch Vụ" title="Giải Pháp Nội Thất" highlight="Cho Bạn" light />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Sofa May Đo",
                desc: "Sofa được may đo theo đúng kích thước và phong cách bạn mong muốn. Chọn vải, chọn kiểu dáng — tất cả đều theo yêu cầu của bạn.",
              },
              {
                title: "Nội Thất Gỗ Hiện Đại",
                desc: "Bàn, ghế, kệ và tủ gỗ thiết kế đơn giản, hiện đại, đa công năng — phù hợp với mọi không gian sống.",
              },
              {
                title: "Tư Vấn & Thiết Kế",
                desc: "Tư vấn miễn phí về chọn sofa, bố trí nội thất và phối màu sắc để không gian nhà bạn vừa đẹp vừa tiện dụng.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-12 border border-white/10 hover:border-gold/50 transition-all duration-400"
              >
                <div className="text-gold text-2xl mb-6">✦</div>
                <h3 className="font-serif text-2xl font-medium mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-16">
            <Link
              href="/dich-vu"
              className="inline-block border border-gold text-gold px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-gold hover:text-white transition-colors duration-400"
            >
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-30 px-10">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader label="Quy Trình" title="Hành Trình" highlight="Sản Phẩm" />
          <div className="reveal stagger grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Tư Vấn", desc: "Lắng nghe nhu cầu, kích thước, chất liệu và phong cách bạn mong muốn." },
              { step: "02", title: "Thiết Kế", desc: "Phác thảo mẫu, lựa chọn vải/gỗ và xác nhận bản thiết kế." },
              { step: "03", title: "Sản Xuất", desc: "Đội ngũ thợ lành nghề tỉ mỉ may đo và hoàn thiện từng sản phẩm." },
              { step: "04", title: "Giao Hàng", desc: "Vận chuyển, lắp đặt tận nơi và hướng dẫn bảo quản." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-serif text-gold text-[56px] font-light leading-none mb-6">
                  {item.step}
                </div>
                <div className="bg-gold w-[30px] h-px mx-auto mb-6" />
                <h3 className="font-serif text-[22px] font-medium mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-30 px-10">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader label="Khách Hàng Nói Gì" title="Niềm Tin" highlight="Được Gửi Gắm" />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote: "Sofa nhà mình đặt may đo vừa khít với phòng khách. Vải đẹp, ngồi êm, cả nhà ai cũng thích. Giá cả rất hợp lý so với chất lượng.",
                name: "Nguyễn Minh Anh",
                title: "Khách hàng tại Sơn Trà",
              },
              {
                quote: "Mình đặt bộ bàn ghế gỗ và sofa cho căn hộ mới. Đội ngũ The SEA tư vấn rất nhiệt tình, giao hàng đúng hẹn. Sẽ quay lại khi cần thêm đồ.",
                name: "Trần Đức Huy",
                title: "Khách hàng tại Hải Châu",
              },
              {
                quote: "Đã mua sofa ở nhiều nơi nhưng chưa đâu ưng ý bằng The SEA. Kiểu dáng đơn giản mà sang, chất liệu tốt, giá lại phải chăng.",
                name: "Lê Thanh Hà",
                title: "Khách hàng tại Ngũ Hành Sơn",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white p-12">
                <div className="font-serif text-gold text-[64px] leading-none mb-4 opacity-30">
                  &ldquo;
                </div>
                <p className="text-[15px] leading-relaxed text-[#555] font-light mb-8 italic">
                  {t.quote}
                </p>
                <div className="bg-gold w-[30px] h-px mb-4" />
                <div className="font-serif text-base font-semibold mb-1">{t.name}</div>
                <div className="text-xs text-subtle tracking-wider">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Bạn Đang Tìm"
        highlight="Sofa Phù Hợp?"
        description="Liên hệ The SEA để được tư vấn miễn phí về sofa may đo và nội thất hiện đại. Chúng tôi sẵn sàng lắng nghe và giúp bạn tìm sản phẩm phù hợp nhất với không gian và ngân sách."
      />

      <Footer />
    </>
  );
}
