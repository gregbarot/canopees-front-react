import { useEffect } from "react";

import "../styles/Prestations.css";
import PrestationCard from "../components/Prestations/PrestationCard";

import { prestations } from "../data/prestations_data";

export default function Prestations() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | Prestations | Création et entretien d’espaces verts à Montauban";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Découvrez les prestations de Canopées : conception de jardins, entretien, taille de haies, élagage et abattage d’arbres dans le respect de l’environnement.",
      );
    }
  }, []);

  return (
    <section className="pt-4" id="prestations">
      <h1>Nos prestations.</h1>
      <div className="prestation-card-container">
        {prestations.map((element) => (
          <PrestationCard key={element.id} prestation={element} />
        ))}
      </div>
    </section>
  );
}
