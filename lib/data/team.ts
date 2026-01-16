export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  image: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson, CPA",
    title: "Founder & CEO",
    bio: "With 20+ years in dental accounting, Sarah leads our vision of transforming dental practice financial management.",
    email: "sarah@bkeep.ca",
    image: "/slider-1.webp",
    linkedin: "#",
  },
  {
    id: "2",
    name: "Michael Chen, CA",
    title: "Chief Financial Officer",
    bio: "Michael brings expertise in strategic financial planning and has helped hundreds of practices achieve profitability.",
    email: "michael@bkeep.ca",
    image: "/slider-1.webp",
    linkedin: "#",
  },
  {
    id: "3",
    name: "Emily Rodriguez, CPA",
    title: "Director of Client Services",
    bio: "Emily ensures every client receives personalized attention and measurable results.",
    email: "emily@bkeep.ca",
    image: "/slider-1.webp",
    linkedin: "#",
  },
  {
    id: "4",
    name: "David Thompson, CPA",
    title: "Senior Tax Strategist",
    bio: "David specializes in tax optimization for dental practices, saving clients millions annually.",
    email: "david@bkeep.ca",
    image: "/slider-1.webp",
    linkedin: "#",
  },
  {
    id: "5",
    name: "Priya Patel, MBA",
    title: "Technology Director",
    bio: "Priya leads our tech innovations, integrating AI and automation into dental practice management.",
    email: "priya@bkeep.ca",
    image: "/slider-1.webp",
    linkedin: "#",
  },
  {
    id: "6",
    name: "James Wilson, CPA",
    title: "Senior Accountant",
    bio: "James provides hands-on bookkeeping expertise with a focus on accuracy and compliance.",
    email: "james@bkeep.ca",
    image: "/slider-1.webp",
    linkedin: "#",
  },
];
