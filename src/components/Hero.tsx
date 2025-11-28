import { MessageCircle, Search, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="govt-container relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">
                  A Digital India Initiative
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Real-Time Healthcare Access for{" "}
                <span className="text-accent">Every Citizen</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0">
                Access government and private healthcare services easily. Check doctor availability, 
                book appointments, and compare diagnostic prices — all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button variant="hero" size="xl" className="gap-3">
                  <MessageCircle className="h-6 w-6" />
                  Use WhatsApp Bot
                </Button>
                <Button variant="heroOutline" size="xl" className="gap-3">
                  <Search className="h-6 w-6" />
                  Explore Private Healthcare
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">500+</p>
                  <p className="text-sm text-primary-foreground/70">Hospitals</p>
                </div>
                <div className="text-center border-x border-primary-foreground/20">
                  <p className="text-2xl md:text-3xl font-bold text-accent">10K+</p>
                  <p className="text-sm text-primary-foreground/70">Doctors</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">24/7</p>
                  <p className="text-sm text-primary-foreground/70">Support</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative animate-float">
                {/* Main Card */}
                <div className="bg-card rounded-2xl shadow-hero p-8 max-w-md mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-govt-green-light rounded-full flex items-center justify-center">
                      <Clock className="h-8 w-8 text-success" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Quick Access</h3>
                      <p className="text-muted-foreground">Real-time hospital info</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <span className="text-foreground font-medium">AIIMS Delhi</span>
                      <span className="text-success font-semibold">Open</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <span className="text-foreground font-medium">Safdarjung Hospital</span>
                      <span className="text-accent font-semibold">Queue: 23</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <span className="text-foreground font-medium">Ram Manohar Lohia</span>
                      <span className="text-success font-semibold">Open</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 shadow-lg">
                  <span className="font-bold">Free Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,## The government style seal/emblem or relevant illustration would go here ## 267.54,50,321.39,56.44Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
