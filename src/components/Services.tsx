import { Wrench, Truck, Sparkles } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function Services() {
  const services: Service[] = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Appliance Repair and Installation',
      description: 'We fix and install all appliances with expert precision',
      features: [
        'Refrigerators & Freezers',
        'Washers & Dryers',
        'Ovens & Stoves',
        'Dishwashers',
        'Microwaves & More',
      ],
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Moving Assistance',
      description: 'We help you move with care and efficiency',
      features: [
        'Packing & Unpacking',
        'Heavy Lifting',
        'Furniture Assembly',
        'Transportation',
        'Storage Solutions',
      ],
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Cleaning Services',
      description: 'We help you clean to perfection',
      features: [
        'Deep Cleaning',
        'Organization',
        'Post-Construction',
        'Move-In/Move-Out',
        'Maintenance Cleaning',
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'HandyMan Services',
      description: 'Professional general repair, maintenance, installation, and small home improvement tasks',
      features: [
        'General Repairs',
        'Maintenance Work',
        'Installation Services',
        'Home Improvements',
        'Small Projects',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions for all your home and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] p-8 text-white">
                <div className="bg-[#d4af37] w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>

              <div className="p-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
