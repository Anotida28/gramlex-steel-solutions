import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { COMPANY } from "@/shared/config/company.js";

const {
  contact: { phones = [], generalEmail, salesEmail, projectsEmail, whatsapp } = {},
  address = {},
  hours = {},
} = COMPANY;

const emailContacts = [
  { label: "General", value: generalEmail },
  { label: "Sales", value: salesEmail },
  { label: "Projects", value: projectsEmail },
].filter(({ value }) => Boolean(value));

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  projectLocation: z.string().optional(),
  projectRequirements: z
    .string()
    .min(10, "Please share a few details about your project requirements."),
});

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      projectLocation: "",
      projectRequirements: "",
    },
  });

  const onSubmit = async (values) => {
    // TODO: Wire up to a backend endpoint when available.
    console.info("Contact form submission", values);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-background route-motion">
      <Seo
        title="Contact"
        description="Connect with Gramlex Investments for construction, steel & hardware supply, and earthmoving support."
      />

      <section className="section border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Let&apos;s plan your next delivery
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Share your scope and timelines. We&apos;ll coordinate supply, fabrication, and fleet mobilisation to match.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr]">
          <form
            className="card card-muted form-root"
            aria-label="Project enquiry form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-steel-dark">Tell us about your project</h2>
              <p className="text-sm text-muted-foreground">
                We respond within one business day. Provide as much detail as possible for faster estimating.
              </p>
              {submitted && (
                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm text-primary" role="status">
                  Thanks for reaching out. Our team will contact you shortly.
                </div>
              )}
            </div>

            <div className="form-grid form-grid--two">
              <div className="form-field">
                <label className="form-label" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  className="form-input focus-ring"
                  placeholder="Jane Doe"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="form-helper text-destructive">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  className="form-input focus-ring"
                  placeholder="Project or company name"
                  {...register("company")}
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="form-input focus-ring"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="form-helper text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className="form-input focus-ring"
                  placeholder="+263 7..."
                  {...register("phone")}
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="projectLocation">
                Project location
              </label>
              <input
                id="projectLocation"
                type="text"
                autoComplete="address-level2"
                className="form-input focus-ring"
                placeholder="City, site, or reference project"
                {...register("projectLocation")}
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="projectRequirements">
                Project requirements
              </label>
              <textarea
                id="projectRequirements"
                rows={6}
                className="form-textarea focus-ring"
                placeholder="Tell us about timelines, tonnage, drawings available, or site challenges."
                aria-invalid={Boolean(errors.projectRequirements)}
                aria-describedby={errors.projectRequirements ? "requirements-error" : undefined}
                {...register("projectRequirements")}
              />
              {errors.projectRequirements && (
                <p id="requirements-error" className="form-helper text-destructive">
                  {errors.projectRequirements.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-full" data-focus="strong" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send enquiry"}
            </button>
          </form>

          <div className="space-y-6">
            <div className="card card-soft">
              <h2 className="text-xl font-semibold text-steel-dark">Contact details</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We welcome site visits, technical workshops, and requests for urgent supply.
              </p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {phones.length > 0 && (
                  <div className="info-stack">
                    <span className="info-stack__icon" aria-hidden="true">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-medium text-steel-dark">Phone</p>
                      {phones.map((number) => (
                        <p key={number}>{number}</p>
                      ))}
                    </div>
                  </div>
                )}

                {emailContacts.length > 0 && (
                  <div className="info-stack">
                    <span className="info-stack__icon" aria-hidden="true">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-medium text-steel-dark">Email</p>
                      {emailContacts.map(({ label, value }) => (
                        <p key={value}>
                          <span className="font-medium text-steel-dark/80">{label}:</span> {value}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {(address.line1 || address.suburb || address.city || address.country) && (
                  <div className="info-stack">
                    <span className="info-stack__icon" aria-hidden="true">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-medium text-steel-dark">Head office</p>
                      {[address.line1, address.suburb, address.city, address.country]
                        .filter(Boolean)
                        .map((part) => (
                          <p key={part}>{part}</p>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {whatsapp?.link && (
              <div className="card card-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-steel-dark">Chat on WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Fast responses for urgent supply requests.</p>
                  </div>
                </div>
                <a
                  href={whatsapp.link}
                  className="btn btn-primary btn-sm mt-5 inline-flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  {whatsapp.label} {whatsapp.number ? `(${whatsapp.number})` : ""}
                </a>
              </div>
            )}

            {(hours.weekdays || hours.saturday || hours.emergency) && (
              <div className="card card-soft">
                <p className="text-sm font-semibold text-steel-dark">Operating hours</p>
                {hours.weekdays && <p className="mt-2 text-sm text-muted-foreground">{hours.weekdays}</p>}
                {hours.saturday && <p className="text-sm text-muted-foreground">{hours.saturday}</p>}
                {hours.emergency && <p className="mt-4 text-sm text-muted-foreground">{hours.emergency}</p>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
