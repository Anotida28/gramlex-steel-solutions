import { Award, ClipboardCheck, Factory, Handshake, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { COMPANY } from "@/shared/config/company.js";

const values = [
  {
    title: "Integrity in delivery",
    description: "Transparent schedules, clear reporting, and accountability at every milestone.",
    icon: Handshake,
  },
  {
    title: "Technical excellence",
    description: "Engineering-led planning backed by qualified fabrication and site supervision.",
    icon: Factory,
  },
  {
    title: "Safety & quality",
    description: "SHEQ-aligned procedures that protect teams, assets, and project outcomes.",
    icon: ShieldCheck,
  },
  {
    title: "Client partnership",
    description: "Responsive teams that adapt when schedules shift or scope expands.",
    icon: Award,
  },
];

const capabilities = [
  "In-house cutting, bending, and kitting facilities",
  "Steel & hardware procurement with mill traceability",
  "Nationwide delivery and sequencing support",
  "Earthmoving fleet with certified operators",
  "On-site QA inspections and handover documentation",
];

const AboutPage = () => {
  return (
    <div className="bg-background route-motion">
      <Seo
        title="About Gramlex Investments"
        description="Learn how Gramlex Investments delivers construction, steel & hardware supply, and earthmoving support across Zimbabwe."
      />
      <section className="section border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="eyebrow">Our Story</span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Built to power Zimbabwe&apos;s infrastructure
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Gramlex Investments began as a steel supply partner and grew into a multi-disciplinary delivery team for
            construction, hardware procurement, and earthmoving operations. We now support civil, mining, and commercial
            projects with the same precision and accountability across each pillar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="card card-muted">
            <h2 className="text-2xl font-semibold text-steel-dark">What defines Gramlex</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our teams coordinate steel reinforcement, hardware supply, and fleet mobilisation with one goal: keep your
              programme moving without surprises. From bar schedules to earthworks, we align every handover to your
              milestones and compliance standards.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We maintain disciplined QA processes, site-ready documentation, and rapid-response logistics to support
              urgent schedule changes. The result is predictable delivery on complex builds.
            </p>
            <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-steel-dark">Safety & quality statement</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                We operate SHEQ-aligned workflows, verifying every batch and handover through documented inspections.
                Safety inductions, risk controls, and compliance reporting are built into our delivery plans.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card card-compact">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-steel-dark">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="eyebrow">Capability Snapshot</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
              Built for scale, precision, and reliability
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.stats.map((stat) => (
              <div key={stat.label} className="card card-muted card-stat">
                <p className="stat-number">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card card-soft">
              <h3 className="text-xl font-semibold text-steel-dark">Capabilities</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card card-soft">
              <h3 className="text-xl font-semibold text-steel-dark">Quality commitments</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Mill certificates and traceability on all reinforcement supply",
                  "Dedicated QA/QC checks per batch and delivery",
                  "Site-ready documentation and compliance handovers",
                  "Safety induction for all on-site crews and operators",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
