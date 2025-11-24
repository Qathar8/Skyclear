export default function Statistics() {
  const stats = [
    {
      value: '15+',
      label: 'Years Experience',
    },
    {
      value: '5000+',
      label: 'Shipments Cleared',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      value: '24/7',
      label: 'Support Available',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
