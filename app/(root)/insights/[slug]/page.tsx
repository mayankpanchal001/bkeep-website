import ShareButtons from "@/components/insights/ShareButtons";
import { ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface InsightPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  thumbnail_url: string;
  banner_image?: string;
  banner_video?: string;
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
  author?: {
    id: string;
    name: string;
    avatar: string;
    bio?: string;
  };
  tags?: Array<{
    name: string;
    slug: string;
  }>;
}

async function getInsight(slug: string): Promise<InsightPost | null> {
  try {
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/insights/${slug}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch insight:", error);
    return null;
  }
}

async function getRelatedInsights(
  currentId: string,
  categorySlug: string,
  limit: number = 3
): Promise<InsightPost[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/insights?category=${categorySlug}&limit=${
      limit + 1
    }`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.insights
      .filter((insight: InsightPost) => insight.id !== currentId)
      .slice(0, limit);
  } catch (error) {
    console.error("Failed to fetch related insights:", error);
    return [];
  }
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = await getRelatedInsights(
    insight.id,
    insight.category.slug
  );

  const bannerImage = insight.banner_image || insight.thumbnail_url;
  const author = insight.author || {
    id: "1",
    name: "BKEEP Team",
    avatar: "/slider-1.webp",
    bio: "Expert contributor and thought leader in accounting and financial services.",
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
    <main className="main single-post-page bg-neutral" id="single-post">
      {/* Hero Section */}
      <section className="post-hero relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden bg-primary">
        {/* Background Image/Video */}
        {insight.banner_video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src={insight.banner_video} type="video/mp4" />
          </video>
        ) : bannerImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${bannerImage}')` }}
          />
        ) : null}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 lg:pb-16">
          <div className="max-w-4xl">
            {/* Category Badge */}
            {insight.category && (
              <div className="mb-6 animate-fadeInUp">
                <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full">
                  {insight.category.name}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp animation-delay-100">
              {insight.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm lg:text-base animate-fadeInUp animation-delay-200">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
                />
                <span className="font-medium">{author.name}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{formatDate(insight.date)}</span>
              </div>

              {/* Reading Time */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>{insight.read_time}</span>
              </div>

              {/* Share Button */}
              <button className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image (if exists and not used in hero) */}
            {bannerImage && !insight.banner_video && (
              <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl animate-fadeInUp">
                <Image
                  src={bannerImage}
                  alt={insight.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Post Content */}
            <div
              className="post-content prose prose-lg max-w-none animate-fadeInUp animation-delay-100"
              dangerouslySetInnerHTML={{
                __html: insight.content || insight.excerpt,
              }}
            />

            {/* Tags */}
            {insight.tags && insight.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-secondary font-semibold">Tags:</span>
                  {insight.tags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/insights?tag=${tag.slug}`}
                      className="px-4 py-2 bg-neutral hover:bg-accent hover:text-white text-secondary text-sm font-medium rounded-full transition-all duration-300"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full border-4 border-accent/20 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    About {author.name}
                  </h3>
                  <p className="text-secondary leading-relaxed mb-4">
                    {author.bio ||
                      "Expert contributor and thought leader in accounting and financial services."}
                  </p>
                  <Link
                    href={`/insights?author=${author.id}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                  >
                    View all posts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Share this article
                  </h3>
                  <p className="text-white/80">
                    Help others discover this content
                  </p>
                </div>
                <ShareButtons url={insight.link} title={insight.title} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedInsights.length > 0 && (
        <section className="related-posts py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedInsights.map((relatedInsight) => (
                  <article
                    key={relatedInsight.id}
                    className="bg-neutral rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                  >
                    <Link href={relatedInsight.link} className="block">
                      <div className="h-56 overflow-hidden bg-primary">
                        {relatedInsight.thumbnail_url ? (
                          <Image
                            src={relatedInsight.thumbnail_url}
                            alt={relatedInsight.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
                            <svg
                              className="w-16 h-16 text-white opacity-20"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        {relatedInsight.category && (
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                            {relatedInsight.category.name}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-primary mt-2 mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                          {relatedInsight.title}
                        </h3>
                        <p className="text-sm text-secondary mb-4">
                          {formatDate(relatedInsight.date)}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
