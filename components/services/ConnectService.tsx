"use client";

import { scrollRevealInView } from "@/lib/animations";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ConnectService = () => {
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    scrollRevealInView(ctaRef.current, { delay: 0.3 });
  }, []);

  return (
    <section
      ref={ctaRef}
      className="services-cta-section py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden opacity-0"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-lg sm:text-xl text-neutral/90 mb-8 max-w-2xl mx-auto">
            Let our expert team help you unlock hidden profits and streamline
            your financial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Learn More About Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectService;
