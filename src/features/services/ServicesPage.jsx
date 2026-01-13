import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Wrench, 
  Truck,
  FileCheck,
  Users,
  Target,
  Cog,
  Package,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { AnimatedSection } from "@/shared/components/AnimatedSection.jsx";
import heroImage from "@/assets/hero-construction.jpg";
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

const processIcons = [Target, Users, Cog, Package, FileCheck];

const ServicesPage = () => {
  return (
    <div className="bg-background route-motion">
      <Seo
        title="Services"
        description="Construction support, steel & hardware supply, and earthmoving equipment delivered by Gramlex Investments."
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
              Our Services
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Integrated Delivery Across All Project Phases
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              One coordinated team managing procurement, fabrication, fleet mobilisation, 
              and on-site execution. We deliver what your project needs, when it needs it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services-detail" className="btn btn-white btn-lg">
                Explore Services
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
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title">Three Pillars of Excellence</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your construction, steel, and equipment needs.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description, highlights }, index) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id} delay={index * 100 + 100}>
                  <div 
                    className="card card-bordered card-body-lg card-glow group hover:border-gold/30 hover-lift h-full"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all">
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
                            <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 group-hover/item:text-gold-dark transition-colors" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-1">
                      <a 
                        href={`#service-${id}`} 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group/link"
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
          <AnimatedSection className="section-header">
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">Our Proven Process</h2>
            <p className="section-subtitle">
              A systematic approach ensures quality delivery on every project.
            </p>
          </AnimatedSection>

          <div className="timeline relative">
            {/* Enhanced Timeline Connector */}
            <div className="timeline-connector hidden lg:block" />
            
            <div className="grid gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-5">
              {serviceProcess.map(({ title, description, icon: Icon }, index) => {
                const ProcessIcon = processIcons[index] || Icon;
                return (
                  <AnimatedSection key={title} animation="scale-in" delay={index * 100}>
                    <div className="timeline-item">
                      {/* Enhanced Node */}
                      <div className="timeline-node">
                        <div className="timeline-node-ring hidden lg:block" style={{ animationDelay: `${index * 200}ms` }} />
                        <div className="timeline-node-circle">
                          <ProcessIcon className="timeline-node-icon" />
                        </div>
                        <span className="timeline-step">{index + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="timeline-content">
                        <h3 className="timeline-title">{title}</h3>
                        <p className="timeline-desc">{description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DETAILED SERVICES - Improved Card Layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="services-detail" className="section-lg section-gradient-reverse">
        <div className="container">
          <div className="section-header section-header-left">
            <span className="eyebrow">In-Depth</span>
            <h2 className="section-title">Service Details</h2>
            <p className="section-subtitle">
              Comprehensive breakdown of our capabilities in each service area.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {serviceDetails.map(({ id, icon: Icon, title, summary, whatWeDo, deliverables, process }) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id}>
                  <div 
                    id={`service-${id}`}
                    className="scroll-mt-32 bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="bg-navy p-6 lg:p-8">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
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
                            <span className="h-9 w-9 rounded-lg bg-gold/10 flex items-center justify-center">
                              <Package className="h-5 w-5 text-gold-dark" />
                            </span>
                            Deliverables
                          </h4>
                          <ul className="space-y-3">
                            {deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-steel-600 text-[0.9375rem] group">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0 group-hover:bg-gold transition-colors" />
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
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Answers to frequently asked questions about our services.
            </p>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq, index) => (
              <details 
                key={faq.question} 
                className="group bg-white rounded-xl border border-border overflow-hidden hover:border-steel-300 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-navy hover:bg-steel-50 transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-navy/5 text-navy text-sm font-bold flex items-center justify-center group-open:bg-navy group-open:text-white transition-all">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-steel-400 transition-transform duration-300 group-open:rotate-180 group-hover:text-navy" />
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-steel-300 mb-10">
              Contact our team to discuss your project requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-gold btn-xl">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/projects" className="btn btn-ghost btn-xl border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
