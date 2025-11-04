"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+263 77 241 1400",
    secondary: "Mon - Fri, 8AM - 5PM",
    action: "tel:+263772411400",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+263712411400",
    secondary: "24/7 Support Available",
    action: "https://wa.me/263715234905",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "gramlex.investments@gmail.com",
    secondary: "Response within 24 hours",
    action: "mailto:gramlex.investments@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "6506 Shamrock Park",
    secondary: "Gweru, Zimbabwe",
    action: "https://maps.google.com",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
  { day: "Public Holidays", hours: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We\'ll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", projectType: "", message: "" });
    }, 2000);
  };

  const handleAction = (action: string) => {
    if (typeof window === "undefined") {
      return;
    }

    if (action.startsWith("http")) {
      window.open(action, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = action;
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-steel py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Get in Touch with
              <span className="block text-primary">Our Expert Team</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ready to discuss your steel reinforcement project? Our experienced team is here to provide consultation, quotes, and
              technical support for all your construction needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((contact) => (
              <Card
                key={contact.title}
                className="group border-none text-center shadow-card transition-all duration-300 hover:shadow-industrial"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary transition-transform duration-300 group-hover:scale-110">
                    <contact.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="mb-2 text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-1 font-semibold text-foreground">{contact.primary}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{contact.secondary}</p>
                  <Button variant="outline" size="sm" onClick={() => handleAction(contact.action)}>
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-light py-20">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
          <Card className="border-none shadow-card">
            <CardHeader>
              <CardTitle className="mb-2 text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we&apos;ll get back to you with a detailed response and quote for your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+263 XX XXX XXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Input
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    placeholder="Commercial, Residential, Mining..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project requirements"
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Submit Message</span>
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-none shadow-card">
            <CardHeader>
              <CardTitle className="mb-2 text-2xl">Visit Our Offices</CardTitle>
              <CardDescription className="text-base">
                We&apos;re centrally located in Gweru with easy access for consultations, planning sessions, and on-site coordination.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">6506 Shamrock Park</p>
                    <p className="text-muted-foreground">Gweru, Zimbabwe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">+263 77 241 1400</p>
                    <p className="text-muted-foreground">+263 71 241 1400 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">gramlex.investments@gmail.com</p>
                    <p className="text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold">Office Hours</h4>
                <div className="space-y-3">
                  {officeHours.map((entry) => (
                    <div key={entry.day} className="flex items-center justify-between rounded-lg bg-background p-3 shadow-card">
                      <span className="font-medium text-foreground">{entry.day}</span>
                      <span className="text-muted-foreground">{entry.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-gradient-primary p-6 text-primary-foreground shadow-primary">
                <h4 className="mb-3 text-lg font-semibold">Why Choose Gramlex?</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>ISO-certified quality management processes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Expert technical support from concept to completion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Nationwide logistics and rapid response capability</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
