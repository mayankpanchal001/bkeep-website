import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Twitter,
} from "lucide-react";

// Contact Information
export const contactInfo = {
  email: "info@bkeep.ca",
  phone: "+1 (416) 555-1234",
  phoneFormatted: "(416) 555-1234",
  phoneTel: "+14165551234", // For tel: links (digits only)
  address: {
    street: "2585 Skymark Ave",
    city: "Mississauga",
    province: "ON",
    postalCode: "L4W 4L5",
    country: "CA",
    full: "2585 Skymark Ave, Mississauga, ON L4W 4L5, Canada",
    display: "2585 Skymark Ave\nMississauga, ON L4W 4L5",
  },
  businessHours: "Mon - Fri: 9:00 AM - 5:00 PM",
};

// Social Media Links
export interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Facebook,
    url: "https://www.facebook.com",
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com",
    label: "Instagram",
  },
  {
    icon: Twitter,
    url: "https://www.twitter.com",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com",
    label: "LinkedIn",
  },
];

// Export individual values for convenience
export const { email: contactEmail, phone: contactPhone, address: contactAddress } = contactInfo;
