import { FlaskConical, MapPin, Clock, Star, Check, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiagnosticSection = () => {
  const labs = [
    {
      name: "HealthFirst Diagnostics",
      location: "Varanasi, UP",
      rating: 4.7,
      reviews: 892,
      nabl: true,
      homeCollection: true,
    },
    {
      name: "CityLab Pathology",
      location: "Patna, Bihar",
      rating: 4.5,
      reviews: 654,
      nabl: true,
      homeCollection: true,
    },
    {
      name: "MedScan Centre",
      location: "Ranchi, Jharkhand",
      rating: 4.6,
      reviews: 423,
      nabl: false,
      homeCollection: true,
    },
  ];

  const tests = [
    {
      name: "Complete Blood Count (CBC)",
      description: "Measures red cells, white cells, hemoglobin, and platelets",
      prices: [
        { lab: "HealthFirst", price: 250, delivery: "Same Day" },
        { lab: "CityLab", price: 300, delivery: "Same Day" },
        { lab: "MedScan", price: 220, delivery: "Next Day" },
      ],
    },
    {
      name: "Thyroid Profile (T3, T4, TSH)",
      description: "Complete thyroid function assessment",
      prices: [
        { lab: "HealthFirst", price: 450, delivery: "Same Day" },
        { lab: "CityLab", price: 520, delivery: "Same Day" },
        { lab: "MedScan", price: 400, delivery: "Next Day" },
      ],
    },
    {
      name: "Lipid Profile",
      description: "Cholesterol, triglycerides, HDL, LDL levels",
      prices: [
        { lab: "HealthFirst", price: 380, delivery: "Same Day" },
        { lab: "CityLab", price: 420, delivery: "Same Day" },
        { lab: "MedScan", price: 350, delivery: "Next Day" },
      ],
    },
    {
      name: "Chest X-Ray",
      description: "Digital X-ray imaging of chest region",
      prices: [
        { lab: "HealthFirst", price: 350, delivery: "2 Hours" },
        { lab: "CityLab", price: 400, delivery: "2 Hours" },
        { lab: "MedScan", price: 300, delivery: "4 Hours" },
      ],
    },
  ];

  return (
    <section id="diagnostics" className="govt-section bg-background">
      <div className="govt-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Diagnostic Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diagnostic Centre <span className="text-primary">Near Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare prices across NABL accredited labs. Get home sample collection and quick report delivery.
          </p>
        </div>

        {/* Labs Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {labs.map((lab, index) => (
            <div key={index} className="govt-card">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-accent" />
                </div>
                <div className="flex gap-2">
                  {lab.nabl && (
                    <span className="bg-success/10 text-success text-xs font-semibold px-2 py-1 rounded">
                      NABL
                    </span>
                  )}
                  {lab.homeCollection && (
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                      <Truck className="h-3 w-3" /> Home
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground">{lab.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4" />
                {lab.location}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="font-semibold text-foreground">{lab.rating}</span>
                <span className="text-sm text-muted-foreground">({lab.reviews} reviews)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Price Comparison Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold text-foreground">Price Comparison</h3>
            <p className="text-muted-foreground">Compare test prices across diagnostic centres</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Test Name</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">HealthFirst</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">CityLab</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">MedScan</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tests.map((test, index) => {
                  const minPrice = Math.min(...test.prices.map(p => p.price));
                  return (
                    <tr key={index} className="hover:bg-secondary/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-foreground">{test.name}</p>
                        <p className="text-sm text-muted-foreground">{test.description}</p>
                      </td>
                      {test.prices.map((price, pIndex) => (
                        <td key={pIndex} className="text-center px-4 py-4">
                          <p className={`font-bold ${price.price === minPrice ? "text-success" : "text-foreground"}`}>
                            ₹{price.price}
                            {price.price === minPrice && (
                              <span className="ml-1 text-xs bg-success/10 text-success px-1 rounded">Best</span>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                            <Clock className="h-3 w-3" />
                            {price.delivery}
                          </p>
                        </td>
                      ))}
                      <td className="text-center px-4 py-4">
                        <Button size="sm" variant="saffron">Book</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { icon: Check, text: "NABL Accredited Labs" },
            { icon: Truck, text: "Free Home Collection" },
            { icon: Clock, text: "Same Day Reports" },
            { icon: Star, text: "Verified Reviews" },
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-success/5 border border-success/20 rounded-lg">
              <feature.icon className="h-5 w-5 text-success" />
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
