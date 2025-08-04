
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CBSESection from "../components/CBSESection";
import TeachingPhilosophySection from "../components/TeachingPhilosophySection";
import TeachingExcellenceSection from "../components/TeachingExcellenceSection";
import EducationLevelsSection from "../components/EducationLevelsSection";
import ProgramsSection from "../components/ProgramsSection";
import FacilitiesSection from "../components/FacilitiesSection";
import OfficeHoursSection from "../components/OfficeHoursSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CBSESection />
      <TeachingPhilosophySection />
      <TeachingExcellenceSection />
      <EducationLevelsSection />
      <ProgramsSection />
      <FacilitiesSection />
      <OfficeHoursSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
