"use client";

import { fadeInUp } from "@/lib/animations";
import {
  Activity,
  Building,
  Circle,
  Grid3x3,
  Heart,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "General Dentistry",
    description:
      "Solo & group practices, insurance billing, associate compensation",
    icon: Circle,
  },
  {
    title: "Orthodontics",
    description:
      "Treatment plans, installment billing, equipment leasing strategies",
    icon: Grid3x3,
  },
  {
    title: "Oral Surgery",
    description:
      "Hospital privileges, specialist referrals, surgical center financials",
    icon: Activity,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Elective procedures, payment plans, marketing ROI tracking",
    icon: Heart,
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Parent billing, office design costs, specialized equipment",
    icon: Sparkles,
  },
  {
    title: "Multi-Location DSOs",
    description:
      "Consolidated reporting, expansion analysis, franchise structures",
    icon: Building,
  },
];

const ExpertiseService = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current, 0);
    }
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        fadeInUp(card as HTMLElement, 0.1 + index * 0.1);
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="expertise-section bg-white py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              Dental Specialists
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            We Know Your
            <span className="text-accent"> Industry Inside-Out</span>
          </h2>
          <p className="text-lg text-secondary">
            Unlike general bookkeepers, we specialize exclusively in dental
            practices. We understand your unique financial challenges.
          </p>
        </div>

        {/* Expertise Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {expertiseItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="expertise-card bg-neutral rounded-2xl p-6 hover:shadow-xl transition-all duration-300 opacity-0"
              >
                <IconComponent
                  className="text-3xl text-accent mb-4"
                  size={32}
                />
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseService;
