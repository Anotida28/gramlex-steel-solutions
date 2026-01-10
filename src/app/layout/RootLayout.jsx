import { Outlet } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop.js";
import { COMPANY } from "@/shared/config/company.js";

const {
  contact: { whatsapp } = {},
} = COMPANY;

const RootLayout = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      {whatsapp?.link && (
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href={whatsapp.link}
            className="btn btn-outline btn-sm flex items-center gap-2 bg-background shadow-lg"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Gramlex on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RootLayout;
