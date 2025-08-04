
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CBSESection from "../components/CBSESection";
import TeachingExcellenceSection from "../components/TeachingExcellenceSection";
import PrimaryEducationSection from "../components/PrimaryEducationSection";
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
      <TeachingExcellenceSection />
      <PrimaryEducationSection />
      <ProgramsSection />
      <FacilitiesSection />
      <OfficeHoursSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
