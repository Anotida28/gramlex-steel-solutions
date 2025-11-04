import { Building, Pickaxe, Construction, Factory, Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";
import projectShowcase from "@/assets/project-showcase.jpg";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Gweru Central Hospital Expansion",
      category: "Healthcare Infrastructure",
      location: "Gweru, Zimbabwe",
      year: "2023",
      description: "Complete steel reinforcement for the new 5-story medical facility, including specialized areas for emergency and surgical departments.",
      scope: ["3,500 tons of reinforcement steel", "Custom cutting and bending", "On-site positioning services", "Technical supervision"],
      image: projectShowcase
    },
    {
      title: "Mining Conveyor Support Structure",
      category: "Mining Infrastructure", 
      location: "Kwekwe, Zimbabwe",
      year: "2023",
      description: "Heavy-duty steel reinforcement for mining conveyor support systems, designed to withstand extreme operational conditions.",
      scope: ["2,100 tons of high-grade steel", "Specialized fabrication", "Crane positioning services", "Quality testing"],
      image: projectShowcase
    },
    {
      title: "Residential Complex Development",
      category: "Residential Construction",
      location: "Harare, Zimbabwe", 
      year: "2022",
      description: "Steel reinforcement for a 12-building residential complex with underground parking and recreational facilities.",
      scope: ["1,800 tons of reinforcement", "Phased delivery schedule", "Site coordination", "Technical support"],
      image: projectShowcase
    }
  ];

  const projectCategories = [
    {
      icon: Building,
      title: "Commercial Buildings",
      count: "120+",
      description: "Office complexes, shopping centers, and mixed-use developments"
    },
    {
      icon: Pickaxe,
      title: "Mining Projects",
      count: "85+", 
      description: "Processing plants, shaft construction, and industrial facilities"
    },
    {
      icon: Construction,
      title: "Infrastructure",
      count: "65+",
      description: "Bridges, roads, water treatment facilities, and public works"
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      count: "95+",
      description: "Manufacturing plants, warehouses, and production facilities"
    }
  ];

  const projectStats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50,000+", label: "Tons Steel Supplied" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const capabilities = [
    "Large-scale project management",
    "Multi-phase delivery coordination", 
    "Technical design consultation",
    "Quality assurance and testing",
    "Emergency response services",
    "Nationwide project coverage"
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Project Portfolio"
        description="Review flagship Gramlex Investments projects spanning healthcare, mining, civil infrastructure, and industrial developments across Zimbabwe."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-steel">
        <div className="absolute inset-0 bg-steel-grid opacity-15"></div>
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/25 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-32 left-[-15%] h-96 w-96 rounded-full bg-industrial-blue/35 blur-[160px] opacity-70 pointer-events-none"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="accent-pill mb-4 inline-flex items-center border border-primary/30 bg-primary/10 px-4 py-2 text-primary font-semibold backdrop-blur"
            >
              Our Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Zimbabwe's
              <span className="block text-primary">Infrastructure Legacy</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects across construction, mining, and infrastructure 
              sectors, showcasing our commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="accent-pill mb-4 inline-flex items-center border border-primary/20 bg-primary/5 px-4 py-2 text-primary font-semibold">
              Featured Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of our most recent and impactful projects that demonstrate 
              our expertise and commitment to excellence.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="order-2 lg:order-1">
                    <CardHeader className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary">{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <h4 className="font-semibold mb-4">Project Scope:</h4>
                      <ul className="space-y-2">
                        {project.scope.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div 
                      className="h-64 lg:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="h-full bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="accent-pill mb-4 inline-flex items-center border border-primary/20 bg-primary/5 px-4 py-2 text-primary font-semibold">
              Project Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Diverse Project Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our extensive portfolio spans multiple sectors, demonstrating our versatility 
              and expertise across different project types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-card text-center hover:shadow-industrial transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Capabilities</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Project Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our proven project management capabilities and technical expertise enable us to handle 
                complex, multi-phase projects while maintaining the highest quality standards and 
                meeting strict deadlines.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <a href="mailto:gramlex.investments@gmail.com?subject=Project%20Portfolio%20Request">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-lg">Expert Project Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dedicated project managers and technical specialists ensure seamless 
                    coordination and execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Calendar className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-lg">Timely Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced planning and logistics ensure all project milestones 
                    are met on schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Building className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-lg">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rigorous quality control processes and testing ensure all work 
                    meets international standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-steel-grid opacity-15 mix-blend-soft-light"></div>
        <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-white/10 blur-[190px]"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Next Project
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Ready to join our portfolio of successful projects? Contact us today to discuss 
            your steel reinforcement requirements and project timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="hero"
              className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark"
              asChild
            >
              <a href="mailto:gramlex.investments@gmail.com?subject=Portfolio%20Request">
                Request Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
