import { Wand2 } from 'lucide-react';

interface HeroProps {
  onBookNowClick: () => void;
}

export function Hero({ onBookNowClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#d4af37] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-[#d4af37] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-[#d4af37] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#d4af37] p-4 rounded-full shadow-2xl animate-pulse">
              <Wand2 className="w-12 h-12 text-[#1a365d]" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Magic Services
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#d4af37] mb-8">
            You Name It, We Do It
          </p>

          <p className="text-xl sm:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Not Your Usual Handyman
          </p>

          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
            We Come to You & Fix Everything!
          </p>

          <button
            onClick={onBookNowClick}
            className="bg-[#d4af37] hover:bg-[#c49d2e] text-[#1a365d] font-bold text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Wand2 className="w-5 h-5" />
            Book Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f7fafc"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
