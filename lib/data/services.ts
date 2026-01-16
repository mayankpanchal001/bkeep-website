export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  fullDescription?: string;
}

export const services: Service[] = [
  {
    id: 'assurance',
    number: '01',
    title: 'Assurance',
    description: 'Team up with advisors who look beyond the audit itself to create value for your business and stakeholders.',
    icon: 'shield',
    slug: 'assurance',
    fullDescription: 'Our assurance services provide you with the confidence that your financial statements are accurate, complete, and compliant. We conduct thorough reviews and audits to ensure your business operations are transparent and trustworthy.'
  },
  {
    id: 'tax',
    number: '02',
    title: 'Tax',
    description: 'Let us provide you with the insightful and strategic advice needed to navigate the rapidly changing tax landscape.',
    icon: 'document',
    slug: 'tax',
    fullDescription: 'Our tax advisory services help you navigate the complexities of Canadian tax law. We provide strategic tax planning, compliance support, and optimization strategies to minimize your tax burden while ensuring full compliance.'
  },
  {
    id: 'advisory',
    number: '03',
    title: 'Advisory',
    description: 'A differentiated approach relevant to the unique opportunities and challenges you are faced with today.',
    icon: 'chart',
    slug: 'advisory',
    fullDescription: 'Our business advisory services provide strategic guidance to help you make informed decisions. From succession planning to mergers and acquisitions, we offer comprehensive financial expertise to support your business at every stage.'
  }
];
