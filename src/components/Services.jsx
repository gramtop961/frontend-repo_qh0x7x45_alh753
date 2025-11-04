import { Leaf, Ruler, Trees } from "lucide-react";

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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Professional Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Whether you need a one-time transformation or ongoing care, we bring craftsmanship and care to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="relative bg-white rounded-2xl p-6 shadow-sm ring-1 ring-green-100 hover:shadow-md transition"
            >
              <div className="inline-flex p-3 rounded-xl bg-green-100 text-green-700">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
