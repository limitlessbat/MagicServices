import { Wand2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="w-8 h-8 text-[#d4af37]" />
              <span className="text-2xl font-bold">Magic Services</span>
            </div>
            <p className="text-gray-300 mb-4">
              You Name It, We Do It
            </p>
            <p className="text-gray-400 text-sm">
              Your trusted partner for all home and business service needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d4af37]">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Appliance Repair and Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Moving Assistance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Cleaning Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  HandyMan Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d4af37]">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>551 900 0999</li>
              <li>info@magicservices.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Magic Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
