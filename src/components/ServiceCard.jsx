import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../animations/fade";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  // 🔑 LOGIQUE CLÉ
  const target = service.link || `/services/${service.id}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow
                 hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <Icon className="w-10 h-10 text-accent mb-6" />

      <h3 className="text-xl font-semibold mb-2">
        {service.title}
      </h3>

      <p className="text-sm text-gray-500 mb-6">
        {service.tagline}
      </p>

      <ul className="space-y-3 mb-8">
        {service.features.slice(0, 3).map((feature, i) => {
          const FeatureIcon = feature.icon;
          return (
            <li key={i} className="flex gap-3 text-sm text-gray-600">
              <FeatureIcon className="w-5 h-5 text-accent" />
              <span>{feature.text}</span>
            </li>
          );
        })}
      </ul>

      <Link
        to={target}
        className="font-semibold text-accent inline-flex items-center gap-2
                   hover:gap-3 transition-all"
      >
        Découvrir le service →
      </Link>
    </motion.div>
  );
}
