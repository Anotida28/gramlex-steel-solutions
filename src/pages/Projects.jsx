import { Building, Construction, Factory, MapPin, Pickaxe } from "lucide-react";
import Seo from "@/components/Seo.jsx";
import showcaseImage from "@/assets/project-showcase.jpg";

const stats = [
  { number: "500+", label: "Projects completed" },
  { number: "50,000+", label: "Tons supplied" },
  { number: "15+", label: "Years delivering" },
  { number: "12", label: "Provinces covered" },
];

const categories = [
  { icon: Building, title: "Commercial Developments", summary: "High-rise offices, malls, and mixed-use complexes." },
  { icon: Pickaxe, title: "Mining Infrastructure", summary: "Shaft reinforcement, conveyor support, and processing plants." },
  { icon: Construction, title: "Civil Engineering", summary: "Bridges, water treatment, transport nodes, and public works." },
  { icon: Factory, title: "Industrial Facilities", summary: "Manufacturing plants, warehouses, and logistics hubs." },
];

const featured = [
  {
    title: "Gweru Central Hospital Expansion",
    type: "Healthcare Infrastructure",
    location: "Gweru, Zimbabwe",
    overview:
      "Complete reinforcement package for a 5-story critical care facility featuring emergency wards, theatres, and diagnostic units.",
    scope: [
      "3,500 tons of reinforcement steel",
      "Custom bending and cage fabrication",
      "Sequenced deliveries aligned with pour schedule",
      "On-site supervision and QA documentation",
    ],
  },
  {
    title: "Kwekwe Mining Conveyor Structure",
    type: "Mining Infrastructure",
    location: "Kwekwe, Zimbabwe",
    overview:
      "Heavy-duty reinforcement systems engineered to withstand continuous vibration and high-load operations.",
    scope: [
      "2,100 tons of specialised alloy steel",
      "Precision fabrication for complex geometries",
      "Placement support with rigging teams",
      "Non-destructive testing and reporting",
    ],
  },
];

const Projects = () => {
  return (
    <div className="bg-background">
      <Seo
        title="Project Portfolio"
        description="Explore Gramlex Steel Solutions projects spanning commercial, mining, civil, and industrial infrastructure across Zimbabwe."
      />

      <section className="border-b border-border bg-gradient-steel/60 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Projects
          </span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Infrastructure strengthened by Gramlex
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            From metropolitan hospitals to remote mining operations, our reinforcement packages deliver reliability under
            pressure.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={showcaseImage}
              alt="Project showcase"
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-steel-dark">Featured engagements</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We collaborate closely with structural engineers and project managers to deliver reinforcement bundles that
              keep ambitious programmes on schedule. Each project receives custom fabrication, labelled sequencing, and
              on-site supervision.
            </p>
            <div className="mt-8 space-y-8">
              {featured.map((project) => (
                <div key={project.title} className="rounded-3xl border border-border bg-background p-6 shadow-card">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <span>{project.type}</span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-steel-dark">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {project.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-steel-dark md:text-4xl">Sector experience</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Our reinforcement specialists adapt to the unique safety, compliance, and scheduling demands of every sector
            we support.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ icon: Icon, title, summary }) => (
              <div key={title} className="rounded-3xl border border-border bg-muted/30 p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-steel-dark">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
