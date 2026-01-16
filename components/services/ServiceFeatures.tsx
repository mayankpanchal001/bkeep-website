"use client";

import { fadeInUp } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

interface ServiceData {
  title: string;
  description: string;
  slug: string;
  number: string;
  features?: string[];
  iconName: string;
}

interface ServiceFeaturesProps {
  service: ServiceData;
}

const ServiceFeatures = ({ service }: ServiceFeaturesProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current, 0);
    }
    if (featuresRef.current) {
      const features = featuresRef.current.children;
      Array.from(features).forEach((feature, index) => {
        fadeInUp(feature as HTMLElement, 0.1 + index * 0.1);
      });
    }
  }, []);

  if (!service.features || service.features.length === 0) {
    return null;
  }

  return (
    <section
      id="features"
      ref={sectionRef}
      className="service-features-section bg-white py-16 lg:py-24 relative overflow-hidden opacity-0"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              What's Included
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Comprehensive
            <span className="text-accent"> {service.title} Solutions</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Our {service.title.toLowerCase()} services are designed to meet all
            your needs with precision and expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-neutral rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-accent text-xl" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {feature}
                  </h3>
                  <p className="text-sm text-secondary">
                    Professional {feature.toLowerCase()} services tailored to
                    your practice needs.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
