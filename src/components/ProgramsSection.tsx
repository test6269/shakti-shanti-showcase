
import { Palette, Music, Users, Trophy } from "lucide-react";

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

        {/* Grade Levels */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Grade Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/10 rounded-xl border border-border">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Primary School</h4>
              <p className="text-muted-foreground mb-3">Grades 1-5</p>
              <p className="text-sm text-muted-foreground">Foundation building with play-based learning and fundamental skills development.</p>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-xl border border-border">
              <div className="text-3xl mb-3">🌿</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Middle School</h4>
              <p className="text-muted-foreground mb-3">Grades 6-8</p>
              <p className="text-sm text-muted-foreground">Advanced concepts introduction with project-based learning and skill specialization.</p>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-xl border border-border">
              <div className="text-3xl mb-3">🌳</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">High School</h4>
              <p className="text-muted-foreground mb-3">Grades 9-12</p>
              <p className="text-sm text-muted-foreground">College preparation with advanced placement courses and career guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
