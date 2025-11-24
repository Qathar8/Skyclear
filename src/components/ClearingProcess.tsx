export default function ClearingProcess() {
  const steps = [
    {
      number: '1',
      title: 'Documentation Review',
      description: 'We review and prepare all necessary customs documentation.',
    },
    {
      number: '2',
      title: 'Customs Declaration',
      description: 'Submit declarations and handle customs requirements.',
    },
    {
      number: '3',
      title: 'Port Clearance',
      description: 'Clear your goods through port authorities efficiently.',
    },
    {
      number: '4',
      title: 'Delivery',
      description: 'Arrange transportation to your specified destination.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clearing Process</h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
                )}
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
