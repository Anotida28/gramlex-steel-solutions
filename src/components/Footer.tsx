import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import gramlexLogo from "@/assets/gramlex-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={gramlexLogo} alt="Gramlex Investments" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-bold text-lg">Gramlex Investments</h3>
                <p className="text-sm text-primary-foreground/80">Steel & General Hardware</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading provider of steel reinforcement solutions for construction, civil, mining, and engineering sectors in Zimbabwe.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-glow" />
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

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80 hover:text-primary-glow transition-colors cursor-pointer">
                Steel Supply & Distribution
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-glow transition-colors cursor-pointer">
                Cutting & Bending Services
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-glow transition-colors cursor-pointer">
                Delivery & Positioning
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-glow transition-colors cursor-pointer">
                Construction Support
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-glow transition-colors cursor-pointer">
                Mining Solutions
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary-glow" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 8:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 hover:text-primary-glow hover:bg-primary-glow/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Gramlex Investments. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-primary-glow transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-glow transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;