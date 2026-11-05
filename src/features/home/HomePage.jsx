import { Link } from "react-router-dom";
import { ArrowRight, Truck, Building2, Wrench, MapPin } from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { AnimatedSection } from "@/shared/components/AnimatedSection.jsx";
import { Photo } from "@/shared/components/Photo.jsx";
import { PhotoGrid } from "@/shared/components/PhotoGrid.jsx";
import { onSitePhotos } from "@/shared/content/gallery.js";
import { SteelTag } from "@/shared/components/SteelTag.jsx";
import { ProofDocs } from "@/shared/components/ProofDocs.jsx";
import { COMPANY } from "@/shared/config/company.js";
import { clientLogos } from "@/shared/content/clients.js";
import { servicePillars } from "@/shared/content/services.js";
import { projects } from "@/shared/content/projects.js";
import { testimonials } from "@/shared/content/testimonials.js";
import { barStock, meshStock } from "@/shared/content/stock.js";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
const trustPoints = COMPANY.trustPoints ?? [];
// Resting angles for the hero tags, so they hang like real tags rather than a grid of tiles.
const tagTilts = ["-2deg", "1.5deg", "-1deg", "2.5deg"];

// Fewer, longer quotes: only those tied to a specific project are shown as case studies.
const caseStudies = testimonials
  .map((testimonial) => ({
    ...testimonial,
    project: projects.find((project) => project.id === testimonial.projectId),
  }))
  .filter(({ project }) => Boolean(project))
  .slice(0, 2);

const serviceIcons = {
  construction: Building2,
  steel: Wrench,
  earthmoving: Truck,
};

const HomePage = () => {
  return (
    <div className="bg-background">
      <Seo
        title="Construction, Steel & Earthmoving Delivery"
        description="Gramlex Investments delivers construction support, steel & general hardware supply, and earthmoving equipment across Zimbabwe."
      />

      {/* HERO: one photo, one specific promise, the tags as proof */}
      <section className="hero">
        <div className="hero-bg">
          <Photo
            name="hero-home"
            alt=""
            priority
            className="block h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <h1 className="hero-title animate-in" data-delay="200">
            Cut, bent, tagged and on site <span>before your pour.</span>
          </h1>

          <p className="hero-subtitle animate-in" data-delay="300">
            Certified steel supply, coordinated construction support, and fleet-backed earthmoving —
            all from one partner who keeps your programme on schedule.
          </p>

          <div className="hero-actions animate-in" data-delay="400">
            <Link to="/contact" className="btn btn-brand btn-xl">
              Send drawings for a quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/projects" className="btn btn-white btn-xl">
              See our projects
            </Link>
          </div>

          <div className="hero-stats animate-in" data-delay="500">
            {trustPoints.map((point, index) => (
              <div key={point.label} className="tag-wire">
                <SteelTag
                  variant="hang"
                  items={[{ label: point.label, value: point.value }]}
                  style={{ "--tag-tilt": tagTilts[index % tagTilts.length], "--tag-index": index }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES: split header, title left and context right */}
      <section className="section-lg section-muted">
        <div className="container">
          <AnimatedSection className="split-header">
            <div>
              <span className="eyebrow">What We Deliver</span>
              <h2 className="section-title">Three capabilities. One accountable partner.</h2>
            </div>
            <div>
              <p>
                Construction coordination, certified steel supply, and earthmoving equipment —
                integrated and managed by a single team that knows your programme inside out.
              </p>
              <Link to="/services" className="text-link">
                Explore all services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description, image }) => {
              const ServiceIcon = serviceIcons[id] || Icon;
              return (
                <AnimatedSection key={id}>
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
        </div>
      </section>

      {/* FULL-BLEED BREAK: one photo, one caption */}
      <figure className="bleed-break">
        <Photo
          name="site-steel-pour"
          alt="Crew placing concrete over a finished reinforcement deck"
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
        <figcaption>
          Pour day. Every bar on this deck arrived cut, bent and tagged to the schedule.
        </figcaption>
      </figure>

      {/* STOCK: dense spec table */}
      <section className="section-lg">
        <div className="container">
          <div className="stock-layout">
            <AnimatedSection>
              <span className="eyebrow">Stock and fabrication</span>
              <h2 className="section-title">In stock, cut and bent within 72 hours</h2>
              <p>
                High-yield deformed bar from Y10 to Y32, cut and bent to your bar bending
                schedule. Send the schedule, and we'll confirm a fabrication slot and delivery date.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg mt-2">
                Send a bar schedule
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <div className="spec-table-wrap">
                <table className="spec-table">
                  <caption className="sr-only">Bar sizes in stock, with mass, lengths, shape codes and lead times</caption>
                  <thead>
                    <tr>
                      <th scope="col"><abbr title="Bar diameter">Ø</abbr></th>
                      <th scope="col">kg/m</th>
                      <th scope="col">Stock lengths</th>
                      <th scope="col">Shape codes</th>
                      <th scope="col">Cut &amp; bend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {barStock.map((bar) => (
                      <tr key={bar.dia}>
                        <th scope="row">{bar.dia}</th>
                        <td>{bar.massPerM}</td>
                        <td>{bar.lengths}</td>
                        <td>{bar.shapes}</td>
                        <td>{bar.leadTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="spec-table-note">
                {meshStock} Shape codes per BS 8666. Lead times are from schedule approval.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROOF: the paperwork, instead of icon tiles */}
      <section className="section-lg section-muted">
        <div className="container">
          <AnimatedSection className="split-header">
            <div>
              <span className="eyebrow">Why Gramlex</span>
              <h2 className="section-title">The paperwork comes with the steel</h2>
            </div>
            <p>
              Most projects don't fail for want of a ton of steel. They fail on coordination and
              missing documents. Every Gramlex delivery arrives with its certificates, QA records
              and a delivery note that matches the tags, and a named contact who answers the phone.
            </p>
          </AnimatedSection>

          <ProofDocs />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-lg section-dark">
        <div className="container">
          <AnimatedSection className="split-header">
            <div>
              <span className="eyebrow eyebrow--on-dark">Featured Work</span>
              <h2 className="section-title">Pre-sorted, labelled and placement-ready, in every province</h2>
            </div>
            <div>
              <p>
                From critical care hospitals to mining conveyor structures — real projects,
                measurable results, and the documentation to prove it.
              </p>
              <Link to="/projects" className="text-link text-link-on-dark">
                View full portfolio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid gap-5 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <Link to="/projects" className="project-card block h-full">
                  <Photo
                    name={project.image}
                    alt={project.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="block h-full w-full"
                    imgClassName="project-card-img"
                  />
                  <div className="project-card-overlay" />
                  {project.schedule && (
                    <SteelTag
                      size="sm"
                      mark={project.schedule.mark}
                      items={project.schedule.rows.slice(-1)}
                      className="absolute left-4 top-4"
                    />
                  )}
                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-location">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.location}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ON SITE GALLERY */}
      <section className="section-lg">
        <div className="container">
          <AnimatedSection className="section-header-left">
            <span className="eyebrow">On Site</span>
            <h2 className="section-title">Steel, machines, and the people who run them</h2>
            <p className="section-subtitle">
              The work behind every delivery, from the mill floor to the final pour. Tap any photo
              to view it full screen.
            </p>
          </AnimatedSection>

          <PhotoGrid photos={onSitePhotos} />
        </div>
      </section>

      {/* CASE STUDIES: each quote tied to the project it describes */}
      <section className="section-lg section-muted">
        <div className="container">
          <AnimatedSection className="section-header-left">
            <span className="eyebrow">Client Feedback</span>
            <h2 className="section-title">What project teams say</h2>
          </AnimatedSection>

          <div className="case-studies">
            {caseStudies.map(({ quote, name, role, company, project }) => (
              <AnimatedSection key={name}>
                <figure className="case-study">
                  <div className="case-study-photo">
                    <Photo
                      name={project.image}
                      alt={project.title}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="block h-full w-full"
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                  <div className="case-study-body">
                    <p className="case-study-project">
                      {project.title} · {project.location}
                    </p>
                    <blockquote>
                      <p>{quote}</p>
                    </blockquote>
                    <figcaption>
                      <span className="case-study-name">{name}</span>
                      {role}, {company}
                    </figcaption>
                    {project.schedule && (
                      <SteelTag mark={project.schedule.mark} items={project.schedule.rows} className="mt-6" />
                    )}
                  </div>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="section bg-white border-y border-border">
        <div className="container">
          <AnimatedSection>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-steel-500 mb-8 mx-auto">
              Trusted by organisations across Zimbabwe
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex h-20 items-center justify-center px-4 opacity-70 transition-opacity hover:opacity-100"
                >
                  <img
                    src={logo}
                    alt={name}
                    width="240"
                    height="64"
                    loading="lazy"
                    className="h-auto max-h-12 w-full max-w-[200px] object-contain"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <Photo
          name="site-crane"
          className="absolute inset-0 block opacity-20"
          imgClassName="h-full w-full object-cover"
        />
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="eyebrow eyebrow--on-dark">Quotes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              A supply plan and price within one business day
            </h2>
            <p className="text-xl text-steel-300 mb-10 mx-auto">
              Send your scope, drawings or a rough brief. We'll reply with a supply plan,
              fabrication schedule and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-brand btn-xl">
                Send drawings for a quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn btn-white btn-xl">
                See what we deliver
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
