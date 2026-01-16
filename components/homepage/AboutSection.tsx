"use client";

import { fadeInUp, scrollRevealInView } from "@/lib/animations";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Lightbulb,
  LucideIcon,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const services: Service[] = [
  {
    title: "Assurance",
    description:
      "Team up with advisors who look beyond the audit itself to create value for your business and stakeholders.",
    icon: Shield,
    slug: "assurance",
  },
  {
    title: "Tax",
    description:
      "Let us provide you with the insightful and strategic advice needed to navigate the rapidly changing tax landscape.",
    icon: FileText,
    slug: "tax",
  },
  {
    title: "Advisory",
    description:
      "A differentiated approach relevant to the unique opportunities and challenges you are faced with today.",
    icon: Lightbulb,
    slug: "advisory",
  },
];

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 1000, suffix: "+", label: "Clients Worldwide" },
  { value: 50, suffix: "+", label: "Expert Advisors" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate header
    fadeInUp(headerRef.current, 0.1);

    // Animate cards with stagger
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card, index) => {
        fadeInUp(card as HTMLElement, 0.2 + index * 0.2);
      });
    }

    // Animate stats section
    scrollRevealInView(statsRef.current, { delay: 0.2 });

    // Animate CTA
    scrollRevealInView(ctaRef.current, { delay: 0.3 });
  }, []);

  useEffect(() => {
    // Counter animation on scroll
    if (!sectionRef.current || countersAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            setCountersAnimated(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [countersAnimated]);

  const animateCounters = () => {
    counterRefs.current.forEach((counterEl, index) => {
      if (!counterEl) return;

      const stat = stats[index];
      const target = stat.value;
      const isPercentage = stat.suffix === "%";
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counterEl.textContent =
            Math.floor(current) + (isPercentage ? "%" : stat.suffix);
          requestAnimationFrame(updateCounter);
        } else {
          counterEl.textContent = target + (isPercentage ? "%" : stat.suffix);
        }
      };

      updateCounter();
    });
  };

  return (
    <section
      ref={sectionRef}
      className="about-section bg-neutral py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-12 lg:mb-16 opacity-0"
        >
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              About us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            BKEEP is dedicated to helping our clients, colleagues, and
            communities thrive.
          </h2>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.slug}
                className="about-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border border-transparent hover:border-accent"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Card Number Indicator */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-16 lg:mt-24 max-w-5xl mx-auto opacity-0"
        >
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    ref={(el) => {
                      counterRefs.current[index] = el;
                    }}
                    className="text-4xl lg:text-5xl font-bold text-accent mb-2"
                  >
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-neutral text-sm lg:text-base font-medium text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="mt-12 text-center opacity-0">
          <p className="text-secondary text-lg mb-6">
            Ready to take your business to the next level?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
