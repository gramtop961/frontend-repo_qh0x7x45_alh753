import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <section id="about" className="relative py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-16 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  About Us
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 text-gray-600"
                >
                  At GREENFORT LANDSCAPE, we believe your outdoor space should feel like a retreat. Our team combines horticultural expertise with sustainable practices to build landscapes that thrive with your climate and lifestyle.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-3 text-gray-600"
                >
                  We focus on native plants, water-wise irrigation, and thoughtful design that increases curb appeal and long-term value. From modest gardens to full-scale transformations, we handle it with care.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-green-100">
                  <img
                    src="https://images.unsplash.com/photo-1598514982921-3f3b1d4ee69e?q=80&w=2069&auto=format&fit=crop"
                    alt="Garden pathway surrounded by green plants"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
