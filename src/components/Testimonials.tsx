import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      text: 'Magic Services lives up to its name! They fixed my refrigerator the same day I called. Professional, courteous, and reasonably priced. Highly recommend!',
      service: 'Appliance Repair',
    },
    {
      name: 'Michael Chen',
      location: 'Westside',
      rating: 5,
      text: 'Moving can be so stressful, but these guys made it a breeze. They were careful with all my furniture and got everything done faster than expected. Worth every penny!',
      service: 'Moving Assistance',
    },
    {
      name: 'Emily Rodriguez',
      location: 'East End',
      rating: 5,
      text: 'Best cleaning service I\'ve ever used! They transformed my post-renovation mess into a spotless home. The attention to detail is incredible. I\'m a customer for life!',
      service: 'Cleaning Services',
    },
  ];

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-[#1a365d] text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
                <p className="text-[#d4af37] text-sm font-semibold mt-1">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
