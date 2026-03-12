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
        highlight="Luxury House"
        description="Từ năm 2016, chúng tôi đã đồng hành cùng hàng trăm gia đình tại TP.HCM, mang đến những không gian sống đẹp và tiện nghi cho căn hộ và nhà phố — nơi mỗi góc nhỏ đều chứa đựng tâm huyết của đội ngũ."
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
                Luxury House ra đời vào năm 2016, khởi đầu từ một nhóm nhỏ gồm 3
                nhà thiết kế đầy đam mê tại Sài Gòn. Chúng tôi bắt đầu với một ước
                mơ giản dị: giúp các gia đình tại TP.HCM có được không gian sống đẹp,
                tiện nghi và mang đậm dấu ấn cá nhân.
              </p>
              <p className="text-base leading-relaxed font-light text-body">
                Sau hơn 8 năm, đội ngũ nhỏ ngày nào đã phát triển thành một studio
                hơn 20 thành viên chuyên tâm vào thiết kế nội thất nhà ở — từ căn hộ
                chung cư đến nhà phố. Hơn 200 dự án hoàn thành là minh chứng cho sự
                tin tưởng mà khách hàng đã dành cho chúng tôi.
              </p>
              <p className="text-base leading-relaxed font-light text-body">
                Điều làm nên Luxury House chính là sự gần gũi và tận tâm. Chúng tôi
                lắng nghe từng mong muốn của gia chủ, đồng hành từ bản vẽ đầu tiên
                đến ngày bàn giao. Mỗi dự án không chỉ là một công trình thiết kế mà
                còn là một câu chuyện về tổ ấm, về cuộc sống và về những giá trị mà
                gia đình bạn trân trọng.
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
                title: "Thấu Hiểu Cuộc Sống",
                desc: "Mỗi gia đình có một câu chuyện riêng, và chúng tôi luôn lắng nghe để thấu hiểu. Từ thói quen sinh hoạt, sở thích cá nhân đến ngân sách — tất cả đều được cân nhắc để mang đến không gian sống phù hợp nhất.",
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
                desc: "Chất lượng là nền tảng trong mọi việc chúng tôi làm. Từ lựa chọn vật liệu, tay nghề thi công đến dịch vụ hậu mãi — chúng tôi luôn nỗ lực mang đến kết quả tốt nhất cho gia đình bạn.",
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
              Luxury House là ngôi nhà chung của hơn 20 thành viên đam mê thiết kế —
              từ kiến trúc sư, nhà thiết kế nội thất đến đội ngũ quản lý dự án và thi công.
              Tuy không phải đội ngũ lớn nhất, nhưng chúng tôi tự hào về sự gắn kết và
              tinh thần trách nhiệm mà mỗi thành viên mang đến cho từng dự án.
            </p>
            <p className="text-base leading-relaxed font-light text-body max-w-[700px] mx-auto">
              Chúng tôi tin rằng sức mạnh của studio nằm ở con người. Vì vậy, chúng tôi
              luôn khuyến khích học hỏi, cập nhật xu hướng thiết kế mới và tạo môi trường
              làm việc cởi mở để mỗi thành viên đều có thể sáng tạo và phát triển cùng
              Luxury House.
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
