import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2,
  Building2,
  ArrowRight,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import heroImage from "@/assets/hero-construction.jpg";
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
    setFocus,
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

  // Auto-focus first error field for accessibility
  useEffect(() => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      setFocus(firstErrorField);
    }
  }, [errors, setFocus]);

  const onSubmit = async (values) => {
    // TODO: Wire up to a backend endpoint when available.
    // Backend developer: implement POST /api/contact with values payload
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-background route-motion">
      <Seo
        title="Contact"
        description="Connect with Gramlex Investments for construction, steel & hardware supply, and earthmoving support."
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>
              Get in Touch
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Plan Your Next Project
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              Share your scope and timelines. We'll coordinate supply, fabrication, 
              and fleet mobilisation to match your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN CONTENT - Two Column Layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            
            {/* FORM SECTION */}
            <div>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">Tell Us About Your Project</h2>
                  <p className="text-steel-500">
                    We respond within one business day. Provide as much detail as possible for faster estimating.
                  </p>
                </div>

                {submitted && (
                  <div 
                    className="mb-8 flex items-start gap-4 p-6 rounded-xl bg-primary/5 border border-primary/20 animate-in" 
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Message Sent Successfully!</p>
                      <p className="text-steel-500 text-sm">Our team will contact you within one business day.</p>
                    </div>
                  </div>
                )}

                <form
                  aria-label="Project enquiry form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6"
                >
                  {/* Name & Company */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        className="form-input"
                        placeholder="Jane Doe"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="form-error">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        className="form-input"
                        placeholder="Project or company name"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="form-input"
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p id="email-error" className="form-error">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className="form-input"
                        placeholder="+263 7..."
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="projectLocation">
                      Project Location
                    </label>
                    <input
                      id="projectLocation"
                      type="text"
                      autoComplete="address-level2"
                      className="form-input"
                      placeholder="City, site, or reference project"
                      {...register("projectLocation")}
                    />
                  </div>

                  {/* Requirements */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="projectRequirements">
                      Project Requirements <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="projectRequirements"
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us about timelines, tonnage, drawings available, or site challenges."
                      aria-invalid={Boolean(errors.projectRequirements)}
                      aria-describedby={errors.projectRequirements ? "requirements-error" : undefined}
                      {...register("projectRequirements")}
                    />
                    {errors.projectRequirements && (
                      <p id="requirements-error" className="form-error">
                        {errors.projectRequirements.message}
                      </p>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* CONTACT INFO SIDEBAR */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 text-gold">Contact Details</h3>
                <div className="space-y-6">
                  {phones.length > 0 && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-navy-lighter flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        {phones.map((number) => (
                          <a 
                            key={number}
                            href={`tel:${number.replace(/\s/g, '')}`}
                            className="block text-steel-300 hover:text-gold transition-colors"
                          >
                            {number}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {emailContacts.length > 0 && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-navy-lighter flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        {emailContacts.map(({ label, value }) => (
                          <a 
                            key={value}
                            href={`mailto:${value}`}
                            className="block text-steel-300 hover:text-gold transition-colors text-sm"
                          >
                            <span className="text-steel-400">{label}:</span> {value}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {(address.line1 || address.city) && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-navy-lighter flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Head Office</p>
                        {[address.line1, address.suburb, address.city, address.country]
                          .filter(Boolean)
                          .map((part) => (
                            <p key={part} className="text-steel-300 text-sm">{part}</p>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* WhatsApp Card */}
              {whatsapp?.link && (
                <div className="bg-primary rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Chat on WhatsApp</p>
                      <p className="text-primary-foreground/70 text-sm">Fast responses for urgent requests</p>
                    </div>
                  </div>
                  <a
                    href={whatsapp.link}
                    className="btn btn-white w-full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {whatsapp.label} {whatsapp.number ? `(${whatsapp.number})` : ""}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}

              {/* Operating Hours Card */}
              {(hours.weekdays || hours.saturday) && (
                <div className="bg-white rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-gold-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">Operating Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    {hours.weekdays && (
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-steel-500">Monday - Friday</span>
                        <span className="font-medium text-navy">{hours.weekdays.replace(/Mon[a-z]*[\s-]+Fri[a-z]*:?\s*/i, '')}</span>
                      </div>
                    )}
                    {hours.saturday && (
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-steel-500">Saturday</span>
                        <span className="font-medium text-navy">{hours.saturday.replace(/Sat[a-z]*:?\s*/i, '')}</span>
                      </div>
                    )}
                    {hours.emergency && (
                      <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-sm text-primary font-medium">{hours.emergency}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MAP / LOCATION SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Location</span>
            <h2 className="section-title">Visit Our Head Office</h2>
            <p className="section-subtitle">
              We welcome site visits, technical workshops, and requests for urgent supply.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-steel-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center p-8">
                <Building2 className="h-16 w-16 text-steel-400 mx-auto mb-4" />
                <p className="text-steel-500 font-medium">Map Integration Coming Soon</p>
                <p className="text-sm text-steel-400 mt-2">
                  {[address.line1, address.city, address.country].filter(Boolean).join(", ")}
                </p>
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Gramlex Investments</h3>
              <div className="space-y-3 text-steel-300">
                {[address.line1, address.suburb, address.city, address.country]
                  .filter(Boolean)
                  .map((part) => (
                    <p key={part}>{part}</p>
                  ))}
              </div>
              <div className="mt-8 pt-6 border-t border-navy-lighter">
                <p className="text-gold font-semibold mb-2">Opening Hours</p>
                <p className="text-steel-300 text-sm">{hours.weekdays || "Monday - Friday: 8am - 5pm"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
