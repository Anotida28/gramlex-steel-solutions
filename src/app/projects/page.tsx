import Image from "next/image";
import { Building, Pickaxe, Construction, Factory, Calendar, MapPin, Users, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projectImage = "/images/project-showcase.jpg";

const featuredProjects = [
  {
    title: "Gweru Central Hospital Expansion",
    category: "Healthcare Infrastructure",
    location: "Gweru, Zimbabwe",
    year: "2023",
    description:
      "Complete steel reinforcement for the new 5-story medical facility, including specialized areas for emergency and surgical departments.",
    scope: [
      "3,500 tons of reinforcement steel",
      "Custom cutting and bending",
      "On-site positioning services",
      "Technical supervision",
    ],
  },
  {
    title: "Mining Conveyor Support Structure",
    category: "Mining Infrastructure",
    location: "Kwekwe, Zimbabwe",
    year: "2023",
    description:
      "Heavy-duty steel reinforcement for mining conveyor support systems, designed to withstand extreme operational conditions.",
    scope: [
      "2,100 tons of high-grade steel",
      "Specialized fabrication",
      "Crane positioning services",
      "Quality testing",
    ],
  },
  {
    title: "Residential Complex Development",
    category: "Residential Construction",
    location: "Harare, Zimbabwe",
    year: "2022",
    description:
      "Steel reinforcement for a 12-building residential complex with underground parking and recreational facilities.",
    scope: [
      "1,800 tons of reinforcement",
      "Phased delivery schedule",
      "Site coordination",
      "Technical support",
    ],
  },
];

const projectCategories = [
  {
    icon: Building,
    title: "Commercial Buildings",
    count: "120+",
    description: "Office complexes, shopping centers, and mixed-use developments",
  },
  {
    icon: Pickaxe,
    title: "Mining Projects",
    count: "85+",
    description: "Processing plants, shaft construction, and industrial facilities",
  },
  {
    icon: Construction,
    title: "Infrastructure",
    count: "65+",
    description: "Bridges, roads, water treatment facilities, and public works",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    count: "95+",
    description: "Manufacturing plants, warehouses, and production facilities",
  },
];

const projectStats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50,000+", label: "Tons Steel Supplied" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

const capabilities = [
  "Large-scale project management",
  "Multi-phase delivery coordination",
  "Technical design consultation",
  "Quality assurance and testing",
  "Emergency response services",
  "Nationwide project coverage",
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-steel py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Projects
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Building Zimbabwe&apos;s
              <span className="block text-primary">Infrastructure Legacy</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Explore our portfolio of successful projects across construction, mining, and infrastructure sectors, showcasing our
              commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {projectStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-3xl font-bold text-primary md:text-4xl">{stat.number}</h3>
                <p className="font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Recent Success Stories</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover some of our most recent and impactful projects that demonstrate our expertise and commitment to excellence.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden border-none shadow-card">
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                  <div className="order-2 lg:order-1">
                    <CardHeader className="p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <Badge variant="secondary">{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <CardTitle className="mb-2 text-2xl">{project.title}</CardTitle>
                      <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </span>
                      </div>
                      <CardDescription className="mb-6 text-base leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <h4 className="mb-4 font-semibold">Project Scope:</h4>
                      <ul className="space-y-2">
                        {project.scope.map((item) => (
                          <li key={item} className="flex items-center space-x-3">
                            <span className="flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative h-64 w-full lg:h-full">
                      <Image
                        src={projectImage}
                        alt={`${project.title} steel reinforcement`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Project Portfolio
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Diverse Project Experience</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our extensive portfolio spans multiple sectors, demonstrating our versatility and expertise across different project types.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projectCategories.map((category) => (
              <Card
                key={category.title}
                className="group border-none text-center shadow-card transition-all duration-300 hover:shadow-industrial"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary transition-transform duration-300 group-hover:scale-110">
                    <category.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="mb-2 text-xl">{category.title}</CardTitle>
                  <div className="mb-2 text-3xl font-bold text-primary">{category.count}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Our Capabilities
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Comprehensive Project Management</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Our proven project management capabilities and technical expertise enable us to handle complex, multi-phase projects while
              maintaining the highest quality standards and meeting strict deadlines.
            </p>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center space-x-3">
                  <span className="flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
            <Button variant="default" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="space-y-6">
            <Card className="border-none shadow-card">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="mr-3 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Expert Project Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated project managers and technical specialists ensure seamless coordination and execution.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-card">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Calendar className="mr-3 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced planning and logistics ensure all project milestones are met on schedule.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-card">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Building className="mr-3 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous quality control processes and testing ensure all work meets international standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Start Your Next Project</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Ready to join our portfolio of successful projects? Contact us today to discuss your steel reinforcement requirements and
            project timeline.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="hero" className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark"
            >
              Request Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
