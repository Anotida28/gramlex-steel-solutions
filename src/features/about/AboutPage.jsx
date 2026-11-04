import { Link } from "react-router-dom";
import { 
  Award, 
  ClipboardCheck, 
  Factory, 
  Handshake, 
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { Photo } from "@/shared/components/Photo.jsx";
import { COMPANY } from "@/shared/config/company.js";

const values = [
  {
    title: "Integrity in Delivery",
    description: "Transparent schedules, clear reporting, and accountability at every milestone.",
    icon: Handshake,
  },
  {
    title: "Technical Excellence",
    description: "Engineering-led planning backed by qualified fabrication and site supervision.",
    icon: Factory,
  },
  {
    title: "Safety & Quality",
    description: "SHEQ-aligned procedures that protect teams, assets, and project outcomes.",
    icon: ShieldCheck,
  },
  {
    title: "Client Partnership",
    description: "Responsive teams that adapt when schedules shift or scope expands.",
    icon: Users,
  },
];

const capabilities = [
  "In-house cutting, bending, and kitting facilities",
  "Steel & hardware procurement with mill traceability",
  "Nationwide delivery and sequencing support",
  "Earthmoving fleet with certified operators",
  "On-site QA inspections and handover documentation",
];

const qualityCommitments = [
  "Mill certificates and traceability on all reinforcement supply",
  "Dedicated QA/QC checks per batch and delivery",
  "Site-ready documentation and compliance handovers",
  "Safety induction for all on-site crews and operators",
];

const timeline = [
  { year: "2009", title: "Company Founded", description: "Started as a steel supply partner in Harare" },
  { year: "2012", title: "Expanded Services", description: "Added construction support and hardware supply" },
  { year: "2016", title: "Fleet Growth", description: "Launched earthmoving equipment division" },
  { year: "2020", title: "National Coverage", description: "Expanded operations across all provinces" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a trusted infrastructure partner" },
];

const splitStatValue = (value) => {
  const trimmed = String(value).trim();
  return trimmed.endsWith("+")
    ? { main: trimmed.slice(0, -1), suffix: "+" }
    : { main: trimmed, suffix: "" };
};

const AboutPage = () => {
  return (
    <div className="bg-background route-motion">
      <Seo
        title="About Gramlex Investments"
        description="Since 2009, Gramlex Investments has grown into Zimbabwe's most trusted infrastructure partner — delivering certified steel, construction coordination, and earthmoving equipment nationwide."
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <Photo
          name="hero-about"
          priority
          className="absolute inset-0 opacity-20 block"
          imgClassName="h-full w-full object-cover"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>
              About Us
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Built on Integrity. Proven by Delivery.
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              Since 2009, Gramlex Investments has grown from a Harare-based steel supplier into
              Zimbabwe's most capable infrastructure delivery partner — covering construction
              coordination, certified steel supply, and fleet-backed earthmoving.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title gold-accent mt-4">
                What Makes Gramlex Different
              </h2>
              <p className="mt-8 text-lg text-steel-600 leading-relaxed">
                We started as a steel supplier and grew by solving the problems most suppliers
                ignore: poor sequencing, missing documentation, and the phone call that never
                gets returned when the programme shifts. Today, our teams own the coordination
                from bar schedules to final handover — so you never have to chase.
              </p>
              <p className="mt-6 text-steel-500 leading-relaxed">
                Disciplined QA, site-ready documentation, and a logistics team that absorbs
                schedule changes — that's the standard we operate to on every project,
                regardless of size or location.
              </p>

              {/* Mission & Vision Cards */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <Target className="h-10 w-10 text-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                  <p className="text-steel-300 text-sm leading-relaxed">
                    To keep Zimbabwe's infrastructure projects on schedule and on budget —
                    through reliable supply, honest communication, and accountable delivery.
                  </p>
                </div>
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <TrendingUp className="h-10 w-10 mb-4 opacity-90" />
                  <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    To be the partner of first choice for every major infrastructure programme
                    in Southern Africa — built on a reputation no single delivery ever compromises.
                  </p>
                </div>
              </div>
            </div>

            {/* Image + Safety Statement */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Photo
                  name="about-team"
                  alt="Site supervisor checking a delivery schedule"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="block h-full w-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              
              {/* Safety Statement Card */}
              <div className="absolute -bottom-8 -left-8 max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <ClipboardCheck className="h-6 w-6 text-gold-dark" />
                  </div>
                  <h3 className="font-bold text-navy">Safety & Quality</h3>
                </div>
                <p className="text-sm text-steel-500 leading-relaxed">
                  We operate SHEQ-aligned workflows, verifying every batch through 
                  documented inspections. Safety is built into our delivery plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VALUES SECTION - Refined Color Usage
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-title">How We Work, Every Day</h2>
            <p className="section-subtitle">
              Not aspirational statements — the actual standards our teams are held to on every project.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }, index) => (
              <div 
                key={title} 
                className="relative bg-white rounded-2xl p-6 lg:p-7 border border-border shadow-sm hover-lift card-glow group"
              >
                <div className="h-12 w-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
                <p className="text-steel-500 text-[0.9375rem] leading-relaxed">{description}</p>
                <span className="absolute top-5 right-5 text-5xl font-bold text-steel-100 group-hover:text-steel-200 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          COMPANY TIMELINE - Enhanced Design
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-cool">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Journey</span>
            <h2 className="section-title">15 Years of Earned Trust</h2>
            <p className="section-subtitle">
              Every milestone on this timeline was built on a delivery kept, a programme protected, and a client's confidence retained.
            </p>
          </div>

          <div className="timeline relative">
            {/* Enhanced Timeline Connector */}
            <div className="timeline-connector hidden md:block" />
            
            <div className="grid gap-6 md:gap-8 md:grid-cols-5">
              {timeline.map(({ year, title, description }, index) => (
                <div key={year} className="timeline-item">
                  {/* Enhanced Year Node */}
                  <div className="timeline-node">
                    <div className="timeline-node-ring hidden md:block" style={{ animationDelay: `${index * 200}ms` }} />
                    <div className="timeline-year-node">
                      <Calendar className="h-5 w-5 timeline-year-node-icon" />
                      <span className="timeline-year">{year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="timeline-content mt-6">
                    <h3 className="timeline-title">{title}</h3>
                    <p className="timeline-desc">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS & CAPABILITIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>By The Numbers</span>
            <h2 className="section-title">Scale That Speaks for Itself</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {COMPANY.stats.map((stat) => {
              const { main, suffix } = splitStatValue(stat.value);
              return (
                <div 
                  key={stat.label} 
                  className="text-center p-8 rounded-2xl bg-navy-lighter/30 border border-white/10"
                >
                  <p className="text-5xl font-bold text-gold mb-3">
                    {main}
                    {suffix && <span className="text-white">{suffix}</span>}
                  </p>
                  <p className="text-steel-300 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Capabilities & Quality */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-2xl p-8 text-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Our Capabilities</h3>
              </div>
              <ul className="space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-steel-600">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 text-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-gold-dark" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Quality Commitments</h3>
              </div>
              <ul className="space-y-4">
                {qualityCommitments.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-steel-600">
                    <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LOCATION / COVERAGE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Our Reach</span>
              <h2 className="section-title gold-accent mt-4">
                Wherever Your Project Is, We Can Reach It
              </h2>
              <p className="mt-6 text-lg text-steel-600 leading-relaxed">
                Headquartered in Harare with logistics partners across all 10 provinces,
                we deliver materials, equipment, and crews to remote sites, tight schedules,
                and complex staging areas — without making it your problem to organise.
              </p>
              
              <div className="mt-8 flex items-start gap-4 p-6 bg-steel-50 rounded-xl">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Head Office</h3>
                  <p className="text-steel-500">
                    {[COMPANY.address?.line1, COMPANY.address?.suburb, COMPANY.address?.city, COMPANY.address?.country]
                      .filter(Boolean)
                      .join(", ") || "Harare, Zimbabwe"}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-10 text-center">
              <p className="text-7xl font-bold text-gold mb-4">10</p>
              <p className="text-xl text-white font-semibold mb-2">Provinces Served</p>
              <p className="text-steel-400">
                Rapid delivery and mobilisation across Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION - Clear Button Hierarchy
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-steel-300 mb-10">
              Tell us about your next project. Whether it's a bar schedule, an earthworks
              scope, or a full supply contract — we'll come back with a plan that fits
              your timeline and your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-gold btn-xl">
                Contact Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn btn-ghost btn-xl border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
