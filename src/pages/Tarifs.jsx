import { useEffect } from "react";

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

  return (
    <section className="pt-4" id="tarifs">
      <h1>Tarifs de nos prestations.</h1>

      <section className="tarifs-intro">
        <p>
          Chaque espace vert possède ses <strong>propres besoins</strong>.
          Canopées propose des <strong>prestations adaptées</strong> aux
          particuliers, professionnels et collectivités, avec des tarifs pensés
          selon la nature de l’intervention.
        </p>
      </section>

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
              <tr>
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
              </tr>
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
