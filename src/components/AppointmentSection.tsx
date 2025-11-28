import { Search, Calendar, Star, MapPin, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppointmentSection = () => {
  const consultations = [
    {
      type: "General Physician",
      doctors: 245,
      price: "₹200 - ₹500",
      availability: "Today",
    },
    {
      type: "Cardiologist",
      doctors: 89,
      price: "₹500 - ₹1500",
      availability: "Tomorrow",
    },
    {
      type: "Orthopedic",
      doctors: 67,
      price: "₹400 - ₹1200",
      availability: "Today",
    },
    {
      type: "Dermatologist",
      doctors: 112,
      price: "₹300 - ₹800",
      availability: "Today",
    },
  ];

  const tests = [
    { name: "Complete Blood Count (CBC)", price: "₹250 - ₹450" },
    { name: "Thyroid Profile", price: "₹400 - ₹800" },
    { name: "Lipid Profile", price: "₹350 - ₹600" },
    { name: "Blood Sugar (Fasting)", price: "₹80 - ₹150" },
  ];

  return (
    <section id="appointment" className="govt-section bg-background">
      <div className="govt-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Book Appointment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find & Book <span className="text-primary">Healthcare Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Search and compare doctors, specialists, and diagnostic tests with transparent pricing.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl shadow-card border border-border">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search doctors, hospitals, or tests..."
                className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location"
                className="w-full sm:w-40 pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button size="lg">Search</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Consultations */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Popular Consultations
            </h3>
            <div className="space-y-4">
              {consultations.map((item, index) => (
                <div key={index} className="govt-card flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{item.type}</h4>
                    <p className="text-sm text-muted-foreground">{item.doctors} doctors available</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{item.price}</p>
                    <p className="text-sm text-success flex items-center justify-end gap-1">
                      <Clock className="h-3 w-3" />
                      {item.availability}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Book</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Tests */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <IndianRupee className="h-5 w-5 text-accent" />
              Compare Test Prices
            </h3>
            <div className="space-y-4">
              {tests.map((test, index) => (
                <div key={index} className="govt-card flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{test.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <Star className="h-4 w-4 text-muted" />
                      <span className="text-sm text-muted-foreground ml-1">4.2</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-success">{test.price}</p>
                    <p className="text-xs text-muted-foreground">across 15+ labs</p>
                  </div>
                  <Button variant="saffron" size="sm">Compare</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Doctor Card */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-4xl">👨‍⚕️</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-foreground">Dr. Rajesh Sharma</h4>
              <p className="text-muted-foreground">Senior Cardiologist • AIIMS Delhi</p>
              <p className="text-sm text-muted-foreground mt-1">20+ years experience | 5000+ consultations</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl font-bold text-primary">₹800</p>
              <p className="text-sm text-success">Available Today</p>
              <Button>Book Appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
