import { Mail, MapPin, Phone } from "lucide-react";
import Seo from "@/components/Seo.jsx";

const Contact = () => {
  return (
    <div className="bg-background">
      <Seo
        title="Contact"
        description="Connect with Gramlex Steel Solutions for reinforcement supply, fabrication, and project support."
      />

      <section className="border-b border-border bg-gradient-hero/50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Let&apos;s plan your next reinforcement package
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Share your project requirements and our team will coordinate site visits, technical reviews, and pricing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr]">
          <form className="rounded-3xl border border-border bg-muted/30 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-steel-dark">Tell us about your project</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We respond within one business day. Provide as much detail as possible for faster estimating.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-steel-dark">
                Full name
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block text-sm font-medium text-steel-dark">
                Company
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Project or company name"
                />
              </label>
              <label className="block text-sm font-medium text-steel-dark">
                Email
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-sm font-medium text-steel-dark">
                Phone
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="+263 7..."
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-steel-dark">
              Project location
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-primary"
                placeholder="City, site, or reference project"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-steel-dark">
              Project requirements
              <textarea
                rows={6}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-primary"
                placeholder="Tell us about timelines, tonnage, drawings available, or site challenges."
              />
            </label>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary transition hover:shadow-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Send enquiry
            </button>
          </form>

          <div className="rounded-3xl border border-border bg-background p-8 shadow-card">
            <h2 className="text-xl font-semibold text-steel-dark">Contact details</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We welcome site visits, technical workshops, and requests for urgent supply.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-steel-dark">Phone</p>
                  <p>+263 771 000 111</p>
                  <p>+263 774 555 444</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-steel-dark">Email</p>
                  <p>sales@gramlexsteel.co.zw</p>
                  <p>projects@gramlexsteel.co.zw</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-steel-dark">Head office</p>
                  <p>125 Coventry Road</p>
                  <p>Workington, Harare, Zimbabwe</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-steel-dark">Operating hours</p>
              <p className="mt-2">Mon - Fri: 08:00 - 18:00</p>
              <p>Sat: 08:00 - 13:00</p>
              <p className="mt-4">Emergency support lines available 24/7 for critical works.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
