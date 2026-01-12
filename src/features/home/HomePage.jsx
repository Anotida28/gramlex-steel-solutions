import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Users,
  Award,
  Truck,
  ChevronDown,
  Building2,
  Wrench,
  MapPin,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { AnimatedSection } from "@/shared/components/AnimatedSection.jsx";
import heroImage from "@/assets/hero-construction.jpg";
import { COMPANY } from "@/shared/config/company.js";
import { clientLogos } from "@/shared/content/clients.js";
import { servicePillars } from "@/shared/content/services.js";
import { projects } from "@/shared/content/projects.js";
import { testimonials } from "@/shared/content/testimonials.js";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
const trustPoints = COMPANY.trustPoints ?? [];

// Service icon mapping
const serviceIcons = {
  construction: Building2,
  steel: Wrench,
  earthmoving: Truck,
};

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
    icon: Award,
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

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION - Cinematic Full-Screen
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src={heroImage}
            alt="Construction site with reinforcement steel"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        
        <div className="hero-content">
          <span className="hero-eyebrow animate-in" data-delay="100">
            <Award className="h-4 w-4" />
            Trusted Infrastructure Partner Since 2009
          </span>
          
          <h1 className="hero-title animate-in" data-delay="200">
            Building Zimbabwe's <span>Future</span> Together
          </h1>
          
          <p className="hero-subtitle animate-in" data-delay="300">
            World-class construction support, certified steel supply, and dependable earthmoving 
            equipment. One partner, three critical pillars for your project success.
          </p>
          
          <div className="hero-actions animate-in" data-delay="400">
            <Link to="/contact" className="btn btn-gold btn-xl">
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/projects" className="btn btn-white btn-xl">
              View Our Projects
            </Link>
          </div>

          <div className="hero-stats animate-in" data-delay="500">
            {trustPoints.map((point) => (
              <div key={point.label} className="hero-stat">
                <p className="hero-stat-value">
                  {point.value}
                  <span>+</span>
                </p>
                <p className="hero-stat-label">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SERVICES SECTION - Premium Cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-muted">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="section-title">Complete Project Solutions</h2>
            <p className="section-subtitle">
              From foundation to finish, we deliver the expertise, materials, and equipment 
              that keep Zimbabwe's most ambitious projects on schedule.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description }, index) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id} delay={index * 100 + 100}>
                  <Link to="/services" className="service-card group h-full block">
                    <div className="service-card-bg">
                      <img
                        src={heroImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="service-card-overlay" />
                    <div className="service-card-content">
                      <div className="service-card-icon">
                        <ServiceIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="service-card-title">{title}</h3>
                      <p className="service-card-desc">{description}</p>
                    </div>
                    <div className="service-card-arrow" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-outline btn-lg">
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHY CHOOSE US - Trust Section
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <span className="eyebrow">Why Gramlex</span>
              <h2 className="section-title gold-accent">
                Built for Quality, Safety, and Reliability
              </h2>
              <p className="mt-6 text-lg text-steel-600">
                We combine technical expertise with disciplined logistics to protect your 
                schedule and standards. Every project receives dedicated attention from 
                our experienced team.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {differentiators.map(({ icon: Icon, title, description }, index) => (
                  <AnimatedSection key={title} delay={(index + 1) * 100}>
                    <div className="group">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
                      <p className="text-sm text-steel-500 leading-relaxed">{description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Quality steel fabrication"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Stats Overlay Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-8 max-w-xs">
                <p className="text-5xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm font-medium text-steel-500">
                  Years of Excellence in Construction & Steel Supply
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURED PROJECTS - Portfolio Grid
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-dark">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>Featured Projects</span>
            <h2 className="section-title">Delivered Across Zimbabwe</h2>
            <p className="section-subtitle">
              From hospitals to mining infrastructure, we supply the steel and equipment 
              that keeps sites on track.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="scale-in" delay={index * 100}>
                <Link to="/projects" className="project-card block h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-card-overlay" />
                  <div className="project-card-content">
                    <span className="project-card-category">
                      {project.category.replace(/-/g, " ")}
                    </span>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-location">
                      <MapPin className="h-3.5 w-3.5" />
                      Zimbabwe
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn btn-gold btn-lg">
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-gradient">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">
              Construction leaders rely on Gramlex for dependable steel supply 
              and equipment mobilisation.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100 + 100}>
                <div className="testimonial-card h-full">
                  <span className="testimonial-quote">"</span>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-role">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CLIENTS LOGO BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section bg-white border-y border-border">
        <div className="container">
          <AnimatedSection animation="fade-in">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-steel-400 mb-8">
              Trusted by leading organizations
            </p>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((client, index) => (
                <div 
                  key={client}
                  className="flex items-center justify-center h-20 px-6 rounded-lg bg-steel-50 text-steel-500 font-semibold text-sm hover:bg-steel-100 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {client}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg relative overflow-hidden">
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
          <AnimatedSection animation="blur-in" className="max-w-3xl mx-auto text-center">
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Ready to Mobilize Your Next Project?
            </h2>
            <p className="text-xl text-steel-300 mb-10">
              Tell us about your scope and we'll build a supply, fabrication, and equipment 
              plan that fits your timeline and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-gold btn-xl">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn btn-white btn-xl">
                Explore Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
