import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    number: "01",
    title: "Tư Vấn",
    description:
      "Trao đổi nhu cầu, kích thước không gian, phong cách yêu thích và ngân sách dự kiến. Đội ngũ The SEA lắng nghe kỹ để hiểu chính xác bạn cần gì — từ chiếc sofa cho phòng khách nhỏ đến bộ nội thất trọn gói cho căn hộ mới. Bạn có thể tư vấn tại showroom, qua Zalo hoặc chúng tôi đến tận nhà đo đạc miễn phí.",
    duration: "1 buổi",
    deliverable: "Xác nhận nhu cầu & kích thước",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    number: "02",
    title: "Thiết Kế",
    description:
      "Phác thảo mẫu sản phẩm dựa trên nhu cầu đã trao đổi. Bạn được chọn kiểu dáng, chất liệu vải hoặc gỗ, màu sắc và các chi tiết tùy chỉnh. The SEA gửi bản vẽ hoặc hình ảnh minh họa để bạn xác nhận trước khi sản xuất, đảm bảo sản phẩm cuối cùng đúng như mong đợi.",
    duration: "1-3 ngày",
    deliverable: "Bản vẽ & mẫu vải/gỗ xác nhận",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
  },
  {
    number: "03",
    title: "Báo Giá",
    description:
      "Báo giá chi tiết, minh bạch từng hạng mục: chất liệu, nhân công, vận chuyển. Không phát sinh chi phí ngoài báo giá đã thống nhất. The SEA cam kết giá tối ưu nhất cho chất lượng tương đương trên thị trường, giúp bạn yên tâm về ngân sách.",
    duration: "1 ngày",
    deliverable: "Báo giá chi tiết & hợp đồng",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    number: "04",
    title: "Sản Xuất",
    description:
      "Đội ngũ thợ lành nghề tiến hành cắt may sofa, đóng nội thất gỗ tại xưởng sản xuất. Mỗi sản phẩm được làm thủ công tỉ mỉ, từ khung gỗ chắc chắn, lớp mút êm ái đến đường may vải chỉnh chu. Chúng tôi cập nhật tiến độ để bạn theo dõi.",
    duration: "7-15 ngày",
    deliverable: "Sản phẩm hoàn thiện tại xưởng",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    number: "05",
    title: "Kiểm Tra",
    description:
      "Kiểm tra chất lượng kỹ càng trước khi giao hàng: kiểm tra khung, mút, đường may, bề mặt gỗ, phụ kiện và kích thước tổng thể. Mỗi sản phẩm phải đạt tiêu chuẩn chất lượng của The SEA trước khi được đóng gói cẩn thận để vận chuyển.",
    duration: "1 ngày",
    deliverable: "Xác nhận đạt chuẩn chất lượng",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
  },
  {
    number: "06",
    title: "Giao Hàng",
    description:
      "Vận chuyển và lắp đặt tận nơi bởi đội ngũ chuyên nghiệp. Sản phẩm được đóng gói cẩn thận, kê đặt đúng vị trí theo yêu cầu. Sau khi lắp đặt, chúng tôi hướng dẫn cách sử dụng và bảo quản để sản phẩm luôn bền đẹp theo thời gian.",
    duration: "1 ngày",
    deliverable: "Giao hàng & bảo hành 2 năm",
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
        label="Quy Trình"
        title="Hành Trình Từ"
        highlight="Ý Tưởng Đến Sản Phẩm"
        description="The SEA xây dựng quy trình sản xuất nội thất rõ ràng và minh bạch — từ buổi tư vấn đầu tiên đến ngày giao hàng tận nhà. Mỗi bước đều được thực hiện tỉ mỉ để đảm bảo sản phẩm đạt chất lượng cao nhất với giá tối ưu."
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
              <span className="text-gold italic">sản phẩm</span>
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
                10 — 20 ngày
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Sẵn sàng đặt hàng"
        highlight="nội thất mới?"
        description="Hãy để buổi tư vấn đầu tiên là bước khởi đầu cho không gian sống đẹp và tiện nghi. Đội ngũ The SEA luôn sẵn sàng lắng nghe và đồng hành cùng bạn."
      />

      <Footer />
    </>
  );
}
