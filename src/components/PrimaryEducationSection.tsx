import { BookOpen, Calendar, Beaker, Globe } from "lucide-react";

const PrimaryEducationSection = () => {
  const subjects = [
    "English",
    "Hindi", 
    "Mathematics",
    "Environmental Studies",
    "Art & Craft"
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="bg-card rounded-xl p-8 border border-border">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <BookOpen className="text-primary" size={32} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-card-foreground">Primary Education</h3>
                <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  Classes 1-5
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Foundation learning with emphasis on basic literacy, numeracy, and creative 
                development.
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Key Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject, index) => (
                    <span 
                      key={index}
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
      </div>
    </section>
  );
};

export default PrimaryEducationSection;