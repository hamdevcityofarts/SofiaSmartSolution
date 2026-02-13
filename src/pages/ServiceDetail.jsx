import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  // 🔐 Sécurité absolue
  if (!service) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Service introuvable
        </h1>
        <p className="text-gray-600 mb-8">
          Le service demandé n’existe pas ou a été déplacé.
        </p>
        <Link to="/services" className="text-accent font-semibold">
          ← Retour aux services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary to-dark text-white py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon className="w-14 h-14 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-lg opacity-90">
              {service.heroText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="container mx-auto px-6 py-24 max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Ce que nous proposons
        </h2>

        {/* FEATURES */}
        {Array.isArray(service.features) && (
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {service.features.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
                >
                  <FeatureIcon className="w-8 h-8 text-accent mb-4" />
                  <p className="text-gray-700 font-medium">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}

       {/* ACTIONS */}
      <div className="mt-20 space-y-10 text-center">

       {/* CTA PRINCIPAL — uniquement pour la librairie */}
       {service.id === "librairie" && (
       <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
       <h3 className="text-2xl font-bold mb-4">
        Accédez à notre librairie en ligne
       </h3>

      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Parcourez notre catalogue, découvrez nos ouvrages spécialisés
        et commandez-les directement en ligne.
      </p>

      <Link
        to="/shop"
        className="inline-flex items-center gap-3
                   bg-accent text-white px-12 py-5 rounded-xl
                   font-semibold text-lg
                   hover:scale-105 transition"
      >
        🛒 Accéder à la librairie en ligne
      </Link>
    </div>
  )}

  {/* CTA SECONDAIRE — commun à tous les services */}
  <div>
    <Link
      to="/contact"
      className="inline-block text-accent font-semibold
                 hover:underline"
    >
      Discuter de votre projet →
    </Link>
  </div>

     </div>

      </section>

      {/* TÉMOIGNAGES */}
      {Array.isArray(service.testimonials) && service.testimonials.length > 0 && (
        <Testimonials testimonials={service.testimonials} />
      )}
    </>
  );
}
