import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzc0NzEwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Building Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border-2 border-white p-8 sm:p-12 md:p-16 inline-block">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] sm:tracking-[0.3em] text-white mb-6">
            PREM KALIKA VILLA
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl tracking-wider">
            DEVELOPED BY: SPARSH REALTORS PVT LTD
          </p>
        </div>
        <button
          onClick={scrollToBooking}
          className="mt-12 bg-white text-gray-900 px-8 py-3 text-lg rounded-md hover:bg-gray-100 transition-colors"
        >
          Register Your Interest
        </button>
      </div>
    </section>
  );
}