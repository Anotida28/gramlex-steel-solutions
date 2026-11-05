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
  Paperclip,
  ArrowRight,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { Photo } from "@/shared/components/Photo.jsx";
import { COMPANY } from "@/shared/config/company.js";

const {
  contact: { phones = [], generalEmail, salesEmail, projectsEmail, whatsapp } = {},
  address = {},
  hours = {},
} = COMPANY;

const mapQuery = [address.line1, address.suburb, address.city, address.country]
  .filter(Boolean)
  .join(", ");

const emailContacts = [
  { label: "General", value: generalEmail },
  { label: "Sales", value: salesEmail },
  { label: "Projects", value: projectsEmail },
].filter(({ value }) => Boolean(value));

// Drawings and bar bending schedules. Quantity surveyors usually send PDFs; schedules
// often come as spreadsheets, so Excel is accepted too.
const DRAWING_TYPES = {
  "application/pdf": "PDF",
  "application/vnd.ms-excel": "Excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Excel",
};
const DRAWING_ACCEPT = ".pdf,.xls,.xlsx,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const MAX_DRAWINGS = 5;
const MAX_DRAWING_MB = 10;

const toFileArray = (value) => (value ? Array.from(value) : []);
const isAllowedDrawing = (file) =>
  Boolean(DRAWING_TYPES[file.type]) || /\.(pdf|xlsx?)$/i.test(file.name);

const formatSize = (bytes) =>
  bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  projectLocation: z.string().optional(),
  projectRequirements: z
    .string()
    .min(10, "Please share a few details about your project requirements."),
  drawings: z
    .any()
    .optional()
    .refine((value) => toFileArray(value).length <= MAX_DRAWINGS, {
      message: `Attach up to ${MAX_DRAWINGS} files. Combine drawings into one PDF if you have more.`,
    })
    .refine((value) => toFileArray(value).every(isAllowedDrawing), {
      message: "Attach drawings as PDF, and bar bending schedules as PDF or Excel.",
    })
    .refine((value) => toFileArray(value).every((file) => file.size <= MAX_DRAWING_MB * 1024 * 1024), {
      message: `Each file must be ${MAX_DRAWING_MB} MB or smaller.`,
    }),
});

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
    watch,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      projectLocation: "",
      projectRequirements: "",
      drawings: undefined,
    },
  });

  const attachedDrawings = toFileArray(watch("drawings"));

  // Auto-focus first error field for accessibility
  useEffect(() => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      setFocus(firstErrorField);
    }
  }, [errors, setFocus]);

  const onSubmit = async () => {
    // TODO: Wire up to a backend endpoint when available.
    // Backend developer: implement POST /api/contact as multipart/form-data.
    // values.drawings is a FileList (PDF / Excel, max 5 files, 10 MB each); validate
    // type and size again on the server, since browser checks can be bypassed.
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-background">
      <Seo
        title="Contact Us"
        description="Get a quote from Gramlex Investments for certified steel supply, construction coordination, or earthmoving equipment. We respond within one business day."
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <Photo
          name="hero-contact"
          priority
          className="absolute inset-0 opacity-20 block"
          imgClassName="h-full w-full object-cover"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow--on-dark">
              Contact
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Send your drawings. We'll price them within one business day.
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              Share your scope, timeline, or drawings — even a rough brief will do.
              We'll respond within one business day with a delivery plan and pricing
              built around your programme.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN CONTENT - Two Column Layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-warm">
        <div className="container">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.2fr,0.8fr]">
            
            {/* FORM SECTION */}
            <div>
              <div className="bg-white rounded-md border border-border shadow-sm p-6 md:p-10 lg:p-12 hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">Tell us about your project</h2>
                  <p className="text-steel-500">
                    We respond within one business day. The more detail you share — tonnage, drawings, timelines — the faster we can price it.
                  </p>
                </div>

                {submitted && (
                  <div 
                    className="mb-8 flex items-start gap-4 p-6 rounded-md bg-primary/5 border border-primary/20 animate-in" 
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">Enquiry Received — Thank You!</p>
                      <p className="text-steel-500 text-sm">A member of our team will be in touch within one business day. For urgent requests, call us directly or reach out on WhatsApp.</p>
                    </div>
                  </div>
                )}

                <form
                  aria-label="Project enquiry form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-7"
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

                  {/* Drawings / bar bending schedule */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="drawings">
                      Drawings or bar bending schedule <span className="form-optional">(optional)</span>
                    </label>
                    <div className="form-file" data-invalid={Boolean(errors.drawings) || undefined}>
                      <Paperclip className="h-5 w-5 flex-shrink-0 text-steel-500" aria-hidden="true" />
                      <input
                        id="drawings"
                        type="file"
                        multiple
                        accept={DRAWING_ACCEPT}
                        className="form-file-input"
                        aria-invalid={Boolean(errors.drawings)}
                        aria-describedby={errors.drawings ? "drawings-hint drawings-error" : "drawings-hint"}
                        {...register("drawings")}
                      />
                    </div>
                    <p id="drawings-hint" className="form-hint">
                      PDF or Excel, up to {MAX_DRAWINGS} files, {MAX_DRAWING_MB} MB each. A
                      schedule gets you a firm price; without one we&apos;ll price from your description.
                    </p>
                    {attachedDrawings.length > 0 && !errors.drawings && (
                      <ul className="form-file-list" aria-label="Attached files">
                        {attachedDrawings.map((file) => (
                          <li key={`${file.name}-${file.size}`}>
                            <span>{file.name}</span>
                            <span>{formatSize(file.size)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {errors.drawings && (
                      <p id="drawings-error" className="form-error" role="alert">
                        {errors.drawings.message}
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
                        Send enquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* CONTACT INFO SIDEBAR */}
            <div className="space-y-8">
              {/* Contact details Card */}
              <div className="bg-navy rounded-md p-8 text-white">
                <h3 className="text-xl font-bold mb-8 text-brand">Contact details</h3>
                <div className="space-y-7">
                  {phones.length > 0 && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-md bg-navy-lighter flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        {phones.map((number) => (
                          <a 
                            key={number}
                            href={`tel:${number.replace(/\s/g, '')}`}
                            className="block text-steel-300 hover:text-brand transition-colors"
                          >
                            {number}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {emailContacts.length > 0 && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-md bg-navy-lighter flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        {emailContacts.map(({ label, value }) => (
                          <a 
                            key={value}
                            href={`mailto:${value}`}
                            className="block text-steel-300 hover:text-brand transition-colors text-sm"
                          >
                            <span className="text-steel-400">{label}:</span> {value}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {(address.line1 || address.city) && (
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-md bg-navy-lighter flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Head office</p>
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
                <div className="bg-primary rounded-md p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Prefer WhatsApp?</p>
                      <p className="text-primary-foreground/70 text-sm">Fastest response for urgent site requests</p>
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

              {/* Operating hours Card */}
              {(hours.weekdays || hours.saturday) && (
                <div className="bg-white rounded-md border border-border p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-md bg-brand/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-brand-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">Operating hours</h3>
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
            <span className="eyebrow">Find Us</span>
            <h2 className="section-title">Visit our head office</h2>
            <p className="section-subtitle">
              We welcome site visits, procurement meetings, and urgent walk-in requests.
              Our team is on site Monday to Friday, 08:00 – 18:00.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 overflow-hidden rounded-md bg-steel-200 h-80 lg:h-full lg:min-h-80">
              <iframe
                title={`Map showing Gramlex head office at ${mapQuery}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="bg-navy rounded-md p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Gramlex Investments</h3>
              <div className="space-y-3 text-steel-300">
                {[address.line1, address.suburb, address.city, address.country]
                  .filter(Boolean)
                  .map((part) => (
                    <p key={part}>{part}</p>
                  ))}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
              >
                Get directions
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              <div className="mt-8 pt-6 border-t border-navy-lighter">
                <p className="text-brand font-semibold mb-2">Opening hours</p>
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
