import { Facebook, Globe, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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

const Footer = () => {
  return (
    <footer className="section-tight border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="card card-soft card-compact card-no-shadow">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${brandName} logo`}
              className="brand-logo"
              loading="lazy"
              decoding="async"
            />
            <span className="text-lg font-semibold text-foreground">{brandName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        </div>

        <div className="card card-soft card-compact card-no-shadow">
          <h3 className="text-base font-semibold text-foreground">Quick links</h3>
          <ul className="stack-sm mt-5 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="card card-soft card-compact card-no-shadow">
          <h3 className="text-base font-semibold text-foreground">Contact</h3>
          <ul className="stack-sm mt-5 text-sm text-muted-foreground">
            {phones.map((phone) => (
              <li key={phone} className="info-stack">
                <span className="info-stack__icon" aria-hidden="true">
                  <Phone className="h-4 w-4" />
                </span>
                <span>{phone}</span>
              </li>
            ))}
            {emailAddresses.map((email) => (
              <li key={email} className="info-stack">
                <span className="info-stack__icon" aria-hidden="true">
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${email}`} className="transition-colors hover:text-foreground">
                  {email}
                </a>
              </li>
            ))}
            {addressLine && (
              <li className="info-stack">
                <span className="info-stack__icon" aria-hidden="true">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>{addressLine}{addressCountry}</span>
              </li>
            )}
            {serviceAreas && (
              <li className="info-stack">
                <span className="info-stack__icon" aria-hidden="true">
                  <Globe className="h-4 w-4" />
                </span>
                <span>{serviceAreas}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="card card-soft card-compact card-no-shadow">
          <h3 className="text-base font-semibold text-foreground">Connect</h3>
          <div className="stack-sm mt-5 text-sm text-muted-foreground">
            {social.length > 0 && (
              <ul className="stack-sm" aria-label="Social links">
                {social.map(({ label, href }) => {
                  const Icon = socialIconMap[label] || MessageCircle;
                  return (
                    <li key={label} className="info-stack">
                      <span className="info-stack__icon" aria-hidden="true">
                        <Icon className="h-4 w-4" />
                      </span>
                      <a href={href} className="transition-colors hover:text-foreground">
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
            {(hours.weekdays || hours.saturday || hours.emergency) && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Hours</p>
                <ul className="stack-sm mt-4 text-sm text-muted-foreground">
                  {hours.weekdays && <li>{hours.weekdays}</li>}
                  {hours.saturday && <li>{hours.saturday}</li>}
                  {hours.emergency && <li>{hours.emergency}</li>}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border bg-background/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {legalName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
