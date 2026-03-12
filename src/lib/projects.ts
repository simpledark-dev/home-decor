export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  area: string;
  style: string;
  shortDesc: string;
  description: string[];
  img: string;
  gallery: string[];
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
}

export const projects: Project[] = [
  {
    slug: "can-ho-vinhomes-hai-van",
    title: "Căn Hộ Vinhomes Hải Vân",
    category: "Căn Hộ",
    location: "Sơn Trà, Đà Nẵng",
    area: "95m²",
    style: "Hiện đại tối giản",
    shortDesc:
      "Căn hộ 3 phòng ngủ được thiết kế theo phong cách hiện đại tối giản, tối ưu không gian sống cho gia đình trẻ.",
    description: [
      "Căn hộ Vinhomes Hải Vân là dự án thiết kế nội thất cho một gia đình trẻ với hai con nhỏ. Với diện tích 95m², đội ngũ Luxury House đã tập trung vào việc tối ưu hóa từng góc không gian, đảm bảo vừa đẹp mắt vừa thực dụng cho cuộc sống hàng ngày.",
      "Phong cách hiện đại tối giản được thể hiện qua tông màu trắng kem kết hợp gỗ sồi tự nhiên, tạo cảm giác rộng rãi và thoáng đãng. Hệ thống tủ âm tường thông minh giúp tận dụng tối đa diện tích lưu trữ mà không làm chật không gian. Phòng khách liên thông với bếp và khu ăn uống, tạo nên một không gian sinh hoạt chung mở và thoải mái.",
      "Phòng ngủ master được bố trí gọn gàng với tủ quần áo walk-in nhỏ và bàn trang điểm tích hợp. Hai phòng ngủ còn lại dành cho các bé được thiết kế linh hoạt, có thể thay đổi theo độ tuổi của trẻ.",
    ],
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Nhà mình diện tích không lớn nhưng sau khi Luxury House thiết kế xong, ai đến cũng khen rộng rãi và sáng sủa. Vợ chồng mình rất hài lòng, đặc biệt là hệ thống tủ âm tường rất tiện lợi.",
      name: "Nguyễn Thanh Tùng",
      title: "Chủ căn hộ",
    },
  },
  {
    slug: "nha-pho-hai-chau",
    title: "Nhà Phố Hải Châu",
    category: "Nhà Phố",
    location: "Hải Châu, Đà Nẵng",
    area: "160m²",
    style: "Đương đại ấm áp",
    shortDesc:
      "Nhà phố 3 tầng tại Hải Châu với phong cách đương đại ấm áp, hài hòa giữa thẩm mỹ và công năng.",
    description: [
      "Nhà phố tại Hải Châu là dự án cải tạo toàn bộ nội thất cho một ngôi nhà 3 tầng. Gia chủ là một cặp vợ chồng trung niên mong muốn có không gian sống thoải mái, gần gũi thiên nhiên nhưng vẫn hiện đại và tiện nghi.",
      "Luxury House đã lựa chọn phong cách đương đại ấm áp với gam màu nâu đất, be và xanh olive nhẹ nhàng. Vật liệu chủ đạo là gỗ óc chó kết hợp đá tự nhiên và vải bọc cao cấp. Tầng trệt được thiết kế mở với phòng khách, bếp và phòng ăn liên thông, hướng ra khoảng sân nhỏ phía sau nhà.",
      "Tầng 2 gồm phòng ngủ master rộng rãi với phòng tắm riêng và phòng thay đồ. Tầng 3 là hai phòng ngủ cho con và một phòng làm việc nhỏ. Sân thượng được tận dụng làm khu vườn mini và góc thư giãn buổi tối.",
    ],
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09cf56b9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Mình rất bất ngờ vì đội ngũ hiểu ý mình nhanh lắm, chỉ sau buổi trao đổi đầu tiên là đã nắm được phong cách mình muốn. Nhà hoàn thiện đúng như mình mơ ước, ở vào là thấy thư giãn ngay.",
      name: "Phạm Thị Mai Lan",
      title: "Chủ nhà",
    },
  },
  {
    slug: "can-ho-azura-son-tra",
    title: "Căn Hộ Azura Sơn Trà",
    category: "Căn Hộ",
    location: "Sơn Trà, Đà Nẵng",
    area: "75m²",
    style: "Scandinavian",
    shortDesc:
      "Căn hộ 2 phòng ngủ phong cách Scandinavian nhẹ nhàng, tối ưu ánh sáng tự nhiên cho không gian nhỏ gọn.",
    description: [
      "Căn hộ Azura Sơn Trà là thử thách thú vị cho đội ngũ Luxury House — làm sao để 75m² trở nên rộng rãi, thoáng đãng mà vẫn đầy đủ tiện nghi cho một bạn trẻ độc thân. Phong cách Scandinavian được lựa chọn vì sự tối giản, sáng sủa và ấm áp đặc trưng.",
      "Tông màu trắng và gỗ tự nhiên sáng là chủ đạo, kết hợp với các điểm nhấn bằng vải linen và cây xanh. Phòng khách nhỏ nhắn nhưng đủ chỗ cho sofa, kệ sách và bàn làm việc nhờ bố trí thông minh. Bếp được thiết kế chữ L gọn gàng với quầy bar nhỏ thay thế bàn ăn truyền thống.",
      "Phòng ngủ chính ấm cúng với giường gỗ thấp kiểu Nhật, tủ quần áo trượt tiết kiệm diện tích. Phòng ngủ thứ hai được biến thành phòng đọc sách kiêm phòng khách cho bạn bè khi ghé chơi.",
    ],
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Căn hộ mình nhỏ thôi nhưng Luxury House thiết kế xong trông rộng hẳn ra. Bạn bè đến chơi ai cũng hỏi xin số của đội thiết kế. Giá cả cũng hợp lý, phù hợp với ngân sách của mình.",
      name: "Lê Hoàng Nam",
      title: "Chủ căn hộ",
    },
  },
  {
    slug: "nha-pho-ngu-hanh-son",
    title: "Nhà Phố Ngũ Hành Sơn",
    category: "Nhà Phố",
    location: "Ngũ Hành Sơn, Đà Nẵng",
    area: "200m²",
    style: "Hiện đại Việt Nam",
    shortDesc:
      "Nhà phố 4 tầng tại Ngũ Hành Sơn với phong cách hiện đại kết hợp chất liệu truyền thống Việt Nam, dành cho gia đình ba thế hệ.",
    description: [
      "Nhà phố Ngũ Hành Sơn là dự án thiết kế cho một gia đình ba thế hệ — ông bà, bố mẹ và hai con nhỏ. Thách thức lớn nhất là làm sao để mỗi thành viên đều có không gian riêng tư nhưng vẫn duy trì sự gắn kết gia đình. Luxury House đã đề xuất phong cách hiện đại Việt Nam, vừa quen thuộc với thế hệ lớn tuổi vừa hợp gu giới trẻ.",
      "Tầng trệt là không gian chung với phòng khách rộng, bếp mở và phòng ăn cho cả gia đình. Vật liệu gỗ tự nhiên kết hợp gạch bông hoa văn truyền thống tạo nên nét đẹp vừa hiện đại vừa thân thuộc. Tầng 1 dành riêng cho ông bà với phòng ngủ rộng, phòng tắm tiện lợi và ban công nhỏ trồng cây.",
      "Tầng 2 là không gian riêng của bố mẹ, tầng 3 dành cho các con với phòng ngủ và phòng học. Sân thượng được thiết kế làm khu giặt phơi và vườn rau nhỏ cho ông bà chăm sóc.",
    ],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09cf56b9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Nhà có ba thế hệ nên yêu cầu khá nhiều, nhưng đội ngũ Luxury House xử lý rất khéo. Ba mẹ mình rất thích phòng ngủ tầng 1 vì tiện lợi và thoáng mát. Cảm ơn đội ngũ rất nhiều!",
      name: "Trần Văn Minh",
      title: "Chủ nhà",
    },
  },
  {
    slug: "can-ho-monarchy",
    title: "Căn Hộ Monarchy",
    category: "Căn Hộ",
    location: "Sơn Trà, Đà Nẵng",
    area: "120m²",
    style: "Cổ điển sang trọng",
    shortDesc:
      "Căn hộ 3 phòng ngủ phong cách cổ điển sang trọng với nội thất cao cấp, dành cho gia đình yêu thích sự trang nhã.",
    description: [
      "Căn hộ Monarchy là dự án dành cho một gia đình yêu thích phong cách cổ điển châu Âu. Với diện tích 120m², Luxury House đã tạo nên một không gian sống sang trọng nhưng không quá nặng nề, phù hợp với khí hậu và lối sống tại Đà Nẵng.",
      "Tông màu chủ đạo là trắng ngà, vàng đồng và xanh navy tạo nên sự trang nhã. Nội thất sử dụng gỗ sơn men kết hợp vải nhung và da thật. Phòng khách có sofa cổ điển cùng bàn trà mặt đá marble, tạo điểm nhấn cho toàn bộ căn hộ. Hệ thống đèn chùm và đèn bàn được chọn lựa kỹ càng để phù hợp với tổng thể.",
      "Phòng ngủ master mang phong cách boutique hotel với đầu giường bọc nệm, rèm cửa hai lớp và thảm trải sàn dày dặn. Phòng tắm ốp đá marble trắng với phụ kiện mạ vàng đồng tạo cảm giác như đang ở khách sạn 5 sao.",
    ],
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
    ],
  },
  {
    slug: "nha-pho-cam-le",
    title: "Nhà Phố Cẩm Lệ",
    category: "Nhà Phố",
    location: "Cẩm Lệ, Đà Nẵng",
    area: "180m²",
    style: "Tối giản sang trọng",
    shortDesc:
      "Nhà phố 3 tầng tại Cẩm Lệ với phong cách tối giản sang trọng, tập trung vào chất liệu cao cấp và đường nét tinh gọn.",
    description: [
      "Nhà phố Cẩm Lệ là dự án thiết kế cho một cặp vợ chồng trẻ thành đạt. Gia chủ yêu thích sự tối giản nhưng vẫn muốn không gian sống thể hiện được gu thẩm mỹ và chất lượng cuộc sống. Luxury House đã đề xuất phong cách minimal luxury — ít chi tiết nhưng mỗi chi tiết đều tinh tế.",
      "Bảng màu trung tính với trắng, xám và đen được làm ấm bằng điểm nhấn gỗ walnut và đá travertine. Phòng khách rộng rãi với sofa module kiểu dáng đơn giản, bàn cà phê đá tự nhiên và kệ tivi âm tường. Bếp được trang bị đầy đủ thiết bị nhập khẩu với mặt bàn đá nguyên khối.",
      "Điểm đặc biệt của ngôi nhà là giếng trời chạy dọc cầu thang, đưa ánh sáng tự nhiên xuống tận tầng trệt. Cây xanh được bố trí dọc giếng trời tạo nên một khoảng xanh sống động giữa lòng nhà.",
    ],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09cf56b9?w=1200&q=80",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
