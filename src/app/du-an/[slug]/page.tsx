import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.img})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-end">
          <div className="max-w-[1400px] mx-auto w-full px-10 pb-16">
            <div className="reveal">
              <span className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium inline-block">
                {project.category}
              </span>
              <h1 className="font-serif text-[56px] font-normal text-white leading-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Product Info Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10 py-8">
          <div className="reveal flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-[11px] tracking-[4px] uppercase text-gold mb-2 font-medium">
                Không gian
              </div>
              <div className="text-dark font-light text-base">
                {project.location}
              </div>
            </div>
            <div className="w-px h-10 bg-gold/30 hidden md:block" />
            <div className="text-center">
              <div className="text-[11px] tracking-[4px] uppercase text-gold mb-2 font-medium">
                Kích thước
              </div>
              <div className="text-dark font-light text-base">
                {project.area}
              </div>
            </div>
            <div className="w-px h-10 bg-gold/30 hidden md:block" />
            <div className="text-center">
              <div className="text-[11px] tracking-[4px] uppercase text-gold mb-2 font-medium">
                Phong cách
              </div>
              <div className="text-dark font-light text-base">
                {project.style}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-30 px-10">
        <div className="max-w-[800px] mx-auto">
          <div className="reveal">
            <span className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium inline-block">
              Chi Tiết Sản Phẩm
            </span>
          </div>
          {project.description.map((paragraph, index) => (
            <p
              key={index}
              className="reveal stagger text-base leading-relaxed font-light text-body mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-30 px-10 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium inline-block">
              Hình Ảnh Sản Phẩm
            </span>
            <h2 className="font-serif text-[44px] font-normal text-dark">
              Bộ Sưu Tập
            </h2>
          </div>
          <div className="space-y-6">
            {project.gallery.map((image, index) => {
              if (index % 3 === 0) {
                return (
                  <div key={index} className="reveal stagger">
                    <div className="img-zoom overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Hình ${index + 1}`}
                        className="w-full h-[500px] object-cover img-cover"
                      />
                    </div>
                  </div>
                );
              }
              if (index % 3 === 1) {
                const nextImage = project.gallery[index + 1];
                return (
                  <div
                    key={index}
                    className="reveal stagger grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="img-zoom overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Hình ${index + 1}`}
                        className="w-full h-[400px] object-cover img-cover"
                      />
                    </div>
                    {nextImage && (
                      <div className="img-zoom overflow-hidden">
                        <img
                          src={nextImage}
                          alt={`${project.title} - Hình ${index + 2}`}
                          className="w-full h-[400px] object-cover img-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-30 px-10 bg-cream">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="reveal">
              <span className="text-gold font-serif text-[80px] leading-none block mb-6">
                &ldquo;
              </span>
              <blockquote className="font-serif text-[24px] font-normal text-dark leading-relaxed mb-8 italic">
                {project.testimonial.quote}
              </blockquote>
              <div className="w-12 h-px bg-gold mx-auto mb-6" />
              <p className="text-dark font-medium text-base">
                {project.testimonial.name}
              </p>
              <p className="text-muted text-sm font-light mt-1">
                {project.testimonial.title}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTABanner
        label="Liên Hệ"
        title="Bạn muốn đặt hàng"
        highlight="sản phẩm tương tự?"
        description="Hãy liên hệ với The SEA để đặt sofa hoặc nội thất gỗ theo yêu cầu riêng. Đội ngũ của chúng tôi sẵn sàng tư vấn và báo giá miễn phí."
        buttonText="Liên Hệ Ngay"
        buttonHref="/lien-he"
      />

      {/* Related Products */}
      <section className="py-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[11px] tracking-[4px] uppercase text-gold mb-4 font-medium inline-block">
              Khám Phá Thêm
            </span>
            <h2 className="font-serif text-[44px] font-normal text-dark">
              Sản Phẩm Liên Quan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((related) => (
              <Link
                key={related.slug}
                href={`/du-an/${related.slug}`}
                className="reveal stagger group hover-lift block"
              >
                <div className="img-zoom overflow-hidden mb-6">
                  <img
                    src={related.img}
                    alt={related.title}
                    className="w-full h-[300px] object-cover img-cover"
                  />
                </div>
                <span className="text-[11px] tracking-[4px] uppercase text-gold font-medium">
                  {related.category}
                </span>
                <h3 className="font-serif text-[22px] font-normal text-dark mt-2 group-hover:text-gold transition-colors duration-300">
                  {related.title}
                </h3>
                <p className="text-body text-sm font-light mt-2 leading-relaxed">
                  {related.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
