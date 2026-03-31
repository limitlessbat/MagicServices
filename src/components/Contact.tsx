import { Phone, Mail, Clock } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Phone</h3>
            <p className="text-gray-600">
              551 900 0999
            </p>
          </div>

          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Email</h3>
            <p className="text-gray-600">
              info@magicservices.com
            </p>
          </div>

          <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#1a365d] mb-2">Hours</h3>
            <p className="text-gray-600">
              Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
