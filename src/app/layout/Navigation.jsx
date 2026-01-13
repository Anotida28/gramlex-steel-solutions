import { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/gramlex-logo.png";
import { COMPANY } from "@/shared/config/company.js";
import { navigationLinks, navigationCta } from "@/shared/config/navigation.js";

const brandName = COMPANY.brand.name;
const primaryPhone = COMPANY.contact?.phones?.[0];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Determine if we're on the homepage for transparent header
  const isHomePage = location.pathname === "/";

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap for mobile menu accessibility
  useEffect(() => {
    if (!open || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    // Focus first element when menu opens
    firstElement?.focus();

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [open]);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => {
    setOpen(false);
    // Return focus to toggle button when menu closes
    toggleButtonRef.current?.focus();
  }, []);

  // Determine header styling based on scroll and page
  const headerClass = `nav-header ${
    isHomePage && !scrolled ? "nav-header--transparent" : "nav-header--solid"
  }`;

  const navLinkClassName = ({ isActive }) =>
    `nav-link${isActive ? " nav-link--active" : ""}`;

  return (
    <>
      <header className={headerClass}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <nav className="nav-container" aria-label="Primary">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="nav-logo" 
            onClick={closeMenu} 
            aria-label={brandName}
          >
            <img
              src={logo}
              alt={brandName}
              loading="eager"
              decoding="async"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <NavLink 
                  to={link.to} 
                  className={navLinkClassName} 
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="ml-4">
              <NavLink 
                to={navigationCta.to} 
                className="btn btn-primary btn-sm"
                onClick={closeMenu}
              >
                <Phone className="h-4 w-4" />
                {navigationCta.label}
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleButtonRef}
            type="button"
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        ref={mobileMenuRef}
        id="mobile-navigation" 
        className={`nav-mobile ${open ? "nav-mobile--open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <ul className="nav-mobile-menu">
          {navigationLinks.map((link, index) => (
            <li 
              key={link.to}
              style={{ 
                animationDelay: open ? `${index * 50}ms` : "0ms" 
              }}
              className={open ? "animate-in" : ""}
            >
              <NavLink
                to={link.to}
                className="nav-mobile-link"
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 opacity-40" />
              </NavLink>
            </li>
          ))}
          <li 
            className={`mt-6 ${open ? "animate-in" : ""}`}
            style={{ animationDelay: open ? `${navigationLinks.length * 50}ms` : "0ms" }}
          >
            <NavLink
              to={navigationCta.to}
              className="btn btn-primary w-full"
              onClick={closeMenu}
            >
              <Phone className="h-4 w-4" />
              {navigationCta.label}
            </NavLink>
          </li>
        </ul>

        {/* Contact Info in Mobile Menu */}
        <div className="mt-auto pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Need help?</p>
          <a 
            href={primaryPhone ? `tel:${primaryPhone.replace(/\s/g, "")}` : "/contact"}
            className="text-lg font-semibold text-navy hover:text-primary"
          >
            {primaryPhone || "Contact Us"}
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
