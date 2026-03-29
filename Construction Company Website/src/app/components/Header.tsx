import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Building2 className="size-8 text-gray-800" />
            <div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Sparsh Realtors Pvt Ltd</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('flats')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Flats
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('flats')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Flats
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-left"
              >
                Book Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
