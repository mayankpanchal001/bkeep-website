export interface Insight {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  content?: string;
}

export const insights: Insight[] = [
  {
    id: '1',
    slug: 'why-accurate-bookkeeping-is-backbone',
    title: 'Why Accurate Bookkeeping Is the Backbone of Every Business',
    date: '2023-10-10',
    category: 'Customer',
    description: 'Discover how accurate bookkeeping forms the foundation of successful business operations and financial decision-making.',
    image: '/insights/bookkeeping-backbone.jpg',
    content: 'Accurate bookkeeping is essential for any business. It provides the financial clarity needed to make informed decisions, ensures compliance with tax regulations, and helps identify opportunities for growth and cost savings.'
  },
  {
    id: '2',
    slug: 'budget-2023-tax-changes',
    title: 'Understanding Budget 2023: Key Tax Changes for Businesses',
    date: '2023-11-15',
    category: 'Budget 2023',
    description: 'A comprehensive overview of the tax changes introduced in Budget 2023 and how they affect your business.',
    image: '/insights/budget-2023.jpg',
    content: 'Budget 2023 introduced several significant tax changes that businesses need to be aware of. This article breaks down the key changes and their implications for your business operations.'
  },
  {
    id: '3',
    slug: 'client-success-story-growth',
    title: 'Client Success Story: Driving Growth Through Strategic Planning',
    date: '2023-12-01',
    category: 'Client Stories',
    description: 'Learn how one of our clients achieved remarkable growth through strategic financial planning and advisory services.',
    image: '/insights/client-success.jpg',
    content: 'This case study explores how strategic financial planning helped one of our clients achieve significant growth and operational efficiency.'
  },
  {
    id: '4',
    slug: 'ifrs-updates-2023',
    title: 'IFRS Updates 2023: What You Need to Know',
    date: '2023-12-10',
    category: 'IFRS',
    description: 'Stay informed about the latest IFRS updates and how they impact financial reporting standards.',
    image: '/insights/ifrs-updates.jpg',
    content: 'The International Financial Reporting Standards (IFRS) have been updated for 2023. This article covers the key changes and their implications for financial reporting.'
  },
  {
    id: '5',
    slug: 'talking-points-q4-2023',
    title: 'Talking Points: Q4 2023 Financial Trends',
    date: '2023-12-20',
    category: 'Talking points',
    description: 'Key financial trends and insights from Q4 2023 that every business owner should be aware of.',
    image: '/insights/q4-trends.jpg',
    content: 'Q4 2023 brought several important financial trends. This article discusses the key talking points and their relevance to your business strategy.'
  }
];

export const insightCategories = ['Customer', 'Budget 2023', 'Client Stories', 'IFRS', 'Talking points'];
