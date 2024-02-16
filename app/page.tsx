import { services } from "~/data/data";
import ServiceCard from "~/src/components/Projects/components/ServiceCard";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-center my-8 text-3xl py-5 from-stone-950 italic">
        Solution informatique complète pour les artisans
      </h1>
      <h4 className="p-5 mx-8">
        Système informatique sur mesure pour les artisans connectés, interactif
        et interconnecté, alliant application mobile et web, ainsi qu'un
        logiciel de gestion intégré et sécurisé.
      </h4>
      <div className="flex flex-wrap justify-around my-14">
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </div>
  );
}
