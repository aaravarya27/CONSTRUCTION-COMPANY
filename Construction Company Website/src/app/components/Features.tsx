import { Car, ArrowUpDown, Zap, ShieldCheck, Home, Wind } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Car,
      title: '6 Individual Parking Spaces',
      description: 'Dedicated parking for each flat with 11\'-3" wide driveway for easy vehicle access',
    },
    {
      icon: Home,
      title: 'Spacious Living Areas',
      description: 'Well-planned 3BHK apartments with optimal space utilization and natural light',
    },
    {
      icon: ArrowUpDown,
      title: 'Premium Lift',
      description: '4\'-9" × 6\'-4" premium lift for convenient access to all floors',
    },
    {
      icon: Wind,
      title: 'Natural Light & Ventilation',
      description: 'Designed for maximum natural light and ventilation throughout the day',
    },
    {
      icon: ShieldCheck,
      title: 'CCTV Surveillance',
      description: 'Complete security with CCTV monitoring for peace of mind',
    },
    {
      icon: Zap,
      title: 'Generator Backup',
      description: 'Uninterrupted power supply with generator backup facility',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">
            FEATURES & AMENITIES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Modern amenities designed for comfortable and convenient urban living
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <feature.icon className="size-12 text-gray-800 mb-4" />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4">Ground Floor Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-semibold">01</div>
              <p>6 individual parking spaces</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-semibold">02</div>
              <p>Wide driveway for easy vehicle access</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-semibold">03</div>
              <p>Spacious office room</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-semibold">04</div>
              <p>Premium lift</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-semibold">05</div>
              <p>Toilet area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}