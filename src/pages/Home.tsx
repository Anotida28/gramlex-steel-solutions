import { ArrowRight, Shield, Clock, CheckCircle, Building, Truck, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-construction.jpg";

const Home = () => {
  const services = [
    {
      icon: Building,
      title: "Steel Supply & Distribution",
      description: "Premium quality steel reinforcement materials sourced from trusted suppliers."
    },
    {
      icon: Settings,
      title: "Cutting & Bending Services", 
      description: "Precision cutting and bending to your exact specifications and requirements."
    },
    {
      icon: Truck,
      title: "Delivery & Positioning",
      description: "Reliable delivery and professional positioning services across Zimbabwe."
    }
  ];

  const features = [
    "ISO Certified Quality Standards",
    "24/7 Emergency Support",
    "Competitive Pricing",
    "Expert Technical Team",
    "Nationwide Coverage",
    "Custom Solutions"
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Client Partners" },
    { number: "100%", label: "Quality Assurance" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <Badge variant="secondary" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Leading Steel Solutions Provider
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Zimbabwe's
            <span className="block text-primary-glow">Future with Steel</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Gramlex Investments delivers comprehensive steel reinforcement solutions for construction, 
            civil engineering, and mining projects across Zimbabwe. Quality, reliability, and precision 
            in every delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Steel Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From supply to installation, we provide end-to-end steel reinforcement 
              services for all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-industrial transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Excellence in Every Project
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience in the steel industry, Gramlex Investments 
                has established itself as Zimbabwe's trusted partner for construction and 
                engineering projects.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="default" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-lg">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All our steel products meet international quality standards and undergo 
                    rigorous testing before delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Clock className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-lg">Timely Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the importance of project timelines and ensure prompt 
                    delivery of all materials and services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our experienced professionals provide technical support and guidance 
                    throughout your project lifecycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Get in touch with our team today for a consultation and personalized quote 
            for your steel reinforcement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark">
              Call +263 77 241 1400
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;