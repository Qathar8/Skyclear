import { FileText, Package, Truck, Anchor } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'SKYCLEAR LOGISTICS LIMITED',
      description: 'Expert handling of all customs documentation and procedures for smooth clearance at Mombasa Port.',
    },
    {
      icon: Package,
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding services for both imports and exports through Mombasa Port.',
    },
    {
      icon: Truck,
      title: 'Transport Solutions',
      description: 'Reliable transportation services from port to destination across East Africa.',
    },
    {
      icon: Anchor,
      title: 'Port Handling',
      description: 'Efficient port operations and handling services to minimize delays and costs.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive clearing and forwarding solutions at Mombasa Port
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
