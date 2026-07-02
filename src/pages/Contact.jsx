import { useEffect } from "react";

import { usePageContents } from "../hooks/usePageContents";
import { useBios } from "../hooks/useBios";

import Formulaire from "../components/Contact/Formulaire";
import "../styles/Contact.css";
// import contactImage from "../assets/images/portrait/bob-et-tom.png";
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


  const backUrl = import.meta.env.VITE_BACK_URL;

  const { getContent, loading, error } = usePageContents("contact");
  const pageContent = getContent("introduction");
  const infosContent = getContent("infos");
  const scheduleContent = getContent("horaires");
  const {
    bios,
    loading: biosLoading,
    error: biosError,
        } = useBios();

  const company = bios.find((bio) => bio.name === "Canopées");

  return (
    <section className="py-4" id="contact">
      <h1>{pageContent?.title}</h1>

      <div className="row flex-md-row-reverse">
        <div className="contact-form col-12 col-md-7">
          {/* Le formulaire */}
          <Formulaire />
        </div>

        <aside className="contact-infos col-12 col-md-5 pe-4">
          {/* Zone infos */}
          <div className="contact-info-content">
            <div className="portrait d-none d-md-flex flex-column align-items-center">
              <img
                src={`${backUrl}${company?.imageUrl}`}
                alt="Portrait de Bob et Tom"
              />
              <h2>{infosContent?.title}</h2>
              <span>{infosContent?.subtitle}</span>
              <p
                dangerouslySetInnerHTML={{ __html: infosContent?.textContent }}
              />

            </div>

            <div className="contact-details d-flex flex-column">
              <div className="horaires d-flex flex-column align-items-start mt-5">
                <h2>{scheduleContent?.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: scheduleContent?.textContent }}
                />
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
