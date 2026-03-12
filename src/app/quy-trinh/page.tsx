import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    number: "01",
    title: "Tư Vấn Ban Đầu",
    description:
      "Chúng tôi bắt đầu bằng việc lắng nghe. Trong buổi gặp mặt đầu tiên, đội ngũ sẽ tìm hiểu sâu về nhu cầu, lối sống, sở thích cá nhân và ngân sách của bạn. Đây là bước nền tảng để chúng tôi hiểu rõ tầm nhìn của bạn về không gian lý tưởng, từ đó định hướng toàn bộ quá trình thiết kế phía sau.",
    duration: "1-2 buổi",
    deliverable: "Biên bản tư vấn chi tiết",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    number: "02",
    title: "Lên Ý Tưởng Thiết Kế",
    description:
      "Dựa trên những thông tin đã thu thập, đội ngũ sáng tạo sẽ phát triển các concept board, lựa chọn phong cách tổng thể và xây dựng mood board trực quan. Bạn sẽ được trải nghiệm tầm nhìn thiết kế trước khi bất kỳ chi tiết nào được hiện thực hóa, đảm bảo sự đồng thuận về hướng đi thẩm mỹ.",
    duration: "1-2 tuần",
    deliverable: "Concept board & phong cách tổng thể",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    number: "03",
    title: "Phát Triển Bản Vẽ Chi Tiết",
    description:
      "Từ ý tưởng được duyệt, chúng tôi tiến hành phát triển bản vẽ kỹ thuật 2D, hình ảnh 3D photo-realistic và bảng thông số vật liệu chi tiết. Mọi góc nhìn, mọi chi tiết được thể hiện rõ ràng giúp bạn hình dung chính xác không gian tương lai của mình.",
    duration: "2-3 tuần",
    deliverable: "Bản vẽ 2D/3D hoàn chỉnh",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    number: "04",
    title: "Lựa Chọn Vật Liệu",
    description:
      "Chúng tôi đồng hành cùng bạn trong việc lựa chọn từng loại vật liệu, nội thất và thiết bị. Với mạng lưới đối tác uy tín, chúng tôi đảm bảo chất lượng sản phẩm đáp ứng tiêu chuẩn cao nhất trong khi tối ưu chi phí và thời gian cung cấp.",
    duration: "1-2 tuần",
    deliverable: "Bảng vật liệu & báo giá chi tiết",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    number: "05",
    title: "Thi Công",
    description:
      "Đội ngũ thi công chuyên nghiệp tiến hành hiện thực hóa thiết kế với sự giám sát chặt chẽ từ kiến trúc sư. Chúng tôi duy trì báo cáo tiến độ hàng tuần, đảm bảo mọi chi tiết được thực hiện đúng theo bản vẽ và đạt chuẩn chất lượng cao nhất.",
    duration: "4-12 tuần (tùy quy mô)",
    deliverable: "Giám sát tiến độ hàng tuần",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    number: "06",
    title: "Hoàn Thiện Và Bàn Giao",
    description:
      "Giai đoạn cuối cùng bao gồm hoàn thiện các chi tiết trang trí, kiểm tra chất lượng toàn diện và bàn giao không gian hoàn hảo cho bạn. Chúng tôi cung cấp chế độ bảo hành 5 năm và hỗ trợ sau bàn giao để bạn hoàn toàn an tâm.",
    duration: "1 tuần",
    deliverable: "Bàn giao & bảo hành 5 năm",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
];

export default function QuyTrinhPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <PageHero
        label="Quy Trình Làm Việc"
        title="Hành Trình"
        highlight="Sáng Tạo"
        description="Chúng tôi tin rằng một quy trình bài bản là nền tảng của mọi dự án thành công. Từ buổi tư vấn đầu tiên đến ngày bàn giao, mọi bước đi đều được lập kế hoạch cẩn thận và thực hiện chuyên nghiệp."
      />

      {/* Process Steps */}
      {steps.map((step, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section key={step.number} className="py-30 px-10">
            <div className="reveal max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                <span className="font-serif text-[80px] font-normal text-gold/30 leading-none block mb-2">
                  {step.number}
                </span>
                <h2 className="font-serif text-[44px] font-normal text-dark mb-6 leading-tight">
                  {step.title}
                </h2>
                <p className="text-base leading-relaxed font-light text-body mb-8">
                  {step.description}
                </p>
                <div className="flex gap-10">
                  <div>
                    <span className="text-[11px] tracking-[4px] uppercase text-gold font-medium block mb-1">
                      Thời gian
                    </span>
                    <span className="text-sm text-dark font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] tracking-[4px] uppercase text-gold font-medium block mb-1">
                      Kết quả
                    </span>
                    <span className="text-sm text-dark font-medium">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div
                className={`aspect-[4/3] bg-cover bg-center bg-no-repeat bg-[#f5f5f0] ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
                style={{ backgroundImage: `url('${step.image}')` }}
              />
            </div>
          </section>
        );
      })}

      {/* Summary Timeline */}
      <section className="py-30 px-10 bg-cream">
        <div className="reveal max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              Tổng Quan Quy Trình
            </div>
            <h2 className="font-serif text-[44px] font-normal text-dark">
              Hành trình từ{" "}
              <span className="text-gold italic">ý tưởng</span> đến{" "}
              <span className="text-gold italic">hiện thực</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gold/30" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center relative">
                  <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-4 bg-cream relative z-10">
                    <span className="font-serif text-xl text-gold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-dark mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs text-muted font-light">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>

            {/* Total Duration */}
            <div className="text-center mt-16 pt-8 border-t border-gold/20">
              <span className="text-[11px] tracking-[4px] uppercase text-gold font-medium">
                Tổng thời gian
              </span>
              <p className="font-serif text-2xl text-dark mt-2">
                10 — 22 tuần
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Sẵn sàng bắt đầu"
        highlight="dự án của bạn?"
        description="Hãy để buổi tư vấn đầu tiên là bước khởi đầu cho không gian mơ ước của bạn. Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn."
      />

      <Footer />
    </>
  );
}
