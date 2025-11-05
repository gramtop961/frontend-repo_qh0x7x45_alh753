import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        {/* Immersive ocean hero with enhanced animations */}
        <Hero />

        {/* Client testimonials with smooth motion */}
        <Testimonials />

        {/* Contact and inquiry section */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
