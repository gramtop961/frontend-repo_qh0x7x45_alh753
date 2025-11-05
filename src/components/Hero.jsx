import { CheckCircle2, Sprout, Sun, Leaf, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ocean-inspired gradient with pointer-events-none so it never blocks interactions */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-teal-900 to-white pointer-events-none" />

      {/* Gentle animated wave overlay (non-interactive) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[120vw] h-48 rounded-[100%] blur-3xl bg-emerald-500/20"
        initial={{ opacity: 0.4, y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient bubbles rising for ocean feel */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-teal-200/30 blur-[2px]"
          style={{
            width: `${6 + (i % 4) * 2}px`,
            height: `${6 + (i % 4) * 2}px`,
            left: `${(i * 9) % 100}%`,
            bottom: `${-10 - i * 8}px`,
          }}
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ y: [-40 - i * 12, -200 - i * 16], opacity: [0.5, 1, 0] }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20 pb-10 lg:pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 mb-6"
            >
              <Sun className="w-4 h-4" />
              Eco-friendly landscaping done right
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
            >
              GREENFORT LANDSCAPE
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg text-zinc-200">
              Premium gardening and landscape services for homes and businesses. From lush lawns to elegant outdoor spaces, we bring nature closer to you.
            </motion.p>

            <motion.ul variants={item} className="mt-6 space-y-3 text-zinc-100/90">
              {[
                "Professional lawn care and maintenance",
                "Custom garden design and planting",
                "Irrigation systems and seasonal care",
              ].map((itemText) => (
                <li key={itemText} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>{itemText}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition shadow-lg shadow-green-600/20"
              >
                Get a Free Estimate
              </a>
              <a
                href="#testimonials"
                className="text-green-200 hover:text-white font-medium underline-offset-8 hover:underline inline-flex items-center gap-2"
              >
                <Sprout className="w-4 h-4" />
                Client Stories
              </a>
            </motion.div>

            {/* Floating nature icons for added motion */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-8 top-10 text-green-200"
              initial={{ opacity: 0, rotate: -8, y: 8 }}
              animate={{ opacity: 1, rotate: [-8, 8, -8], y: [8, 0, 8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Right column: immersive Spline animation */}
          <div className="relative w-full h-[520px] sm:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden ring-1 ring-green-200/30 shadow-2xl shadow-black/30 bg-black z-0">
            <Spline
              scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />

            {/* Soft radial highlights on top of Spline - they don't block interaction */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
            </div>

            {/* Info badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl p-4 shadow-md ring-1 ring-green-100 hidden sm:block">
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

      {/* Decorative wave divider to transition cleanly into the next section */}
      <div aria-hidden className="pointer-events-none w-full">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="block w-full h-[80px] sm:h-[100px]">
          <path d="M0,64 L60,58.7 C120,53,240,43,360,53.3 C480,64,600,96,720,101.3 C840,107,960,85,1080,74.7 C1200,64,1320,64,1380,64 L1440,64 L1440,120 L0,120 Z" fill="#ffffff" fillOpacity="1" />
        </svg>
      </div>
    </section>
  );
}
