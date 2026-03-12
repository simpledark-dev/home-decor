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
    title: "Thiết Kế Nội Thất Căn Hộ",
    description:
      "Biến căn hộ của bạn thành tổ ấm tiện nghi với thiết kế tối ưu diện tích và công năng sử dụng hàng ngày. Chúng tôi lắng nghe nhu cầu thực tế của gia đình bạn để mang đến giải pháp nội thất thông minh, phù hợp với ngân sách và lối sống.",
    offerings: [
      "Thiết kế nội thất căn hộ chung cư 1-3 phòng ngủ",
      "Tối ưu hóa không gian lưu trữ cho căn hộ nhỏ",
      "Thiết kế phong cách Scandinavian, Minimalist, Japandi",
      "Tư vấn chọn vật liệu và nội thất phù hợp ngân sách gia đình",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    number: "02",
    title: "Thiết Kế Nội Thất Nhà Phố",
    description:
      "Tạo nên không gian sống ấm cúng và tiện nghi cho cả gia đình trong ngôi nhà phố của bạn. Chúng tôi giúp bạn khai thác tối đa tiềm năng của từng tầng, từng góc nhỏ để mỗi ngày ở nhà đều thoải mái.",
    offerings: [
      "Thiết kế nội thất nhà phố trọn gói từ 1-4 tầng",
      "Giải pháp lấy sáng tự nhiên cho nhà phố hẹp",
      "Bố trí không gian sinh hoạt chung phù hợp gia đình nhiều thế hệ",
      "Phối hợp phong thủy trong thiết kế hiện đại",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    number: "03",
    title: "Cải Tạo & Nâng Cấp Không Gian",
    description:
      "Làm mới ngôi nhà hiện tại của bạn mà không cần xây dựng lại từ đầu. Chúng tôi giúp bạn cải tạo thông minh, tiết kiệm chi phí nhưng vẫn thay đổi rõ rệt diện mạo và công năng không gian sống hàng ngày.",
    offerings: [
      "Cải tạo và nâng cấp nội thất căn hộ, nhà phố",
      "Thay đổi layout và bố trí lại không gian phù hợp nhu cầu mới",
      "Nâng cấp hệ thống chiếu sáng, điện nước và tủ kệ",
      "Tư vấn phong cách mới cho không gian cũ, tận dụng đồ nội thất hiện có",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    number: "04",
    title: "Thiết Kế Phòng Bếp & Phòng Tắm",
    description:
      "Hai không gian quan trọng nhất trong mọi ngôi nhà — nơi gia đình quây quần mỗi bữa cơm và nơi bạn thư giãn sau ngày dài. Chúng tôi thiết kế phòng bếp và phòng tắm vừa đẹp vừa thật sự tiện dụng cho sinh hoạt hàng ngày.",
    offerings: [
      "Thiết kế phòng bếp mở và bếp khép kín theo nhu cầu gia đình",
      "Tối ưu hệ thống tủ bếp, kệ lưu trữ và bàn đảo",
      "Thiết kế phòng tắm tiện nghi, chống ẩm và dễ vệ sinh",
      "Tư vấn chọn thiết bị bếp và vệ sinh phù hợp ngân sách",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    number: "05",
    title: "Thi Công Nội Thất Trọn Gói",
    description:
      "Dịch vụ thi công trọn gói từ A đến Z cho căn hộ và nhà phố, đảm bảo mọi chi tiết được thực hiện chính xác theo bản thiết kế. Đội ngũ thợ thi công tay nghề cao, giám sát chặt chẽ và bàn giao đúng tiến độ để gia đình bạn sớm dọn về nhà mới.",
    offerings: [
      "Thi công nội thất căn hộ và nhà phố theo thiết kế đã duyệt",
      "Cung cấp và lắp đặt nội thất trọn gói, đồng bộ phong cách",
      "Giám sát chất lượng công trình và báo cáo tiến độ hàng tuần",
      "Bảo hành 5 năm và hỗ trợ bảo trì sau thi công",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

const values = [
  {
    number: "8+",
    title: "Năm Kinh Nghiệm",
    description:
      "Hơn 8 năm chuyên tâm thiết kế và thi công nội thất nhà ở, am hiểu sâu nhu cầu thực tế của gia đình Việt.",
  },
  {
    number: "20+",
    title: "Đội Ngũ Chuyên Gia",
    description:
      "Hơn 20 kiến trúc sư, nhà thiết kế và thợ thi công tay nghề cao, tận tâm đồng hành cùng từng dự án.",
  },
  {
    number: "05",
    title: "Năm Bảo Hành",
    description:
      "Cam kết bảo hành 5 năm cho toàn bộ công trình, đảm bảo chất lượng bền vững theo thời gian.",
  },
  {
    number: "100%",
    title: "Cam Kết Đúng Tiến Độ",
    description:
      "Luôn bàn giao công trình đúng thời gian cam kết, giúp khách hàng yên tâm và chủ động trong kế hoạch.",
  },
];

export default function DichVuPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <PageHero
        label="Dịch Vụ"
        title="Giải Pháp Thiết Kế"
        highlight="Chuyên Nghiệp"
        description="Luxury House cung cấp dịch vụ thiết kế và thi công nội thất chuyên biệt cho căn hộ và nhà phố, từ tư vấn ý tưởng đến hoàn thiện công trình, giúp gia đình bạn có không gian sống đẹp và tiện nghi."
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
        title="Sẵn Sàng Bắt Đầu"
        highlight="Dự Án Mới?"
        description="Hãy để chúng tôi đồng hành cùng bạn trong hành trình kiến tạo không gian sống hoàn hảo. Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia."
      />

      <Footer />
    </>
  );
}
