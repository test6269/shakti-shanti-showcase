
import { BookOpen, Microscope, Monitor, TreePine, Utensils, Bus } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <BookOpen className="text-primary" size={28} />,
      title: "Modern Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces."
    },
    {
      icon: <Microscope className="text-accent-foreground" size={28} />,
      title: "Science Laboratories",
      description: "Well-equipped labs for physics, chemistry, biology, and computer science."
    },
    {
      icon: <Monitor className="text-secondary-foreground" size={28} />,
      title: "Smart Classrooms",
      description: "Interactive whiteboards, projectors, and modern educational technology."
    },
    {
      icon: <TreePine className="text-primary" size={28} />,
      title: "Sports Complex",
      description: "Basketball courts, football field, indoor gymnasium, and yoga studio."
    },
    {
      icon: <Utensils className="text-destructive" size={28} />,
      title: "Cafeteria",
      description: "Nutritious meals prepared with fresh ingredients in a hygienic environment."
    },
    {
      icon: <Bus className="text-accent-foreground" size={28} />,
      title: "Transportation",
      description: "Safe and reliable bus service covering major routes across the city."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">World-Class Facilities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our campus is designed to provide students with the best learning environment, equipped with modern facilities and resources.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:bg-muted transition-all duration-300 h-full">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Highlights */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Campus Highlights</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our 10-acre campus provides a safe, nurturing environment where students can learn, grow, and explore their potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-primary-foreground/80">Acres Campus</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-primary-foreground/80">Classrooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-primary-foreground/80">Laboratories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
