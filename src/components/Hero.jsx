import { CheckCircle2, Sprout, Sun } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 mb-6">
              <Sun className="w-4 h-4" />
              Eco-friendly landscaping done right
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              GREENFORT LANDSCAPE
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Premium gardening and landscape services for homes and businesses. From lush lawns to elegant outdoor spaces, we bring nature closer to you.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "Professional lawn care and maintenance",
                "Custom garden design and planting",
                "Irrigation systems and seasonal care",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition shadow-sm"
              >
                Get a Free Estimate
              </a>
              <a href="#services" className="text-green-700 font-medium hover:underline inline-flex items-center gap-2">
                <Sprout className="w-4 h-4" />
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-green-100">
              <img
                src="https://images.unsplash.com/photo-1457924109735-ff9fcd909772?q=80&w=2069&auto=format&fit=crop"
                alt="Beautiful landscaped backyard with lush greenery"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-md ring-1 ring-green-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100 text-green-700">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Sustainably grown</p>
                  <p className="text-xs text-gray-600">Native plants & water-wise solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
