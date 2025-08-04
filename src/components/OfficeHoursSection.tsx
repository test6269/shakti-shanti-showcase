import { Clock, MapPin, Phone, Bus, Car, Train } from "lucide-react";

const OfficeHoursSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Office Hours */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 border border-border text-center">
            <div className="flex justify-center mb-4">
              <Clock className="text-primary" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">Office Hours</h3>
            <p className="text-muted-foreground text-lg">Mon - Fri: 8:00 AM - 4:00 PM</p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="text-primary" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">Interactive Map</h3>
            <p className="text-muted-foreground">Shakti Shanti Academy Location</p>
          </div>
        </div>

        {/* Visit Our Campus */}
        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Visit Our Campus</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-3">Admission Enquiries</h4>
              <p className="text-muted-foreground text-sm">
                Our admission office is open Monday through Friday from 9:00 AM to 3:00 PM. Walk-ins 
                are welcome, or you can schedule an appointment for a guided campus tour.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-3">Campus Tours</h4>
              <p className="text-muted-foreground text-sm">
                Experience our world-class facilities firsthand. Tours are available every weekday and 
                include visits to classrooms, laboratories, library, and sports facilities.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-3">Emergency Contact</h4>
              <p className="text-muted-foreground text-sm">
                For urgent matters outside office hours, please call our emergency helpline: +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* How to Reach Us */}
        <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6 text-center">How to Reach Us</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Train className="text-primary-foreground mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold mb-2">By Metro</h4>
              <p className="text-primary-foreground/80">Knowledge City Metro Station (500m walk)</p>
            </div>
            
            <div className="text-center">
              <Bus className="text-primary-foreground mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold mb-2">By Bus</h4>
              <p className="text-primary-foreground/80">Education Street Bus Stop (200m walk)</p>
            </div>
            
            <div className="text-center">
              <Car className="text-primary-foreground mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold mb-2">By Car</h4>
              <p className="text-primary-foreground/80">Ample parking available on campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeHoursSection;