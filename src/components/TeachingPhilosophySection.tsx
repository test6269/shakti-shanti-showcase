import { Users, Target, Heart } from "lucide-react";

const TeachingPhilosophySection = () => {
  const philosophies = [
    {
      icon: <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"><Users className="text-primary-foreground" size={32} /></div>,
      title: "Student-Centered Learning",
      description: "Individual attention and personalized learning approaches for every student"
    },
    {
      icon: <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"><Target className="text-primary-foreground" size={32} /></div>,
      title: "Goal-Oriented Teaching",
      description: "Clear learning objectives with regular assessment and progress tracking"
    },
    {
      icon: <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"><Heart className="text-primary-foreground" size={32} /></div>,
      title: "Holistic Development",
      description: "Balance of academic excellence with character building and life skills"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Teaching Philosophy</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <div key={index} className="text-center">
              {philosophy.icon}
              <h3 className="text-xl font-semibold text-foreground mb-3">{philosophy.title}</h3>
              <p className="text-muted-foreground">{philosophy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingPhilosophySection;