import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "@/features/home/HomePage.jsx";
import ContactPage from "@/features/contact/ContactPage.jsx";
import Navigation from "@/app/layout/Navigation.jsx";

expect.extend(toHaveNoViolations);

const renderWithProviders = (Component) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe("Accessibility", () => {
  it("HomePage has no accessibility violations", async () => {
    const { container } = renderWithProviders(HomePage);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("ContactPage has no accessibility violations", async () => {
    const { container } = renderWithProviders(ContactPage);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Navigation has no accessibility violations", async () => {
    const { container } = renderWithProviders(Navigation);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Navigation has skip link for keyboard users", () => {
    const { container } = renderWithProviders(Navigation);
    const skipLink = container.querySelector('a[href="#main-content"]');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveTextContent(/skip/i);
  });

  it("Navigation toggle button has proper aria attributes", () => {
    const { container } = renderWithProviders(Navigation);
    const toggleButton = container.querySelector('button[aria-label*="navigation"]');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-expanded");
    expect(toggleButton).toHaveAttribute("aria-controls");
  });
});
