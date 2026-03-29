import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Flats } from './components/Flats';
import { Location } from './components/Location';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Flats />
        <Location />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
