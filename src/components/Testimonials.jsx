import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-soft py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ils nous font confiance
        </h2>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

              <p className="text-gray-700 italic mb-6">
                “{t.quote}”
              </p>

              <div className="font-semibold">
                {t.name}
              </div>
              <div className="text-sm text-gray-500">
                {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
