export interface Expert {
  id: string;
  name: string;
  title: string;
  services: string[];
  industries: string[];
  location: string;
  bio?: string;
}

export const servicesList = [
  'Assurance',
  'Tax',
  'Advisory',
  'Financial Planning',
  'Audit',
  'Consulting'
];

export const industriesList = [
  'Healthcare',
  'Technology',
  'Manufacturing',
  'Retail',
  'Real Estate',
  'Professional Services',
  'Construction',
  'Hospitality'
];

export const canadianProvinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon'
];
