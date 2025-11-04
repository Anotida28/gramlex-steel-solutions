import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/gramlex-logo.png"
                alt="Gramlex Investments"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-bold">Gramlex Investments</h3>
                <p className="text-sm text-primary-foreground/80">Steel &amp; General Hardware</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Leading provider of steel reinforcement solutions for construction, civil, mining, and engineering sectors in Zimbabwe.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary-glow" />
                <div>
                  <p className="text-sm">6506 Shamrock Park</p>
                  <p className="text-sm">Gweru, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-sm">+263 77 241 1400</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-sm">+263712411400 (WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-sm">gramlex.investments@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer text-primary-foreground/80 transition-colors hover:text-primary-glow">Steel Supply &amp; Distribution</li>
              <li className="cursor-pointer text-primary-foreground/80 transition-colors hover:text-primary-glow">Cutting &amp; Bending Services</li>
              <li className="cursor-pointer text-primary-foreground/80 transition-colors hover:text-primary-glow">Delivery &amp; Positioning</li>
              <li className="cursor-pointer text-primary-foreground/80 transition-colors hover:text-primary-glow">Construction Support</li>
              <li className="cursor-pointer text-primary-foreground/80 transition-colors hover:text-primary-glow">Mining Solutions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary-glow" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 8:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="mb-3 font-medium">Follow Us</h5>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 transition-colors hover:bg-primary-glow/10 hover:text-primary-glow" aria-label="Visit our Facebook page">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 transition-colors hover:bg-primary-glow/10 hover:text-primary-glow" aria-label="Visit our Twitter page">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 transition-colors hover:bg-primary-glow/10 hover:text-primary-glow" aria-label="Visit our LinkedIn page">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col items-center justify-between text-sm text-primary-foreground/60 md:flex-row">
          <p>&copy; {currentYear} Gramlex Investments. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <span className="cursor-pointer transition-colors hover:text-primary-glow">Privacy Policy</span>
            <span className="cursor-pointer transition-colors hover:text-primary-glow">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
