"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InsightCategory {
  name: string;
  slug: string;
}

interface InsightPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  thumbnail_url: string;
  category: {
    name: string;
    slug: string;
  };
  categories: Array<{
    name: string;
    slug: string;
  }>;
  is_featured: boolean;
  read_time: string;
  gradient?: string;
  link: string;
}

interface InsightsResponse {
  insights: InsightPost[];
  categories: InsightCategory[];
}

const InsightSection = () => {
  const [insights, setInsights] = useState<InsightPost[]>([]);
  const [categories, setCategories] = useState<InsightCategory[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/insights?limit=5");
      const data: InsightsResponse = await response.json();
      setInsights(data.insights);

      // Build filter categories with "Featured" first
      const filterCategories: InsightCategory[] = [
        { name: "Featured", slug: "featured" },
        ...data.categories,
      ];
      setCategories(filterCategories);
    } catch (error) {
      console.error("Failed to fetch insights:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterClick = (categorySlug: string) => {
    setActiveFilter(categorySlug);
  };

  const getFilteredInsights = () => {
    if (activeFilter === "featured") {
      return insights;
    }
    return insights.filter((insight) =>
      insight.categories.some((cat) => cat.slug === activeFilter)
    );
  };

  const filteredInsights = getFilteredInsights();

  if (loading) {
    return (
      <section className="insights-section bg-neutral py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center py-12">
            <p className="text-secondary text-lg">Loading insights...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insights-section bg-neutral py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured insights
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleFilterClick(category.slug)}
                className={`filter-btn px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.slug
                    ? "bg-primary text-white hover:bg-opacity-90"
                    : "bg-white text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.length > 0 ? (
            filteredInsights.map((insight, index) => {
              const allCategorySlugs = insight.categories.map(
                (cat) => cat.slug
              );
              const categoryClasses = allCategorySlugs
                .map((slug) => `category-${slug}`)
                .join(" ");

              if (insight.is_featured || index === 0) {
                // Large Featured Card (Spans 2 rows on desktop)
                return (
                  <Link
                    key={insight.id}
                    href={insight.link}
                    data-categories={allCategorySlugs.join(",")}
                    className={`insight-card ${categoryClasses} md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group block`}
                  >
                    <div className="h-64 md:h-80 lg:h-[400px] overflow-hidden">
                      <Image
                        src={insight.thumbnail_url}
                        alt={insight.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3 lg:mb-4 block">
                        {insight.category.name}
                      </span>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 lg:mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                        {insight.title}
                      </h3>
                      {insight.excerpt && (
                        <p className="text-secondary text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 line-clamp-3">
                          {insight.excerpt}
                        </p>
                      )}
                      <time className="text-xs lg:text-sm text-secondary">
                        {insight.date}
                      </time>
                    </div>
                  </Link>
                );
              } else {
                // Regular Card
                return (
                  <Link
                    key={insight.id}
                    href={insight.link}
                    data-categories={allCategorySlugs.join(",")}
                    className={`insight-card ${categoryClasses} bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group block`}
                  >
                    <div className="h-48 md:h-56 overflow-hidden relative">
                      <Image
                        src={insight.thumbnail_url}
                        alt={insight.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {insight.gradient && (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} mix-blend-multiply opacity-60`}
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3 block">
                        {insight.category.name}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {insight.title}
                      </h3>
                      {insight.excerpt && (
                        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                          {insight.excerpt.split(" ").slice(0, 15).join(" ")}
                        </p>
                      )}
                      <div className="flex items-center text-xs text-secondary">
                        <span>{insight.read_time}</span>
                        <span className="mx-2">|</span>
                        <time>{insight.date}</time>
                      </div>
                    </div>
                  </Link>
                );
              }
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-secondary text-lg">
                No insights available at the moment.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Insights
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
