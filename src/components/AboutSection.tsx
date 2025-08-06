
import { Heart, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* School Description */}
        <div className="mb-16">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Today the school has turned from an ice ball to an avalanche and is affiliated to CBSE, BHARAT, up to 10+2. We have classes from Std.- I to Std.- XII with a strength of 1800 students and a devoted team of 81 staff. The true essence of SSA lies, not in its infrastructure of four walls but its overall purpose of imparting quality education includes the art of shaping individual's a personality through physical, emotional, intellectual and spiritual development. The school, therefore, devotes itself assiduously to nurturing of students in such a way that they excel in all walks of life, make a mark in every field of human activities and become worthy citizens of 21st century not only infused with qualities of character but also a capability to withstand the onslaught of modern day degeneration of values. The true riches of SSA lies in producing gentle SSAians who are truthful and represent the school motto.
          </p>
          
          <div className="bg-card rounded-xl p-6 border border-border mb-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-3">School Motto:</h3>
            <p className="text-muted-foreground italic">
              "To add the term 'Multi-Talented' before the name of every student of our school. This 'Multi-Talented' would comprise of Education, Physical, Spiritual and Moral Intellect."
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1800+</div>
            <div className="text-muted-foreground">Current Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">81+</div>
            <div className="text-muted-foreground">Devoted Staff</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">I-XII</div>
            <div className="text-muted-foreground">Classes Offered</div>
          </div>
        </div>

        {/* School Motto in Hindi */}
        <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground mb-16">
          <h2 className="text-4xl font-bold">शक्ति शांति</h2>
        </div>

        {/* Academic Programs Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum covers Classes 1-10 + 2 (11-12) with CBSE board 
            affiliation, providing students with strong academic foundation and holistic development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
