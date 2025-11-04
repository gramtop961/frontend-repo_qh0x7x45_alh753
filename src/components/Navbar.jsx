import { Leaf, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-green-100 text-green-700">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">GREENFORT LANDSCAPE</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-gray-700 hover:text-green-700 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-700 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 transition">Contact</a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
