"use client";

import { fadeInUp, scrollRevealInView } from "@/lib/animations";
import { Check, User } from "lucide-react";
import { useEffect, useRef } from "react";

interface ResultCard {
  value: string;
  label: string;
  practice: string;
  description: string;
  achievements: string[];
}

const resultCards: ResultCard[] = [
  {
    value: "$245K",
    label: "Annual Profit Increase",
    practice: "Toronto General Practice",
    description:
      "Through expense optimization and insurance billing improvements, we unlocked $245K in hidden profit.",
    achievements: [
      "Reduced supply costs by 18%",
      "Improved insurance collections",
      "Streamlined payroll processes",
    ],
  },
  {
    value: "32%",
    label: "Tax Savings",
    practice: "Vancouver Orthodontics",
    description:
      "Strategic tax planning and equipment depreciation strategies saved 32% on annual tax liability.",
    achievements: [
      "Optimized equipment write-offs",
      "Restructured associate pay",
      "Identified missed deductions",
    ],
  },
  {
    value: "3x",
    label: "ROI on Our Services",
    practice: "Calgary Multi-Location",
    description:
      "Consolidated financials and strategic expansion planning led to 3x return on investment.",
    achievements: [
      "Multi-location consolidation",
      "Expansion feasibility analysis",
      "Cash flow optimization",
    ],
  },
];

const ResultService = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInUp(headerRef.current, 0.1);

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        fadeInUp(card as HTMLElement, 0.2 + index * 0.1);
      });
    }

    scrollRevealInView(testimonialRef.current, { delay: 0.3 });
  }, []);

  return (
    <section className="results-section bg-neutral py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-12 opacity-0"
        >
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Real Results from
            <span className="text-accent"> Real Practices</span>
          </h2>
        </div>

        {/* Results Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
        >
          {resultCards.map((result, index) => (
            <div
              key={index}
              className="result-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0"
            >
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-secondary">{result.label}</div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {result.practice}
              </h3>
              <p className="text-secondary text-sm mb-4">{result.description}</p>
              <ul className="space-y-2 text-sm">
                {result.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-secondary"
                  >
                    <Check className="text-accent w-4 h-4 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div ref={testimonialRef} className="max-w-4xl mx-auto opacity-0">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                  <User className="text-white text-3xl" size={40} />
                </div>
              </div>
              <div>
                <div className="text-6xl text-accent/20 font-serif mb-4">
                  "
                </div>
                <p className="text-xl text-primary italic mb-6">
                  bkeep didn't just do our books—they transformed how we think
                  about finances. We went from reactive to proactive, and our
                  bottom line shows it.
                </p>
                <div>
                  <div className="font-bold text-primary">Dr. Michael Chen</div>
                  <div className="text-sm text-secondary">
                    Chen Dental Group, Toronto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultService;
