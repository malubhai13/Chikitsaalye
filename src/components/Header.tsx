import { useState } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Services",
      href: "#services",
      dropdown: [
        "WhatsApp Bot for Govt Hospitals",
        "Doctor Availability",
        "Queue Status & OPD Timing",
        "Appointment Assistance",
      ],
    },
    { label: "Book Appointment", href: "#appointment" },
    { label: "Doctor Near Me", href: "#doctors" },
    { label: "Diagnostic Centre", href: "#diagnostics" },
    { label: "Health Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top Bar - Helpline */}
      <div className="bg-primary text-primary-foreground">
        <div className="govt-container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-medium">Government of India Initiative</span>
            <span className="text-primary-foreground/80">|</span>
            <span>भारत सरकार पहल</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:108" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Emergency: 108</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="govt-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">Chikitsaalye</h1>
              <p className="text-xs text-muted-foreground">Bridging Healthcare Access</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-medium"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </a>
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-elevated py-2 animate-fade-in">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="whatsapp" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Bot
            </Button>
            <Button variant="outline" size="sm">
              हिंदी
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="whatsapp" className="w-full gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Use WhatsApp Bot
                </Button>
                <Button variant="outline" className="w-full">
                  हिंदी में देखें
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
