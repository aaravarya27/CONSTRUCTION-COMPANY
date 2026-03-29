import { MapPin, ShoppingCart, Shield, Building2, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">
            LOCATION PLAN
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Prem Kalika Villa is strategically located for convenience and accessibility
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Description */}
            <div>
              <p className="text-lg text-gray-700 text-justify leading-relaxed mb-6">
                The project is close to a <strong>grocery market, police station, hospital</strong>, and the{' '}
                <strong>main road</strong>, ensuring that daily needs, healthcare, and connectivity
                are all within easy reach. Its prime location combines peaceful residential
                living with quick access to essential services, making it an ideal choice
                for families and professionals alike.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <ShoppingCart className="size-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Grocery Market</h4>
                    <p className="text-gray-600 text-sm">Daily essentials within walking distance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="size-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Police Station</h4>
                    <p className="text-gray-600 text-sm">Safe and secure neighborhood</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="size-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Hospital Nearby</h4>
                    <p className="text-gray-600 text-sm">Healthcare facilities close by - Ruben Hospital</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Navigation className="size-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Main Road Access</h4>
                    <p className="text-gray-600 text-sm">Excellent connectivity towards Van Vibhag Road</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Landmarks */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <MapPin className="size-6" />
                Key Landmarks
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold">Patliputra Thana</span>
                  <span className="text-gray-600">Nearby</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold">Patliputra Golambar</span>
                  <span className="text-gray-600">Nearby</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold">Ruben Hospital</span>
                  <span className="text-gray-600">Close Proximity</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold">Pencil Kids School</span>
                  <span className="text-gray-600">Educational Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}