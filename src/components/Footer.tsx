
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border text-card-foreground">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Shakti Shanti Academy</h3>
                <p className="text-muted-foreground text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering young minds through holistic education and character development.
            </p>
            <div className="flex space-x-3">
              <div className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Linkedin size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="text-muted-foreground hover:text-primary transition-colors">
                  Academic Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('facilities')} className="text-muted-foreground hover:text-primary transition-colors">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                  Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Primary School (1-5)</li>
              <li>Middle School (6-8)</li>
              <li>High School (9-12)</li>
              <li>Sports & Arts</li>
              <li>Life Skills</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">info@shaktishantiacademy.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </div>
              <div className="text-muted-foreground text-sm">
                123 Education Street<br />
                Knowledge Park, Learning City
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Shakti Shanti Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
