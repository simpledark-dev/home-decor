import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/40 pt-20 pb-12 px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl text-white mb-4">
              The <span className="text-gold">SEA</span>
            </div>
            <p className="text-sm leading-relaxed font-light max-w-[280px]">
              Sofa may đo và nội thất hiện đại tại Đà Nẵng. Đơn giản, hiện đại, nhiều công năng, giá tối ưu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[11px] tracking-[2px] uppercase text-gold mb-5 font-medium">
              Điều hướng
            </div>
            {[
              { label: "Trang chủ", href: "/" },
              { label: "Sản phẩm", href: "/du-an" },
              { label: "Dịch vụ", href: "/dich-vu" },
              { label: "Về chúng tôi", href: "/gioi-thieu" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm mb-3 text-white/40 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="text-[11px] tracking-[2px] uppercase text-gold mb-5 font-medium">
              Dịch vụ
            </div>
            {[
              "Sofa may đo",
              "Nội thất gỗ",
              "Tư vấn thiết kế",
              "Giao hàng & lắp đặt",
            ].map((item) => (
              <Link
                key={item}
                href="/dich-vu"
                className="block text-sm mb-3 text-white/40 hover:text-gold transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] tracking-[2px] uppercase text-gold mb-5 font-medium">
              Liên hệ
            </div>
            <div className="text-sm leading-[2.2]">
              <div>K634 Trưng Nữ Vương</div>
              <div>Hải Châu, Đà Nẵng</div>
              <div>093 555 82 52</div>
              <div>hello@thesea.vn</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs tracking-wider">
            © 2024 The SEA.
          </div>
          <div className="flex gap-6">
            {["Facebook", "Instagram", "Pinterest"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs tracking-wider text-white/40 hover:text-gold transition-colors duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
