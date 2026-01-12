import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import ErrorBoundary from "@/components/ErrorBoundary.jsx";
import { COMPANY } from "@/shared/config/company.js";
import { navigationLinks, navigationCta } from "@/shared/config/navigation.js";

/**
 * Validates critical configuration on app startup.
 * Logs warnings in development mode for missing/invalid config.
 */
const validateConfig = () => {
  if (import.meta.env.PROD) return; // Skip in production

  const warnings = [];

  // Validate COMPANY config
  if (!COMPANY?.brand?.name) {
    warnings.push("COMPANY.brand.name is missing");
  }
  if (!COMPANY?.contact?.phones?.length) {
    warnings.push("COMPANY.contact.phones is empty");
  }
  if (!COMPANY?.contact?.generalEmail) {
    warnings.push("COMPANY.contact.generalEmail is missing");
  }
  if (!COMPANY?.contact?.whatsapp?.link) {
    warnings.push("COMPANY.contact.whatsapp.link is missing - WhatsApp button will fail");
  }
  if (!COMPANY?.address?.city) {
    warnings.push("COMPANY.address.city is missing");
  }
  if (!COMPANY?.social?.length) {
    warnings.push("COMPANY.social is empty - footer social links will be empty");
  }

  // Validate navigation config
  if (!navigationLinks?.length) {
    warnings.push("navigationLinks is empty - navigation will have no links");
  }
  if (!navigationCta?.to || !navigationCta?.label) {
    warnings.push("navigationCta is incomplete - CTA button will fail");
  }

  // Output warnings
  if (warnings.length > 0) {
    console.warn(
      "%c⚠️ Config Validation Warnings",
      "font-weight: bold; color: #f59e0b;",
      "\n" + warnings.map((w) => `  • ${w}`).join("\n")
    );
  }
};

const App = () => {
  useEffect(() => {
    validateConfig();
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
