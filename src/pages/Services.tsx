import { Package, Scissors, Truck, MapPin, Building, Pickaxe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const mainServices = [
    {
      icon: Package,
      title: "Steel Supply & Distribution",
      description: "Premium quality steel reinforcement bars, mesh, and accessories from certified suppliers.",
      features: [
        "High-grade steel meeting SABS standards",
        "Various sizes and specifications available",
        "Bulk supply capabilities",
        "Quality certification for all materials"
      ]
    },
    {
      icon: Scissors,
      title: "Cutting & Bending Services",
      description: "Precision cutting and bending to exact specifications using modern equipment.",
      features: [
        "Computer-controlled cutting machines",
        "Custom bending to engineering drawings",
        "Accurate length specifications",
        "Complex shape fabrication"
      ]
    },
    {
      icon: Truck,
      title: "Delivery & Logistics",
      description: "Reliable nationwide delivery and positioning services across Zimbabwe.",
      features: [
        "Nationwide delivery coverage",
        "Scheduled and urgent deliveries",
        "On-site positioning services",
        "Crane and lifting equipment"
      ]
    },
    {
      icon: MapPin,
      title: "Site Positioning",
      description: "Professional installation and positioning of steel reinforcement on construction sites.",
      features: [
        "Experienced installation teams",
        "Safety-compliant procedures",
        "Technical supervision",
        "Quality control inspections"
      ]
    }
  ];

  const industries = [
    {
      icon: Building,
      title: "Construction & Civil Engineering",
      description: "Comprehensive steel solutions for residential, commercial, and infrastructure projects.",
      applications: [
        "High-rise buildings",
        "Bridges and overpasses", 
        "Roads and highways",
        "Water treatment facilities"
      ]
    },
    {
      icon: Pickaxe,
      title: "Mining & Industrial",
      description: "Specialized steel reinforcement for mining operations and industrial facilities.",
      applications: [
        "Mine shaft construction",
        "Processing plant foundations",
        "Conveyor support structures",
        "Industrial warehouses"
      ]
    }
  ];

  const additionalServices = [
    "Technical consultation and design support",
    "Material planning and optimization",
    "Project scheduling and coordination",
    "Quality assurance and testing",
    "Emergency supply services",
    "Equipment rental and leasing"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Steel
              <span className="block text-primary">Reinforcement Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From supply to installation, we provide complete steel reinforcement services 
              for construction, civil engineering, and mining projects across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">End-to-End Steel Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive service portfolio covers every aspect of steel reinforcement, 
              ensuring seamless project execution from planning to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-industrial transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-14 w-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
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

      {/* Industries Served */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industries Served</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Solutions by Sector</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique requirements of different industries and provide 
              tailored steel reinforcement solutions for each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-none shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{industry.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{industry.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4 text-foreground">Key Applications:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Additional Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Value-Added Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond our core offerings, we provide additional services to ensure 
              your project's success from start to finish.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-steel-light rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures efficient project delivery while maintaining 
              the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your project requirements and specifications" },
              { step: "02", title: "Planning", description: "Material planning, scheduling, and logistics coordination" },
              { step: "03", title: "Execution", description: "Supply, processing, and delivery of steel reinforcement" },
              { step: "04", title: "Support", description: "On-site positioning and ongoing technical support" }
            ].map((process, index) => (
              <Card key={index} className="border-none shadow-card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact our technical team today for a detailed consultation and customized 
            solution for your steel reinforcement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark">
              Technical Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;