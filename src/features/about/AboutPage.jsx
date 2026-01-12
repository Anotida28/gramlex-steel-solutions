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
import heroImage from "@/assets/hero-construction.jpg";
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

const AboutPage = () => {
  return (
    <div className="bg-background route-motion">
      <Seo
        title="About Gramlex Investments"
        description="Learn how Gramlex Investments delivers construction, steel & hardware supply, and earthmoving support across Zimbabwe."
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
              About Us
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Built to Power Zimbabwe's Infrastructure
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              Since 2009, Gramlex Investments has grown from a steel supply partner into 
              a multi-disciplinary delivery team for construction, hardware procurement, 
              and earthmoving operations.
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
                What Defines Gramlex
              </h2>
              <p className="mt-8 text-lg text-steel-600 leading-relaxed">
                Our teams coordinate steel reinforcement, hardware supply, and fleet 
                mobilisation with one goal: keep your programme moving without surprises. 
                From bar schedules to earthworks, we align every handover to your 
                milestones and compliance standards.
              </p>
              <p className="mt-6 text-steel-500 leading-relaxed">
                We maintain disciplined QA processes, site-ready documentation, and 
                rapid-response logistics to support urgent schedule changes. The result 
                is predictable delivery on complex builds.
              </p>

              {/* Mission & Vision Cards */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <Target className="h-10 w-10 text-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                  <p className="text-steel-300 text-sm leading-relaxed">
                    To deliver world-class construction support, steel supply, and 
                    equipment services that enable Zimbabwe's growth.
                  </p>
                </div>
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <TrendingUp className="h-10 w-10 mb-4 opacity-90" />
                  <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    To be the most trusted infrastructure partner in Southern Africa, 
                    known for reliability and excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Image + Safety Statement */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Gramlex team at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
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
          VALUES SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-title">The Principles That Guide Us</h2>
            <p className="section-subtitle">
              Every decision we make is rooted in these core values.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }, index) => (
              <div 
                key={title} 
                className="relative bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-steel-500 leading-relaxed">{description}</p>
                <span className="absolute top-6 right-6 text-6xl font-bold text-steel-100">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          COMPANY TIMELINE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Journey</span>
            <h2 className="section-title">15+ Years of Excellence</h2>
            <p className="section-subtitle">
              From humble beginnings to industry leadership.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 rounded-full" />
            
            <div className="grid gap-8 md:grid-cols-5">
              {timeline.map(({ year, title, description }, index) => (
                <div key={year} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Year Badge */}
                    <div className="relative z-10 mb-6">
                      <div className="h-24 w-24 rounded-full bg-navy shadow-xl flex flex-col items-center justify-center">
                        <Calendar className="h-5 w-5 text-gold mb-1" />
                        <span className="text-xl font-bold text-white">{year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
                    <p className="text-sm text-steel-500">{description}</p>
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
            <h2 className="section-title">Built for Scale & Precision</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {COMPANY.stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-8 rounded-2xl bg-navy-lighter/30 border border-white/10"
              >
                <p className="text-5xl font-bold text-gold mb-3">
                  {stat.value}
                  <span className="text-white">+</span>
                </p>
                <p className="text-steel-300 font-medium">{stat.label}</p>
              </div>
            ))}
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
                Nationwide Coverage
              </h2>
              <p className="mt-6 text-lg text-steel-600 leading-relaxed">
                With operations headquartered in Harare and a network of logistics 
                partners across all provinces, we deliver materials and equipment 
                wherever your project needs us.
              </p>
              
              <div className="mt-8 flex items-start gap-4 p-6 bg-steel-50 rounded-xl">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Head Office</h3>
                  <p className="text-steel-500">
                    {COMPANY.contact?.address || "Harare, Zimbabwe"}
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
          CTA SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Let's discuss how Gramlex can support your next project with 
              reliable delivery, quality materials, and expert service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-white btn-xl">
                Contact Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn btn-outline btn-xl border-white text-white hover:bg-white hover:text-primary">
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
