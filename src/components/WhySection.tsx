import { Clock, IndianRupee, Heart, Eye, Shield, Users } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Real-Time Access",
      description: "Get instant updates on doctor availability, OPD timings, and queue status at government hospitals.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: IndianRupee,
      title: "Cost Savings",
      description: "Compare prices across diagnostic centres and hospitals. Find affordable healthcare options.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Heart,
      title: "Empowering Elderly",
      description: "Simple WhatsApp-based interface designed for senior citizens and those with limited digital literacy.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Eye,
      title: "Transparent Pricing",
      description: "No hidden charges. See complete cost breakdowns for consultations, tests, and treatments.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "All healthcare providers and services are verified. Access authentic government hospital data.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Users,
      title: "Accessible to All",
      description: "Serving Tier-2 & Tier-3 cities. Healthcare access shouldn't depend on where you live.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="why" className="govt-section bg-background">
      <div className="govt-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-primary">Chikitsaalye</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to making healthcare accessible, affordable, and transparent for every Indian citizen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="govt-card group hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 p-8 bg-secondary rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">1M+</p>
              <p className="text-muted-foreground mt-1">Citizens Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground mt-1">Partner Hospitals</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">200+</p>
              <p className="text-muted-foreground mt-1">Cities Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">4.8★</p>
              <p className="text-muted-foreground mt-1">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
