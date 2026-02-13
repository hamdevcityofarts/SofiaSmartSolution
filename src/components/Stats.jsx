import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Années d’expérience" },
  { value: "150+", label: "Clients accompagnés" },
  { value: "3", label: "Pôles digitaux" },
  { value: "100%", label: "Engagement qualité" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-bold text-accent">{stat.value}</p>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
