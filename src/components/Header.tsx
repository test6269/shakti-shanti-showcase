
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Shakti Shanti Academy</h1>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors">Programs</button>
            <button onClick={() => scrollToSection('facilities')} className="text-foreground hover:text-primary transition-colors">Facilities</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors text-left">Programs</button>
              <button onClick={() => scrollToSection('facilities')} className="text-foreground hover:text-primary transition-colors text-left">Facilities</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
