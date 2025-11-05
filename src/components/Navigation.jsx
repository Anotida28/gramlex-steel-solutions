import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gramlex-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 font-semibold text-lg tracking-wide"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Gramlex Investments"
            className="h-10 w-auto"
          />
          Gramlex Steel Solutions
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-primary transition-colors hover:bg-primary hover:text-background focus:outline-none focus-visible:ring focus-visible:ring-primary sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-primary transition hover:shadow-lg"
            onClick={closeMenu}
          >
            Request Quote
          </NavLink>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground shadow-primary"
              onClick={closeMenu}
            >
              Request Quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
