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
import { Photo } from "@/shared/components/Photo.jsx";
import { PhotoGrid } from "@/shared/components/PhotoGrid.jsx";
import { heroSlides, onSitePhotos } from "@/shared/content/gallery.js";
import { HeroSlideshow } from "@/shared/components/HeroSlideshow.jsx";
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
    title: "Documentation at every step",
    description: "Mill certificates, QA packs, and compliance reports included with every delivery — no chasing required.",
  },
  {
    icon: Users,
    title: "Dedicated project team",
    description: "A named contact and logistics lead for each project. One call resolves schedule changes, not a helpdesk queue.",
  },
  {
    icon: Clock,
    title: "Fast turnaround, kept on schedule",
    description: "Priority fabrication slots mean urgent packages are ready in 48–72 hours. We plan around your pour, not the other way around.",
  },
  {
    icon: Award,
    title: "Safety built into every operation",
    description: "SHEQ-aligned processes, operator certifications, and on-site risk controls — so your site stays compliant.",
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
        <HeroSlideshow slides={heroSlides} />
        <div className="hero-overlay" aria-hidden="true" />
        
        <div className="hero-content">
          <h1 className="hero-title animate-in" data-delay="200">
            Steel. Equipment. Delivery. <span>Done Right.</span>
          </h1>

          <p className="hero-subtitle animate-in" data-delay="300">
            Certified steel supply, coordinated construction support, and fleet-backed earthmoving —
            all from one partner who keeps your programme on schedule.
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
            <span className="eyebrow">What We Deliver</span>
            <h2 className="section-title">Three Capabilities. One Accountable Partner.</h2>
            <p className="section-subtitle">
              Construction coordination, certified steel supply, and earthmoving equipment —
              integrated and managed by a single team that knows your programme inside out.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description, image }, index) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id} delay={index * 100 + 100}>
                  <Link to="/services" className="service-card group block h-full min-h-[400px]">
                    <div className="service-card-bg">
                      <Photo
                        name={image}
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="block h-full w-full"
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

          <div className="mt-14 text-center">
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
      <section className="section-lg section-warm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <span className="eyebrow">Why Gramlex</span>
              <h2 className="section-title gold-accent">
                The Partner Your Programme Can Depend On
              </h2>
              <p className="mt-6 text-lead">
                Most projects don't fail because of a missing ton of steel — they fail because
                of poor coordination, incomplete documentation, and a supplier who goes silent
                when things get difficult. We're built differently.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                {differentiators.map(({ icon: Icon, title, description }, index) => (
                  <AnimatedSection key={title} delay={(index + 1) * 100}>
                    <div className="group">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-steel-100 text-navy transition-all group-hover:bg-navy group-hover:text-gold">
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
                <Photo
                  name="why-gramlex"
                  alt="Crew member guiding a concrete pump hose on site"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="block h-full w-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              {/* Stats Overlay Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-8 max-w-xs">
                <p className="text-5xl font-bold text-primary mb-3">15+</p>
                <p className="text-sm font-medium text-steel-500 leading-relaxed">
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
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>Featured Work</span>
            <h2 className="section-title">Delivered on Time. Across the Country.</h2>
            <p className="section-subtitle">
              From critical care hospitals to mining conveyor structures — real projects,
              measurable results, and the documentation to prove it.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="scale-in" delay={index * 100}>
                <Link to="/projects" className="project-card block h-full">
                  <Photo
                    name={project.image}
                    alt={project.title}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="block h-full w-full"
                    imgClassName="project-card-img"
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

          <div className="mt-14 text-center">
            <Link to="/projects" className="btn btn-gold btn-lg">
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ON SITE - Photo Gallery
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">On Site</span>
            <h2 className="section-title">Steel, Machines, and the People Who Run Them</h2>
            <p className="section-subtitle">
              A look at the work behind every delivery — from the mill floor to the
              final pour. Tap any photo to view it full screen.
            </p>
          </AnimatedSection>

          <PhotoGrid photos={onSitePhotos} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-cool">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">Client Feedback</span>
            <h2 className="section-title">What Project Teams Say</h2>
            <p className="section-subtitle">
              From hospital expansions to mining operations — hear directly from the
              project managers and directors who rely on us to deliver.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100 + 100}>
                <div className="testimonial-card h-full hover:translate-y-[-4px] transition-transform duration-300">
                  <span className="testimonial-quote">"</span>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-lg">
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
              Trusted by organisations across Zimbabwe
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
        <Photo
          name="site-crane"
          className="absolute inset-0 block opacity-20"
          imgClassName="h-full w-full object-cover"
        />
        <div className="container relative z-10">
          <AnimatedSection animation="blur-in" className="max-w-3xl mx-auto text-center">
            <span className="eyebrow" style={{ color: "hsl(var(--gold))" }}>Get Started Today</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Your Next Project Starts Here
            </h2>
            <p className="text-xl text-steel-300 mb-10">
              Share your scope, drawings, or a rough brief — we'll come back within one
              business day with a supply plan, fabrication schedule, and pricing.
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
