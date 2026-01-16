import { NextRequest, NextResponse } from "next/server";

export interface InsightCategory {
  name: string;
  slug: string;
}

export interface InsightPost {
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

// Dummy data storage (in production, this would be a database)
export let insightsData: InsightPost[] = [
  {
    id: "1",
    title: "Why Accurate Bookkeeping Is the Backbone of Every Business",
    slug: "why-accurate-bookkeeping-is-backbone",
    excerpt:
      "Discover how accurate bookkeeping forms the foundation of successful business operations and financial decision-making. Learn the key principles that drive business success.",
    content: `<p>Accurate bookkeeping is essential for any business. It provides the financial clarity needed to make informed decisions, ensures compliance with tax regulations, and helps identify opportunities for growth and cost savings.</p>

    <h2>The Foundation of Financial Success</h2>
    <p>Bookkeeping serves as the foundation upon which all financial decisions are made. Without accurate records, businesses operate blindly, unable to understand their true financial position or make strategic decisions.</p>

    <h3>Key Benefits of Accurate Bookkeeping</h3>
    <ul>
      <li>Real-time financial visibility</li>
      <li>Compliance with tax regulations</li>
      <li>Better cash flow management</li>
      <li>Informed decision-making</li>
      <li>Early problem detection</li>
    </ul>

    <h2>Best Practices</h2>
    <p>Implementing best practices in bookkeeping can transform your business operations. Regular reconciliation, proper categorization, and timely recording are all critical components of effective bookkeeping.</p>

    <blockquote>
      "Good bookkeeping is not just about recording transactions—it's about creating a clear picture of your business's financial health."
    </blockquote>

    <p>By maintaining accurate books, you position your business for sustainable growth and long-term success.</p>`,
    date: "January 15, 2024",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Business Tips",
      slug: "business-tips",
    },
    categories: [
      { name: "Business Tips", slug: "business-tips" },
      { name: "Featured", slug: "featured" },
    ],
    is_featured: true,
    read_time: "5 min read",
    gradient: "from-blue-500 to-purple-600",
    link: "/insights/why-accurate-bookkeeping-is-backbone",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [
      { name: "Bookkeeping", slug: "bookkeeping" },
      { name: "Business", slug: "business" },
      { name: "Finance", slug: "finance" },
    ],
  },
  {
    id: "2",
    title: "Understanding Budget 2024: Key Tax Changes for Businesses",
    slug: "budget-2024-tax-changes",
    excerpt:
      "A comprehensive overview of the tax changes introduced in Budget 2024 and how they affect your business operations and financial planning.",
    content: `<p>Budget 2024 introduced several significant tax changes that businesses need to be aware of. This article breaks down the key changes and their implications for your business operations.</p>

    <h2>Major Tax Updates</h2>
    <p>The new budget brings important changes to corporate tax rates, deductions, and compliance requirements that will impact businesses across all sectors.</p>`,
    date: "January 10, 2024",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Tax Updates",
      slug: "tax-updates",
    },
    categories: [{ name: "Tax Updates", slug: "tax-updates" }],
    is_featured: false,
    read_time: "7 min read",
    link: "/insights/budget-2024-tax-changes",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [
      { name: "Tax", slug: "tax" },
      { name: "Budget", slug: "budget" },
    ],
  },
  {
    id: "3",
    title: "Client Success Story: Driving Growth Through Strategic Planning",
    slug: "client-success-story-growth",
    excerpt:
      "Learn how one of our clients achieved remarkable growth through strategic financial planning and advisory services.",
    content: `<p>This case study explores how strategic financial planning helped one of our clients achieve significant growth and operational efficiency.</p>

    <h2>The Challenge</h2>
    <p>Our client faced challenges with cash flow management and needed a comprehensive financial strategy to support their growth objectives.</p>

    <h2>The Solution</h2>
    <p>Through careful analysis and strategic planning, we developed a customized approach that addressed their specific needs and positioned them for success.</p>`,
    date: "January 5, 2024",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Client Stories",
      slug: "client-stories",
    },
    categories: [{ name: "Client Stories", slug: "client-stories" }],
    is_featured: false,
    read_time: "4 min read",
    gradient: "from-green-500 to-teal-600",
    link: "/insights/client-success-story-growth",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [
      { name: "Success Story", slug: "success-story" },
      { name: "Growth", slug: "growth" },
    ],
  },
  {
    id: "4",
    title: "IFRS Updates 2024: What You Need to Know",
    slug: "ifrs-updates-2024",
    excerpt:
      "Stay informed about the latest IFRS updates and how they impact financial reporting standards for your business.",
    content: `<p>The International Financial Reporting Standards (IFRS) have been updated for 2024. This article covers the key changes and their implications for financial reporting.</p>

    <h2>Key Changes</h2>
    <p>Several important updates have been made to IFRS standards that will affect how businesses report their financial information.</p>`,
    date: "December 28, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Compliance",
      slug: "compliance",
    },
    categories: [{ name: "Compliance", slug: "compliance" }],
    is_featured: false,
    read_time: "6 min read",
    link: "/insights/ifrs-updates-2024",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [
      { name: "IFRS", slug: "ifrs" },
      { name: "Compliance", slug: "compliance" },
    ],
  },
  {
    id: "5",
    title: "Talking Points: Q4 2023 Financial Trends",
    slug: "talking-points-q4-2023",
    excerpt:
      "Key financial trends and insights from Q4 2023 that every business owner should be aware of for strategic planning.",
    content: `<p>Q4 2023 brought several important financial trends. This article discusses the key talking points and their relevance to your business strategy.</p>

    <h2>Market Overview</h2>
    <p>The fourth quarter of 2023 saw significant shifts in the financial landscape that businesses should understand and prepare for.</p>`,
    date: "December 20, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Market Trends",
      slug: "market-trends",
    },
    categories: [{ name: "Market Trends", slug: "market-trends" }],
    is_featured: false,
    read_time: "5 min read",
    gradient: "from-orange-500 to-red-600",
    link: "/insights/talking-points-q4-2023",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [
      { name: "Trends", slug: "trends" },
      { name: "Q4 2023", slug: "q4-2023" },
    ],
  },
  // Additional insights for pagination testing
  {
    id: "6",
    title: "Tax Deduction Strategies for Small Businesses",
    slug: "tax-deduction-strategies-small-businesses",
    excerpt:
      "Discover effective tax deduction strategies that can help small businesses maximize their savings and improve their bottom line.",
    content: `<p>Small businesses can significantly reduce their tax burden by understanding and implementing effective deduction strategies.</p>`,
    date: "December 15, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Tax Updates",
      slug: "tax-updates",
    },
    categories: [{ name: "Tax Updates", slug: "tax-updates" }],
    is_featured: false,
    read_time: "6 min read",
    link: "/insights/tax-deduction-strategies-small-businesses",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "Tax", slug: "tax" }, { name: "Small Business", slug: "small-business" }],
  },
  {
    id: "7",
    title: "Financial Planning for Dental Practices",
    slug: "financial-planning-dental-practices",
    excerpt:
      "Learn how to create a comprehensive financial plan that supports growth and sustainability for your dental practice.",
    content: `<p>Financial planning is crucial for dental practices looking to grow and maintain profitability.</p>`,
    date: "December 10, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Business Tips",
      slug: "business-tips",
    },
    categories: [{ name: "Business Tips", slug: "business-tips" }],
    is_featured: false,
    read_time: "5 min read",
    link: "/insights/financial-planning-dental-practices",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "Financial Planning", slug: "financial-planning" }, { name: "Dental", slug: "dental" }],
  },
  {
    id: "8",
    title: "Understanding CRA Audit Process",
    slug: "understanding-cra-audit-process",
    excerpt:
      "A comprehensive guide to understanding the CRA audit process and how to prepare your business for a potential audit.",
    content: `<p>Being prepared for a CRA audit can significantly reduce stress and help ensure a smooth process.</p>`,
    date: "December 5, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Compliance",
      slug: "compliance",
    },
    categories: [{ name: "Compliance", slug: "compliance" }],
    is_featured: false,
    read_time: "7 min read",
    link: "/insights/understanding-cra-audit-process",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "CRA", slug: "cra" }, { name: "Audit", slug: "audit" }],
  },
  {
    id: "9",
    title: "Year-End Tax Planning Checklist",
    slug: "year-end-tax-planning-checklist",
    excerpt:
      "Essential items to include in your year-end tax planning to maximize deductions and minimize liabilities.",
    content: `<p>Proper year-end tax planning can help you take advantage of deductions and credits before the tax year ends.</p>`,
    date: "November 28, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Tax Updates",
      slug: "tax-updates",
    },
    categories: [{ name: "Tax Updates", slug: "tax-updates" }],
    is_featured: false,
    read_time: "4 min read",
    link: "/insights/year-end-tax-planning-checklist",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "Tax Planning", slug: "tax-planning" }, { name: "Year End", slug: "year-end" }],
  },
  {
    id: "10",
    title: "Cash Flow Management Best Practices",
    slug: "cash-flow-management-best-practices",
    excerpt:
      "Learn proven strategies for managing cash flow effectively to ensure your business remains financially healthy.",
    content: `<p>Effective cash flow management is the lifeblood of any successful business operation.</p>`,
    date: "November 20, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Business Tips",
      slug: "business-tips",
    },
    categories: [{ name: "Business Tips", slug: "business-tips" }],
    is_featured: false,
    read_time: "5 min read",
    link: "/insights/cash-flow-management-best-practices",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "Cash Flow", slug: "cash-flow" }, { name: "Management", slug: "management" }],
  },
  {
    id: "11",
    title: "Digital Transformation in Accounting",
    slug: "digital-transformation-accounting",
    excerpt:
      "Explore how digital transformation is reshaping the accounting industry and what it means for your practice.",
    content: `<p>The accounting industry is undergoing a significant digital transformation that's changing how businesses operate.</p>`,
    date: "November 15, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Market Trends",
      slug: "market-trends",
    },
    categories: [{ name: "Market Trends", slug: "market-trends" }],
    is_featured: false,
    read_time: "6 min read",
    link: "/insights/digital-transformation-accounting",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "Digital", slug: "digital" }, { name: "Technology", slug: "technology" }],
  },
  {
    id: "12",
    title: "Employee Benefits and Tax Implications",
    slug: "employee-benefits-tax-implications",
    excerpt:
      "Understanding the tax implications of various employee benefits and how to structure them effectively.",
    content: `<p>Employee benefits can have significant tax implications for both employers and employees.</p>`,
    date: "November 10, 2023",
    thumbnail_url: "/slider-1.webp",
    banner_image: "/slider-1.webp",
    category: {
      name: "Tax Updates",
      slug: "tax-updates",
    },
    categories: [{ name: "Tax Updates", slug: "tax-updates" }],
    is_featured: false,
    read_time: "5 min read",
    link: "/insights/employee-benefits-tax-implications",
    author: {
      id: "1",
      name: "John Smith",
      avatar: "/slider-1.webp",
      bio: "Expert contributor and thought leader in accounting and financial services with over 15 years of experience.",
    },
    tags: [{ name: "Employee Benefits", slug: "employee-benefits" }, { name: "Tax", slug: "tax" }],
  },
];

// GET - Fetch all insights
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");
    const search = searchParams.get("search") || searchParams.get("s");

    let filteredInsights = [...insightsData];

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filteredInsights = filteredInsights.filter(
        (insight) =>
          insight.title.toLowerCase().includes(searchLower) ||
          insight.excerpt.toLowerCase().includes(searchLower) ||
          (insight.content &&
            insight.content.toLowerCase().includes(searchLower))
      );
    }

    // Filter by category if provided
    if (category && category !== "featured") {
      filteredInsights = filteredInsights.filter((insight) =>
        insight.categories.some((cat) => cat.slug === category)
      );
    }

    // Get total count before pagination
    const totalCount = filteredInsights.length;

    // Pagination
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 12;
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedInsights = filteredInsights.slice(startIndex, endIndex);

    // Get all unique categories with counts
    const categoryCounts = new Map<string, { name: string; slug: string; count: number }>();
    insightsData.forEach((insight) => {
      insight.categories.forEach((cat) => {
        if (cat.slug !== "featured" && cat.slug !== "uncategorized") {
          const existing = categoryCounts.get(cat.slug);
          if (existing) {
            existing.count++;
          } else {
            categoryCounts.set(cat.slug, { name: cat.name, slug: cat.slug, count: 1 });
          }
        }
      });
    });

    const categories = Array.from(categoryCounts.values());

    return NextResponse.json({
      insights: paginatedInsights,
      categories,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limitNum),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch insights" },
      { status: 500 }
    );
  }
}

// POST - Create a new insight
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newInsight: InsightPost = {
      id: Date.now().toString(),
      title: body.title || "Untitled",
      slug:
        body.slug ||
        body.title?.toLowerCase().replace(/\s+/g, "-") ||
        "untitled",
      excerpt: body.excerpt || "",
      content: body.content || "",
      date:
        body.date ||
        new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      thumbnail_url: body.thumbnail_url || "/slider-1.webp",
      banner_image: body.banner_image,
      banner_video: body.banner_video,
      category: body.category || {
        name: "Uncategorized",
        slug: "uncategorized",
      },
      categories: body.categories || [
        body.category || { name: "Uncategorized", slug: "uncategorized" },
      ],
      is_featured: body.is_featured || false,
      read_time: body.read_time || "5 min read",
      gradient: body.gradient,
      link: body.link || `/insights/${body.slug || "untitled"}`,
      author: body.author,
      tags: body.tags || [],
    };

    insightsData.push(newInsight);
    return NextResponse.json(newInsight, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create insight" },
      { status: 500 }
    );
  }
}

// PUT - Update an insight
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Insight ID is required" },
        { status: 400 }
      );
    }

    const index = insightsData.findIndex((insight) => insight.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Insight not found" }, { status: 404 });
    }

    insightsData[index] = { ...insightsData[index], ...updates };
    return NextResponse.json(insightsData[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update insight" },
      { status: 500 }
    );
  }
}

// DELETE - Delete an insight
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Insight ID is required" },
        { status: 400 }
      );
    }

    const index = insightsData.findIndex((insight) => insight.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Insight not found" }, { status: 404 });
    }

    insightsData.splice(index, 1);
    return NextResponse.json({ message: "Insight deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete insight" },
      { status: 500 }
    );
  }
}
