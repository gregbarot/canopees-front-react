import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import Description from "../components/Accueil/Description";
import Clients from "../components/Accueil/Clients";
import Realisations from "../components/Accueil/Realisations";
import "../styles/Accueil.css";

export default function Accueil() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | Création et entretien d’espaces verts à Montauban";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Canopées conçoit, aménage et entretient vos espaces verts à Montauban. Jardins, élagage, abattage et solutions durables pour particuliers et professionnels.",
      );
    }
  }, []);

  return (
    <>
      <section id="hero-slider">
        {/* Contenu par dessus le slider */}
        <div className="slider-content col-8 col-lg-6">
          <p className="surtitle">Création et entretien d'espaces verts</p>

          <Link to="/prestations" className="slider-button">
            Découvrez nos prestations
          </Link>
        </div>

        {/* Le slider */}
        <Slider />
      </section>

      <Description />

      <Clients />

      <Realisations />
    </>
  );
}
