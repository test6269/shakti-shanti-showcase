
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Whether you're interested in enrollment, have questions about our programs, or want to visit our campus, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Education Street, Knowledge Park,<br />
                      Learning City - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                    <p className="text-muted-foreground">
                      Main Office: +91 98765 43210<br />
                      Admissions: +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-secondary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@shaktishantiacademy.edu<br />
                      admissions@shaktishantiacademy.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-destructive/20 p-3 rounded-lg flex-shrink-0">
                    <Clock className="text-destructive" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="text-xl font-semibold text-card-foreground mb-4">Admission Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-muted-foreground">Schedule a campus visit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-muted-foreground">Submit application form</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-muted-foreground">Attend entrance assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-muted-foreground">Final interview and enrollment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                  <option>Select a subject</option>
                  <option>Admission Inquiry</option>
                  <option>Academic Programs</option>
                  <option>Campus Tour</option>
                  <option>General Information</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
