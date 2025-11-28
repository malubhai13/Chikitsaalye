import { MessageCircle, UserCheck, Clock, Calendar, Search, FileText, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "WhatsApp Bot",
      description: "Get government hospital information, doctor availability, and book appointments via WhatsApp.",
      cta: "Start Chat",
      highlight: true,
    },
    {
      icon: UserCheck,
      title: "Doctor Availability",
      description: "Check real-time availability of doctors at government and private hospitals near you.",
      cta: "Check Now",
    },
    {
      icon: Clock,
      title: "Queue Status & OPD",
      description: "View current queue length and OPD timing before visiting the hospital.",
      cta: "View Status",
    },
    {
      icon: Calendar,
      title: "Appointment Assistance",
      description: "Personalized help for elderly citizens to book and manage their appointments.",
      cta: "Get Help",
    },
    {
      icon: Search,
      title: "Compare Diagnostics",
      description: "Compare prices and services across diagnostic centres. Find the best deals.",
      cta: "Compare",
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Access and manage your health records securely in one place.",
      cta: "View Records",
    },
    {
      icon: MapPin,
      title: "Find Healthcare",
      description: "Locate nearest hospitals, clinics, and diagnostic centres on the map.",
      cta: "Find Now",
    },
    {
      icon: Phone,
      title: "Teleconsultation",
      description: "Connect with verified doctors through video call from anywhere.",
      cta: "Book Call",
    },
  ];

  return (
    <section id="services" className="govt-section bg-secondary/50">
      <div className="govt-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Access comprehensive healthcare services designed for every citizen's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`govt-card relative overflow-hidden ${
                service.highlight ? "border-2 border-success ring-2 ring-success/20" : ""
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-success text-success-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                service.highlight ? "bg-success/10" : "bg-primary/10"
              }`}>
                <service.icon className={`h-6 w-6 ${service.highlight ? "text-success" : "text-primary"}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <Button
                variant={service.highlight ? "whatsapp" : "outline"}
                size="sm"
                className="w-full"
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
