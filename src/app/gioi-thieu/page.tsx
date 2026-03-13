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
        highlight="The SEA"
        description="The SEA — hành trình mang đến nội thất đơn giản, hiện đại và đa công năng cho mọi gia đình tại Đà Nẵng. Từ sofa may đo đến nội thất gỗ, chúng tôi tin rằng đồ nội thất đẹp không nhất thiết phải đắt đỏ."
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
                The SEA bắt đầu từ một xưởng nhỏ, ra đời từ tình yêu với thiết kế
                đơn giản và hiện đại. Được sáng lập bởi một nhóm thợ trẻ đầy nhiệt
                huyết, chúng tôi tin rằng nội thất đẹp nên dành cho tất cả mọi người
                — đơn giản, hiện đại, đa công năng, giá tối ưu.
              </p>
              <p className="text-base leading-relaxed font-light text-body">
                Khởi đầu với dịch vụ sofa may đo, The SEA dần mở rộng sang nội thất
                gỗ và các sản phẩm nội thất đa dạng khác. Chúng tôi là một đội ngũ
                nhỏ nhưng đầy đam mê, không phải nhà máy lớn — mỗi sản phẩm đều được
                chăm chút bằng tay nghề và tâm huyết thực sự.
              </p>
              <p className="text-base leading-relaxed font-light text-body">
                Tọa lạc tại Đà Nẵng, The SEA phục vụ khách hàng trên khắp miền Trung
                Việt Nam. Chúng tôi lắng nghe từng yêu cầu, đồng hành từ khâu tư vấn
                đến ngày bàn giao — để mỗi sản phẩm không chỉ là đồ nội thất, mà còn
                là một phần của tổ ấm bạn.
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
            title="Triết Lý"
            highlight="Thiết Kế"
          />
          <div className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Đơn Giản Là Đẹp",
                desc: "Less is more. Chúng tôi theo đuổi những đường nét gọn gàng, loại bỏ mọi trang trí không cần thiết. Mỗi sản phẩm của The SEA đều hướng đến vẻ đẹp tinh tế từ sự tối giản.",
              },
              {
                title: "Chất Lượng Trong Tầm Tay",
                desc: "Nội thất chất lượng không nhất thiết phải đắt đỏ. Chúng tôi tối ưu quy trình sản xuất, lựa chọn vật liệu thông minh để mang đến sản phẩm tốt nhất với mức giá hợp lý nhất cho mọi gia đình.",
              },
              {
                title: "Thiết Kế Cho Cuộc Sống",
                desc: "Mỗi sản phẩm được thiết kế cho cuộc sống thực — không chỉ để đẹp mà còn để sử dụng hàng ngày. Từ sofa đa công năng đến bàn gỗ chắc chắn, tất cả đều phục vụ nhu cầu thực tế của gia đình bạn.",
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
                title: "Tay Nghề Thợ",
                desc: "Mỗi sản phẩm đều được làm bằng tay nghề của những người thợ lành nghề. Từ khâu chọn gỗ, cắt vải đến đóng khung — chúng tôi đặt chất lượng thi công lên hàng đầu.",
              },
              {
                num: "02",
                title: "Giá Cả Minh Bạch",
                desc: "Không phí ẩn, không markup quá mức. Chúng tôi báo giá rõ ràng từ đầu và cam kết mang đến sản phẩm chất lượng với mức giá tối ưu nhất.",
              },
              {
                num: "03",
                title: "Chăm Sóc Khách Hàng",
                desc: "Từ lúc tư vấn đến sau bàn giao, chúng tôi luôn đồng hành cùng bạn. Bảo hành tận tâm, hỗ trợ nhanh chóng — vì sự hài lòng của bạn là thành công của chúng tôi.",
              },
              {
                num: "04",
                title: "Bền Vững",
                desc: "Chúng tôi ưu tiên sử dụng vật liệu bền vững, hạn chế lãng phí trong sản xuất. Nội thất tốt là nội thất dùng được lâu dài, không cần thay thế liên tục.",
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
              The SEA là xưởng nhỏ với đội ngũ hơn 10 thợ lành nghề — từ thợ mộc, thợ
              bọc sofa đến nhân viên tư vấn và thiết kế. Chúng tôi không phải nhà máy
              lớn, nhưng tự hào về tay nghề và sự tận tâm mà mỗi người thợ mang đến
              cho từng sản phẩm.
            </p>
            <p className="text-base leading-relaxed font-light text-body max-w-[700px] mx-auto">
              Ở The SEA, mỗi người đều yêu nghề và luôn trau dồi kỹ năng. Chúng tôi
              làm việc như một gia đình, cùng nhau tạo ra những sản phẩm nội thất mà
              chúng tôi thực sự tự hào — và khách hàng thực sự yêu thích.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Hãy để chúng tôi"
        highlight="đồng hành cùng bạn"
        description="Dù bạn cần sofa may đo, nội thất gỗ hay bọc lại sofa cũ, đội ngũ The SEA sẵn sàng lắng nghe và tư vấn. Hãy liên hệ để bắt đầu tạo nên không gian sống đẹp và tiện nghi cho gia đình bạn."
      />

      <Footer />
    </>
  );
}
