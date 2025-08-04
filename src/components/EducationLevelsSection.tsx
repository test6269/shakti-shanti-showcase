import { BookOpen, Calendar, Beaker, Globe } from "lucide-react";

const EducationLevelsSection = () => {
  const educationLevels = [
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><BookOpen className="text-primary-foreground" size={24} /></div>,
      title: "Primary Education",
      classes: "Classes 1-5",
      description: "Foundation learning with emphasis on basic literacy, numeracy, and creative development.",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Art & Craft"]
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Calendar className="text-primary-foreground" size={24} /></div>,
      title: "Middle School",
      classes: "Classes 6-8",
      description: "Comprehensive curriculum building strong fundamentals across all major subjects.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science"]
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Beaker className="text-primary-foreground" size={24} /></div>,
      title: "Secondary Education",
      classes: "Classes 9-10",
      description: "CBSE board preparation with focus on analytical thinking and practical application.",
      subjects: ["English", "Hindi", "Mathematics", "Physics", "Chemistry", "Biology", "Social Science"]
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Globe className="text-primary-foreground" size={24} /></div>,
      title: "Senior Secondary (+2)",
      classes: "Classes 11-12",
      description: "Specialized streams preparation for higher education and competitive examinations.",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream"]
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education Levels</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive education from foundational learning to specialized stream preparation
          </p>
        </div>

        <div className="grid gap-6">
          {educationLevels.map((level, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {level.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-card-foreground">{level.title}</h3>
                    <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      {level.classes}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {level.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject, subIndex) => (
                        <span 
                          key={subIndex}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationLevelsSection;