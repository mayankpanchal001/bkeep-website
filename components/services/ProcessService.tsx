"use client";

import { fadeInUp } from "@/lib/animations";
import {
  ArrowRight,
  Clock,
  Headphones,
  Lightbulb,
  Phone,
  Rocket,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  duration: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free 30-minute consultation to understand your practice, current challenges, and financial goals.",
    icon: Phone,
    duration: "30 min",
  },
  {
    number: "02",
    title: "Practice Audit",
    description:
      "Our team reviews your existing financials, identifies gaps, and uncovers hidden profit opportunities.",
    icon: Search,
    duration: "1-2 weeks",
  },
  {
    number: "03",
    title: "Custom Strategy",
    description:
      "We create a tailored financial plan with clear KPIs, timelines, and expected ROI for your practice.",
    icon: Lightbulb,
    duration: "1 week",
  },
  {
    number: "04",
    title: "Seamless Onboarding",
    description:
      "We integrate with your existing software (QuickBooks, Xero, Dexis) and train your team on new workflows.",
    icon: Rocket,
    duration: "2-3 weeks",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Monthly reports, quarterly strategy sessions, and 24/7 support ensure continuous improvement.",
    icon: Headphones,
    duration: "Ongoing",
  },
];

const ProcessService = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current, 0);
    }
    if (stepsRef.current) {
      const steps = stepsRef.current.children;
      Array.from(steps).forEach((step, index) => {
        fadeInUp(step as HTMLElement, 0.1 + index * 0.1);
      });
    }
    if (ctaRef.current) {
      fadeInUp(ctaRef.current, 0.6);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process-section bg-white py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="process-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="#1B263B" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Your Path to
            <span className="text-accent"> Financial Clarity</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            We've refined our onboarding process to be fast, smooth, and
            stress-free. Here's what to expect when you partner with bkeep.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>

          {/* Steps Grid */}
          <div
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6"
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="process-step group text-center opacity-0"
                >
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-6">
                    {/* Background Circle */}
                    <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <IconComponent
                        className="text-3xl text-white"
                        size={32}
                      />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent">
                      <span className="text-accent font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                    <span className="text-accent text-xs font-semibold flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3" size={12} />
                      {step.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="mt-16 text-center opacity-0">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="text-accent text-2xl" size={32} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-neutral/90 text-lg mb-8">
                Book your free discovery call today and see how we can transform
                your practice's finances.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Schedule Free Call
                <ArrowRight className="w-4 h-4" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessService;
