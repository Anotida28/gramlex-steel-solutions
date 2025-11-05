import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import gramlexLogo from "@/assets/gramlex-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  /** Navigation items (keeps public routes unchanged) */
  type NavItem = { name: string; path: string };
  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  // Accessibility: focus trap for mobile menu when open
  useEffect(() => {
    if (!isOpen) return;
    const dialog = document.getElementById("mobile-navigation");
    if (!dialog) return;

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const prevActive = document.activeElement as HTMLElement | null;

    // Focus the first focusable element in the menu
    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      if (e.key === "Tab") {
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            (last as HTMLElement)?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            (first as HTMLElement)?.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    // prevent background scroll while menu open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      prevActive?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header
        className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card"
        role="banner"
        aria-label="Primary header"
      >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+263 77 241 1400</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>gramlex.investments@gmail.com</span>
            </div>
          </div>
          <div className="text-xs">
            6506 Shamrock Park, Gweru, Zimbabwe
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center space-x-3" aria-label="Gramlex home">
            <img src={gramlexLogo} alt="Gramlex Investments" className="h-12 w-auto" decoding="async" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-foreground">Gramlex Investments</h1>
              <p className="text-xs text-muted-foreground">Steel & General Hardware</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" role="navigation" aria-label="Primary navigation">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive: linkActive }) =>
                      cn(
                        "text-sm font-medium transition-colors focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-md",
                        linkActive ? "text-primary" : "text-foreground/90 hover:text-primary"
                      )
                    }
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="hero" size="sm" className="hidden md:inline-flex" asChild>
              <NavLink to="/contact">Request Quote</NavLink>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden py-4 border-t border-border/50" role="dialog" aria-modal="true" aria-label="Mobile menu">
            <nav className="space-y-4" aria-label="Mobile primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors focus-visible:ring-4 focus-visible:ring-primary/40 rounded-md",
                    isActive(item.path) ? "text-primary" : "text-foreground/90"
                    )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="hero" size="sm" className="w-full mt-4" asChild>
                <NavLink to="/contact">Request Quote</NavLink>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Navigation;
