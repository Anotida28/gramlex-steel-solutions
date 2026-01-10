import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import heroImage from "@/assets/hero-construction.jpg";
import { COMPANY } from "@/shared/config/company.js";
import { clientLogos } from "@/shared/content/clients.js";
import { servicePillars } from "@/shared/content/services.js";
import { projects } from "@/shared/content/projects.js";
import { testimonials } from "@/shared/content/testimonials.js";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
const trustPoints = COMPANY.trustPoints ?? [];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Quality you can audit",
    description: "Mill certificates, QA packs, and inspection reporting built into every delivery.",
  },
  {
    icon: Users,
    title: "Dedicated project teams",
    description: "Engineers and logistics leads assigned per project to keep sequencing tight.",
  },
  {
    icon: Clock,
    title: "Reliable turnaround",
    description: "Rapid fabrication slots and responsive transport across all provinces.",
  },
  {
    icon: CheckCircle,
    title: "Safety-first execution",
    description: "SHEQ-aligned processes, risk controls, and on-site supervision.",
  },
];

const HomePage = () => {
  return (
    <div className="bg-background route-motion">
      <Seo
        title="Construction, Steel & Earthmoving Delivery"
        description="Gramlex Investments delivers construction support, steel & general hardware supply, and earthmoving equipment across Zimbabwe."
      />

      <section className="section relative isolate overflow-hidden lg:py-24">
        <img
          src={heroImage}
          alt="Construction site with reinforcement steel"
          className="hero-media"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="card card-soft">
            <span className="eyebrow">Trusted Infrastructure Partner Since 2009</span>
            <h1 className="mt-6 text-balance text-4xl font-bold text-steel-dark md:text-5xl">
              World-class delivery for construction, steel, and earthmoving needs
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Gramlex Investments keeps projects moving with certified steel supply, on-site fabrication, and a
              dependable fleet of earthmoving equipment and trucks. One partner, three critical pillars.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn btn-primary btn-lg" data-focus="strong">
                Request a Quote
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn btn-outline btn-lg">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Construction / Steel & Hardware / Earthmoving
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-steel-dark">
                Trusted for end-to-end delivery across Zimbabwe
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Measurable results backed by certified supply chains, disciplined QA, and responsive fleet support.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point.label} className="card card-compact card-no-shadow text-center">
                  <p className="text-xl font-semibold text-steel-dark">{point.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-steel-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="eyebrow">Core Pillars</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
              Everything you need for heavy-duty delivery
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              Construction support, certified steel & hardware supply, and earthmoving fleet readiness.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description, highlights }) => (
              <div key={id} className="card card-interactive group relative overflow-hidden">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-steel-dark">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Featured Projects</span>
              <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
                Delivered programmes across Zimbabwe
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                From hospitals to mining infrastructure, we supply the steel and equipment that keeps sites on track.
              </p>
            </div>
            <Link to="/projects" className="btn btn-outline btn-sm">
              View full portfolio
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card card-muted card-interactive">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full rounded-2xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-6">
                  <span className="badge">{project.category.replace(/-/g, " ")}</span>
                  <h3 className="mt-4 text-lg font-semibold text-steel-dark">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="eyebrow">Why Gramlex</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
              Built for quality, safety, and reliability
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              We combine technical expertise with disciplined logistics to protect your schedule and standards.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card card-compact">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-steel-dark">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="eyebrow">Clients</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
              Trusted by delivery teams nationwide
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Construction leaders rely on Gramlex for dependable steel supply and equipment mobilisation.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((client) => (
              <div key={client} className="logo-tile">
                {client}
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="card card-muted">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-steel-dark">
                  {testimonial.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {testimonial.role} - {testimonial.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section-shell bg-muted/30 px-6 py-12 md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-steel-dark md:text-4xl">
                  Ready to mobilise your next project?
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Tell us about your scope and we will build a supply, fabrication, and equipment plan that fits.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary btn-lg" data-focus="strong">
                  Request a Quote
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
