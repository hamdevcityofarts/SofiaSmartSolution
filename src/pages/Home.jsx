import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { services } from "../data/services";

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nos pôles de services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
