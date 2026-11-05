import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Wrench, 
  Truck,
  Target,
  Cog,
  Package,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { AnimatedSection } from "@/shared/components/AnimatedSection.jsx";
import { Photo } from "@/shared/components/Photo.jsx";
import {
  serviceDetails,
  serviceFaqs,
  servicePillars,
  serviceProcess,
} from "@/shared/content/services.js";

// Map icons to service IDs
const serviceIcons = {
  construction: Building2,
  steel: Wrench,
  earthmoving: Truck,
};


const ServicesPage = () => {
  return (
    <div className="bg-background">
      <Seo
        title="Our Services"
        description="Gramlex Investments delivers certified steel supply, construction coordination, and fleet-backed earthmoving across Zimbabwe. One accountable partner for your entire project."
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <Photo
          name="hero-services"
          priority
          className="absolute inset-0 opacity-20 block"
          imgClassName="h-full w-full object-cover"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow--on-dark">
              Our Services
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Steel that arrives pre-sorted, labelled and placement-ready
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              Procurement, fabrication, fleet mobilisation, and on-site execution — coordinated
              by a single team that owns your delivery from first drawing to final sign-off.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-brand btn-lg">
                Send drawings for a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services-detail" className="btn btn-white btn-lg">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SERVICE PILLARS - Premium Cards with Improved Interactions
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">Core Capabilities</span>
            <h2 className="section-title">Three pillars. One accountable team.</h2>
            <p className="section-subtitle">
              Each capability is designed to remove a specific burden from your programme — so
              you can focus on building, not chasing suppliers.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description, highlights }) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id}>
                  <div 
                    className="card card-bordered card-body-lg group hover:border-brand/30 hover-lift h-full"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 h-14 w-14 rounded-md bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-brand transition-all">
                        <ServiceIcon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy mb-1.5 group-hover:text-navy transition-colors">{title}</h3>
                        <p className="text-steel-500 text-[0.9375rem] leading-relaxed">{description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-5 border-t border-border">
                      <p className="text-label mb-3">
                        Capabilities
                      </p>
                      <ul className="space-y-2.5">
                        {highlights.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-steel-600 group/item">
                            <CheckCircle2 className="h-4 w-4 text-brand-dark flex-shrink-0 group-hover/item:text-primary-dark transition-colors" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-1">
                      <a 
                        href={`#service-${id}`} 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-dark transition-colors group/link"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR PROCESS - Enhanced Timeline
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-warm">
        <div className="container">
          <div className="split-header">
            <div>
              <span className="eyebrow">How We Work</span>
              <h2 className="section-title">From brief to handover in five steps</h2>
            </div>
            <p>
              Every stage is documented, so you can see where your package is without
              chasing anyone for an update.
            </p>
          </div>

          <ol className="process">
            {serviceProcess.map(({ title, when, description }) => (
              <li key={title} className="process-step">
                <span className="process-when">{when}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DETAILED SERVICES - Improved Card Layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="services-detail" className="section-lg section-gradient-reverse">
        <div className="container">
          <div className="section-header section-header-left">
            <span className="eyebrow">Scope by service</span>
            <h2 className="section-title">What each service delivers</h2>
            <p className="section-subtitle">
              A full breakdown of scope, deliverables, and process for each capability — so you
              know exactly what you're getting before you sign anything.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {serviceDetails.map(({ id, icon: Icon, title, summary, whatWeDo, deliverables, process, image }) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id}>
                  <div 
                    id={`service-${id}`}
                    className="group scroll-mt-32 bg-white rounded-md border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="relative flex min-h-[220px] items-end overflow-hidden bg-navy p-6 lg:min-h-[280px] lg:p-8">
                      <Photo
                        name={image}
                        sizes="(min-width: 1280px) 1200px, 100vw"
                        className="absolute inset-0 block"
                        imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10" aria-hidden="true" />
                      <div className="relative flex items-center gap-4">
                        <div className="h-14 w-14 rounded-md bg-brand flex items-center justify-center flex-shrink-0">
                          <ServiceIcon className="h-7 w-7 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white">{title}</h3>
                          <p className="text-steel-300 mt-1 text-[0.9375rem]">{summary}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content - Improved spacing and grouping */}
                    <div className="p-6 lg:p-8">
                      <div className="grid gap-8 lg:gap-10 lg:grid-cols-3">
                        {/* What We Do */}
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-navy">
                            <span className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Target className="h-5 w-5 text-primary" />
                            </span>
                            What We Do
                          </h4>
                          <ul className="space-y-3">
                            {whatWeDo.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-steel-600 text-[0.9375rem] group">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0 group-hover:bg-primary transition-colors" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Deliverables */}
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-navy">
                            <span className="h-9 w-9 rounded-lg bg-brand/10 flex items-center justify-center">
                              <Package className="h-5 w-5 text-brand-dark" />
                            </span>
                            Deliverables
                          </h4>
                          <ul className="space-y-3">
                            {deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-steel-600 text-[0.9375rem] group">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand/60 flex-shrink-0 group-hover:bg-brand transition-colors" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Process */}
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-navy">
                            <span className="h-9 w-9 rounded-lg bg-navy/10 flex items-center justify-center">
                              <Cog className="h-5 w-5 text-navy" />
                            </span>
                            Process
                          </h4>
                          <ol className="space-y-3">
                            {process.map((item, idx) => (
                              <li key={item} className="flex items-start gap-2.5 text-steel-600 text-[0.9375rem] group">
                                <span className="mt-0.5 h-5 w-5 rounded-full bg-navy text-white text-[0.6875rem] font-semibold flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                  {idx + 1}
                                </span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ SECTION - Improved Interactions
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-cool">
        <div className="container container-sm">
          <div className="section-header">
            <span className="eyebrow">Questions & Answers</span>
            <h2 className="section-title">Questions procurement teams ask us</h2>
            <p className="section-subtitle">
              Lead times, documents, delivery areas and how pricing works.
            </p>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq, index) => (
              <details 
                key={faq.question} 
                className="group bg-white rounded-md border border-border overflow-hidden hover:border-steel-300 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-navy hover:bg-steel-50 transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-navy/5 text-navy text-sm font-bold flex items-center justify-center group-open:bg-navy group-open:text-white transition-all">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-steel-500 transition-transform duration-300 group-open:rotate-180 group-hover:text-navy" />
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-12">
                    <p className="text-steel-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </details>
            ))}
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
              Send a bar schedule, get a fabrication slot
            </h2>
            <p className="text-xl text-steel-300 mb-10">
              Send us your drawings, scope brief, or timeline — we'll respond within one business
              day with pricing and a delivery plan built around your programme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-brand btn-xl">
                Send drawings for a quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/projects" className="btn btn-ghost btn-xl border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                See our projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
