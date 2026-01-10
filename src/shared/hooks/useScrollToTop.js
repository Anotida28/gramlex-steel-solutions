import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const main = document.getElementById("main-content");
    if (main) {
      window.setTimeout(() => main.focus(), 50);
    }
  }, [location.pathname]);
};
