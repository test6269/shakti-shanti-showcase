
import { GraduationCap, Palette, Calculator, Globe, Music, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Calculator className="text-blue-600" size={24} />,
      title: "Mathematics & Sciences",
      description: "Advanced STEM curriculum with hands-on experiments and problem-solving approaches.",
      color: "bg-blue-100"
    },
    {
      icon: <Globe className="text-green-600" size={24} />,
      title: "Languages & Literature",
      description: "Comprehensive language programs including English, Hindi, and regional languages.",
      color: "bg-green-100"
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "Arts & Creativity",
      description: "Visual arts, drama, creative writing, and design thinking programs.",
      color: "bg-purple-100"
    },
    {
      icon: <Music className="text-orange-600" size={24} />,
      title: "Music & Performing Arts",
      description: "Classical and contemporary music, dance, and theatrical performances.",
      color: "bg-orange-100"
    },
    {
      icon: <Zap className="text-red-600" size={24} />,
      title: "Physical Education",
      description: "Sports, fitness, yoga, and outdoor adventure activities for holistic development.",
      color: "bg-red-100"
    },
    {
      icon: <GraduationCap className="text-indigo-600" size={24} />,
      title: "Life Skills & Leadership",
      description: "Character building, leadership development, and practical life skills training.",
      color: "bg-indigo-100"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive curriculum designed to develop critical thinking, creativity, and character in every student.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Grade Levels */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Grade Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Primary School</h4>
              <p className="text-gray-600 mb-3">Grades 1-5</p>
              <p className="text-sm text-gray-600">Foundation building with play-based learning and fundamental skills development.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl mb-3">🌿</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Middle School</h4>
              <p className="text-gray-600 mb-3">Grades 6-8</p>
              <p className="text-sm text-gray-600">Advanced concepts introduction with project-based learning and skill specialization.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl mb-3">🌳</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">High School</h4>
              <p className="text-gray-600 mb-3">Grades 9-12</p>
              <p className="text-sm text-gray-600">College preparation with advanced placement courses and career guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
