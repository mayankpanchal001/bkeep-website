"use client";

import { fadeInUp } from "@/lib/animations";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ServiceData {
  title: string;
  description: string;
  slug: string;
  number: string;
  features?: string[];
  iconName: string;
}

interface ServiceBenefitsProps {
  service: ServiceData;
}

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce operational costs and maximize profitability",
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Free up your time to focus on patient care",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description: "Stay compliant with all regulatory requirements",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Strategic insights to scale your practice",
  },
];

const ServiceBenefits = ({ service }: ServiceBenefitsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current, 0);
    }
    if (benefitsRef.current) {
      const benefitCards = benefitsRef.current.children;
      Array.from(benefitCards).forEach((card, index) => {
        fadeInUp(card as HTMLElement, 0.1 + index * 0.1);
      });
    }
    if (ctaRef.current) {
      fadeInUp(ctaRef.current, 0.5);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="service-benefits-section bg-neutral py-16 lg:py-24 relative overflow-hidden opacity-0"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Benefits of Our
            <span className="text-accent"> {service.title} Services</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Experience the difference that specialized expertise makes for your
            dental practice.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="benefit-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <IconComponent className="text-accent text-2xl" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Points */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              What Makes Our {service.title} Services Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Dental-Specific Expertise
                  </h4>
                  <p className="text-secondary text-sm">
                    We understand the unique financial challenges of dental
                    practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Proven Track Record
                  </h4>
                  <p className="text-secondary text-sm">
                    Trusted by 300+ dental practices across Canada.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Technology Integration
                  </h4>
                  <p className="text-secondary text-sm">
                    Seamless integration with your existing software.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    Dedicated Support
                  </h4>
                  <p className="text-secondary text-sm">
                    24/7 support from our team of certified professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center opacity-0">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-neutral/90 text-lg mb-8">
                Book your free consultation and discover how our {service.title}{" "}
                services can transform your practice.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
