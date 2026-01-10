import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gramlex-logo.png";
import { COMPANY } from "@/shared/config/company.js";
import { navigationLinks, navigationCta } from "@/shared/config/navigation.js";

const brandName = COMPANY.brand.name;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const navLinkClassName = ({ isActive }) =>
    `nav-link${isActive ? " nav-link--active" : ""}`;
  const mobileNavLinkClassName = ({ isActive }) =>
    `${navLinkClassName({ isActive })} nav-link--mobile`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="nav-shell mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <NavLink to="/" className="brand-link" onClick={closeMenu}>
          <img
            src={logo}
            alt={brandName}
            className="brand-logo"
            loading="eager"
            decoding="async"
          />
          {brandName}
        </NavLink>

        <button
          type="button"
          className="btn btn-ghost btn-icon border border-border text-primary sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <ul className="nav-menu nav-menu--desktop hidden sm:flex">
          {navigationLinks.map((link) => (
            <li key={link.to} className="nav-menu__item">
              <NavLink to={link.to} className={navLinkClassName} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-menu__item">
            <NavLink to={navigationCta.to} className="btn btn-primary btn-sm" data-focus="strong" onClick={closeMenu}>
              {navigationCta.label}
            </NavLink>
          </li>
        </ul>
      </nav>

      {open && (
        <div id="mobile-navigation" className="nav-shell nav-shell--mobile sm:hidden">
          <ul className="nav-menu nav-menu--mobile">
            {navigationLinks.map((link) => (
              <li key={link.to} className="nav-menu__item">
                <NavLink
                  to={link.to}
                  className={mobileNavLinkClassName}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-menu__item">
              <NavLink
                to={navigationCta.to}
                className="btn btn-primary btn-sm w-full"
                data-focus="strong"
                onClick={closeMenu}
              >
                {navigationCta.label}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
