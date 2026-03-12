interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  description?: string;
}

export default function PageHero({ label, title, highlight, description }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 px-10 text-center">
      <div className="max-w-[800px] mx-auto">
        <div className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium">
          {label}
        </div>
        <h1 className="font-serif text-[56px] font-normal leading-tight mb-6">
          {title}{" "}
          <span className="text-gold italic">{highlight}</span>
        </h1>
        {description && (
          <p className="text-base leading-relaxed text-body font-light max-w-[560px] mx-auto">
            {description}
          </p>
        )}
        <div className="bg-gold h-px w-[60px] mx-auto mt-8" />
      </div>
    </section>
  );
}
