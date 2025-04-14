
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => { 
  return (
    <section className="section-padding bg-gradient-to-r from-gray-100 to-gray-200 transition-colors duration-500 animate-fade-in" id="contact">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300">Get In Touch</h2>
          <p className="text-xl text-gray-600 transition-colors duration-300">
            Have a project in mind or want to know more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 md:p-8 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 transition-colors duration-300">Send Us a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 ">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 transition-all duration-300">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-brand-900 mr-4 flex-shrink-0 transition-colors duration-300" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300">Email Us</h3>
                    <a
                      href="mailto:statoservetechnologies@gmail.com"
                      className="text-gray-600 hover:text-brand-900 transition-colors duration-300"
                    >
                      statoservetechnologies@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card> 

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 transition-all duration-300">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-brand-900 mr-4 flex-shrink-0 transition-colors duration-300" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300">Call Us</h3>
                    <a
                      href="tel:+919978746900"
                      className="text-gray-600 hover:text-brand-900 transition-colors duration-300"
                    >
                      +91 9978746900
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card> 

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 transition-all duration-300">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-900 mr-4 flex-shrink-0 transition-colors duration-300 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300">Visit Us</h3>
                    <p className="text-gray-600 transition-colors duration-300">
                      Tech Park, Ahmedabad, <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 transition-colors duration-300">Office Hours</h3>
                <div className="space-y-2 transition-colors duration-300">
                  <div className="flex justify-between transition-colors duration-300">
                    <span className="text-gray-600 transition-colors duration-300">Monday - Friday:</span>
                    <span className="text-gray-900 transition-colors duration-300">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between transition-colors duration-300">
                    <span className="text-gray-600 transition-colors duration-300">Saturday:</span>
                    <span className="text-gray-900 transition-colors duration-300">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default ContactSection;
