
import { Heart, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Shakti Shanti Academy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded on the principles of strength (Shakti) and peace (Shanti), our academy is dedicated to nurturing well-rounded individuals who will make a positive impact on the world.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide quality education that empowers students with knowledge, skills, and values necessary for lifelong learning and responsible citizenship.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="text-accent-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a leading educational institution that creates confident, compassionate, and creative individuals who contribute positively to society.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="text-secondary-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              Excellence, Integrity, Respect, Innovation, and Community - these core values guide every aspect of our educational approach.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Shakti Shanti Academy was born from a vision to create an educational environment where students can discover their potential while maintaining inner peace and balance.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that true education goes beyond textbooks - it's about nurturing curious minds, building character, and preparing students for the challenges and opportunities of tomorrow.
              </p>
              <p className="text-muted-foreground">
                Our dedicated faculty and supportive community work together to ensure every student receives the guidance and encouragement they need to thrive.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Teachers</div>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years</div>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
