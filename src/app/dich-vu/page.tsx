import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    number: "01",
    title: "Sofa May Đo",
    description:
      "Sofa được may đo theo đúng kích thước, chất liệu vải, màu sắc và phong cách bạn yêu thích. Từ sofa 2 chỗ nhỏ gọn cho căn hộ đến sofa chữ L rộng rãi cho phòng khách lớn, The SEA đảm bảo sản phẩm vừa vặn hoàn hảo với không gian của bạn.",
    offerings: [
      "May đo sofa theo kích thước chính xác của không gian",
      "Tự chọn chất liệu vải: vải bố, vải nhung, da công nghiệp, vải chống thấm",
      "Đa dạng kiểu dáng: sofa băng, sofa góc L, sofa bed đa năng",
      "Thiết kế đơn giản, hiện đại, phù hợp mọi phong cách nội thất",
    ],
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    number: "02",
    title: "Nội Thất Gỗ Theo Yêu Cầu",
    description:
      "Sản xuất nội thất gỗ theo yêu cầu: kệ sách, bàn ăn, kệ TV, bàn làm việc, tủ quần áo. Thiết kế đơn giản, hiện đại với chất liệu gỗ tự nhiên và gỗ công nghiệp cao cấp, tối ưu công năng sử dụng và phù hợp ngân sách.",
    offerings: [
      "Kệ sách, kệ trang trí thiết kế tối giản theo kích thước yêu cầu",
      "Bàn ăn, bàn làm việc gỗ tự nhiên và gỗ công nghiệp",
      "Kệ TV, tủ giày, tủ quần áo đa năng tiết kiệm không gian",
      "Sử dụng gỗ tự nhiên và phụ kiện chất lượng cao, bền đẹp",
    ],
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
  },
  {
    number: "03",
    title: "Tư Vấn Thiết Kế Không Gian",
    description:
      "Dịch vụ tư vấn miễn phí giúp bạn lên kế hoạch bố trí nội thất phù hợp với diện tích và phong cách sống. Đội ngũ The SEA sẽ đến tận nơi đo đạc, tư vấn chọn sofa, bàn ghế, kệ tủ sao cho không gian vừa đẹp vừa tiện dụng.",
    offerings: [
      "Tư vấn miễn phí tại nhà, đo đạc không gian thực tế",
      "Gợi ý bố trí nội thất tối ưu cho từng loại phòng",
      "Tư vấn phối màu, chất liệu phù hợp phong cách chung",
      "Hỗ trợ lên phương án nội thất trọn gói theo ngân sách",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    number: "04",
    title: "Bọc Lại & Làm Mới Sofa",
    description:
      "Sofa cũ, bạc màu, xẹp mút? The SEA nhận bọc lại sofa với vải mới, thay mút mới, giúp chiếc sofa yêu thích của bạn trở lại như mới. Tiết kiệm chi phí so với mua mới mà vẫn đảm bảo thẩm mỹ và độ êm ái.",
    offerings: [
      "Bọc lại sofa với hàng trăm mẫu vải để lựa chọn",
      "Thay mút mới, nâng cấp độ êm và độ đàn hồi",
      "Sửa chữa khung sofa, thay chân sofa và phụ kiện",
      "Nhận và giao tận nơi, hoàn thành trong 5-7 ngày",
    ],
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
  },
  {
    number: "05",
    title: "Giao Hàng & Lắp Đặt",
    description:
      "Dịch vụ giao hàng và lắp đặt tận nơi trên toàn Đà Nẵng và các tỉnh lân cận. Đội ngũ vận chuyển chuyên nghiệp, cẩn thận trong từng khâu đóng gói, vận chuyển và lắp đặt, đảm bảo sản phẩm đến tay bạn trong tình trạng hoàn hảo.",
    offerings: [
      "Giao hàng miễn phí nội thành Đà Nẵng",
      "Vận chuyển đến Quảng Nam, Huế và các tỉnh lân cận",
      "Lắp đặt tại nhà, kê đặt đúng vị trí theo yêu cầu",
      "Hướng dẫn sử dụng và bảo quản sản phẩm sau lắp đặt",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const values = [
  {
    number: "5+",
    title: "Năm Kinh Nghiệm",
    description:
      "Hơn 5 năm kinh nghiệm sản xuất sofa và nội thất tại Đà Nẵng, am hiểu nhu cầu thực tế của khách hàng.",
  },
  {
    number: "✦",
    title: "Đội Ngũ Thợ Lành Nghề",
    description:
      "Đội ngũ thợ may, thợ mộc tay nghề cao, tận tâm trong từng đường kim mũi chỉ và chi tiết sản phẩm.",
  },
  {
    number: "02",
    title: "Năm Bảo Hành",
    description:
      "Cam kết bảo hành 2 năm cho khung và kết cấu sản phẩm, đảm bảo chất lượng bền vững theo thời gian.",
  },
  {
    number: "✦",
    title: "Giao Hàng Miễn Phí Nội Thành",
    description:
      "Miễn phí giao hàng và lắp đặt trong nội thành Đà Nẵng, giúp bạn tiết kiệm chi phí và thời gian.",
  },
];

export default function DichVuPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <PageHero
        label="Dịch Vụ"
        title="Giải Pháp Nội Thất"
        highlight="Cho Mọi Không Gian"
        description="The SEA mang đến giải pháp nội thất may đo — từ sofa, bàn ghế đến kệ tủ gỗ — với triết lý đơn giản, hiện đại, nhiều công năng và giá tối ưu. Chúng tôi đồng hành cùng bạn từ ý tưởng đến sản phẩm hoàn thiện."
      />

      {/* Main Services */}
      <section className="py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Dịch Vụ Của Chúng Tôi"
            title="Đa Dạng"
            highlight="Giải Pháp"
          />

          <div className="space-y-24">
            {services.map((service, index) => {
              const isOdd = index % 2 === 0;
              return (
                <div
                  key={service.number}
                  className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                  {/* Image */}
                  <div
                    className={`h-[400px] bg-cover bg-center ${
                      isOdd ? "lg:order-1" : "lg:order-2"
                    }`}
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  {/* Content */}
                  <div
                    className={`${
                      isOdd ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="font-serif text-[64px] font-normal text-gold/20 leading-none">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-[32px] font-normal text-dark mt-2 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light text-body mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.offerings.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-light text-body"
                        >
                          <span className="text-gold text-xs mt-0.5">
                            ✦
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Tại Sao Chọn Chúng Tôi"
            title="Giá Trị"
            highlight="Khác Biệt"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((item, index) => (
              <div
                key={index}
                className="reveal stagger text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="font-serif text-[48px] font-normal text-gold mb-4 leading-none">
                  {item.number}
                </div>
                <h4 className="font-serif text-xl font-normal text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed font-light text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Sẵn Sàng Đặt Hàng"
        highlight="Nội Thất Mới?"
        description="Hãy để The SEA đồng hành cùng bạn kiến tạo không gian sống đẹp và tiện nghi. Liên hệ ngay để nhận tư vấn miễn phí và báo giá nhanh chóng."
      />

      <Footer />
    </>
  );
}
