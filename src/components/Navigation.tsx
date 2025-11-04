"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md shadow-card">
      <div className="container mx-auto px-4">
        <div className="hidden items-center justify-between border-b border-border/50 py-2 text-sm text-muted-foreground md:flex">
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
          <div className="text-xs">6506 Shamrock Park, Gweru, Zimbabwe</div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3" aria-label="Gramlex Investments home">
            <Image
              src="/images/gramlex-logo.png"
              alt="Gramlex Investments"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-xl font-bold text-foreground">Gramlex Investments</p>
              <p className="text-xs text-muted-foreground">Steel &amp; General Hardware</p>
            </div>
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="hero" size="sm" className="hidden md:inline-flex">
              Request Quote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-border/50 py-4 lg:hidden">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    isActive(item.path) ? "text-primary" : "text-foreground/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="mt-4 w-full">
                Request Quote
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
