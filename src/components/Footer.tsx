import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Book Appointment", href: "#appointment" },
    { label: "Find Doctors", href: "#doctors" },
    { label: "Diagnostics", href: "#diagnostics" },
    { label: "Health Blog", href: "#blog" },
  ];

  const govtLinks = [
    { label: "National Health Portal", href: "https://www.nhp.gov.in", external: true },
    { label: "Ayushman Bharat", href: "https://pmjay.gov.in", external: true },
    { label: "Aarogya Setu", href: "https://www.aarogyasetu.gov.in", external: true },
    { label: "NDHM", href: "https://nha.gov.in", external: true },
    { label: "ICMR", href: "https://www.icmr.gov.in", external: true },
    { label: "Ministry of Health", href: "https://mohfw.gov.in", external: true },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="govt-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Chikitsaalye</h3>
                <p className="text-xs text-primary-foreground/70">Bridging Healthcare Access</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              A Digital India initiative to make healthcare accessible, affordable, and transparent for every citizen.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Government Resources</h4>
            <ul className="space-y-2">
              {govtLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Emergency: 108</p>
                  <p className="text-sm text-primary-foreground/70">Toll-Free: 1800-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <p className="text-sm text-primary-foreground/80">support@chikitsaalye.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  Digital India Tower, Sector 62<br />
                  Noida, UP - 201301
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="govt-container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70 text-center">
              © 2024 Chikitsaalye. A Government of India Initiative. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Government Disclaimer */}
      <div className="bg-primary-foreground/5 py-3">
        <div className="govt-container">
          <p className="text-xs text-primary-foreground/60 text-center">
            This website is designed and developed under the Digital India programme. 
            Content on this website is published and managed by Chikitsaalye Healthcare Services. 
            For any queries, contact support@chikitsaalye.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
