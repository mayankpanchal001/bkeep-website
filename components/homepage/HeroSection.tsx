"use client";

import { Award, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  backgroundImage: string;
}

const heroSlides: HeroSlide[] = [
  {
    title: "Expert Financial Guidance",
    subtitle: "for Your Business Growth",
    description:
      "Navigate complex financial decisions with confidence. Our team of certified accountants provides strategic insights tailored to your business needs.",
    ctaText: "Get Started",
    ctaLink: "#contact",
    ctaSecondaryText: "Learn More",
    ctaSecondaryLink: "#about",
    backgroundImage: "/slider-1.webp",
  },
  {
    title: "Tax Planning & Strategy",
    subtitle: "Maximize Your Returns",
    description:
      "Stay ahead with proactive tax planning. We help businesses minimize liabilities while ensuring full compliance with Canadian tax regulations.",
    ctaText: "Book Consultation",
    ctaLink: "#contact",
    ctaSecondaryText: "View Services",
    ctaSecondaryLink: "#services",
    backgroundImage: "/slider-1.webp",
  },
  {
    title: "Business Advisory Services",
    subtitle: "Drive Strategic Growth",
    description:
      "From succession planning to mergers and acquisitions, we provide the financial expertise to support your business at every stage.",
    ctaText: "Explore Solutions",
    ctaLink: "#services",
    ctaSecondaryText: "Contact Us",
    ctaSecondaryLink: "#contact",
    backgroundImage: "/slider-1.webp",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      className="hero-section relative overflow-hidden bg-primary"
      role="banner"
    >
      <div className="relative w-full h-screen">
        {/* Slides */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="hero-bg">
                <div className="hero-overlay bg-linear-to-r from-primary/95 via-primary/90 to-primary/80"></div>
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto h-full">
                  {/* Text Content */}
                  <div className="text-white space-y-6 animate-fadeInUp">
                    {/* Slide Number Indicator */}
                    <div className="flex items-center gap-3 animate-slideInLeft">
                      <span className="text-accent font-bold text-xl">
                        0{index + 1}
                      </span>
                      <div className="h-0.5 w-16 bg-accent"></div>
                    </div>

                    {/* Title */}
                    <div className="space-y-3">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slideInLeft animation-delay-100 font-heading">
                        {slide.title}
                      </h1>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-accent italic animate-slideInLeft animation-delay-200">
                        {slide.subtitle}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg lg:text-xl text-neutral leading-relaxed max-w-xl animate-slideInLeft animation-delay-300">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideInLeft animation-delay-400">
                      <Link
                        href={slide.ctaLink}
                        className="hero-btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                      >
                        {slide.ctaText}
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href={slide.ctaSecondaryLink}
                        className="hero-btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full transition-all duration-300"
                      >
                        {slide.ctaSecondaryText}
                      </Link>
                    </div>

                    {/* Stats - Only show on first slide */}
                    {index === 0 && (
                      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-slideInLeft animation-delay-500">
                        <div className="text-center lg:text-left">
                          <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">
                            20+
                          </div>
                          <div className="text-sm text-neutral/80">
                            Years Experience
                          </div>
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">
                            500+
                          </div>
                          <div className="text-sm text-neutral/80">
                            Clients Served
                          </div>
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">
                            98%
                          </div>
                          <div className="text-sm text-neutral/80">
                            Satisfaction
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual Element / Info Card */}
                  <div className="hidden lg:block animate-fadeInUp animation-delay-600">
                    <div className="relative">
                      {/* Floating Card */}
                      <div className="hero-info-card bg-white rounded-3xl p-8 shadow-2xl">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shrink-0">
                              <Check className="text-white text-xl" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-primary">
                                Trusted Partner
                              </h3>
                              <p className="text-sm text-secondary">
                                Certified Excellence
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-secondary font-medium">
                                  Financial Accuracy
                                </span>
                                <span className="text-primary font-bold">
                                  100%
                                </span>
                              </div>
                              <div className="w-full bg-neutral rounded-full h-2.5 overflow-hidden">
                                <div
                                  className="hero-progress-bar bg-accent h-full rounded-full"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-secondary font-medium">
                                  Client Satisfaction
                                </span>
                                <span className="text-primary font-bold">
                                  98%
                                </span>
                              </div>
                              <div className="w-full bg-neutral rounded-full h-2.5 overflow-hidden">
                                <div
                                  className="hero-progress-bar bg-accent h-full rounded-full"
                                  style={{ width: "98%" }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-neutral">
                            <div className="flex items-center gap-3 text-primary">
                              <Award className="text-accent text-xl" />
                              <span className="text-sm font-semibold">
                                CPA Canada Certified
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="hero-decoration-1 absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-3xl"></div>
                      <div className="hero-decoration-2 absolute -bottom-6 -left-6 w-40 h-40 bg-accent rounded-full opacity-10 blur-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hero-arrow hero-arrow-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="hero-arrow hero-arrow-next"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Custom Pagination */}
        <div className="hero-pagination">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`hero-pagination-dot ${
                index === currentSlide ? "active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
