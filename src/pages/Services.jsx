import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Nos solutions digitales
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
