
import { BookOpen, Microscope, Monitor, TreePine, Utensils, Bus } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <BookOpen className="text-blue-600" size={28} />,
      title: "Modern Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces."
    },
    {
      icon: <Microscope className="text-green-600" size={28} />,
      title: "Science Laboratories",
      description: "Well-equipped labs for physics, chemistry, biology, and computer science."
    },
    {
      icon: <Monitor className="text-purple-600" size={28} />,
      title: "Smart Classrooms",
      description: "Interactive whiteboards, projectors, and modern educational technology."
    },
    {
      icon: <TreePine className="text-orange-600" size={28} />,
      title: "Sports Complex",
      description: "Basketball courts, football field, indoor gymnasium, and yoga studio."
    },
    {
      icon: <Utensils className="text-red-600" size={28} />,
      title: "Cafeteria",
      description: "Nutritious meals prepared with fresh ingredients in a hygienic environment."
    },
    {
      icon: <Bus className="text-indigo-600" size={28} />,
      title: "Transportation",
      description: "Safe and reliable bus service covering major routes across the city."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our campus is designed to provide students with the best learning environment, equipped with modern facilities and resources.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 transition-all duration-300 h-full">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Highlights */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Campus Highlights</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our 10-acre campus provides a safe, nurturing environment where students can learn, grow, and explore their potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-blue-100">Acres Campus</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-blue-100">Classrooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-blue-100">Laboratories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
