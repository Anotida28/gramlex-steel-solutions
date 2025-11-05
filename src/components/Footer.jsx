import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/gramlex-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Gramlex logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold">
              Gramlex Steel Solutions
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Comprehensive steel reinforcement supply, fabrication, and logistics
            partner for construction, civil, and mining projects across
            Zimbabwe.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +263 771 000 111
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              info@gramlexsteel.co.zw
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              125 Coventry Road, Workington, Harare
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Operating Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>Mon - Fri: 08:00 - 18:00</li>
            <li>Sat: 08:00 - 13:00</li>
            <li>Emergency support available 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border bg-background/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gramlex Investments. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
