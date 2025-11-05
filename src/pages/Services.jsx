import { CheckCircle, MapPin, Package, Pickaxe, Scissors, Truck } from "lucide-react";
import Seo from "@/components/Seo.jsx";

const offerings = [
  {
    icon: Package,
    title: "Stockholding & Procurement",
    description:
      "Strategic partnerships with regional mills and import channels ensure steady supply of high-grade reinforcement in multiple diameters.",
    details: ["Deformed bars 8mm - 32mm", "Mesh and wire reinforcement", "Special alloy requests", "Mill certificates provided"],
  },
  {
    icon: Scissors,
    title: "Cutting & Bending Workshop",
    description:
      "Automated CNC lines deliver precision bends, stirrups, links, and cages ready for site placement with clear labelling and batching.",
    details: ["Bar schedule optimisation", "CNC cutting & automatic bending", "Prefabricated cages", "Quality inspection per batch"],
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description:
      "Time-sensitive deliveries aligned with pour sequences, offload supervision, and craned positioning for complex structures.",
    details: ["Fleet covering Zimbabwe", "On-site offload coordination", "Placement using cranes & telehandlers", "24/7 emergency dispatch"],
  },
  {
    icon: MapPin,
    title: "Technical Support",
    description:
      "QA documentation, site inspections, and reinforcement specialists that work alongside your engineers.",
    details: ["QA/QC reporting", "Site surveys & troubleshooting", "Engineer collaboration", "Training for site crews"],
  },
  {
    icon: CheckCircle,
    title: "Kitting & Labelling",
    description:
      "Clear packaging and colour-coded labelling that accelerates placement and reduces site errors.",
    details: ["Colour-coded bundles", "Sequenced pour labelling", "Digital delivery notes", "Materials reconciliation support"],
  },
  {
    icon: Pickaxe,
    title: "On-Site Services",
    description:
      "Cranes, riggers, and reinforcement supervisors ensure safe placement on high-rise, bridge, and industrial projects.",
    details: ["Rigging teams", "Supervisors for complex pours", "Handover documentation", "Safety compliance checks"],
  },
];

const Services = () => {
  return (
    <div className="bg-background">
      <Seo
        title="Services"
        description="Discover the full-service reinforcement solutions offered by Gramlex Steel Solutions—from stockholding to on-site placement."
      />

      <section className="border-b border-border bg-gradient-hero/40 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">Integrated reinforcement delivery</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            One team coordinating procurement, fabrication, logistics, and site support—engineered for demanding timelines.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {offerings.map(({ icon: Icon, title, description, details }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-muted/30 p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-steel-dark">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
