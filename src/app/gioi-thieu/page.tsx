import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* Hero */}
      <PageHero
        label="Về Chúng Tôi"
        title="Câu Chuyện"
        highlight="Nội Thất Việt"
        description="Hơn 15 năm đồng hành cùng hàng trăm gia đình Việt, chúng tôi không ngừng theo đuổi sứ mệnh kiến tạo những không gian sống đẳng cấp, nơi nghệ thuật và cuộc sống hòa quyện."
      />

      {/* Studio Story */}
      <section className="py-30 px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <div
              className="h-[500px] bg-cover bg-center bg-no-repeat bg-[#f5f5f0]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')",
              }}
            />
          </div>
          <div className="reveal">
            <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              Câu Chuyện Của Chúng Tôi
            </div>
            <h2 className="font-serif text-[44px] font-normal mb-8">
              Khởi Nguồn Từ{" "}
              <span className="text-gold italic">Đam Mê</span>
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-relaxed font-light text-body">
                Thành lập vào năm 2009, Nội Thất Việt bắt đầu từ một studio nhỏ
                tại Sài Gòn với đội ngũ chỉ vỏn vẹn 5 người. Nhưng chúng tôi có
                chung một niềm đam mê cháy bỏng: tạo ra những không gian sống đẹp
                đẽ, phản ánh tinh hoa văn hóa Việt Nam trong bối cảnh hiện đại.
              </p>
              <p className="text-base leading-relaxed font-light text-body">
                Trải qua hơn một thập kỷ, studio nhỏ ngày nào đã phát triển thành
                một trong những đơn vị thiết kế nội thất cao cấp hàng đầu. Chúng tôi
                tự hào đã mang đến hàng trăm công trình từ căn hộ penthouse sang trọng,
                biệt thự hiện đại cho đến những không gian thương mại ấn tượng trên
                khắp Việt Nam.
              </p>
              <p className="text-base leading-relaxed font-light text-body">
                Điều làm nên sự khác biệt của Nội Thất Việt chính là khả năng kết hợp
                hài hòa giữa thẩm mỹ quốc tế và bản sắc Á Đông. Mỗi dự án không chỉ
                là một công trình thiết kế mà còn là một câu chuyện về con người,
                về cuộc sống và về những giá trị mà gia chủ trân trọng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="bg-cream py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Triết Lý"
            title="Thiết Kế Là"
            highlight="Nghệ Thuật Sống"
          />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Tinh Tế Trong Từng Chi Tiết",
                desc: "Chúng tôi tin rằng sự hoàn hảo nằm ở những chi tiết nhỏ nhất. Từ đường nét kiến trúc, chất liệu bề mặt cho đến cách ánh sáng rơi vào không gian — tất cả đều được cân nhắc kỹ lưỡng để tạo nên tổng thể hài hòa.",
              },
              {
                title: "Hài Hòa Giữa Đẹp & Thực Dụng",
                desc: "Một thiết kế đẹp nhưng không tiện dụng thì chưa phải là thiết kế tốt. Chúng tôi luôn đặt trải nghiệm sống của gia chủ làm trung tâm, đảm bảo mỗi không gian vừa đẹp mắt vừa tối ưu công năng sử dụng.",
              },
              {
                title: "Tôn Vinh Bản Sắc Việt",
                desc: "Trong dòng chảy hội nhập quốc tế, chúng tôi tự hào giữ gìn và tôn vinh nét đẹp văn hóa Việt. Chất liệu truyền thống, họa tiết bản địa được tái hiện một cách tinh tế trong ngôn ngữ thiết kế đương đại.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-12">
                <div className="text-gold text-2xl mb-6">&#10022;</div>
                <h3 className="font-serif text-2xl font-medium mb-4">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-body font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Numbers */}
      <section className="py-20 px-10">
        <div className="reveal stagger max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { number: "15+", label: "Năm Kinh Nghiệm" },
            { number: "500+", label: "Dự Án Hoàn Thành" },
            { number: "50+", label: "Giải Thưởng Thiết Kế" },
            { number: "98%", label: "Khách Hàng Hài Lòng" },
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

      {/* Core Values */}
      <section className="bg-dark text-white py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Giá Trị Cốt Lõi"
            title="Những Điều"
            highlight="Chúng Tôi Tin"
            light
          />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                num: "01",
                title: "Chất Lượng",
                desc: "Chất lượng là nền tảng trong mọi việc chúng tôi làm. Từ lựa chọn vật liệu, tay nghề thi công đến dịch vụ hậu mãi — tất cả đều phải đạt chuẩn cao nhất.",
              },
              {
                num: "02",
                title: "Sáng Tạo",
                desc: "Mỗi dự án là một cơ hội để đổi mới. Chúng tôi không ngừng tìm tòi những giải pháp thiết kế độc đáo, mang đến sự khác biệt cho từng không gian.",
              },
              {
                num: "03",
                title: "Tận Tâm",
                desc: "Chúng tôi coi mỗi ngôi nhà như chính ngôi nhà của mình. Sự tận tâm thể hiện qua từng cuộc trao đổi, từng bản vẽ và từng ngày thi công trên công trường.",
              },
              {
                num: "04",
                title: "Chính Trực",
                desc: "Minh bạch trong báo giá, trung thực trong tư vấn và cam kết giữ đúng lời hứa. Đó là cách chúng tôi xây dựng niềm tin với mỗi khách hàng.",
              },
            ].map((value) => (
              <div key={value.num} className="p-8 border border-white/10">
                <div className="font-serif text-gold text-[56px] font-light leading-none mb-6">
                  {value.num}
                </div>
                <div className="bg-gold w-[30px] h-px mb-6" />
                <h3 className="font-serif text-[22px] font-medium mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-30 px-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="reveal">
            <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              Con Người
            </div>
            <h2 className="font-serif text-[44px] font-normal mb-8">
              Đội Ngũ Của{" "}
              <span className="text-gold italic">Chúng Tôi</span>
            </h2>
            <div className="bg-gold line-grow h-px mx-auto mb-12" />
            <p className="text-base leading-relaxed font-light text-body max-w-[700px] mx-auto mb-6">
              Nội Thất Việt quy tụ hơn 50 chuyên gia trong các lĩnh vực kiến trúc,
              thiết kế nội thất, quản lý dự án và thi công. Đội ngũ của chúng tôi bao gồm
              những kiến trúc sư tốt nghiệp từ các trường đại học danh tiếng trong và ngoài
              nước, cùng đội ngũ thợ lành nghề với hàng chục năm kinh nghiệm.
            </p>
            <p className="text-base leading-relaxed font-light text-body max-w-[700px] mx-auto">
              Chúng tôi tin rằng sức mạnh của một studio nằm ở con người. Vì vậy, chúng tôi
              đầu tư không ngừng vào đào tạo, cập nhật xu hướng thiết kế quốc tế và tạo môi
              trường làm việc sáng tạo để mỗi thành viên đều có thể phát huy tối đa năng lực
              của mình.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Hãy để chúng tôi"
        highlight="đồng hành cùng bạn"
        description="Dù bạn đang xây mới hay cải tạo, đội ngũ chuyên gia của chúng tôi sẵn sàng lắng nghe và biến ý tưởng của bạn thành hiện thực. Hãy bắt đầu hành trình kiến tạo không gian sống trong mơ ngay hôm nay."
      />

      <Footer />
    </>
  );
}
