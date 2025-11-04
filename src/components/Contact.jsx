import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get a Free Quote</h2>
            <p className="mt-3 text-gray-600">
              Tell us about your space and goals. We’ll respond within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-100 text-green-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">(555) 012-3456</p>
                  <p className="text-sm text-gray-600">Mon–Sat, 8am–6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-100 text-green-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">hello@greenfortlandscape.com</p>
                  <p className="text-sm text-gray-600">We reply quickly</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-100 text-green-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Serving Greater Metro Area</p>
                  <p className="text-sm text-gray-600">On-site consultations available</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-green-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="rounded-md border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 px-3 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-md border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 px-3 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label className="text-sm font-medium mb-1">Project Address</label>
                <input
                  type="text"
                  placeholder="Street, City"
                  className="rounded-md border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 px-3 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label className="text-sm font-medium mb-1">What can we help you with?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project goals, timeline, budget..."
                  className="rounded-md border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 px-3 py-2 outline-none"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-gray-500">This form is for demo purposes.</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Send Request
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              By submitting, you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GREENFORT LANDSCAPE. All rights reserved.</p>
          <p className="text-gray-500">Crafted with care for greener spaces.</p>
        </div>
      </footer>
    </section>
  );
}
