import { Award, Factory, Handshake, Lightbulb } from "lucide-react";
import Seo from "@/components/Seo.jsx";

const values = [
  {
    icon: Lightbulb,
    title: "Technical Expertise",
    description:
      "Engineers and reinforcement specialists collaborate with your design team to optimise bar schedules and reduce waste.",
  },
  {
    icon: Factory,
    title: "Fabrication Capacity",
    description:
      "Daily output exceeding 50 tons with CNC cutting, automated bending, and quality assurance checks on every batch.",
  },
  {
    icon: Handshake,
    title: "Partnership First",
    description:
      "We integrate into client project controls, providing transparent status updates and agile response to program changes.",
  },
  {
    icon: Award,
    title: "Safety & Compliance",
    description:
      "SHEQ-certified processes, comprehensive QA documentation, and ISO-aligned reporting ensure full compliance.",
  },
];

const About = () => {
  return (
    <div className="bg-background">
      <Seo
        title="About Gramlex Steel Solutions"
        description="Learn how Gramlex Investments evolved into Zimbabwe's trusted partner for steel reinforcement supply and on-site fabrication."
      />
      <section className="border-b border-border bg-gradient-steel/70 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story
          </span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Empowering ambitious infrastructure projects since 2009
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Gramlex Investments began as a high-volume steel distributor and has grown into an integrated reinforcement
            partner delivering consulting, fabrication, logistics, and on-site placement services for complex civil,
            mining, and commercial builds.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-muted/40 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-steel-dark">What sets us apart</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Gramlex is built around the needs of project managers and engineers. From fast-turnaround bar schedules to
              orchestrated deliveries aligned to pour sequencing, our team handles the reinforcement package end-to-end.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our logistics network covers every province in Zimbabwe, with a rapid-response crew on-call for emergency
              repairs or accelerated works. We believe in clear communication, transparent documentation, and consistent
              quality that withstands scrutiny.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-background p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-steel-dark">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-steel-dark md:text-4xl">Our mission</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            To give Zimbabwean infrastructure projects a reinforcement backbone they can trust—delivered on time,
            optimised for performance, and supported by experts who understand the realities on site.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
