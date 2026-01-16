"use client";

import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { contactInfo, socialLinks } from "@/lib/data/contact";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const breadcrumbRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInUp(breadcrumbRef.current, 0);
    fadeInUp(badgeRef.current, 0.1);
    fadeInUp(headingRef.current, 0.2);
    fadeInUp(descriptionRef.current, 0.3);
    fadeInUp(scrollIndicatorRef.current, 0.4);
    fadeInUp(sectionHeaderRef.current, 0);
    fadeInLeft(contactInfoRef.current, 0.2);
    fadeInRight(contactFormRef.current, 0.2);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Contact Page Hero Section */}
      <section className="contact-hero-section relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-24 lg:py-32">
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
                id="contact-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="white" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav
              ref={breadcrumbRef}
              className="flex justify-center mb-8 opacity-0"
            >
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
                <li className="text-white font-semibold">Contact Us</li>
              </ol>
            </nav>

            {/* Badge */}
            <div ref={badgeRef} className="inline-block mb-6 opacity-0">
              <span className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                <Mail className="w-4 h-4 inline mr-2" />
                Get In Touch
              </span>
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 opacity-0"
            >
              Let&apos;s Start a{" "}
              <span className="text-accent relative inline-block">
                Conversation
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
            <p
              ref={descriptionRef}
              className="text-lg sm:text-xl lg:text-2xl text-neutral/90 leading-relaxed max-w-4xl mx-auto mb-10 opacity-0"
            >
              Have a question or want to discuss a project? We&apos;d love to
              hear from you. Send us a message and we&apos;ll respond as soon as
              possible.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="contact-section py-16 lg:py-24 bg-background"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={sectionHeaderRef}
            className="flex flex-col items-center gap-4 mb-12 lg:mb-16 opacity-0"
          >
            <span className="text-sm sm:text-base tracking-wider text-primary uppercase opacity-70">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-wide text-center">
              Let&apos;s Start a Conversation
            </h2>
            <div className="w-16 h-px bg-primary"></div>
            <p className="text-center text-base sm:text-lg text-secondary max-w-2xl mt-4">
              Have a question or want to discuss a project? We&apos;d love to
              hear from you. Send us a message and we&apos;ll respond as soon as
              possible.
            </p>
          </div>

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div ref={contactInfoRef} className="flex flex-col gap-8 opacity-0">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-light text-primary">
                  Contact Information
                </h3>
                <div className="w-12 h-px bg-primary"></div>
                <p className="text-base sm:text-lg text-secondary leading-relaxed">
                  We&apos;re here to help and answer any questions you might
                  have. Feel free to reach out through any of the following
                  channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="text-primary text-lg" size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wider text-primary opacity-70">
                      Email
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base sm:text-lg text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="text-primary text-lg" size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wider text-primary opacity-70">
                      Phone
                    </span>
                    <a
                      href={`tel:${contactInfo.phoneTel}`}
                      className="text-base sm:text-lg text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {contactInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="text-primary text-lg" size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wider text-primary opacity-70">
                      Address
                    </span>
                    <p className="text-base sm:text-lg text-secondary whitespace-pre-line">
                      {contactInfo.address.display}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-4 pt-4 border-t border-primary/10">
                <span className="text-sm uppercase tracking-wider text-primary opacity-70">
                  Follow Us
                </span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-sm border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group relative z-10"
                        aria-label={social.label}
                      >
                        <IconComponent
                          className="text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300 relative z-10"
                          size={18}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={contactFormRef} className="flex flex-col gap-6 opacity-0">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-light text-primary">
                  Send Us a Message
                </h3>
                <div className="w-12 h-px bg-primary"></div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="contact-form-wrapper flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-primary"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-primary placeholder-secondary/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-primary"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-primary placeholder-secondary/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-primary"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-primary placeholder-secondary/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-primary"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-primary placeholder-secondary/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
