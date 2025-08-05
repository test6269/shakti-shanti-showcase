
import { BookOpen, Microscope, Monitor, TreePine, Utensils, Bus } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <BookOpen className="text-primary-foreground" size={28} />,
      title: "Modern Library",
      description: "Well-stocked library with over 10,000 books, digital resources, and quiet study areas."
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <Microscope className="text-primary-foreground" size={28} />,
      title: "Science Laboratories",
      description: "Well-equipped labs for physics, chemistry, biology, and computer science."
    },
    {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <Monitor className="text-primary-foreground" size={28} />,
      title: "Smart Classrooms",
      description: "Interactive whiteboards, projectors, and modern educational technology."
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <TreePine className="text-primary-foreground" size={28} />,
      title: "Sports Complex",
      description: "Basketball courts, football field, indoor gymnasium, and yoga studio."
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <Bus className="text-primary-foreground" size={28} />,
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
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Facility Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary p-2 rounded-lg">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{facility.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{facility.description}</p>
                </div>
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
