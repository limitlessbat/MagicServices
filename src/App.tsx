import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero onBookNowClick={handleBookNowClick} />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
