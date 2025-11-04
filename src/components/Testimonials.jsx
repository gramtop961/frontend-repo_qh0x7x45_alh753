import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Homeowner",
    quote:
      "They turned our dull backyard into a sanctuary. The native plants are thriving and we’re using less water than ever.",
  },
  {
    name: "James Patel",
    role: "Property Manager",
    quote:
      "Professional, punctual, and creative. Their maintenance plan keeps our grounds pristine year-round.",
  },
  {
    name: "Sofia Alvarez",
    role: "Restaurant Owner",
    quote:
      "The patio garden transformed our guest experience. We constantly get compliments on the ambiance.",
  },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-green-50/50 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-green-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center"
        >
          Loved by Our Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto text-center"
        >
          Real stories from homeowners and businesses who chose sustainable, beautiful landscapes.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-green-100"
            >
              <div className="flex items-center gap-1 text-green-600">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-green-600 text-green-600" />
                ))}
              </div>
              <blockquote className="mt-3 text-gray-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
