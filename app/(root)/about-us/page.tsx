"use client";

import {
  canadianProvinces,
  industriesList,
  servicesList,
} from "@/lib/data/experts";
import { services } from "@/lib/data/services";
import { teamMembers } from "@/lib/data/team";
import { values } from "@/lib/data/values";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building,
  Calendar,
  ChartLine,
  CheckCircle,
  ChevronRight,
  DollarSign,
  FileText,
  GraduationCap,
  Heart,
  Lightbulb,
  Linkedin,
  Mail,
  Search,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Icon mapping
const iconMap: Record<string, any> = {
  heart: Heart,
  "shield-check": ShieldCheck,
  lightbulb: Lightbulb,
  "graduation-cap": GraduationCap,
  users: Users,
  trophy: Trophy,
  shield: ShieldCheck,
  document: FileText,
  chart: ChartLine,
};

// Counter component
function Counter({
  target,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                setCount(Math.floor(current));
                requestAnimationFrame(updateCounter);
              } else {
                setCount(target);
              }
            };

            updateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  );
}

export default function AboutUs() {
  const [advisorFormData, setAdvisorFormData] = useState({
    services: "",
    industry: "",
    location: "",
    name: "",
  });

  const handleAdvisorSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (advisorFormData.services)
      params.append("service", advisorFormData.services);
    if (advisorFormData.industry)
      params.append("industry", advisorFormData.industry);
    if (advisorFormData.location)
      params.append("location", advisorFormData.location);
    if (advisorFormData.name) params.append("name", advisorFormData.name);

    // For now, just log - you can implement actual search later
    console.log("Searching advisors with:", params.toString());
  };

  return (
    <main className="main min-h-dvh" id="about-page">
      {/* Hero Section */}
      <section className="about-hero-section relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-24 lg:py-32">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>

          {/* Geometric Patterns */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="white" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8 animate-fadeInUp">
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
                <li className="text-white font-semibold">About Us</li>
              </ol>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6 animate-fadeInUp animation-delay-100">
              <span className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                <Heart className="w-4 h-4 inline mr-2" />
                Who We Are
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fadeInUp animation-delay-200">
              Empowering Your
              <span className="text-accent relative inline-block">
                {" "}
                Financial Success
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  fill="none"
                >
                  <path
                    d="M0 6C20 3 40 3 50 4C60 5 80 8 100 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral/90 leading-relaxed max-w-4xl mx-auto mb-10 animate-fadeInUp animation-delay-300">
              At <strong className="text-white">bkeep</strong>, we're more than
              just dental bookkeepers. We're your strategic financial partners,
              dedicated to unlocking hidden profit and driving sustainable
              growth for dental practices across Canada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-400">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Our Story
                <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 pt-16 border-t border-white/20 animate-fadeInUp animation-delay-500">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  15+
                </div>
                <div className="text-sm lg:text-base text-neutral/80">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  300+
                </div>
                <div className="text-sm lg:text-base text-neutral/80">
                  Dental Practices
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  $2M+
                </div>
                <div className="text-sm lg:text-base text-neutral/80">
                  Profit Unlocked
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  98%
                </div>
                <div className="text-sm lg:text-base text-neutral/80">
                  Client Retention
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="our-story"
        className="story-section bg-white py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Image/Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/slider-1.webp"
                    alt="bkeep Team"
                    width={800}
                    height={600}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-accent/40"></div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                      <Trophy className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        $127K
                      </div>
                      <div className="text-sm text-secondary">
                        Avg. Profit Increase
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-secondary">
                    *Based on client data from 2023
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-accent/20 rounded-full"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Section Label */}
              <div className="inline-block">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                  Our Story
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Born from a Need,
                <span className="text-accent"> Built on Expertise</span>
              </h2>

              {/* Story Content */}
              <div className="space-y-4 text-secondary text-base lg:text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">
                    bkeep was founded in 2009
                  </strong>{" "}
                  when our founder, a certified CPA with a passion for the
                  dental industry, noticed a critical gap: dental practices were
                  struggling with financial management despite their clinical
                  excellence.
                </p>

                <p>
                  Most dental bookkeeping services treated dentists like any
                  other business. But we knew better. Dental practices have
                  unique financial challenges—from insurance billing
                  complexities to equipment depreciation, from associate
                  compensation structures to supply chain management.
                </p>

                <p>
                  <strong className="text-primary">
                    That's why we specialized.
                  </strong>{" "}
                  We built a team of financial experts who eat, sleep, and
                  breathe dental practice management. Today, we serve over 300
                  practices across Canada, helping them unlock an average of
                  $127,000 in hidden profit per year.
                </p>

                <p className="text-accent font-semibold">
                  We don't just manage your books. We transform your financial
                  future.
                </p>
              </div>

              {/* Key Milestones */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">2009</div>
                  <div className="text-sm text-secondary">Company Founded</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">2015</div>
                  <div className="text-sm text-secondary">
                    Expanded Nationwide
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">2020</div>
                  <div className="text-sm text-secondary">
                    Tech Platform Launch
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">2024</div>
                  <div className="text-sm text-secondary">AI Integration</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                >
                  Meet Our Team
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services/Expertise */}
      <section className="about-section bg-neutral py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Lightbulb;
              return (
                <div
                  key={service.id}
                  className="about-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
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

                    {/* Learn More Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Card Number Indicator */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                    {service.number}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-16 lg:mt-24 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <Counter
                    target={25}
                    suffix="+"
                    className="text-4xl lg:text-5xl font-bold text-accent mb-2"
                  />
                  <div className="text-neutral text-sm lg:text-base font-medium">
                    Years of Excellence
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <Counter
                    target={1000}
                    suffix="+"
                    className="text-4xl lg:text-5xl font-bold text-accent mb-2"
                  />
                  <div className="text-neutral text-sm lg:text-base font-medium">
                    Clients Worldwide
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <Counter
                    target={50}
                    suffix="+"
                    className="text-4xl lg:text-5xl font-bold text-accent mb-2"
                  />
                  <div className="text-neutral text-sm lg:text-base font-medium">
                    Expert Advisors
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <Counter
                    target={98}
                    suffix="%"
                    className="text-4xl lg:text-5xl font-bold text-accent mb-2"
                  />
                  <div className="text-neutral text-sm lg:text-base font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-secondary text-lg mb-6">
              Ready to take your business to the next level?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="team-section bg-neutral py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Meet the Experts Behind
              <span className="text-accent"> Your Success</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Our team of certified professionals combines decades of experience
              with a genuine passion for helping dental practices thrive
              financially.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="team-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

                  {/* Social Links (Visible on Hover) */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Name & Position (On Image) */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="p-6">
                  <p className="text-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-neutral">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-accent text-2xl" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Want to Join Our Team?
                </h3>
                <p className="text-neutral/90 text-lg mb-8 max-w-2xl mx-auto">
                  We're always looking for talented professionals who are
                  passionate about the dental industry and financial excellence.
                </p>
                <a
                  href="#careers"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="values-section bg-white py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="values-pattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="1" fill="#1B263B" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#values-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              The Principles That
              <span className="text-accent"> Guide Us</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Our values aren't just words on a wall. They're the foundation of
              every client relationship and every financial strategy we develop.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {values.map((value) => {
              const IconComponent = iconMap[value.icon] || Heart;
              const isPrimary =
                value.id === "2" || value.id === "4" || value.id === "6";
              return (
                <div
                  key={value.id}
                  className="value-card group bg-neutral rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Background Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      isPrimary ? "from-primary/10" : "from-accent/10"
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 ${
                          isPrimary
                            ? "bg-primary/10 group-hover:bg-primary"
                            : "bg-accent/10 group-hover:bg-accent"
                        } rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <IconComponent
                          className={`text-2xl ${
                            isPrimary ? "text-primary" : "text-accent"
                          } group-hover:text-white transition-colors duration-500`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold text-primary mb-4 ${
                        isPrimary
                          ? "group-hover:text-primary"
                          : "group-hover:text-accent"
                      } transition-colors duration-300`}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Card Number */}
                  <div
                    className={`absolute top-6 right-6 text-6xl font-bold ${
                      isPrimary
                        ? "text-primary/5 group-hover:text-primary/10"
                        : "text-primary/5 group-hover:text-accent/10"
                    } transition-colors duration-500`}
                  >
                    {value.number}
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-1 ${
                      isPrimary ? "bg-primary" : "bg-accent"
                    } group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Culture Highlight */}
          <div className="mt-16 lg:mt-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/slider-1.webp"
                    alt="bkeep Culture"
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl p-6 shadow-2xl">
                  <div className="text-3xl font-bold text-white mb-1">
                    4.9/5
                  </div>
                  <div className="text-sm text-white/90">
                    Employee Satisfaction
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                    Our Culture
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  A Workplace That
                  <span className="text-accent"> Inspires Excellence</span>
                </h3>

                <p className="text-secondary text-lg leading-relaxed">
                  We've built more than a company—we've built a community. Our
                  team thrives in an environment that values work-life balance,
                  professional development, and genuine collaboration.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                    <span className="text-secondary">
                      <strong className="text-primary">Flexible Work:</strong>{" "}
                      Hybrid model with remote options
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                    <span className="text-secondary">
                      <strong className="text-primary">Growth:</strong> Annual
                      learning budgets and conference attendance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                    <span className="text-secondary">
                      <strong className="text-primary">Benefits:</strong>{" "}
                      Comprehensive health, dental, and retirement plans
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent text-xl shrink-0 mt-1" />
                    <span className="text-secondary">
                      <strong className="text-primary">Recognition:</strong>{" "}
                      Regular awards and team celebrations
                    </span>
                  </li>
                </ul>

                <a
                  href="#careers"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-3 transition-all duration-300"
                >
                  Join Our Team
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="release-section relative overflow-hidden py-16 lg:py-24">
        {/* Split Background Design */}
        <div className="absolute inset-0">
          {/* Purple/Primary Side */}
          <div className="absolute inset-0 w-full lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
          {/* Light/Neutral Side */}
          <div className="absolute inset-0 left-0 lg:left-1/2 w-full lg:w-1/2 bg-neutral"></div>

          {/* Decorative Circles/Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {/* Large Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-white rounded-full"></div>

            {/* Diagonal Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="20%"
                y1="0"
                x2="120%"
                y2="100%"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="-20%"
                y1="0"
                x2="80%"
                y2="100%"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="100%"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="80%"
                y1="0"
                x2="-20%"
                y2="100%"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content (Text) */}
            <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-block animate-fadeInUp">
                <span className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                  Press Release
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fadeInUp animation-delay-100">
                BKEEP is one of Canada's Best Workplaces™
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed animate-fadeInUp animation-delay-200">
                We are proud to announce that BKEEP has been recognized as one
                of Canada's Best Workplaces, reflecting our commitment to
                creating an exceptional work environment for our team.
              </p>

              {/* CTA Button */}
              <div className="pt-4 animate-fadeInUp animation-delay-300">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 group"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Additional Stats/Info */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-fadeInUp animation-delay-400">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    2024
                  </div>
                  <div className="text-sm text-white/80">Award Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    Top 50
                  </div>
                  <div className="text-sm text-white/80">National Rank</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-white/80">Employees</div>
                </div>
              </div>
            </div>

            {/* Right Content (Image) */}
            <div className="order-1 lg:order-2 animate-fadeInRight">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Overlay for Better Visual */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>

                  {/* Image */}
                  <Image
                    src="/slider-1.webp"
                    alt="BKEEP is one of Canada's Best Workplaces™"
                    width={800}
                    height={600}
                    className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Decorative Circle Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                    <svg
                      className="w-full h-full opacity-30"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating Badge/Card */}
                <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white rounded-2xl p-6 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Award className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-secondary">
                        Certified
                      </div>
                      <div className="text-lg font-bold text-primary">
                        Best Workplace
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Impact */}
      <section className="stats-section bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>

          {/* Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="stats-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stats-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Our Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Numbers That Tell
              <span className="text-accent"> Our Story</span>
            </h2>
            <p className="text-lg text-neutral/90 leading-relaxed">
              Real results from real dental practices. Here's the measurable
              impact we've made across Canada.
            </p>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
            {/* Stat 1 */}
            <div className="stat-card bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Building className="text-accent text-2xl" />
                </div>
                <Counter
                  target={300}
                  className="text-5xl lg:text-6xl font-bold text-accent mb-2"
                />
                <div className="text-neutral/90 text-lg font-medium">
                  Dental Practices Served
                </div>
                <div className="text-neutral/70 text-sm mt-2">
                  Across 8 provinces
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat-card bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="text-accent text-2xl" />
                </div>
                <Counter
                  target={127}
                  prefix="$"
                  suffix="K"
                  className="text-5xl lg:text-6xl font-bold text-accent mb-2"
                />
                <div className="text-neutral/90 text-lg font-medium">
                  Avg. Profit Unlocked
                </div>
                <div className="text-neutral/70 text-sm mt-2">
                  Per practice annually
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat-card bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <ChartLine className="text-accent text-2xl" />
                </div>
                <Counter
                  target={98}
                  suffix="%"
                  className="text-5xl lg:text-6xl font-bold text-accent mb-2"
                />
                <div className="text-neutral/90 text-lg font-medium">
                  Client Retention Rate
                </div>
                <div className="text-neutral/70 text-sm mt-2">
                  Year over year
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="stat-card bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="text-accent text-2xl" />
                </div>
                <Counter
                  target={15}
                  suffix="+"
                  className="text-5xl lg:text-6xl font-bold text-accent mb-2"
                />
                <div className="text-neutral/90 text-lg font-medium">
                  Years of Excellence
                </div>
                <div className="text-neutral/70 text-sm mt-2">Since 2009</div>
              </div>
            </div>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="text-center">
              <Counter
                target={50}
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-white mb-2"
              />
              <div className="text-neutral/80 text-sm">Team Members</div>
            </div>

            <div className="text-center">
              <Counter
                target={24}
                className="text-3xl lg:text-4xl font-bold text-white mb-2"
              />
              <div className="text-neutral/80 text-sm">CPAs on Staff</div>
            </div>

            <div className="text-center">
              <Counter
                target={2}
                prefix="$"
                suffix="M+"
                className="text-3xl lg:text-4xl font-bold text-white mb-2"
              />
              <div className="text-neutral/80 text-sm">
                Total Profit Unlocked
              </div>
            </div>

            <div className="text-center">
              <Counter
                target={99}
                suffix="%"
                className="text-3xl lg:text-4xl font-bold text-white mb-2"
              />
              <div className="text-neutral/80 text-sm">Tax Compliance Rate</div>
            </div>
          </div>

          {/* Testimonial/Quote */}
          <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-accent/20 font-serif">
                "
              </div>

              <div className="relative z-10">
                <p className="text-xl lg:text-2xl text-white leading-relaxed mb-6 italic text-center">
                  bkeep transformed our practice's financial health. We went
                  from struggling with cash flow to having a clear path to
                  profitability. Their expertise is unmatched.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      Dr. Jennifer Smith
                    </div>
                    <div className="text-neutral/80 text-sm">
                      Smith Dental Clinic, Toronto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              See What We Can Do For You
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Find an Advisor */}
      <section className="connect-section bg-neutral py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
            <div className="text-center mb-6">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                Find an advisor
              </span>
            </div>
          </div>

          {/* Main Search Form */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              {/* Search Title */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Find an expert by
                  <span className="text-accent relative inline-block">
                    {" "}
                    Services
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C20 2 40 2 50 3C60 4 80 6 100 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  or by{" "}
                  <span className="text-accent relative inline-block">
                    Industry
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C20 2 40 2 50 3C60 4 80 6 100 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  in{" "}
                  <span className="text-accent relative inline-block">
                    Canada
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C20 2 40 2 50 3C60 4 80 6 100 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  or by{" "}
                  <span className="text-secondary underline decoration-2 underline-offset-4">
                    Name
                  </span>
                </h2>
              </div>

              {/* Search Form */}
              <form
                id="advisor-search-form"
                onSubmit={handleAdvisorSearch}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {/* Services Dropdown */}
                  <div className="relative group">
                    <label
                      htmlFor="services"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Services
                    </label>
                    <div className="relative">
                      <select
                        id="services"
                        name="services"
                        value={advisorFormData.services}
                        onChange={(e) =>
                          setAdvisorFormData({
                            ...advisorFormData,
                            services: e.target.value,
                          })
                        }
                        className="w-full px-4 py-4 bg-neutral border-2 border-neutral focus:border-accent rounded-xl text-primary font-medium appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="">Select a service</option>
                        {servicesList.map((service) => (
                          <option key={service} value={service.toLowerCase()}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-accent pointer-events-none rotate-90" />
                    </div>
                  </div>

                  {/* Industry Dropdown */}
                  <div className="relative group">
                    <label
                      htmlFor="industry"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        id="industry"
                        name="industry"
                        value={advisorFormData.industry}
                        onChange={(e) =>
                          setAdvisorFormData({
                            ...advisorFormData,
                            industry: e.target.value,
                          })
                        }
                        className="w-full px-4 py-4 bg-neutral border-2 border-neutral focus:border-accent rounded-xl text-primary font-medium appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="">Select an industry</option>
                        {industriesList.map((industry) => (
                          <option
                            key={industry}
                            value={industry.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {industry}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-accent pointer-events-none rotate-90" />
                    </div>
                  </div>

                  {/* Location Dropdown */}
                  <div className="relative group">
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Location (Canada)
                    </label>
                    <div className="relative">
                      <select
                        id="location"
                        name="location"
                        value={advisorFormData.location}
                        onChange={(e) =>
                          setAdvisorFormData({
                            ...advisorFormData,
                            location: e.target.value,
                          })
                        }
                        className="w-full px-4 py-4 bg-neutral border-2 border-neutral focus:border-accent rounded-xl text-primary font-medium appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="">Select a province</option>
                        {canadianProvinces.map((province) => (
                          <option
                            key={province}
                            value={province.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {province}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-accent pointer-events-none rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Name Search Input */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Or search by Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={advisorFormData.name}
                      onChange={(e) =>
                        setAdvisorFormData({
                          ...advisorFormData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter advisor name..."
                      className="w-full px-4 py-4 bg-neutral border-2 border-neutral focus:border-accent rounded-xl text-primary font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 pl-12"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="group px-12 py-4 bg-accent text-white font-bold text-lg rounded-full border-2 border-accent hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
                  >
                    Submit
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-accent text-xl" />
                </div>
                <p className="text-sm text-secondary font-medium">
                  500+ Advisors
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-accent text-xl" />
                </div>
                <p className="text-sm text-secondary font-medium">
                  CPA Certified
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="text-accent text-xl" />
                </div>
                <p className="text-sm text-secondary font-medium">
                  24/7 Support
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="text-accent text-xl" />
                </div>
                <p className="text-sm text-secondary font-medium">
                  Trusted Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
