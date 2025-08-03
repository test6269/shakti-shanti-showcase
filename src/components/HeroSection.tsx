
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              🎓 Nurturing Minds Since Foundation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering <span className="text-orange-600">Young Minds</span> for a Brighter Tomorrow
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Shakti Shanti Academy, we believe every child has unlimited potential. Our holistic approach combines academic excellence with character development, creating leaders of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                Discover Our Mission
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                    <p className="text-gray-600 text-sm">Comprehensive curriculum with modern teaching methods</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Class Sizes</h4>
                    <p className="text-gray-600 text-sm">Individual attention for every student</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Award className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                    <p className="text-gray-600 text-sm">Focus on academics, arts, sports, and character building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
