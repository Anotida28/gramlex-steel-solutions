import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import ContactPage from "./ContactPage.jsx";

const renderContactPage = () => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe("ContactPage", () => {
  it("renders the contact form", () => {
    renderContactPage();
    expect(screen.getByRole("form", { name: /project enquiry/i })).toBeInTheDocument();
  });

  it("shows required field labels", () => {
    renderContactPage();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project requirements/i)).toBeInTheDocument();
  });

  it("shows validation error for empty full name", async () => {
    const user = userEvent.setup();
    renderContactPage();

    const submitButton = screen.getByRole("button", { name: /send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for invalid email", async () => {
    const user = userEvent.setup();
    renderContactPage();

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", { name: /send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for short project requirements", async () => {
    const user = userEvent.setup();
    renderContactPage();

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const requirementsInput = screen.getByLabelText(/project requirements/i);

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(requirementsInput, "Short");

    const submitButton = screen.getByRole("button", { name: /send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/few details/i)).toBeInTheDocument();
    });
  });

  it("submits form successfully with valid data", async () => {
    const user = userEvent.setup();
    renderContactPage();

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const requirementsInput = screen.getByLabelText(/project requirements/i);

    await user.type(nameInput, "Jane Doe");
    await user.type(emailInput, "jane@example.com");
    await user.type(requirementsInput, "We need 500 tons of rebar for a bridge project in Harare.");

    const submitButton = screen.getByRole("button", { name: /send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/enquiry received/i)).toBeInTheDocument();
    });
  });

  it("has proper aria attributes for form fields with errors", async () => {
    const user = userEvent.setup();
    renderContactPage();

    const submitButton = screen.getByRole("button", { name: /send|submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      const nameInput = screen.getByLabelText(/full name/i);
      expect(nameInput).toHaveAttribute("aria-invalid", "true");
      expect(nameInput).toHaveAttribute("aria-describedby", "fullName-error");
    });
  });

  it("lists an attached bar bending schedule", async () => {
    const user = userEvent.setup();
    renderContactPage();

    const schedule = new File(["%PDF-1.4"], "bbs-block-a.pdf", { type: "application/pdf" });
    await user.upload(screen.getByLabelText(/drawings or bar bending schedule/i), schedule);

    expect(screen.getByRole("list", { name: /attached files/i })).toHaveTextContent("bbs-block-a.pdf");
  });

  it("rejects attachments that are not PDF or Excel", async () => {
    const user = userEvent.setup({ applyAccept: false });
    renderContactPage();

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/project requirements/i), "Rebar for a two-storey clinic in Gweru.");
    const photo = new File(["jpg"], "site.jpg", { type: "image/jpeg" });
    await user.upload(screen.getByLabelText(/drawings or bar bending schedule/i), photo);
    await user.click(screen.getByRole("button", { name: /send|submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/attach drawings as pdf/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/enquiry received/i)).not.toBeInTheDocument();
  });
});
