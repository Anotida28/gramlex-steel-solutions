import { ArrowRight, Building, Settings, Truck, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo.jsx";
import heroImage from "@/assets/hero-construction.jpg";

const services = [
  {
    icon: Building,
    title: "Steel Supply & Distribution",
    description:
      "Premium reinforcement steel sourced from vetted mills and delivered across Zimbabwe on precise schedules.",
  },
  {
    icon: Settings,
    title: "Cutting & Bending",
    description:
      "In-house fabrication team producing custom bends, stirrups, and cages that match your engineering drawings.",
  },
  {
    icon: Truck,
    title: "Delivery & Positioning",
    description:
      "Heavy-duty logistics and craned placement services that keep high-volume pours and installations on track.",
  },
];

const features = [
  { icon: Shield, label: "ISO Certified Quality" },
  { icon: Clock, label: "24/7 Emergency Support" },
  { icon: Users, label: "Dedicated Project Teams" },
  { icon: CheckCircle, label: "QA Documentation Provided" },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Client Partners" },
  { number: "100%", label: "Quality Assurance" },
];

const Home = () => {
  return (
    <div className="bg-industrial-radial">
      <Seo
        title="Steel Reinforcement Solutions for Zimbabwe"
        description="End-to-end steel reinforcement supply, fabrication, logistics, and technical support tailored for Zimbabwean infrastructure projects."
      />

      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-24 text-primary-foreground md:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-3xl bg-background/80 p-8 shadow-card backdrop-blur">
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Leading Steel Partner Since 2009
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-steel-dark md:text-5xl">
              Building Zimbabwe&apos;s Future with Reinforcement Steel
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Gramlex Steel Solutions combines reliable supply chains, responsive logistics, and on-site technical
              teams to deliver reinforcement packages for construction, civil works, and mining projects across the
              region.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary transition focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Request a Project Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-lg backdrop-blur">
            <h2 className="text-lg font-semibold text-steel-dark">Why construction leaders choose Gramlex</h2>
            <div className="mt-6 grid gap-4">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-steel-dark">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-hero opacity-60" aria-hidden />
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-border bg-muted/40 p-6 text-center shadow-card"
            >
              <p className="text-3xl font-bold text-primary">{stat.number}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-steel-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">Comprehensive reinforcement delivery</h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              A single trusted team handling procurement, fabrication, logistics, and site placement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition group-hover:opacity-5" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-steel-dark">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
