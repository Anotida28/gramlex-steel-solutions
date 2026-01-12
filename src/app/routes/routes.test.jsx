import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "@/app/routes/index.jsx";

const renderWithRouter = (initialEntries = ["/"]) => {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe("App Routes", () => {
  it("renders home page at /", () => {
    renderWithRouter(["/"]);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders about page at /about", () => {
    renderWithRouter(["/about"]);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders services page at /services", () => {
    renderWithRouter(["/services"]);
    expect(screen.getByRole("heading", { level: 1, name: /integrated delivery/i })).toBeInTheDocument();
  });

  it("renders projects page at /projects", () => {
    renderWithRouter(["/projects"]);
    expect(screen.getByRole("heading", { level: 1, name: /portfolio/i })).toBeInTheDocument();
  });

  it("renders contact page at /contact", () => {
    renderWithRouter(["/contact"]);
    expect(screen.getByRole("heading", { level: 1, name: /delivery/i })).toBeInTheDocument();
  });

  it("renders 404 page for unknown routes", () => {
    renderWithRouter(["/unknown-page-xyz"]);
    expect(screen.getByRole("heading", { level: 1, name: /not found/i })).toBeInTheDocument();
  });
});
