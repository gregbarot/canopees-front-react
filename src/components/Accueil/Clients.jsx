import ClientCard from "./ClientCard";

import { useTargetAudiences } from "../../hooks/useTargetAudiences"


export default function Clients({ content }) {
  const backUrl = import.meta.env.VITE_BACK_URL;

  const { targetAudiences, loading, error } = useTargetAudiences();

  if (!content) {
    return null;
  }

  return (
    <section className="pt-4 d-flex justify-content-center" id="clients">
      <div className="clients-section-container container">
        <h2>{content.title}</h2>
        <div className="card-container row justify-content-center gap-4">
          {targetAudiences.map((targetAudience) => (
            <ClientCard 
              key={targetAudience.id}
              titre={targetAudience.name}
              image={`${backUrl}${targetAudience.imageUrl}`}
              texte={targetAudience.description}


            />
          ))}
        </div>
      </div>
    </section>
  );
}
