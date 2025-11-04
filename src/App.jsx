import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <section id="about" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Us</h2>
                <p className="mt-4 text-gray-600">
                  At GREENFORT LANDSCAPE, we believe your outdoor space should feel like a retreat. Our team combines horticultural expertise with sustainable practices to build landscapes that thrive with your climate and lifestyle.
                </p>
                <p className="mt-3 text-gray-600">
                  We focus on native plants, water-wise irrigation, and thoughtful design that increases curb appeal and long-term value. From modest gardens to full-scale transformations, we handle it with care.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-green-100">
                  <img
                    src="https://images.unsplash.com/photo-1598514982921-3f3b1d4ee69e?q=80&w=2069&auto=format&fit=crop"
                    alt="Garden pathway surrounded by green plants"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App;
