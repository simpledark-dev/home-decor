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
    slug: "sofa-chilldi",
    title: "Sofa Chilldi",
    category: "Sofa",
    location: "Phòng khách",
    area: "W240 x D95 x H65 cm",
    style: "Modular sàn — Earthy tone",
    shortDesc:
      "Sofa module sàn với chất vải mềm mịn, tông xanh olive ấm áp, mang lại cảm giác thư giãn tối đa cho phòng khách hiện đại.",
    description: [
      "Sofa Chilldi là sản phẩm đặc trưng của The SEA — nơi sự thoải mái được đặt lên hàng đầu. Thiết kế module cho phép bạn tự do sắp xếp các khối ghế theo ý thích: ngồi thẳng, nằm dài, hay xếp thành hình chữ L đều được. Chất liệu vải bọc polyester pha linen cao cấp có khả năng chống bám bụi, dễ vệ sinh, phù hợp với khí hậu nóng ẩm tại Đà Nẵng.",
      "Phần đệm ngồi sử dụng mút cao su non kết hợp bông gòn siliconized, tạo độ êm vừa phải — không quá cứng, không quá mềm. Tông màu xanh olive earthy giúp Chilldi dễ dàng hòa hợp với nhiều phong cách nội thất khác nhau, từ Scandinavian đến Japandi hay Boho.",
      "The SEA thiết kế Chilldi dành cho những ai yêu thích sự gần gũi, thoải mái ngay tại phòng khách. Với triết lý đơn giản, hiện đại và giá cả hợp lý, Chilldi là lựa chọn lý tưởng cho các gia đình trẻ tại Đà Nẵng muốn tạo không gian sống vừa đẹp vừa thực dụng.",
    ],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Mình mua Chilldi về cho phòng khách căn hộ ở Sơn Trà, cả nhà ai cũng thích. Mấy đứa nhỏ rất hay nằm lăn trên sofa xem phim. Vải bọc dễ lau chùi, sau nửa năm vẫn như mới. Giá hợp lý so với chất lượng, cảm ơn The SEA!",
      name: "Nguyễn Thị Hạnh",
      title: "Khách hàng tại Đà Nẵng",
    },
  },
  {
    slug: "sofa-may-cloud",
    title: "Sofa Mây Cloud",
    category: "Sofa",
    location: "Phòng khách",
    area: "W280 x D180 x H82 cm",
    style: "Scandinavian tối giản",
    shortDesc:
      "Sofa góc chữ L với chất vải kem sáng, phong cách Scandinavian thanh lịch, lý tưởng cho phòng khách rộng.",
    description: [
      "Sofa Mây Cloud lấy cảm hứng từ những đám mây nhẹ nhàng trôi trên bầu trời biển Đà Nẵng. Thiết kế chữ L rộng rãi với đệm dày, chất vải kem sáng tạo cảm giác mềm mại, nhẹ nhàng cho không gian phòng khách. Khung gỗ thông tự nhiên chắc chắn, chân ghế gỗ sồi thanh mảnh mang đậm phong cách Bắc Âu.",
      "Phần đệm lưng có thể tháo rời để vệ sinh, rất tiện lợi cho các gia đình có trẻ nhỏ hoặc thú cưng. Lớp vải bọc ngoài được xử lý chống thấm nước nhẹ, giúp bạn yên tâm hơn trong sinh hoạt hàng ngày. Mây Cloud có kích thước vừa đủ cho 4-5 người ngồi thoải mái.",
      "Với triết lý thiết kế của The SEA — đơn giản nhưng tinh tế, hiện đại nhưng gần gũi — Mây Cloud là sản phẩm dành cho những ai muốn một chiếc sofa vừa đẹp vừa bền, không cần phải chi quá nhiều. Đây là mẫu sofa bán chạy nhất tại showroom The SEA Đà Nẵng.",
    ],
    img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Sofa Mây Cloud đẹp lắm, đúng kiểu Bắc Âu mình thích mà giá không quá cao. Giao hàng nhanh, đội ngũ The SEA lắp đặt tận nơi rất chu đáo. Phòng khách nhà mình bây giờ như trong tạp chí luôn!",
      name: "Trần Minh Khoa",
      title: "Khách hàng tại Đà Nẵng",
    },
  },
  {
    slug: "sofa-bini",
    title: "Sofa Bini",
    category: "Sofa",
    location: "Phòng khách",
    area: "W160 x D85 x H78 cm",
    style: "Compact hiện đại",
    shortDesc:
      "Sofa 2 chỗ ngồi nhỏ gọn, đa dạng màu sắc, thiết kế dành riêng cho căn hộ nhỏ và không gian hạn chế.",
    description: [
      "Sofa Bini được The SEA thiết kế dành riêng cho những căn hộ nhỏ, phòng trọ hay studio tại Đà Nẵng — nơi diện tích không nhiều nhưng vẫn cần một chỗ ngồi thoải mái, đẹp mắt. Với chiều ngang chỉ 160cm, Bini vừa vặn trong hầu hết các không gian nhỏ mà vẫn đảm bảo 2 người ngồi rộng rãi.",
      "Bini có nhiều lựa chọn màu sắc: xám đá, xanh dương pastel, hồng đất, vàng mù tạt và xanh rêu. Khung thép sơn tĩnh điện siêu bền, đệm mút D40 cao cấp giữ form tốt theo thời gian. Chân ghế gỗ cao 15cm giúp dễ dàng vệ sinh bên dưới và tạo cảm giác thanh thoát cho không gian.",
      "Triết lý của The SEA là ai cũng xứng đáng có nội thất đẹp, bất kể diện tích nhà lớn hay nhỏ. Bini chính là minh chứng cho điều đó — nhỏ gọn nhưng không hề đơn điệu, giá thành phải chăng nhưng chất lượng không thua kém bất kỳ sản phẩm nào trên thị trường.",
    ],
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80",
    ],
  },
  {
    slug: "sofa-luoi-pebble",
    title: "Sofa Lười Pebble",
    category: "Sofa",
    location: "Đa năng",
    area: "W120 x D110 x H70 cm",
    style: "Casual — Bean bag",
    shortDesc:
      "Sofa lười kiểu bean bag với form tròn như viên sỏi, êm ái tuyệt đối, phù hợp mọi góc thư giãn trong nhà.",
    description: [
      "Sofa Lười Pebble mang hình dáng viên sỏi tròn trịa, là sản phẩm dành cho những ai muốn thư giãn tối đa mà không cần quan tâm đến tư thế ngồi. Pebble ôm lấy cơ thể bạn, tự động điều chỉnh theo mọi tư thế — ngồi, nằm, hay cuộn tròn đọc sách đều thoải mái.",
      "Bên trong Pebble là hạt xốp EPS cao cấp kết hợp mút vụn memory foam, tạo độ êm và đàn hồi vượt trội so với bean bag thông thường. Vỏ bọc ngoài bằng vải nhung mịn có khóa kéo, có thể tháo giặt dễ dàng. The SEA cung cấp Pebble với các màu: xám khói, kem sữa, xanh navy và nâu đất.",
      "Pebble là sản phẩm đa năng nhất của The SEA — đặt ở phòng khách, phòng ngủ, góc đọc sách, hay thậm chí ban công đều phù hợp. Nhẹ chỉ khoảng 5kg, bạn có thể dễ dàng di chuyển Pebble đến bất kỳ đâu trong nhà mình muốn.",
    ],
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=1200&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Mua Pebble cho góc đọc sách trong phòng ngủ, không ngờ lại thích đến vậy. Mềm, êm, ôm sát người, mỗi tối mình đều ngồi đây đọc sách rồi ngủ quên luôn. Con gái mình cũng mê, giành ngồi suốt!",
      name: "Lê Thị Thanh Trúc",
      title: "Khách hàng tại Đà Nẵng",
    },
  },
  {
    slug: "ke-sach-modular",
    title: "Kệ Sách Modular",
    category: "Nội Thất Gỗ",
    location: "Phòng khách",
    area: "W180 x D35 x H200 cm",
    style: "Modular gỗ tự nhiên",
    shortDesc:
      "Kệ sách gỗ module tự do sắp xếp, kết hợp trưng bày và lưu trữ, phù hợp với mọi phong cách nội thất.",
    description: [
      "Kệ Sách Modular của The SEA được thiết kế theo triết lý \"mua một lần, dùng mãi mãi\". Hệ thống các khối gỗ vuông, chữ nhật có thể lắp ghép tự do theo ý thích, cho phép bạn tạo ra hàng chục cấu hình khác nhau tùy theo không gian và nhu cầu sử dụng. Bạn có thể bắt đầu với vài module rồi mua thêm dần theo thời gian.",
      "Chất liệu gỗ cao su tự nhiên đã qua xử lý chống mối mọt, phủ sơn PU bảo vệ bề mặt mà vẫn giữ nguyên vân gỗ tự nhiên đẹp mắt. Mỗi module chịu lực tối đa 15kg, đủ để đặt sách, chậu cây, khung ảnh hay các vật trang trí. Hệ thống chốt liên kết bằng thép không gỉ đảm bảo kệ luôn chắc chắn.",
      "The SEA tin rằng nội thất tốt là nội thất có thể thay đổi cùng cuộc sống của bạn. Kệ Sách Modular có thể là kệ sách hôm nay, kệ trưng bày ngày mai, hay kệ đồ chơi cho bé khi gia đình có thêm thành viên mới. Đó là vẻ đẹp của thiết kế module — linh hoạt, thực dụng và luôn phù hợp.",
    ],
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=1200&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80",
    ],
    testimonial: {
      quote:
        "Mình rất thích concept modular của kệ này. Ban đầu mua 6 module cho phòng khách, sau đó mua thêm 4 module nữa xếp thành kệ cho phòng làm việc. Gỗ đẹp, gia công tỉ mỉ, xứng đáng với giá tiền. Sẽ ủng hộ The SEA dài dài!",
      name: "Phạm Đức Anh",
      title: "Khách hàng tại Đà Nẵng",
    },
  },
  {
    slug: "ban-tra-moc",
    title: "Bàn Trà Mộc",
    category: "Nội Thất Gỗ",
    location: "Phòng khách",
    area: "W100 x D55 x H42 cm",
    style: "Tối giản tự nhiên",
    shortDesc:
      "Bàn trà gỗ nguyên khối với bề mặt giữ nguyên vân gỗ tự nhiên, thiết kế tối giản, mang hơi thở mộc mạc vào phòng khách.",
    description: [
      "Bàn Trà Mộc là lời tuyên ngôn của The SEA về vẻ đẹp tự nhiên — không sơn phủ cầu kỳ, không chi tiết thừa, chỉ có gỗ nguyên bản với đường vân tự nhiên độc nhất vô nhị trên mỗi chiếc bàn. Mặt bàn gỗ tràm bông vàng nguyên tấm dày 3cm, được chà nhám mịn và phủ dầu linseed bảo vệ tự nhiên.",
      "Chân bàn hình thang đơn giản bằng gỗ cùng loại, tạo sự vững chãi mà vẫn thanh thoát. Thiết kế thấp kiểu Nhật với chiều cao 42cm, phù hợp để kết hợp với sofa thấp hoặc ngồi bệt trên thảm. Bàn Trà Mộc nặng khoảng 12kg, đủ chắc chắn để sử dụng hàng ngày mà vẫn có thể di chuyển khi cần.",
      "The SEA chọn gỗ tràm bông vàng vì đây là loại gỗ bền, chịu nước tốt và có vân gỗ rất đẹp — phù hợp với khí hậu Đà Nẵng. Mỗi chiếc Bàn Trà Mộc đều được thợ mộc lành nghề gia công thủ công, đảm bảo chất lượng từng chi tiết nhỏ nhất.",
    ],
    img: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=1200&q=80",
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
