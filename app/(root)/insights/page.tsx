"use client";

import InsightSearchBar from "@/components/insights/InsightSearchBar";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Lightbulb,
  Mail,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface InsightCategory {
  name: string;
  slug: string;
  count?: number;
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
  is_featured: boolean;
  read_time: string;
  link: string;
}

interface InsightsResponse {
  insights: InsightPost[];
  categories: InsightCategory[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

function InsightsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [insights, setInsights] = useState<InsightPost[]>([]);
  const [categories, setCategories] = useState<InsightCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("s") || searchParams.get("search") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );
  const [pagination, setPagination] = useState({
    page: parseInt(searchParams.get("page") || "1", 10),
    limit: 12,
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (selectedCategory) params.append("category", selectedCategory);
        if (searchQuery) params.append("search", searchQuery);
        const currentPage = parseInt(searchParams.get("page") || "1", 10);
        params.append("page", currentPage.toString());
        params.append("limit", "12");

        const response = await fetch(`/api/insights?${params.toString()}`);
        const data: InsightsResponse = await response.json();

        setInsights(data.insights);
        setCategories(data.categories);
        setPagination(data.pagination);
      } catch (error) {
        console.error("Failed to fetch insights:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchQuery, searchParams.get("page")]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (query) params.append("s", query);
    if (selectedCategory) params.append("category", selectedCategory);
    router.push(`/insights?${params.toString()}`);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handleCategoryFilter = (categorySlug: string) => {
    const params = new URLSearchParams();
    if (searchQuery) params.append("s", searchQuery);
    if (categorySlug) params.append("category", categorySlug);
    router.push(`/insights?${params.toString()}`);
    setSelectedCategory(categorySlug);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams();
    if (searchQuery) params.append("s", searchQuery);
    if (selectedCategory) params.append("category", selectedCategory);
    if (newPage > 1) params.append("page", newPage.toString());
    router.push(`/insights?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <main className="main min-h-dvh" id="insights-page">
      {/* Hero Section */}
      <section className="insights-hero relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 lg:py-28">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 text-sm text-neutral/80">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 inline" />
                </li>
                <li className="text-white font-semibold">Insights</li>
              </ol>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Blog & Resources
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Insights &<span className="text-accent"> Resources</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral/90 leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest insights on dental practice
              financial management, tax strategies, and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="filter-section py-8 bg-white border-b border-neutral sticky top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            {categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-secondary">
                  Filter by:
                </span>
                <button
                  onClick={() => handleCategoryFilter("")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !selectedCategory
                      ? "bg-primary text-white"
                      : "bg-neutral text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  All Posts
                </button>
                {categories.map((category) => {
                  const isActive = selectedCategory === category.slug;
                  return (
                    <button
                      key={category.slug}
                      onClick={() => handleCategoryFilter(category.slug)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-neutral text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      {category.name}
                      {category.count !== undefined && (
                        <span className="ml-2 text-xs opacity-70">
                          ({category.count})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Search */}
            <InsightSearchBar
              initialValue={searchQuery}
              selectedCategory={selectedCategory}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="insights-archive py-16 lg:py-24 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-secondary text-lg">Loading insights...</p>
            </div>
          ) : insights.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-8 text-secondary">
                <p>
                  Showing <strong>{pagination.total}</strong>{" "}
                  {pagination.total === 1 ? "article" : "articles"}
                  {searchQuery && (
                    <>
                      {" "}
                      for "<strong>{searchQuery}</strong>"
                    </>
                  )}
                  {selectedCategory && (
                    <>
                      {" "}
                      in{" "}
                      <strong>
                        {
                          categories.find((c) => c.slug === selectedCategory)
                            ?.name
                        }
                      </strong>
                    </>
                  )}
                </p>
              </div>

              {/* Insights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.map((insight, index) => {
                  const isFeatured =
                    insight.is_featured &&
                    index === 0 &&
                    !selectedCategory &&
                    !searchQuery;

                  if (isFeatured) {
                    // Large Featured Card
                    return (
                      <article
                        key={insight.id}
                        className="insight-card featured-card md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                      >
                        <Link href={insight.link} className="block">
                          <div className="h-64 md:h-80 lg:h-[400px] overflow-hidden relative">
                            <Image
                              src={insight.thumbnail_url}
                              alt={insight.title}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>

                            {/* Featured Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                                Featured
                              </span>
                            </div>
                          </div>
                          <div className="p-6 lg:p-8">
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3 lg:mb-4 block">
                              {insight.category.name}
                            </span>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 lg:mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                              {insight.title}
                            </h2>
                            {insight.excerpt && (
                              <p className="text-secondary text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 line-clamp-3">
                                {insight.excerpt}
                              </p>
                            )}
                            <div className="flex items-center gap-4 text-xs lg:text-sm text-secondary">
                              <time>{formatDate(insight.date)}</time>
                              <span>•</span>
                              <span>{insight.read_time}</span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    );
                  } else {
                    // Regular Card
                    return (
                      <article
                        key={insight.id}
                        className="insight-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                      >
                        <Link href={insight.link} className="block">
                          <div className="h-48 md:h-56 overflow-hidden relative">
                            <Image
                              src={insight.thumbnail_url}
                              alt={insight.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                                {insight.category.name}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h2 className="text-lg md:text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                              {insight.title}
                            </h2>
                            {insight.excerpt && (
                              <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                                {insight.excerpt
                                  .split(" ")
                                  .slice(0, 20)
                                  .join(" ")}
                              </p>
                            )}
                            <div className="flex items-center justify-between pt-4 border-t border-neutral">
                              <div className="flex items-center gap-3 text-xs text-secondary">
                                <time>{formatDate(insight.date)}</time>
                                <span>•</span>
                                <span>{insight.read_time}</span>
                              </div>
                              <span className="text-accent text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-300">
                                Read More
                                <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    );
                  }
                })}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(pagination.page - 1)}
                      disabled={pagination.page === 1}
                      className="px-4 py-2 bg-white text-primary rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    {Array.from(
                      { length: pagination.totalPages },
                      (_, i) => i + 1
                    )
                      .filter((page) => {
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === pagination.totalPages ||
                          (page >= pagination.page - 1 &&
                            page <= pagination.page + 1)
                        ) {
                          return true;
                        }
                        return false;
                      })
                      .map((page, index, array) => {
                        // Add ellipsis
                        const showEllipsisBefore =
                          index > 0 && array[index - 1] !== page - 1;
                        const showEllipsisAfter =
                          index < array.length - 1 &&
                          array[index + 1] !== page + 1;

                        return (
                          <div key={page} className="flex items-center gap-2">
                            {showEllipsisBefore && (
                              <span className="px-2 text-secondary">...</span>
                            )}
                            <button
                              onClick={() => handlePageChange(page)}
                              className={`min-w-[40px] h-10 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                                pagination.page === page
                                  ? "bg-accent text-white"
                                  : "bg-white text-primary hover:bg-primary hover:text-white"
                              }`}
                            >
                              {page}
                            </button>
                            {showEllipsisAfter && (
                              <span className="px-2 text-secondary">...</span>
                            )}
                          </div>
                        );
                      })}

                    <button
                      onClick={() => handlePageChange(pagination.page + 1)}
                      disabled={pagination.page === pagination.totalPages}
                      className="px-4 py-2 bg-white text-primary rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* No Posts Found */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                No Articles Found
              </h2>
              <p className="text-secondary text-lg mb-8">
                {searchQuery || selectedCategory
                  ? "We couldn't find any articles matching your criteria. Try adjusting your filters or search terms."
                  : "No insights have been published yet. Please check back later."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Insights
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Go Home
                  <Home className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-neutral/90 mb-8">
              Get the latest insights delivered straight to your inbox. No spam,
              unsubscribe anytime.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Insights() {
  return (
    <Suspense
      fallback={
        <main className="main min-h-dvh" id="insights-page">
          <section className="insights-archive py-16 lg:py-24 bg-neutral">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center py-12">
                <p className="text-secondary text-lg">Loading insights...</p>
              </div>
            </div>
          </section>
        </main>
      }
    >
      <InsightsContent />
    </Suspense>
  );
}
