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
              Studio Thiết Kế Nội Thất Cao Cấp
            </div>
            <h1 className="font-serif text-5xl lg:text-[64px] font-normal leading-[1.1] mb-8">
              Kiến Tạo
              <br />
              Không Gian
              <br />
              <span className="text-gold italic">Đẳng Cấp</span>
            </h1>
            <p className="text-base leading-relaxed text-body max-w-[440px] mb-12 font-light">
              Chúng tôi chuyên thiết kế và thi công nội thất cho căn hộ chung cư và
              nhà phố tại Đà Nẵng, mang đến không gian sống tinh tế và trọn vẹn cho gia đình bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/lien-he"
                className="bg-gold text-white px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-dark transition-colors duration-400"
              >
                Đặt Lịch Tư Vấn
              </Link>
              <Link
                href="/du-an"
                className="border border-gold text-gold px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-gold hover:text-white transition-colors duration-400"
              >
                Xem Dự Án
              </Link>
            </div>
          </div>
          <div
            className="h-[400px] lg:h-[600px] bg-cover bg-center bg-no-repeat bg-[#f5f5f0]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=960&q=80')",
            }}
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-cream py-20 px-10">
        <div className="reveal stagger max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { number: "8+", label: "Năm Kinh Nghiệm" },
            { number: "200+", label: "Dự Án Hoàn Thành" },
            { number: "100%", label: "Cam Kết Chất Lượng" },
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
          <SectionHeader label="Portfolio" title="Dự Án" highlight="Nổi Bật" />
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
              Xem Tất Cả Dự Án
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark text-white py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader label="Dịch Vụ" title="Giải Pháp Thiết Kế" highlight="Toàn Diện" light />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Thiết Kế Nội Thất",
                desc: "Thiết kế nội thất trọn gói cho căn hộ chung cư và nhà phố, từ ý tưởng đến bản vẽ 3D chi tiết theo phong cách riêng của bạn.",
              },
              {
                title: "Thi Công Trọn Gói",
                desc: "Thi công nội thất nhà ở với đội ngũ thợ lành nghề, quy trình giám sát chặt chẽ, đảm bảo đúng tiến độ và chất lượng.",
              },
              {
                title: "Tư Vấn Phong Cách",
                desc: "Tư vấn phong cách sống, phong thủy và lựa chọn vật liệu phù hợp để tạo nên không gian sống lý tưởng cho gia đình.",
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
          <SectionHeader label="Quy Trình" title="Hành Trình" highlight="Sáng Tạo" />
          <div className="reveal stagger grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Tư Vấn", desc: "Lắng nghe nhu cầu, tìm hiểu phong cách sống và ngân sách của bạn." },
              { step: "02", title: "Thiết Kế", desc: "Phát triển concept, bản vẽ 2D/3D và lựa chọn vật liệu phù hợp." },
              { step: "03", title: "Thi Công", desc: "Triển khai thi công với đội ngũ chuyên nghiệp, giám sát chặt chẽ." },
              { step: "04", title: "Bàn Giao", desc: "Hoàn thiện, bàn giao và hỗ trợ bảo hành dài hạn cho công trình." },
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
                quote: "Luxury House đã biến căn hộ của chúng tôi thành một không gian sống tuyệt vời. Mỗi góc nhỏ đều mang lại cảm giác sang trọng và ấm cúng.",
                name: "Nguyễn Minh Anh",
                title: "Chủ căn hộ Sơn Trà",
              },
              {
                quote: "Sự chuyên nghiệp và tận tâm của đội ngũ khiến tôi hoàn toàn yên tâm. Căn nhà hoàn thành đúng tiến độ với chất lượng vượt xa mong đợi.",
                name: "Trần Đức Huy",
                title: "Gia chủ nhà phố Hải Châu",
              },
              {
                quote: "Phong cách thiết kế tinh tế, hiểu rõ nhu cầu thực tế của gia đình. Tôi đã giới thiệu cho rất nhiều bạn bè và người thân.",
                name: "Lê Thanh Hà",
                title: "Chủ căn hộ chung cư Ngũ Hành Sơn",
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
        title="Biến Giấc Mơ Thành"
        highlight="Hiện Thực"
        description="Đặt lịch tư vấn miễn phí với đội ngũ chuyên gia của chúng tôi. Hãy để chúng tôi lắng nghe và kiến tạo không gian sống trong mơ của bạn."
      />

      <Footer />
    </>
  );
}
