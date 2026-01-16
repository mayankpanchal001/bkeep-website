"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Monthly Bookkeeping", href: "/services/monthly-bookkeeping" },
      { label: "CRA Audit Support", href: "/services/cra-audit-support" },
      { label: "Bookkeeping Cleanup", href: "/services/bookkeeping-cleanup" },
      { label: "Tax Services", href: "/services/tax" },
      { label: "Assurance", href: "/services/assurance" },
      { label: "Advisory", href: "/services/advisory" },
    ],
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Toronto", href: "/locations/toronto" },
      { label: "Mississauga", href: "/locations/mississauga" },
      { label: "London", href: "/locations/london" },
      { label: "Brampton", href: "/locations/brampton" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialIcons = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    url: "https://www.twitter.com/",
    label: "Twitter",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Set<string>>(
    new Set()
  );
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        // Only close if clicking outside the mobile menu
        if (isMobileMenuOpen) {
          const target = event.target as HTMLElement;
          if (
            !target.closest(".hamburger") &&
            !target.closest(".mobile-menu")
          ) {
            setIsMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const renderMenuItem = (item: MenuItem, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemActive = isActive(item.href);
    const isSubmenuOpen = isMobile
      ? openMobileSubmenus.has(item.label)
      : openSubmenus.has(item.label);

    if (isMobile) {
      return (
        <li
          key={item.href}
          className={`${hasChildren ? "menu-item-has-children" : ""} ${
            isSubmenuOpen ? "open" : ""
          } ${isItemActive ? "current-menu-item" : ""}`}
        >
          {hasChildren ? (
            <>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileSubmenu(item.label);
                }}
                className={isItemActive ? "current" : ""}
              >
                {item.label}
              </a>
              <ul className="sub-menu">
                {item.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={isItemActive ? "current" : ""}
            >
              {item.label}
            </Link>
          )}
        </li>
      );
    }

    return (
      <li
        key={item.href}
        className={`${hasChildren ? "menu-item-has-children" : ""} ${
          isItemActive ? "current-menu-item" : ""
        }`}
        onMouseEnter={() =>
          hasChildren &&
          setOpenSubmenus((prev) => new Set(prev).add(item.label))
        }
        onMouseLeave={() =>
          hasChildren &&
          setOpenSubmenus((prev) => {
            const newSet = new Set(prev);
            newSet.delete(item.label);
            return newSet;
          })
        }
      >
        <Link href={item.href}>{item.label}</Link>
        {hasChildren && (
          <ul className="sub-menu">
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link href={child.href}>{child.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-wrapper">
            {/* Logo Section */}
            <Link href="/" className="header-logo">
              <Image
                src="/Logo.png"
                alt="BKEEP Logo"
                width={20}
                height={20}
                className="logo-img"
                priority
              />
              <span className="logo-text">
                <span className="logo-primary">b</span>
                <span className="logo-secondary">keep</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="max-sm:hidden">
              <ul className="header-nav-links">
                {menuItems.map((item) => renderMenuItem(item, false))}
              </ul>
            </div>

            {/* Search & CTA Section */}
            <div className="header-right">
              <div className="header-actions">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
              </div>

              <div
                className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
      >
        <div className="container h-full">
          <div className="sm:hidden py-16 h-full flex items-center justify-center">
            <div className="flex flex-col gap-12 items-center justify-center">
              <ul className="mobile-nav-links">
                {menuItems.map((item) => renderMenuItem(item, true))}
              </ul>

              <div className="social-icons">
                {socialIcons.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
