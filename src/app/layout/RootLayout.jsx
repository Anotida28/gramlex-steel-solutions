import { Outlet } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop.js";
import { COMPANY } from "@/shared/config/company.js";

const {
  contact: { whatsapp, phones = [] } = {},
} = COMPANY;

// Opens WhatsApp with a starter message, so the first reply can go straight to pricing.
const whatsappHref = whatsapp?.link
  ? `${whatsapp.link}?text=${encodeURIComponent("Hi Gramlex, I'd like a quote for ")}`
  : null;
const primaryPhone = phones[0];

const RootLayout = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      {whatsappHref && (
        <>
          {/* Desktop: floating WhatsApp button */}
          <a
            href={whatsappHref}
            className="whatsapp-fab"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp us
            <span className="sr-only"> (opens WhatsApp)</span>
          </a>

          {/* Mobile: sticky action bar */}
          <div className="mobile-action-bar">
            <a href={whatsappHref} className="mobile-action-primary" target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp us
              <span className="sr-only"> (opens WhatsApp)</span>
            </a>
            {primaryPhone && (
              <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="mobile-action-secondary">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call
              </a>
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default RootLayout;
