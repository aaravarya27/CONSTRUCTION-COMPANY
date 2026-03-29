import { ImageWithFallback } from './figma/ImageWithFallback';

export function Flats() {
  const flats = [
    { number: '101', area: '1196 SQ FT' },
    { number: '102', area: '1274 SQ FT' },
    { number: '201', area: '1352 SQ FT' },
    { number: '202', area: '1417 SQ FT' },
    { number: '301', area: '1352 SQ FT' },
    { number: '302', area: '1417 SQ FT' },
  ];

  const floorPlanFeatures = [
    { number: '01', title: '1 Master Bed Room and 2 Guest Bedrooms' },
    { number: '02', title: 'Spacious Drawing cum Dining Hall' },
    { number: '03', title: 'Kitchen Area' },
    { number: '04', title: 'Bedroom accessible balcony' },
    { number: '05', title: 'Attached Washroom in Master Bedroom' },
    { number: '06', title: 'Secondary Washroom' },
  ];

  return (
    <section id="flats" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wide mb-4">
            FLAT AREA
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Six well-designed 3BHK apartments with varying sizes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {flats.map((flat) => (
            <div
              key={flat.number}
              className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 p-8 text-center hover:border-gray-800 hover:shadow-xl transition-all rounded-lg"
            >
              <div className="text-5xl mb-3 text-gray-800">
                {flat.number}
              </div>
              <div className="text-2xl font-semibold text-gray-700">{flat.area}</div>
              <div className="text-sm text-gray-500 mt-2">Carpet Area</div>
            </div>
          ))}
        </div>

        {/* Luxury Interior Image */}
        <div className="mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc0NzgxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Apartment Interior"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Typical Floor Plan Features */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wide mb-8 text-center">
            TYPICAL FLOOR PLAN
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid sm:grid-cols-2 gap-6">
              {floorPlanFeatures.map((feature) => (
                <div key={feature.number} className="flex items-start gap-4">
                  <div className="bg-white border-2 border-gray-800 px-4 py-2 font-semibold text-lg flex-shrink-0">
                    {feature.number}
                  </div>
                  <p className="text-lg pt-2">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}