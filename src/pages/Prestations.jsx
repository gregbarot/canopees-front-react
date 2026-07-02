import { useEffect } from "react";
import { usePageContents } from "../hooks/usePageContents";
import { useServices } from "../hooks/useServices";
import "../styles/Prestations.css";
import PrestationCard from "../components/Prestations/PrestationCard";


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


  const { getContent, loading, error } = usePageContents("prestations");

  const {
    services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();


   if (loading || servicesLoading) {
    return <p>Chargement de la page...</p>;
  }

  if (error || servicesError) {
    return <p>Impossible de charger les prestations.</p>;
  }


  return (
    <section className="pt-4" id="prestations">
      <h1>{getContent("introduction")?.title}</h1>
      <div className="prestation-card-container">
        {services.map((service) => (
          <PrestationCard key={service.id} prestation={service} />
        ))}
      </div>
    </section>
  );
}
