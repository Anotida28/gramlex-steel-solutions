import Image from "next/image";
import { ArrowRight, Shield, Clock, CheckCircle, Building, Truck, Settings, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building,
    title: "Steel Supply & Distribution",
    description: "Premium quality steel reinforcement materials sourced from trusted suppliers.",
  },
  {
    icon: Settings,
    title: "Cutting & Bending Services",
    description: "Precision cutting and bending to your exact specifications and requirements.",
  },
  {
    icon: Truck,
    title: "Delivery & Positioning",
    description: "Reliable delivery and professional positioning services across Zimbabwe.",
  },
];

const features = [
  "ISO Certified Quality Standards",
  "24/7 Emergency Support",
  "Competitive Pricing",
  "Expert Technical Team",
  "Nationwide Coverage",
  "Custom Solutions",
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Client Partners" },
  { number: "100%", label: "Quality Assurance" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-construction.jpg"
            alt="Steel reinforcement project"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-85" aria-hidden="true" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
          <Badge
            variant="secondary"
            className="mb-6 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
          >
            Leading Steel Solutions Provider
          </Badge>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Building Zimbabwe&apos;s
            <span className="block text-primary-glow">Future with Steel</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Gramlex Investments delivers comprehensive steel reinforcement solutions for construction, civil engineering, and
            mining projects across Zimbabwe. Quality, reliability, and precision in every delivery.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="hero" className="px-8 py-6 text-lg">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground px-8 py-6 text-lg text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark"
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
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
              Our Services
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Comprehensive Steel Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From supply to installation, we provide end-to-end steel reinforcement services for all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-none shadow-card transition-all duration-300 hover:shadow-industrial"
              >
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Excellence in Every Project</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              With over 15 years of experience in the steel industry, Gramlex Investments has established itself as Zimbabwe&apos;s
              trusted partner for construction and engineering projects.
            </p>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{feature}</span>
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
                <Shield className="mr-3 h-8 w-8 text-primary" />
                <CardTitle className="text-xl">Certified Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our operations follow rigorous ISO-certified quality standards to guarantee reliable steel reinforcement for
                  every project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Clock className="mr-3 h-8 w-8 text-primary" />
                <CardTitle className="text-xl">On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our dedicated logistics network ensures your materials arrive on schedule, every time, anywhere in Zimbabwe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="mr-3 h-8 w-8 text-primary" />
                <CardTitle className="text-xl">Expert Support Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with experienced engineers and project specialists who provide technical guidance from concept to completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
