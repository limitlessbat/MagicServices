import { Clock, DollarSign, Award } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Same-Day Service',
      description: 'We understand urgency. Get your issues resolved today.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction or we make it right, no questions asked.',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get upfront quotes before we start work.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-4">
            Why Choose Magic Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another handyman service - we're your trusted partner for all home needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-[#f7fafc] transition-colors duration-300"
            >
              <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a365d]">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
