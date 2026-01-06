import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience the magic? Reach out to us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Phone</h3>
            <a
              href="tel:+15551234567"
              className="text-gray-600 hover:text-[#d4af37] transition-colors"
            >
              (555) 123-4567
            </a>
          </div>

          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Email</h3>
            <a
              href="mailto:info@magicservices.com"
              className="text-gray-600 hover:text-[#d4af37] transition-colors"
            >
              info@magicservices.com
            </a>
          </div>

          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Service Area</h3>
            <p className="text-gray-600">
              Greater Metro Area
              <br />
              & Surrounding Cities
            </p>
          </div>

          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Hours</h3>
            <p className="text-gray-600">
              Mon-Fri: 7 AM - 8 PM
              <br />
              Sat-Sun: 8 AM - 6 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
