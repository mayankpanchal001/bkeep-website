"use client";

import { contactInfo, socialLinks } from "@/lib/data/contact";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Award,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const serviceLinks = [
    { label: "Dental Bookkeeping", href: "/services" },
    { label: "Financial Strategy", href: "/services" },
    { label: "P&L Reports", href: "/services" },
    { label: "Tax Preparation", href: "/services/tax" },
    { label: "Payroll Services", href: "/services" },
    { label: "Cash Flow Analysis", href: "/services" },
  ];

  const resourceLinks = [
    { label: "Blog & Insights", href: "/insights" },
    { label: "Case Studies", href: "#" },
    { label: "Free Consultation", href: "/contact-us" },
    { label: "Financial Tools", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "About Us", href: "/about-us" },
  ];

  const bottomLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info Column */}
          <div className="footer-column footer-about">
            <div className="footer-logo">
              <Link href="/" className="footer-logo-link">
                <Image
                  src="/Logo.png"
                  alt="BKEEP Logo"
                  width={40}
                  height={40}
                  className="footer-logo-img"
                />
              </Link>
              <Link href="/" className="footer-logo-text">
                <span className="logo-primary">b</span>
                <span className="logo-secondary">keep</span>
              </Link>
            </div>
            <p className="footer-description">
              Specialized dental bookkeeping and financial strategy services. We
              help dental practices unlock hidden profit through strategic
              financial management.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="social-icon" size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="footer-contact-info">
              <li>
                <MapPin className="contact-icon" size={18} />
                <span className="whitespace-pre-line">
                  {contactInfo.address.display}
                </span>
              </li>
              <li>
                <Phone className="contact-icon" size={18} />
                <a href={`tel:${contactInfo.phoneTel}`}>
                  {contactInfo.phoneFormatted}
                </a>
              </li>
              <li>
                <Mail className="contact-icon" size={18} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Clock className="contact-icon" size={18} />
                <span>{contactInfo.businessHours}</span>
              </li>
            </ul>
            <Link href="/contact-us" className="footer-cta">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} bkeep. All rights reserved.
            </p>
            <nav className="footer-bottom-links">
              {bottomLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="footer-certifications">
              <span
                className="certification-badge"
                title="Certified Public Accountant"
              >
                <Award className="cert-icon" size={14} />
                CPA
              </span>
              <span
                className="certification-badge"
                title="QuickBooks Certified"
              >
                <CheckCircle2 className="cert-icon" size={14} />
                QuickBooks
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
