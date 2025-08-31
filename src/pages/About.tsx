import { Award, Target, Eye, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in all our products and services, ensuring every project meets international quality benchmarks."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We build lasting relationships through trust, reliability, and exceptional service."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices, building trust with clients, suppliers, and partners."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously seek new technologies and methods to improve our services and deliver cutting-edge solutions."
    }
  ];

  const teamMembers = [
    {
      name: "David Mukamuri",
      position: "Managing Director",
      description: "15+ years in construction and steel industry leadership"
    },
    {
      name: "Engineering Team",
      position: "Technical Specialists",
      description: "Certified engineers with expertise in structural steel solutions"
    },
    {
      name: "Operations Team",
      position: "Logistics & Delivery",
      description: "Experienced professionals ensuring seamless project execution"
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Gramlex Investments established in Gweru" },
    { year: "2012", event: "Expansion", description: "Extended services to cover nationwide projects" },
    { year: "2016", event: "ISO Certification", description: "Achieved ISO quality management certification" },
    { year: "2020", event: "Major Contracts", description: "Secured contracts with leading mining companies" },
    { year: "2024", event: "Technology Upgrade", description: "Modernized equipment and processes" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">About Gramlex Investments</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Zimbabwe's Infrastructure
              <span className="block text-primary">Since 2008</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, Gramlex Investments has been at the forefront of Zimbabwe's construction industry, 
              providing premium steel reinforcement solutions that have shaped the nation's infrastructure landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide superior steel reinforcement solutions that enable the construction of safe, 
                  durable, and innovative structures across Zimbabwe's construction, civil, mining, and 
                  engineering sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be Zimbabwe's leading provider of steel reinforcement solutions, recognized for 
                  innovation, quality, and reliability while contributing to the nation's sustainable 
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, integrity, innovation, and customer satisfaction drive everything we do. 
                  We believe in building lasting relationships through trust and delivering exceptional value.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-industrial transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Company History</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From our humble beginnings in Gweru to becoming a trusted name across Zimbabwe, 
              here's how we've grown over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team brings together decades of industry knowledge and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-20 w-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in joining our team? We're always looking for talented individuals.
            </p>
            <Button variant="default" size="lg">
              Career Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Experience
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            With our proven track record and commitment to excellence, Gramlex Investments 
            is your trusted partner for all steel reinforcement needs.
          </p>
          <Button size="lg" variant="hero" className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;