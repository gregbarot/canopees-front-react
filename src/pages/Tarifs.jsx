import { useEffect } from "react";

import { usePageContents } from "../hooks/usePageContents";
import { useServices } from "../hooks/useServices";

import { Link } from "react-router-dom";
import "../styles/Tarifs.css";

export default function Tarifs() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | Tarifs | Création et entretien d’espaces verts à Montauban";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Consultez les tarifs de Canopées pour la création et l’entretien d’espaces verts. Devis personnalisé pour particuliers, entreprises et collectivités.",
      );
    }
  }, []);

  const { getContent, loading, error } = usePageContents("tarifs");
  const content = getContent("introduction")

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
    <section className="pt-4" id="tarifs">
      <h1>{content?.title}</h1>

      <section className="tarifs-intro"
        dangerouslySetInnerHTML={{ __html: content.textContent }}
      />

      <section className="tarifs-section">
        <div className="tarifs-container d-flex flex-column align-items-center mb-5">
          <table className="tarifs-table mb-5">
            <thead>
              <tr>
                <th>Type de Prestation</th>
                <th>Tarifs</th>
              </tr>
            </thead>

            <tbody>
                {/* on cree une boucle pour avoir les tarifs automatiquement */}
               {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.priceText}</td>
                </tr>
              ))}
              {/* <tr>
                <td>Entretien des espaces verts</td>
                <td>À partir de 35€ / h</td>
              </tr>
              <tr>
                <td>Conception et réalisation d’espace vert</td>
                <td>Sur devis</td>
              </tr>
              <tr>
                <td>Taille de haies</td>
                <td>À partir de 45€ / h</td>
              </tr>
              <tr>
                <td>Élagage et abattage d’arbres</td>
                <td>Sur devis</td>
              </tr> */}
            </tbody>
          </table>

          <Link to="/contact" className="tarifs-button">
            Demander un devis
          </Link>
        </div>
      </section>
    </section>
  );
}
