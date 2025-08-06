
import { ArrowRight, Award, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-background pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 py-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to<br />
              <span className="text-primary">Shakti Shanti Academy</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Nurturing young minds with excellence in education. We provide a comprehensive learning environment that fosters academic achievement, character development, and lifelong learning.
            </p>
          </div>

          {/* School Building Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src="https://res.cloudinary.com/dlpqbgdax/image/upload/v1754048636/6_jhw8ho.jpg" 
              alt="Shakti Shanti Academy Building"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Award Badge Overlay */}
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Star className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground text-sm">Award Winning</h4>
                  <p className="text-muted-foreground text-xs">Education Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              About Shakti Shanti Academy
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              S.S. Academy is a co-educational institution established on 7th Aug. 1999, run by S.S. Trust Patna (Bihar) and registered under the Trust Registration Act.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
