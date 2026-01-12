import { 
  Facebook, 
  Globe, 
  Linkedin, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/gramlex-logo.png";
import { COMPANY } from "@/shared/config/company.js";
import { navigationCta, navigationLinks } from "@/shared/config/navigation.js";

const {
  brand: { name: brandName, legalName, summary } = {},
  contact: { phones = [], generalEmail, salesEmail, projectsEmail } = {},
  address = {},
  hours = {},
  serviceAreas,
  social = [],
} = COMPANY;

const addressLine = [address.line1, address.suburb, address.city]
  .filter(Boolean)
  .join(", ");
const addressCountry = address.country ? `, ${address.country}` : "";

const emailAddresses = [generalEmail, salesEmail, projectsEmail].filter(Boolean);
const quickLinks = [...navigationLinks, navigationCta];

const socialIconMap = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
};

const services = [
  "Construction Support",
  "Steel & Hardware Supply",
  "Earthmoving Equipment",
  "Project Management",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt={`${brandName} logo`}
                className="h-12 w-auto brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-6 text-steel-400 text-sm leading-relaxed">
              {summary || "Zimbabwe's trusted partner for construction, steel supply, and earthmoving services. Delivering quality and reliability since 2009."}
            </p>
            
            {/* Social Links */}
            {social.length > 0 && (
              <div className="footer-social mt-6">
                {social.map(({ label, href }) => {
                  const Icon = socialIconMap[label] || MessageCircle;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${label}`}
                      className="group"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="inline-flex items-center gap-1 group">
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="inline-flex items-center gap-1 group">
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="space-y-4">
              {phones.length > 0 && (
                <div className="footer-contact-item">
                  <Phone className="h-4 w-4 mt-0.5" />
                  <div>
                    {phones.map((phone) => (
                      <a 
                        key={phone} 
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block hover:text-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {emailAddresses.length > 0 && (
                <div className="footer-contact-item">
                  <Mail className="h-4 w-4 mt-0.5" />
                  <div>
                    {emailAddresses.slice(0, 2).map((email) => (
                      <a 
                        key={email} 
                        href={`mailto:${email}`}
                        className="block hover:text-gold transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {addressLine && (
                <div className="footer-contact-item">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>{addressLine}{addressCountry}</span>
                </div>
              )}

              {serviceAreas && (
                <div className="footer-contact-item">
                  <Globe className="h-4 w-4 mt-0.5" />
                  <span>{serviceAreas}</span>
                </div>
              )}
            </div>

            {/* Operating Hours */}
            {(hours.weekdays || hours.saturday) && (
              <div className="mt-6 pt-6 border-t border-navy-lighter">
                <p className="text-xs font-semibold uppercase tracking-wider text-steel-500 mb-3">
                  Operating Hours
                </p>
                <div className="space-y-1 text-sm text-steel-400">
                  {hours.weekdays && <p>{hours.weekdays}</p>}
                  {hours.saturday && <p>{hours.saturday}</p>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 py-8 border-t border-navy-lighter">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to Start Your Project?</h3>
              <p className="text-steel-400">Get in touch for a free consultation and quote.</p>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Contact Us Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {legalName || "Gramlex Investments (Pvt) Ltd"}. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
