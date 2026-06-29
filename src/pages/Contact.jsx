import { useEffect } from "react";

import Formulaire from "../components/Contact/Formulaire";
import "../styles/Contact.css";
import contactImage from "../assets/images/portrait/bob-et-tom.png";
import maps from "../assets/images/maps-canopees.png";

export default function Contact() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | Contact - Devis | Création et entretien d’espaces verts à Montauban";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
         "Contactez Canopées à Montauban pour vos projets d’espaces verts. Demandez un devis pour l’aménagement, l’entretien ou l’élagage de vos extérieurs.",
      );
    }
  }, []);

  return (
    <section className="py-4" id="contact">
      <h1>Contact</h1>

      <div className="row flex-md-row-reverse">
        <div className="contact-form col-12 col-md-7">
          {/* Le formulaire */}
          <Formulaire />
        </div>

        <aside className="contact-infos col-12 col-md-5 pe-4">
          {/* Zone infos */}
          <div className="contact-info-content">
            <div className="portrait d-none d-md-flex flex-column align-items-center">
              <img src={contactImage} alt="Portrait de Bob et Tom" />
              <h2>Bob et Tom</h2>
              <span>Gérants de Canopées</span>
              <p>
                Une question, un besoin d’entretien ou un projet d’aménagement ?
                L’équipe Canopées vous accompagne avec écoute et savoir-faire.
              </p>
            </div>

            <div className="contact-details d-flex flex-column">
              <div className="horaires d-flex flex-column align-items-start mt-5">
                <h2>Horaires</h2>
                <p>
                  <strong>Lundi au Vendredi</strong>
                </p>
                <p>8h30 - 12h00 / 13h30 - 17h30</p>
                <p>
                  <strong>Samedi -Dimanche :</strong> fermé
                </p>
              </div>

              <div className="localisation d-flex flex-column mt-5">
                <img
                  src={maps}
                  alt="plan de l'adresse de Canopées"
                  className="order-2 order-md-1"
                />
                <div className="adresse d-flex flex-column align-items-center order-1 order-md-2">
                  <h3>Canopées</h3>
                  <p>820 Boulevard des Capucines</p>
                  <p>82000 Montauban</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
