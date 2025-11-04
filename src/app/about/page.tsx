import { Award, Target, Eye, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in all our products and services, ensuring every project meets international quality benchmarks.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. We build lasting relationships through trust, reliability, and exceptional service.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices, building trust with clients, suppliers, and partners.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We continuously seek new technologies and methods to improve our services and deliver cutting-edge solutions.",
  },
];

const teamMembers = [
  {
    name: "David Mukamuri",
    position: "Managing Director",
    description: "15+ years in construction and steel industry leadership",
  },
  {
    name: "Engineering Team",
    position: "Technical Specialists",
    description: "Certified engineers with expertise in structural steel solutions",
  },
  {
    name: "Operations Team",
    position: "Logistics & Delivery",
    description: "Experienced professionals ensuring seamless project execution",
  },
];

const milestones = [
  { year: "2008", event: "Company Founded", description: "Gramlex Investments established in Gweru" },
  { year: "2012", event: "Expansion", description: "Extended services to cover nationwide projects" },
  { year: "2016", event: "ISO Certification", description: "Achieved ISO quality management certification" },
  { year: "2020", event: "Major Contracts", description: "Secured contracts with leading mining companies" },
  { year: "2024", event: "Technology Upgrade", description: "Modernized equipment and processes" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-steel py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              About Gramlex Investments
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Building Zimbabwe&apos;s Infrastructure
              <span className="block text-primary">Since 2008</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For over 15 years, Gramlex Investments has been at the forefront of Zimbabwe&apos;s construction industry, providing
              premium steel reinforcement solutions that have shaped the nation&apos;s infrastructure landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-none text-center shadow-card">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  To provide superior steel reinforcement solutions that enable the construction of safe, durable, and innovative
                  structures across Zimbabwe&apos;s construction, civil, mining, and engineering sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none text-center shadow-card">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  To be Zimbabwe&apos;s leading provider of steel reinforcement solutions, recognized for innovation, quality, and
                  reliability while contributing to the nation&apos;s sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none text-center shadow-card">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  Excellence, integrity, innovation, and customer satisfaction drive everything we do. We believe in building lasting
                  relationships through trust and delivering exceptional value.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-none shadow-card transition-all duration-300 hover:shadow-industrial"
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{value.description}</p>
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
              Our Journey
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Company History</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              From our humble beginnings in Gweru to becoming a trusted name across Zimbabwe, here&apos;s how we&apos;ve grown over the
              years.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.event} className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 border-none shadow-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{milestone.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Leadership &amp; Expertise</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our experienced team brings together decades of industry knowledge and technical expertise.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-none text-center shadow-card">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none bg-gradient-primary text-primary-foreground shadow-primary">
            <CardHeader className="flex flex-col items-start justify-between space-y-4 text-left md:flex-row md:items-center md:space-y-0">
              <div>
                <CardTitle className="text-3xl">Partner with Gramlex Investments</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Let&apos;s build resilient infrastructure together with industry-leading steel reinforcement solutions.
                </CardDescription>
              </div>
              <Button size="lg" className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90">
                Work With Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
