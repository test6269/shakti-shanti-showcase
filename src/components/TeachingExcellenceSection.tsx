import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const TeachingExcellenceSection = () => {
  const teachingStaff = [
    {
      icon: <GraduationCap className="text-primary" size={28} />,
      title: "Principal",
      subtitle: "Overall School Management",
      description: "Educational leadership with expertise in curriculum development and academic excellence."
    },
    {
      icon: <BookOpen className="text-accent" size={28} />,
      title: "Primary Teachers",
      subtitle: "Classes 1-5 - All Subjects",
      description: "Foundation learning specialists trained in child psychology and early education methods."
    },
    {
      icon: <Users className="text-secondary" size={28} />,
      title: "Secondary Teachers", 
      subtitle: "Classes 6-10 - Subject Specialists",
      description: "Subject matter experts with advanced degrees in their specialized teaching areas."
    },
    {
      icon: <Award className="text-primary" size={28} />,
      title: "Senior Secondary Teachers",
      subtitle: "Classes 11-12 - Stream Specialists",
      description: "Advanced subject specialists with expertise in Science, Commerce, and Arts streams."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Teaching Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of qualified educators brings together academic expertise, 
            teaching experience, and passion for nurturing young minds to achieve their full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teachingStaff.map((staff, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {staff.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{staff.title}</h3>
                  <p className="text-primary font-medium mb-2">{staff.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{staff.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingExcellenceSection;