import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  MapPin, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Calendar,
  Building2,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Seo from "@/components/Seo.jsx";
import heroImage from "@/assets/hero-construction.jpg";
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
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="bg-background route-motion">
      <Seo
        title="Project Portfolio"
        description="Explore Gramlex Investments projects spanning construction, steel & hardware supply, and earthmoving support across Zimbabwe."
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
              Our Portfolio
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Delivered Projects Across Zimbabwe
            </h1>
            <p className="mt-6 text-xl text-steel-300 leading-relaxed max-w-2xl">
              From mining infrastructure to commercial buildings, we've delivered 
              materials and equipment for some of Zimbabwe's most demanding projects.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative -mt-16 z-10">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-white rounded-xl shadow-xl p-6 text-center border border-border hover:shadow-2xl transition-shadow"
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                  <span className="text-gold">+</span>
                </p>
                <p className="text-sm font-medium text-steel-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROJECT FILTERS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Browse Projects</span>
              <h2 className="section-title mt-4">Filter by Category</h2>
              <p className="text-steel-500 mt-2">
                Explore our work across different sectors and delivery types.
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article 
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openModal(project.id)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {project.category.replace(/-/g, " ")}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
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
      {isModalOpen && selectedProject && (
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
          <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center text-steel-600 hover:text-navy transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateProject('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-steel-600 hover:text-navy transition-colors hidden md:flex"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateProject('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-steel-600 hover:text-navy transition-colors hidden md:flex"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Project Image */}
            <div className="relative h-72 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1.5 bg-gold text-navy text-sm font-bold uppercase tracking-wider rounded-full mb-3">
                  {selectedProject.category.replace(/-/g, " ")}
                </span>
                <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Main Info */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-navy mb-4">Project Overview</h3>
                  <p className="text-steel-600 leading-relaxed mb-6">
                    {selectedProject.summary}
                  </p>
                  
                  <div className="bg-steel-50 rounded-xl p-6 mb-6">
                    <h4 className="flex items-center gap-2 font-bold text-navy mb-3">
                      <Target className="h-5 w-5 text-primary" />
                      Result Achieved
                    </h4>
                    <p className="text-steel-600">{selectedProject.result}</p>
                  </div>

                  <h4 className="font-bold text-navy mb-4">Scope Delivered</h4>
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
                  <div className="bg-navy rounded-xl p-6 text-white">
                    <h4 className="font-bold mb-4 text-gold">Project Details</h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-steel-400 text-xs">Location</p>
                          <p className="font-medium">{selectedProject.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-gold" />
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
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Let us help you deliver it on time, on budget, and to the highest standards.
            </p>
            <Link to="/contact" className="btn btn-white btn-xl">
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
