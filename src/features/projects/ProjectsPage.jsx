import { useEffect, useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { projectCategories, projectStats, projects } from "@/shared/content/projects.js";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!filteredProjects.length) {
      setSelectedProjectId(null);
      return;
    }
    const isSelectedVisible = filteredProjects.some((project) => project.id === selectedProjectId);
    if (!isSelectedVisible) {
      setSelectedProjectId(filteredProjects[0].id);
    }
  }, [filteredProjects, selectedProjectId]);

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <div className="bg-background route-motion">
      <Seo
        title="Project Portfolio"
        description="Explore Gramlex Investments projects spanning construction, steel & hardware supply, and earthmoving support across Zimbabwe."
      />

      <section className="section border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="eyebrow">Projects</span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Portfolio of delivery across Zimbabwe
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We support infrastructure leaders with certified steel supply, disciplined logistics, and dependable
            earthmoving resources.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((stat) => (
              <div key={stat.label} className="card card-muted card-stat">
                <p className="stat-number">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="eyebrow">Project Filters</span>
              <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">Filter by delivery focus</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`btn btn-sm ${
                    activeCategory === category.id ? "btn-primary" : "btn-outline"
                  }`}
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={`card card-muted text-left transition-all ${
                  selectedProjectId === project.id ? "ring-2 ring-primary/60" : ""
                }`}
                aria-pressed={selectedProjectId === project.id}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full rounded-2xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-5">
                  <span className="badge">{project.category.replace(/-/g, " ")}</span>
                  <h3 className="mt-3 text-lg font-semibold text-steel-dark">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                  <p className="mt-3 text-xs font-semibold text-muted-foreground">
                    Result: <span className="font-normal">{project.result}</span>
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {project.location}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <section className="section" id="project-detail">
          <div className="mx-auto max-w-5xl px-6">
            <div className="card card-muted">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="badge">{selectedProject.category.replace(/-/g, " ")}</span>
                  <h2 className="mt-4 text-3xl font-bold text-steel-dark">{selectedProject.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{selectedProject.summary}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-steel-dark">Result:</span> {selectedProject.result}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {selectedProject.location}
                </span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full rounded-2xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Scope delivered
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {selectedProject.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectsPage;
