import { Leaf, Ruler, Trees } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Trees,
    title: "Landscape Design",
    description:
      "Custom outdoor spaces tailored to your property and lifestyle — from concept to completion.",
    features: ["3D planning", "Native plant selection", "Hardscape integration"],
  },
  {
    icon: Leaf,
    title: "Garden Care",
    description:
      "Ongoing care to keep your garden vibrant all year — pruning, mulching, fertilizing and more.",
    features: ["Seasonal cleanups", "Soil health", "Pest-safe treatments"],
  },
  {
    icon: Ruler,
    title: "Lawn & Irrigation",
    description:
      "Healthy lawns and efficient watering systems designed to save water and money.",
    features: ["Turf installation", "Smart timers", "Drip irrigation"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Professional Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            Whether you need a one-time transformation or ongoing care, we bring craftsmanship and care to every project.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, features }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative bg-white rounded-2xl p-6 shadow-sm ring-1 ring-green-100 hover:shadow-lg transition group"
            >
              <div className="inline-flex p-3 rounded-xl bg-green-100 text-green-700 group-hover:scale-105 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
