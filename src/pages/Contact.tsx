import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+263 77 241 1400",
      secondary: "Mon - Fri, 8AM - 5PM",
      action: "tel:+263772411400"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+263712411400",
      secondary: "24/7 Support Available",
      action: "https://wa.me/263715234905"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "gramlex.investments@gmail.com",
      secondary: "Response within 24 hours",
      action: "mailto:gramlex.investments@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "6506 Shamrock Park",
      secondary: "Gweru, Zimbabwe",
      action: "https://maps.google.com"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Public Holidays", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with
              <span className="block text-primary">Our Expert Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to discuss your steel reinforcement project? Our experienced team is here to provide 
              consultation, quotes, and technical support for all your construction needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-none shadow-card text-center hover:shadow-industrial transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg mb-2">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-1">{contact.primary}</p>
                  <p className="text-sm text-muted-foreground mb-4">{contact.secondary}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(contact.action, contact.action.startsWith('http') ? '_blank' : '_self')}
                  >
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you with a detailed response 
                  and quote for your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      placeholder="e.g., Commercial Building, Mining Project, Residential"
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
                      rows={5}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Info & Hours */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="border-none shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Office Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Head Office</h4>
                      <p className="text-muted-foreground">
                        6506 Shamrock Park<br />
                        Gweru, Zimbabwe
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">
                        Main: +263 77 241 1400<br />
                        WhatsApp: +263712411400
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">gramlex.investments@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-none shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-primary">Emergency Services Available</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For urgent project requirements, contact us via WhatsApp for 24/7 support.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-none shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Find Us on Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-steel-medium rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">6506 Shamrock Park, Gweru</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3"
                        onClick={() => window.open('https://maps.google.com', '_blank')}
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
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
            Don't wait - contact us today for immediate assistance with your steel reinforcement needs. 
            Our team is ready to provide expert consultation and competitive quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero" 
              className="bg-primary-foreground text-steel-dark hover:bg-primary-foreground/90"
              onClick={() => window.open('tel:+263772411400', '_self')}
            >
              Call Now: +263 77 241 1400
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-steel-dark"
              onClick={() => window.open('https://wa.me/263715234905', '_blank')}
            >
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;