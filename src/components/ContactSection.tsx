import { Phone, Mail, MapPin, Clock, MessageCircle, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const partnerHospitals = [
    "AIIMS Delhi",
    "Safdarjung Hospital",
    "Ram Manohar Lohia Hospital",
    "Lady Hardinge Medical College",
    "GB Pant Hospital",
    "LNJP Hospital",
  ];

  return (
    <section id="contact" className="govt-section bg-background">
      <div className="govt-container">
        {/* Helpline Box - Prominent */}
        <div className="helpline-box mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-success-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-success">24×7 Emergency Helpline</p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">108</p>
                <p className="text-muted-foreground">Free ambulance service across India</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp: +91 9876543210
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Toll-Free: 1800-XXX-XXXX
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions or need assistance? Fill out the form and we'll get back to you.
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Issue Type *
                </label>
                <select className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select an issue</option>
                  <option value="appointment">Appointment Help</option>
                  <option value="hospital">Hospital Information</option>
                  <option value="whatsapp">WhatsApp Bot Support</option>
                  <option value="diagnostic">Diagnostic Services</option>
                  <option value="complaint">File a Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your query or issue..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-5 w-5" />
                Submit Query
              </Button>
            </form>
          </div>

          {/* Contact Info & Partner Hospitals */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="govt-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      Chikitsaalye Healthcare Services<br />
                      Digital India Tower, Sector 62<br />
                      Noida, Uttar Pradesh - 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:support@chikitsaalye.com" className="text-primary hover:underline">
                      support@chikitsaalye.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Support Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 8:00 AM - 10:00 PM<br />
                      Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Government Hospitals */}
            <div className="govt-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Partner Government Hospitals</h3>
              <p className="text-muted-foreground mb-4">
                We work closely with major government hospitals across India.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {partnerHospitals.map((hospital, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-secondary rounded-lg"
                  >
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">{hospital}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-secondary rounded-xl h-48 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
