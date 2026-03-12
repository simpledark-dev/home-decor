import Link from "next/link";

interface CTABannerProps {
  label?: string;
  title: string;
  highlight: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  label = "Bắt Đầu Hành Trình",
  title,
  highlight,
  description,
  buttonText = "Nhận Tư Vấn Miễn Phí",
  buttonHref = "/lien-he",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-dark to-[#2a2a2a] py-30 px-10 text-center">
      <div className="reveal max-w-[700px] mx-auto">
        <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
          {label}
        </div>
        <h2 className="font-serif text-5xl font-normal text-white mb-6 leading-tight">
          {title}
          <br />
          <span className="text-gold italic">{highlight}</span>
        </h2>
        <p className="text-base leading-relaxed text-white/60 mb-12 font-light">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-gold text-white px-12 py-4 text-[13px] tracking-[2px] uppercase font-medium hover:bg-white hover:text-dark transition-colors duration-400"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
