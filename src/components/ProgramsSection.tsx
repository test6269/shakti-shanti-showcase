
import { Palette, Music, Users, Trophy, Target, Heart } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Palette className="text-primary-foreground" size={32} />,
      title: "Creative Arts",
      description: "Artistic expression through various mediums including drawing, painting, and digital art."
    },
    {
      icon: <Music className="text-primary-foreground" size={32} />,
      title: "Music & Dance",
      description: "Cultural arts program featuring vocal music, instruments, and traditional dance forms."
    },
    {
      icon: <Users className="text-primary-foreground" size={32} />,
      title: "Sports & Games",
      description: "Physical education with various indoor and outdoor sports activities."
    },
    {
      icon: <Trophy className="text-primary-foreground" size={32} />,
      title: "International Olympiads",
      description: "Mathematical, scientific, and academic olympiad competitions at national and international levels."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Additional Programs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond academics, we offer comprehensive programs for overall personality development.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-12 text-center">Our Teaching Philosophy</h3>
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Student-Centered Learning</h4>
              <p className="text-muted-foreground">Individual attention and personalized learning approaches for every student</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Goal-Oriented Teaching</h4>
              <p className="text-muted-foreground">Clear learning objectives with regular assessment and progress tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-foreground" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Holistic Development</h4>
              <p className="text-muted-foreground">Balance of academic excellence with character building and life skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
