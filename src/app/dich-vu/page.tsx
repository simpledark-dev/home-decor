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
      "Biến căn hộ của bạn thành không gian sống lý tưởng với thiết kế tối ưu hóa diện tích và công năng. Chúng tôi mang đến giải pháp nội thất thông minh, phù hợp với phong cách sống hiện đại của gia đình bạn.",
    offerings: [
      "Thiết kế nội thất căn hộ chung cư cao cấp",
      "Tối ưu hóa không gian cho căn hộ nhỏ",
      "Thiết kế phong cách Scandinavian, Minimalist, Japandi",
      "Tư vấn chọn vật liệu và nội thất phù hợp ngân sách",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    number: "02",
    title: "Thiết Kế Nhà Phố",
    description:
      "Tạo nên những ngôi nhà phố đẹp, tiện nghi và đầy cá tính. Đội ngũ kiến trúc sư của chúng tôi sẽ giúp bạn khai thác tối đa tiềm năng của từng tầng, từng góc nhỏ trong ngôi nhà.",
    offerings: [
      "Thiết kế kiến trúc và nội thất nhà phố trọn gói",
      "Giải pháp lấy sáng tự nhiên cho nhà phố hẹp",
      "Thiết kế sân vườn, ban công và không gian xanh",
      "Phối hợp phong thủy trong thiết kế hiện đại",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    number: "03",
    title: "Thiết Kế Biệt Thự",
    description:
      "Kiến tạo những không gian sống đẳng cấp, sang trọng dành cho biệt thự và penthouse. Mỗi thiết kế là một tác phẩm nghệ thuật, phản ánh gu thẩm mỹ tinh tế và phong cách sống thượng lưu.",
    offerings: [
      "Thiết kế biệt thự nghỉ dưỡng và biệt thự phố",
      "Nội thất luxury với vật liệu nhập khẩu cao cấp",
      "Thiết kế hồ bơi, sân vườn và không gian ngoài trời",
      "Hệ thống smarthome và tiện ích hiện đại",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    number: "04",
    title: "Cải Tạo Không Gian Sống",
    description:
      "Làm mới và nâng cấp không gian sống hiện tại của bạn mà không cần xây dựng lại từ đầu. Chúng tôi giúp bạn cải tạo thông minh, tiết kiệm chi phí mà vẫn đạt hiệu quả thẩm mỹ cao nhất.",
    offerings: [
      "Cải tạo và nâng cấp nội thất toàn diện",
      "Thay đổi layout và bố trí lại không gian",
      "Nâng cấp hệ thống chiếu sáng và điện nước",
      "Tư vấn phong cách mới cho không gian cũ",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    number: "05",
    title: "Thi Công Nội Thất Trọn Gói",
    description:
      "Dịch vụ thi công trọn gói từ A đến Z, đảm bảo mọi chi tiết được thực hiện chính xác theo bản thiết kế. Đội ngũ thi công chuyên nghiệp, giám sát chặt chẽ và bàn giao đúng tiến độ cam kết.",
    offerings: [
      "Thi công nội thất theo thiết kế đã duyệt",
      "Cung cấp và lắp đặt nội thất trọn gói",
      "Giám sát chất lượng công trình nghiêm ngặt",
      "Bảo hành dài hạn và hỗ trợ bảo trì sau thi công",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

const values = [
  {
    number: "15+",
    title: "Năm Kinh Nghiệm",
    description:
      "Hơn 15 năm hoạt động trong lĩnh vực thiết kế và thi công nội thất, mang đến sự am hiểu sâu sắc về thị trường.",
  },
  {
    number: "50+",
    title: "Đội Ngũ Chuyên Gia",
    description:
      "Hơn 50 kiến trúc sư, nhà thiết kế và kỹ sư giàu kinh nghiệm, luôn sẵn sàng phục vụ khách hàng.",
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
        description="Chúng tôi cung cấp dịch vụ thiết kế và thi công nội thất toàn diện, từ tư vấn ý tưởng đến hoàn thiện công trình, đáp ứng mọi nhu cầu về không gian sống và làm việc."
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
