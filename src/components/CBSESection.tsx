import { Award, Trophy } from "lucide-react";

const CBSESection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* International Olympiads */}
        <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="text-primary" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">International Olympiads</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mathematical, scientific, and academic olympiad competitions at national and international levels.
            </p>
          </div>
        </div>

        {/* CBSE Affiliation */}
        <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">CBSE Affiliated School</h3>
            <p className="text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              We are affiliated with the Central Board of Secondary Education (CBSE), ensuring our 
              curriculum meets national education standards and provides students with 
              recognized qualifications for higher education.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Board Code</h4>
                <p className="text-primary-foreground/80">CBSE/XX/YYYY</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Affiliation No.</h4>
                <p className="text-primary-foreground/80">1234567</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">School Code</h4>
                <p className="text-primary-foreground/80">12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CBSESection;