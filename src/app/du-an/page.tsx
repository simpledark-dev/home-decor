"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/lib/projects";

const filters = [
  { label: "Tất cả", value: "all" },
  { label: "Căn Hộ", value: "Căn Hộ" },
  { label: "Biệt Thự", value: "Biệt Thự" },
  { label: "Nhà Phố", value: "Nhà Phố" },
  { label: "Nghỉ Dưỡng", value: "Nghỉ Dưỡng" },
  { label: "Thương mại", value: "Thương mại" },
];

function matchesFilter(category: string, filter: string): boolean {
  if (filter === "all") return true;
  return category.includes(filter);
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    matchesFilter(project.category, activeFilter)
  );

  return (
    <>
      <ScrollReveal />
      <Navbar />

      <PageHero
        label="Portfolio"
        title="Dự Án"
        highlight="Tiêu Biểu"
        description="Khám phá bộ sưu tập các dự án thiết kế nội thất tiêu biểu mà chúng tôi đã thực hiện, từ căn hộ cao cấp đến biệt thự và không gian thương mại."
      />

      {/* Filter Tabs */}
      <section className="px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 text-[13px] tracking-[2px] uppercase font-medium transition-colors duration-300 ${
                  activeFilter === filter.value
                    ? "bg-gold text-white"
                    : "bg-transparent text-body border border-[#e0e0e0] hover:border-gold hover:text-gold"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-30 px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/du-an/${project.slug}`}
                className="group block"
              >
                <div className="hover-lift">
                  {/* Image */}
                  <div className="img-zoom overflow-hidden mb-6">
                    <div
                      className="img-cover h-[400px] bg-cover bg-center bg-no-repeat bg-[#f5f5f0]"
                      style={{ backgroundImage: `url('${project.img}')` }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] tracking-[4px] uppercase text-gold font-medium">
                      {project.category}
                    </span>
                    <span className="w-px h-3 bg-[#ddd]" />
                    <span className="text-[11px] tracking-[2px] uppercase text-muted font-medium">
                      {project.area}
                    </span>
                  </div>

                  <h3 className="font-serif text-[28px] font-normal text-dark mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed font-light text-body line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body text-base font-light">
                Không có dự án nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Bạn có dự án cần thiết kế?"
        highlight="Liên hệ ngay"
        description="Hãy chia sẻ ý tưởng của bạn với chúng tôi. Đội ngũ thiết kế sẽ tư vấn giải pháp phù hợp nhất cho không gian sống của bạn."
      />

      <Footer />
    </>
  );
}
