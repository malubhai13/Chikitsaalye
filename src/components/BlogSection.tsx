import { Calendar, User, ArrowRight, BookOpen, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const articles = [
    {
      title: "Understanding Diabetes: Prevention and Management",
      excerpt: "Learn about the early signs of diabetes, lifestyle changes, and treatment options available in India.",
      author: "Dr. Anil Kumar",
      date: "Nov 25, 2024",
      category: "Diabetes Care",
      type: "article",
      image: "🩺",
    },
    {
      title: "Heart Health After 50: What You Need to Know",
      excerpt: "Essential tips for maintaining cardiovascular health as you age. Expert advice from cardiologists.",
      author: "Dr. Meena Sharma",
      date: "Nov 22, 2024",
      category: "Heart Health",
      type: "video",
      image: "❤️",
    },
    {
      title: "Ayushman Bharat: Complete Guide to Benefits",
      excerpt: "Everything you need to know about the PM-JAY scheme - eligibility, coverage, and how to apply.",
      author: "Health Ministry",
      date: "Nov 20, 2024",
      category: "Government Schemes",
      type: "guide",
      image: "📋",
    },
    {
      title: "Monsoon Health: Preventing Waterborne Diseases",
      excerpt: "Stay safe during monsoon season. Tips to prevent dengue, malaria, and other seasonal illnesses.",
      author: "Dr. Priya Singh",
      date: "Nov 18, 2024",
      category: "Seasonal Health",
      type: "article",
      image: "🌧️",
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Understanding mental health challenges and available support systems in India.",
      author: "Dr. Rahul Verma",
      date: "Nov 15, 2024",
      category: "Mental Health",
      type: "video",
      image: "🧠",
    },
    {
      title: "Vaccination Schedule for Children 2024",
      excerpt: "Complete immunization guide for children from birth to 18 years as per Indian medical guidelines.",
      author: "ICMR Guidelines",
      date: "Nov 12, 2024",
      category: "Child Health",
      type: "guide",
      image: "💉",
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />;
      case "guide":
        return <FileText className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "Video";
      case "guide":
        return "Guide";
      default:
        return "Article";
    }
  };

  return (
    <section id="blog" className="govt-section bg-secondary/30">
      <div className="govt-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Health Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog & <span className="text-primary">Research Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Verified health articles and vlogs from medical experts. Stay informed about health and wellness.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", "Heart Health", "Diabetes Care", "Mental Health", "Government Schemes", "Child Health"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article key={index} className="govt-card group cursor-pointer">
              {/* Thumbnail */}
              <div className="w-full h-40 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="text-5xl">{article.image}</span>
              </div>

              {/* Category & Type */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  {getTypeIcon(article.type)}
                  {getTypeLabel(article.type)}
                </span>
              </div>

              {/* Title & Excerpt */}
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Doctor Profile Card */}
        <div className="mt-12 p-6 bg-card border border-border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">👩‍⚕️</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">Featured Expert</span>
              <h4 className="text-xl font-bold text-foreground mt-2">Dr. Kavita Deshmukh</h4>
              <p className="text-muted-foreground">Senior Cardiologist • AIIMS Mumbai</p>
              <p className="text-sm text-muted-foreground mt-2">
                "Preventive healthcare is the key to a healthy nation. Early detection saves lives and reduces healthcare costs."
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="gap-2">
            Explore All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
