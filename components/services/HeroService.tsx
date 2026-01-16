"use client";

import { fadeInRight, fadeInUp } from "@/lib/animations";
import {
  ArrowDown,
  Award,
  Briefcase,
  Building,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroService = () => {
  const breadcrumbRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const benefitsRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInUp(breadcrumbRef.current, 0);
    fadeInUp(badgeRef.current, 0.1);
    fadeInUp(headingRef.current, 0.2);
    fadeInUp(descriptionRef.current, 0.3);
    fadeInUp(benefitsRef.current, 0.4);
    fadeInUp(ctaRef.current, 0.5);
    fadeInRight(statsCardRef.current, 0.3);
  }, []);

  return (
    <section className="services-hero-section relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-24 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>

        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-accent rounded-full animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <nav ref={breadcrumbRef} className="flex mb-6 opacity-0">
              <ol className="flex items-center space-x-2 text-sm text-neutral/80">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 inline" />
                </li>
                <li className="text-white font-semibold">Services</li>
              </ol>
            </nav>

            {/* Badge */}
            <div ref={badgeRef} className="inline-block opacity-0">
              <span className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                <Briefcase className="w-4 h-4 inline mr-2" />
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight opacity-0"
            >
              Dental Bookkeeping
              <span className="text-accent block mt-2">Reimagined</span>
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-lg sm:text-xl text-neutral/90 leading-relaxed opacity-0"
            >
              From monthly P&L reports to strategic tax planning, we provide
              comprehensive financial services designed specifically for dental
              practices.{" "}
              <strong className="text-white">
                No generic solutions—just expert care for your unique needs.
              </strong>
            </p>

            {/* Key Benefits */}
            <ul ref={benefitsRef} className="space-y-3 opacity-0">
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white text-xs" size={12} />
                </div>
                <span>100% specialized in dental practices</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white text-xs" size={12} />
                </div>
                <span>Average $127K profit unlocked per practice</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white text-xs" size={12} />
                </div>
                <span>Fully integrated with QuickBooks, Xero, & Dexis</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0"
            >
              <Link
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Packages
                <ArrowDown className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Book Consultation
                <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Visual/Info Card */}
          <div ref={statsCardRef} className="hidden lg:block opacity-0">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-4 pb-4 border-b border-neutral">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                      <TrendingUp className="text-accent text-2xl" size={28} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        $127K
                      </div>
                      <div className="text-sm text-secondary">
                        Avg. Profit Unlocked
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-4 pb-4 border-b border-neutral">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Building className="text-primary text-2xl" size={28} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        300+
                      </div>
                      <div className="text-sm text-secondary">
                        Practices Served
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="text-accent text-2xl" size={28} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        24/7
                      </div>
                      <div className="text-sm text-secondary">
                        Support Available
                      </div>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="pt-4 border-t border-neutral">
                    <div className="flex items-center gap-3">
                      <Award className="text-accent text-xl" size={20} />
                      <span className="text-sm font-semibold text-primary">
                        CPA Certified Team
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-white/90">Retention</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroService;
