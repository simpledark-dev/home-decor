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
    slug: "penthouse-thao-dien",
    title: "Penthouse Thảo Điền",
    category: "Căn Hộ Cao Cấp",
    location: "Quận 2, TP.HCM",
    area: "280m²",
    style: "Hiện đại tối giản",
    shortDesc: "Không gian sống đẳng cấp với tầm nhìn panorama thành phố, kết hợp phong cách hiện đại và nét sang trọng cổ điển.",
    description: [
      "Penthouse Thảo Điền là dự án thiết kế nội thất cao cấp tọa lạc tại vị trí đắc địa nhất Quận 2. Với diện tích 280m² và tầm nhìn panorama tuyệt đẹp, chúng tôi đã tạo nên một không gian sống vừa hiện đại vừa ấm cúng.",
      "Thiết kế lấy cảm hứng từ phong cách minimal luxury — sử dụng gam màu trung tính kết hợp vật liệu tự nhiên như đá marble Calacatta, gỗ óc chó và da Ý nhập khẩu. Mỗi chi tiết đều được chau chuốt để tạo nên sự hài hòa giữa công năng và thẩm mỹ.",
      "Phòng khách rộng rãi với trần cao 4m, tận dụng tối đa ánh sáng tự nhiên qua hệ thống cửa kính lớn. Khu vực bếp và phòng ăn được thiết kế mở, tạo không gian giao lưu lý tưởng cho gia đình.",
    ],
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80",
    ],
    testimonial: {
      quote: "Đội ngũ Nội Thất Việt đã biến ngôi nhà của chúng tôi thành một tác phẩm nghệ thuật. Mỗi góc nhỏ đều mang lại cảm giác sang trọng và ấm cúng.",
      name: "Nguyễn Minh Anh",
      title: "Chủ nhân Penthouse",
    },
  },
  {
    slug: "biet-thu-phu-my-hung",
    title: "Biệt Thự Phú Mỹ Hưng",
    category: "Biệt Thự",
    location: "Quận 7, TP.HCM",
    area: "450m²",
    style: "Indochine đương đại",
    shortDesc: "Biệt thự phong cách Indochine đương đại, kết hợp nét đẹp truyền thống Việt Nam và sự tiện nghi hiện đại.",
    description: [
      "Biệt Thự Phú Mỹ Hưng là minh chứng cho triết lý thiết kế của chúng tôi — kết hợp hài hòa giữa văn hóa Việt và tiện nghi đương đại. Với diện tích 450m² trải rộng trên 3 tầng, mỗi không gian đều mang một câu chuyện riêng.",
      "Phong cách Indochine đương đại được thể hiện qua việc sử dụng vật liệu truyền thống như gỗ lim, gạch bông và mây tre, kết hợp với đường nét hiện đại và hệ thống ánh sáng tinh tế. Sân vườn nhiệt đới tạo nên sự kết nối hoàn hảo giữa nội thất và ngoại thất.",
      "Khu vực sinh hoạt chung được thiết kế mở, tận dụng tối đa không gian xanh với hệ thống cửa kính trượt lớn, mang thiên nhiên vào từng góc sống.",
    ],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09cf56b9?w=1200&q=80",
    ],
    testimonial: {
      quote: "Phong cách thiết kế tinh tế, hiểu rõ xu hướng quốc tế nhưng vẫn giữ được nét Việt. Tôi đã giới thiệu cho rất nhiều bạn bè.",
      name: "Lê Thanh Hà",
      title: "Chủ nhân Biệt thự",
    },
  },
  {
    slug: "villa-da-lat",
    title: "Villa Đà Lạt",
    category: "Nghỉ Dưỡng",
    location: "Đà Lạt, Lâm Đồng",
    area: "350m²",
    style: "Scandinavian ấm áp",
    shortDesc: "Không gian nghỉ dưỡng cao cấp hòa mình với thiên nhiên núi rừng Đà Lạt.",
    description: [
      "Villa Đà Lạt là dự án nghỉ dưỡng cao cấp nằm giữa rừng thông xanh mát. Thiết kế lấy cảm hứng từ phong cách Scandinavian, tận dụng tối đa ánh sáng tự nhiên và vật liệu bản địa.",
      "Không gian nội thất được thiết kế với tông màu ấm áp — gỗ sồi tự nhiên, vải linen và len cashmere tạo nên cảm giác ấm cúng giữa tiết trời se lạnh Đà Lạt. Hệ thống cửa kính lớn mở ra khung cảnh rừng thông bao la.",
      "Lò sưởi đá tự nhiên là điểm nhấn trung tâm của phòng khách, kết hợp với hệ thống chiếu sáng ấm tạo nên bầu không khí thân mật và thư giãn.",
    ],
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
    ],
  },
  {
    slug: "can-ho-vinhomes",
    title: "Căn Hộ Vinhomes Central Park",
    category: "Căn Hộ",
    location: "Bình Thạnh, TP.HCM",
    area: "120m²",
    style: "Hiện đại tinh tế",
    shortDesc: "Căn hộ hiện đại với thiết kế thông minh, tối ưu hóa không gian sống cho gia đình trẻ.",
    description: [
      "Căn hộ Vinhomes Central Park là dự án thiết kế dành cho gia đình trẻ năng động. Với diện tích 120m², chúng tôi tập trung vào giải pháp thông minh để tối ưu hóa từng mét vuông.",
      "Phong cách hiện đại tinh tế với tông trắng - xám kết hợp điểm nhấn gỗ ấm áp. Hệ thống tủ âm tường và nội thất đa năng giúp không gian luôn gọn gàng và thoáng đãng.",
      "Phòng ngủ master được thiết kế như một spa riêng tư với phòng tắm mở, bồn tắm freestanding và hệ thống chiếu sáng tạo bầu không khí thư giãn.",
    ],
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80",
    ],
    testimonial: {
      quote: "Sự chuyên nghiệp và tận tâm của đội ngũ khiến tôi hoàn toàn yên tâm. Dự án hoàn thành đúng tiến độ với chất lượng vượt xa mong đợi.",
      name: "Trần Đức Huy",
      title: "Giám đốc Công ty BĐS",
    },
  },
  {
    slug: "nha-pho-quan-3",
    title: "Nhà Phố Quận 3",
    category: "Nhà Phố",
    location: "Quận 3, TP.HCM",
    area: "180m²",
    style: "Industrial chic",
    shortDesc: "Nhà phố phong cách Industrial chic, kết hợp gạch trần và thép với nội thất tinh tế.",
    description: [
      "Nhà phố Quận 3 là dự án cải tạo một ngôi nhà cũ thành không gian sống hiện đại mang phong cách Industrial chic. Giữ nguyên cấu trúc gạch trần và khung thép nguyên bản, chúng tôi thổi vào đó sự tinh tế và ấm cúng.",
      "Tầng trệt được thiết kế mở hoàn toàn với phòng khách, bếp và khu ăn uống liên thông. Trần cao lộ kèo thép và hệ thống ống đồng tạo nên vẻ đẹp thô mộc đặc trưng.",
      "Các tầng trên là không gian riêng tư với 3 phòng ngủ, mỗi phòng mang một cá tính riêng nhưng vẫn thống nhất trong tổng thể thiết kế.",
    ],
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09cf56b9?w=1200&q=80",
    ],
  },
  {
    slug: "resort-phu-quoc",
    title: "Resort Phú Quốc",
    category: "Thương mại",
    location: "Phú Quốc, Kiên Giang",
    area: "2,500m²",
    style: "Tropical luxury",
    shortDesc: "Khu nghỉ dưỡng tropical luxury với thiết kế nội thất lấy cảm hứng từ đại dương.",
    description: [
      "Resort Phú Quốc là dự án thương mại quy mô lớn nhất của chúng tôi — thiết kế nội thất cho 30 phòng suite và khu vực công cộng của một khu nghỉ dưỡng 5 sao bên bờ biển.",
      "Phong cách Tropical luxury được thể hiện qua việc sử dụng vật liệu tự nhiên bản địa — gỗ teak, đá san hô, mây tre đan kết hợp với vải linen và cotton hữu cơ. Bảng màu lấy cảm hứng từ đại dương: xanh ngọc, cát trắng và san hô.",
      "Mỗi phòng suite đều có ban công riêng hướng biển, với nội thất được thiết kế để khách có thể tận hưởng trải nghiệm nghỉ dưỡng đích thực — từ giường ngủ cloud comfort đến phòng tắm ngoài trời.",
    ],
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
