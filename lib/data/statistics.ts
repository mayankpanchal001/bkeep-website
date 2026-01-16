export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
}

export const statistics: Statistic[] = [
  {
    label: 'Years of Excellence',
    value: '25',
    suffix: '+'
  },
  {
    label: 'Clients Worldwide',
    value: '1000',
    suffix: '+'
  },
  {
    label: 'Expert Advisors',
    value: '50',
    suffix: '+'
  },
  {
    label: 'Client Satisfaction',
    value: '98',
    suffix: '%'
  }
];
