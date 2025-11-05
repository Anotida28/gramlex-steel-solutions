import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

/**
 * AnimatedRoutes
 * - Keeps existing Routes API and adds a lightweight enter animation on route change.
 * - Focuses `#main-content` after navigation for accessibility.
 */
function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Move focus to main content after route change for screen reader users.
    const main = document.getElementById("main-content");
    if (main) {
      // small timeout ensures focus happens after content is mounted
      window.setTimeout(() => main.focus(), 50);
    }
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="route-motion">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
