"use client";

import { fadeInUp } from "@/lib/animations";
import { services } from "@/lib/data/servicesData";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  FileText,
  Lightbulb,
  LucideIcon,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  FileText,
  Lightbulb,
  Calculator,
  Briefcase,
  BarChart3,
};

const ServicesList = () => {
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
      className="services-list-section bg-white py-16 lg:py-24 relative overflow-hidden opacity-0"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              All Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Explore Our Complete
            <span className="text-accent"> Service Portfolio</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Comprehensive financial services designed specifically for dental
            practices. Click on any service to learn more.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card group bg-neutral rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border border-transparent hover:border-accent opacity-0"
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

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-4xl font-bold text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                    {service.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && (
                    <ul className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-secondary"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Learn More Link */}
                  <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
