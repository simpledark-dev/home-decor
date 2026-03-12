interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, highlight, light }: SectionHeaderProps) {
  return (
    <div className="reveal text-center mb-20">
      <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
        {label}
      </div>
      <h2 className={`font-serif text-[44px] font-normal mb-4 ${light ? "text-white" : "text-dark"}`}>
        {title}{" "}
        <span className="text-gold italic">{highlight}</span>
      </h2>
      <div className="bg-gold line-grow h-px mx-auto" />
    </div>
  );
}
