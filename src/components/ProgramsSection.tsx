
import { GraduationCap, Palette, Calculator, Globe, Music, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Calculator className="text-primary" size={24} />,
      title: "Mathematics & Sciences",
      description: "Advanced STEM curriculum with hands-on experiments and problem-solving approaches.",
      color: "bg-primary/20"
    },
    {
      icon: <Globe className="text-accent-foreground" size={24} />,
      title: "Languages & Literature", 
      description: "Comprehensive language programs including English, Hindi, and regional languages.",
      color: "bg-accent/20"
    },
    {
      icon: <Palette className="text-secondary-foreground" size={24} />,
      title: "Arts & Creativity",
      description: "Visual arts, drama, creative writing, and design thinking programs.",
      color: "bg-secondary/20"
    },
    {
      icon: <Music className="text-primary" size={24} />,
      title: "Music & Performing Arts",
      description: "Classical and contemporary music, dance, and theatrical performances.",
      color: "bg-primary/20"
    },
    {
      icon: <Zap className="text-destructive" size={24} />,
      title: "Physical Education",
      description: "Sports, fitness, yoga, and outdoor adventure activities for holistic development.",
      color: "bg-destructive/20"
    },
    {
      icon: <GraduationCap className="text-accent-foreground" size={24} />,
      title: "Life Skills & Leadership",
      description: "Character building, leadership development, and practical life skills training.",
      color: "bg-accent/20"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Academic Programs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive curriculum designed to develop critical thinking, creativity, and character in every student.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow group">
              <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
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
