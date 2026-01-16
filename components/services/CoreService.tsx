"use client";

import { coreServices } from "@/lib/data/coreServices";
import {
  ArrowRight,
  Calculator,
  CalendarCheck,
  CheckCircle,
  HandCoins,
  LucideIcon,
  PieChart,
  Receipt,
  Target,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

// Icon mapping from string to Lucide icon component
const iconMap: Record<string, LucideIcon> = {
  calculator: Calculator,
  "file-invoice-dollar": Receipt,
  "chart-pie": PieChart,
  "users-cog": UsersRound,
  target: Target,
  "hand-coins": HandCoins,
};

const CoreService = () => {
  return (
    <section className="core-services-section bg-neutral py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Comprehensive Financial Services
            <span className="text-accent block mt-2">for Dental Practices</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Everything you need to manage your practice's finances with
            confidence—from daily bookkeeping to strategic growth planning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coreServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Calculator;
            return (
              <div
                key={index}
                className="service-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="text-2xl text-accent group-hover:text-white transition-colors duration-500" />
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

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-secondary"
                      >
                        <CheckCircle className="text-accent text-base shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="pt-4 border-t border-neutral">
                    <div className="text-accent font-bold text-lg mb-3">
                      {service.pricing}
                    </div>
                    <Link
                      href={
                        service.slug ? `/services/${service.slug}` : "#contact"
                      }
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 group-hover:text-accent transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Card Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-secondary mb-6">
            Not sure which services you need? Let's talk.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Free Consultation
            <CalendarCheck className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreService;
