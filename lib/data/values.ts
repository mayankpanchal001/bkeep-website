export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
  number: string;
}

export const values: Value[] = [
  {
    id: "1",
    title: "Client-First Mindset",
    description:
      "Your success is our success. Every decision we make puts your dental practice's financial health first.",
    icon: "heart",
    number: "01",
  },
  {
    id: "2",
    title: "Integrity & Transparency",
    description:
      "We believe in honest communication and ethical practices. No hidden fees, no surprises—just straightforward expertise.",
    icon: "shield-check",
    number: "02",
  },
  {
    id: "3",
    title: "Innovation",
    description:
      "We stay ahead of industry trends, leveraging technology and AI to deliver cutting-edge financial solutions.",
    icon: "lightbulb",
    number: "03",
  },
  {
    id: "4",
    title: "Continuous Learning",
    description:
      "The financial landscape evolves, and so do we. Our team continuously updates their skills to serve you better.",
    icon: "graduation-cap",
    number: "04",
  },
  {
    id: "5",
    title: "Collaboration",
    description:
      "We work as an extension of your team, partnering with you to achieve your financial goals.",
    icon: "users",
    number: "05",
  },
  {
    id: "6",
    title: "Excellence",
    description:
      "Good enough isn't good enough. We strive for excellence in every report, every analysis, every interaction.",
    icon: "trophy",
    number: "06",
  },
];
