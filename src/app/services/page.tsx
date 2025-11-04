import { Package, Scissors, Truck, MapPin, Building, Pickaxe, ArrowRight, CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mainServices = [
  {
    icon: Package,
    title: "Steel Supply & Distribution",
    description: "Premium quality steel reinforcement bars, mesh, and accessories from certified suppliers.",
    features: [
      "High-grade steel meeting SABS standards",
      "Various sizes and specifications available",
      "Bulk supply capabilities",
      "Quality certification for all materials",
    ],
  },
  {
    icon: Scissors,
    title: "Cutting & Bending Services",
    description: "Precision cutting and bending to exact specifications using modern equipment.",
    features: [
      "Computer-controlled cutting machines",
      "Custom bending to engineering drawings",
      "Accurate length specifications",
      "Complex shape fabrication",
    ],
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description: "Reliable nationwide delivery and positioning services across Zimbabwe.",
    features: [
      "Nationwide delivery coverage",
      "Scheduled and urgent deliveries",
      "On-site positioning services",
      "Crane and lifting equipment",
    ],
  },
  {
    icon: MapPin,
    title: "Site Positioning",
    description: "Professional installation and positioning of steel reinforcement on construction sites.",
    features: [
      "Experienced installation teams",
      "Safety-compliant procedures",
      "Technical supervision",
      "Quality control inspections",
    ],
  },
];

const industries = [
  {
    icon: Building,
    title: "Construction & Civil Engineering",
    description: "Comprehensive steel solutions for residential, commercial, and infrastructure projects.",
    applications: ["High-rise buildings", "Bridges and overpasses", "Roads and highways", "Water treatment facilities"],
  },
  {
    icon: Pickaxe,
    title: "Mining & Industrial",
    description: "Specialized steel reinforcement for mining operations and industrial facilities.",
    applications: ["Mine shaft construction", "Processing plant foundations", "Conveyor support structures", "Industrial warehouses"],
  },
];

const additionalServices = [
  "Technical consultation and design support",
  "Material planning and optimization",
  "Project scheduling and coordination",
  "Quality assurance and testing",
  "Emergency supply services",
  "Equipment rental and leasing",
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your project requirements and specifications" },
  { step: "02", title: "Planning", description: "Material planning, scheduling, and logistics coordination" },
  { step: "03", title: "Execution", description: "Supply, processing, and delivery of steel reinforcement" },
  { step: "04", title: "Support", description: "On-site positioning and ongoing technical support" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-steel py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Comprehensive Steel
              <span className="block text-primary">Reinforcement Solutions</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From supply to installation, we provide complete steel reinforcement services for construction, civil engineering,
              and mining projects across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Core Services
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">End-to-End Steel Solutions</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our comprehensive service portfolio covers every aspect of steel reinforcement, ensuring seamless project execution
              from planning to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {mainServices.map((service) => (
              <Card
                key={service.title}
                className="group border-none shadow-card transition-all duration-300 hover:shadow-industrial"
              >
                <CardHeader>
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-primary transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Industries Served
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Specialized Solutions by Sector</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We understand the unique requirements of different industries and provide tailored steel reinforcement solutions for
              each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.title} className="border-none shadow-card">
                <CardHeader>
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{industry.title}</CardTitle>
                      <CardDescription className="mt-2 text-base">{industry.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-4 font-semibold text-foreground">Key Applications:</h4>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {industry.applications.map((application) => (
                      <div key={application} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Additional Services
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Value-Added Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Beyond our core offerings, we provide additional services to ensure your project&apos;s success from start to finish.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {additionalServices.map((service) => (
              <div key={service} className="flex items-center space-x-3 rounded-lg bg-steel-light p-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">How We Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our streamlined process ensures efficient project delivery while maintaining the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {processSteps.map((process) => (
              <Card key={process.step} className="border-none text-center shadow-card">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Discuss Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Contact our technical team today for a detailed consultation and customized solution for your steel reinforcement needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="hero" className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark"
            >
              Technical Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
