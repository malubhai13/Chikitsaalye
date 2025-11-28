import { MapPin, Star, Clock, Stethoscope, Heart, Brain, Bone, Eye, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorSection = () => {
  const specialties = [
    { icon: Stethoscope, name: "General", count: 245 },
    { icon: Heart, name: "Cardiology", count: 89 },
    { icon: Brain, name: "Neurology", count: 56 },
    { icon: Bone, name: "Orthopedics", count: 78 },
    { icon: Eye, name: "Ophthalmology", count: 92 },
    { icon: Baby, name: "Pediatrics", count: 134 },
  ];

  const doctors = [
    {
      name: "Dr. Priya Verma",
      specialty: "General Physician",
      hospital: "City Hospital, Lucknow",
      experience: "15 years",
      rating: 4.8,
      reviews: 324,
      fee: "₹300",
      available: "Today, 10:00 AM",
    },
    {
      name: "Dr. Amit Patel",
      specialty: "Cardiologist",
      hospital: "Heart Care Centre, Jaipur",
      experience: "20 years",
      rating: 4.9,
      reviews: 567,
      fee: "₹800",
      available: "Tomorrow, 2:00 PM",
    },
    {
      name: "Dr. Sunita Rao",
      specialty: "Pediatrician",
      hospital: "Child Care Hospital, Bhopal",
      experience: "12 years",
      rating: 4.7,
      reviews: 289,
      fee: "₹400",
      available: "Today, 4:00 PM",
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Orthopedic Surgeon",
      hospital: "Bone & Joint Clinic, Indore",
      experience: "18 years",
      rating: 4.6,
      reviews: 412,
      fee: "₹600",
      available: "Wed, 11:00 AM",
    },
  ];

  return (
    <section id="doctors" className="govt-section bg-secondary/30">
      <div className="govt-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-success/10 text-success font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Find Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Doctor <span className="text-primary">Near Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find qualified specialists in your city. Filter by specialty, location, and availability.
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group"
            >
              <specialty.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {specialty.name}
              </span>
              <span className="text-xs bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">
                {specialty.count}
              </span>
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="govt-card">
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground truncate">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    {doctor.hospital}
                  </p>
                  <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    <span className="font-semibold text-foreground">{doctor.rating}</span>
                    <span className="text-sm text-muted-foreground">({doctor.reviews})</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">{doctor.fee}</p>
                  <p className="text-xs text-success flex items-center justify-end gap-1">
                    <Clock className="h-3 w-3" />
                    {doctor.available}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <Button variant="outline" className="flex-1">View Profile</Button>
                <Button className="flex-1">Book Now</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
