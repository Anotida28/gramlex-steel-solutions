import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams, Link } from "react-router-dom";
import { 
  MapPin, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Building2,
  Target,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import { Photo } from "@/shared/components/Photo.jsx";
import { SteelTag } from "@/shared/components/SteelTag.jsx";
import { PhotoCarousel } from "@/shared/components/PhotoCarousel.jsx";
import { projectCategories, projectStats, projects } from "@/shared/content/projects.js";

// Valid category IDs for URL validation
const validCategoryIds = new Set(projectCategories.map((c) => c.id));

const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Read category from URL, fallback to "all" if invalid
  const urlCategory = searchParams.get("category");
  const activeCategory = validCategoryIds.has(urlCategory) ? urlCategory : "all";
  
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Update URL when category changes
  const setActiveCategory = (category) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const splitStatValue = (value) => {
    const trimmed = String(value).trim();
    return trimmed.endsWith("+")
      ? { main: trimmed.slice(0, -1), suffix: "+" }
      : { main: trimmed, suffix: "" };
  };

  // Get selected project
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  // Open modal with project
  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  // Navigate projects in modal
  const navigateProject = (direction) => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProjectId);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredProjects.length
      : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[newIndex].id);
  };

  // Close modal on escape
  useEffect(() => {
    const handleEscape = (e) => {
      // Let the full-screen photo viewer handle Escape first
      if (e.key === "Escape" && !document.querySelector(".yarl__root")) closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="bg-background">
      <Seo
        title="Project Portfolio"
        description="500+ projects delivered across Zimbabwe — from hospital expansions to mining infrastructure. Explore Gramlex Investments' track record in construction, steel supply, and earthmoving."
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <Photo
          name="hero-projects"
          priority
          className="absolute inset-0 opacity-20 block"
          imgClassName="h-full w-full object-cover"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow--on-dark">
              Our Portfolio
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Real projects. Measurable results.
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              Hospitals, mining structures, logistics hubs, road rehabilitation — a track record
              built on delivering what was promised, when it was promised, with the documentation to prove it.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative -mt-16 z-10">
        <div className="container">
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((stat) => {
              const { main, suffix } = splitStatValue(stat.value);
              return (
                <div 
                  key={stat.label} 
                  className="bg-white rounded-md shadow-xl p-6 text-center border border-border hover-lift group"
                >
                  <p className="font-mono text-4xl font-medium tracking-tight text-navy mb-2 group-hover:text-brand-dark transition-colors">
                    {main}
                    {suffix && <span className="text-brand-dark">{suffix}</span>}
                  </p>
                  <p className="text-sm font-medium text-steel-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROJECT FILTERS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg section-gradient-reverse">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div>
              <span className="eyebrow">Browse Our Work</span>
              <h2 className="section-title mt-3">Projects by category</h2>
              <p className="text-steel-500 mt-2">
                Filter by service type to find projects most relevant to what you need.
              </p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category.id 
                      ? "bg-navy text-white shadow-lg" 
                      : "bg-steel-100 text-steel-600 hover:bg-steel-200"
                  }`}
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article 
                key={project.id}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} project details`}
                onClick={() => openModal(project.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openModal(project.id);
                  }
                }}
              >
                <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                  <Photo
                    name={project.image}
                    alt={project.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="block h-full w-full"
                    imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.gallery?.length > 1 && (
                    <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-navy/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      <Images className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.gallery.length} photos
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
                    <span className="inline-block px-3 py-1 bg-brand text-navy text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {project.category.replace(/-/g, " ")}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-steel-300 text-sm">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-2 px-4 py-2 bg-white text-navy text-sm font-semibold rounded-full">
                      View Project
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {project.schedule && (
                  <SteelTag
                    mark={project.schedule.mark}
                    items={project.schedule.rows}
                    className="relative z-10 -mt-4 ml-4 mb-4"
                  />
                )}
                <p className="text-steel-600 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="h-16 w-16 text-steel-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">No projects found</h3>
              <p className="text-steel-500">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROJECT MODAL
      ══════════════════════════════════════════════════════════════════════ */}
      {/* Portal to <body> so the modal sits above the fixed header
          (the page wrapper's route animation creates a stacking context). */}
      {isModalOpen && selectedProject && createPortal(
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-md max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center text-steel-600 hover:text-navy transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Project Photo Gallery */}
            <PhotoCarousel
              photos={selectedProject.gallery ?? [{ name: selectedProject.image, alt: selectedProject.title }]}
              aspect="aspect-[16/9] md:aspect-[2/1]"
              className="overflow-hidden rounded-t-2xl bg-navy"
            />

            {/* Project Title */}
            <div className="px-6 pt-8 md:px-10">
              <span className="inline-block px-4 py-1.5 bg-brand text-navy text-sm font-bold uppercase tracking-wider rounded-full mb-3">
                {selectedProject.category.replace(/-/g, " ")}
              </span>
              <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-navy">
                {selectedProject.title}
              </h2>
            </div>

            {/* Project details */}
            <div className="p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Main Info */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-navy mb-4">Project overview</h3>
                  <p className="text-steel-600 leading-relaxed mb-6">
                    {selectedProject.summary}
                  </p>
                  
                  <div className="bg-steel-50 rounded-md p-6 mb-6">
                    <h4 className="flex items-center gap-2 font-bold text-navy mb-3">
                      <Target className="h-5 w-5 text-primary" />
                      Result Achieved
                    </h4>
                    <p className="text-steel-600">{selectedProject.result}</p>
                  </div>

                  <h4 className="font-bold text-navy mb-4">Scope delivered</h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {selectedProject.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-steel-600">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-navy rounded-md p-6 text-white">
                    <h4 className="font-bold mb-4 text-brand">Project details</h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-brand" />
                        <div>
                          <p className="text-steel-400 text-xs">Location</p>
                          <p className="font-medium">{selectedProject.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-brand" />
                        <div>
                          <p className="text-steel-400 text-xs">Category</p>
                          <p className="font-medium capitalize">{selectedProject.category.replace(/-/g, " ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="btn btn-primary w-full"
                    onClick={closeModal}
                  >
                    Ask about a similar project
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {filteredProjects.length > 1 && (
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => navigateProject("prev")}
                        className="btn btn-outline w-full"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateProject("next")}
                        className="btn btn-outline w-full"
                        aria-label="Next project"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have drawings? Get a price within one business day
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Share your scope with us. We'll build a delivery plan around your timeline
              and come back with pricing within one business day.
            </p>
            <Link to="/contact" className="btn btn-white btn-xl">
              Send drawings for a quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
