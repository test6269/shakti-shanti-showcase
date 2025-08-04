import { GraduationCap, BookOpen, Users, Award, Target, Heart } from "lucide-react";

const TeachingExcellenceSection = () => {
  const teachingStaff = [
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><GraduationCap className="text-primary-foreground" size={24} /></div>,
      title: "Principal",
      subtitle: "Overall School Management",
      description: "Educational leadership with expertise in curriculum development and academic excellence."
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><BookOpen className="text-primary-foreground" size={24} /></div>,
      title: "Primary Teachers",
      subtitle: "Classes 1-5 - All Subjects",
      description: "Foundation learning specialists trained in child psychology and early education methods."
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Users className="text-primary-foreground" size={24} /></div>,
      title: "Secondary Teachers", 
      subtitle: "Classes 6-10 - Subject Specialists",
      description: "Subject matter experts with advanced degrees in their specialized teaching areas."
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Users className="text-primary-foreground" size={24} /></div>,
      title: "Senior Secondary Teachers",
      subtitle: "Classes 11-12 - Stream Specialists",
      description: "Advanced subject specialists with expertise in Science, Commerce, and Arts streams."
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Target className="text-primary-foreground" size={24} /></div>,
      title: "Sports Teachers",
      subtitle: "Physical Education & Sports",
      description: "Physical education specialists with training in various sports and fitness programs."
    },
    {
      icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><Heart className="text-primary-foreground" size={24} /></div>,
      title: "Arts & Music Teachers",
      subtitle: "Fine Arts, Music & Dance",
      description: "Creative arts professionals fostering artistic expression and cultural awareness."
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