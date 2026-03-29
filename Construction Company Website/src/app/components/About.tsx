import buildingImage from 'figma:asset/d2acceb0b655ee470e58d0d0ae70337daa033201.png';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={buildingImage}
              alt="Prem Kalika Villa Architecture"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 tracking-wide">
              ABOUT OUR ARCHITECTURE
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-justify">
                Prem Kalika Villa is an upcoming premium residential project that will
                offer modern, comfortable, and efficiently designed living spaces. The
                development will be set on a <strong>337.5 sqm</strong> land parcel with a total
                construction area of <strong>253.5 sqm.</strong> The proposed structure will comprise{' '}
                <strong>Ground + 3</strong> floors, featuring <strong>six</strong> thoughtfully planned flats. The design
                will focus on optimal space utilization, ample natural light, and a
                contemporary architectural style.
              </p>
              <p className="text-justify">
                It will feature well-planned <strong>3BHK</strong> apartments designed for modern urban living. Each flat will have{' '}
                <strong>dedicated parking</strong>, along with amenities such as a <strong>lift, CCTV</strong>{' '}
                surveillance, and <strong>generator</strong> backup, ensuring a safe, convenient, and comfortable
                residential experience.
              </p>
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-xl font-semibold text-gray-900">COMPLETION PERIOD: 30 MONTHS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}