"use client";

import { fadeInUp } from "@/lib/animations";
import {
  Building,
  CalendarCheck,
  ChartLine,
  Circle,
  ClipboardList,
  Coins,
  FileText,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useEffect, useRef } from "react";

interface TechnologyItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const technologyItems: TechnologyItem[] = [
  {
    name: "QuickBooks",
    icon: FileText,
  },
  {
    name: "Xero",
    icon: Coins,
  },
  {
    name: "Dexis",
    icon: Circle,
  },
  {
    name: "Dentrix",
    icon: CalendarCheck,
  },
  {
    name: "Eaglesoft",
    icon: ClipboardList,
  },
  {
    name: "Open Dental",
    icon: Monitor,
  },
  {
    name: "MS Teams",
    icon: Building,
  },
  {
    name: "Custom APIs",
    icon: ChartLine,
  },
];

const featureItems: FeatureItem[] = [
  {
    title: "Real-Time Sync",
    description: "Automated data sync every 24 hours",
    icon: RefreshCw,
  },
  {
    title: "Bank-Level Security",
    description: "256-bit encryption & SOC 2 compliant",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Access",
    description: "View reports anywhere, anytime",
    icon: Smartphone,
  },
];

const TechnologyService = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const techCardsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current, 0);
    }
    if (techCardsRef.current) {
      const cards = techCardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        fadeInUp(card as HTMLElement, 0.1 + index * 0.05);
      });
    }
    if (featuresRef.current) {
      const features = featuresRef.current.children;
      Array.from(features).forEach((feature, index) => {
        fadeInUp(feature as HTMLElement, 0.3 + index * 0.1);
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="technology-section bg-gradient-to-br from-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Seamless Integration
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            We Work With Your
            <span className="text-accent"> Existing Tools</span>
          </h2>
          <p className="text-lg text-neutral/90">
            No need to change software. We integrate seamlessly with the
            platforms you already use.
          </p>
        </div>

        {/* Logo Grid */}
        <div
          ref={techCardsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
        >
          {technologyItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="tech-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 opacity-0"
              >
                <div className="text-center">
                  <IconComponent
                    className="text-4xl text-white mb-2 mx-auto"
                    size={40}
                  />
                  <p className="text-white font-semibold text-sm">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featureItems.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-white opacity-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-accent text-xl" size={20} />
                  </div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-neutral/80 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyService;
