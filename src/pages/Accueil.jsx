import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import Description from "../components/Accueil/Description";
import Clients from "../components/Accueil/Clients";
import Realisations from "../components/Accueil/Realisations";
import "../styles/Accueil.css";

//mon hook perso apicall des pagecontents
import { usePageContents } from "../hooks/usePageContents";

export default function Accueil() {
//je récupere les contenus de la page accueil
  const { getContent, loading, error } = usePageContents("accueil");

//je recupere les contenus par section
  const sliderContent = getContent("slider");
  const descriptionContent = getContent("description");
  const clientsContent = getContent("clients");
  const realisationsContent = getContent("realisations");


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


    if (loading) {
    return <p>Chargement de la page...</p>;
  }

  if (error) {
    return <p>Impossible de charger les contenus de la page.</p>;
  }

  return (
    <>
      <section id="hero-slider">
        {/* Contenu par dessus le slider */}
        <div className="slider-content col-8 col-lg-6">
          <p className="surtitle">{sliderContent?.title}</p>

          <Link to="/prestations" className="slider-button">
            {sliderContent?.subtitle}
          </Link>
        </div>

        {/* Le slider */}
        <Slider />
      </section>

      <Description content={descriptionContent}/>

      <Clients content={clientsContent}/>

      <Realisations content={realisationsContent}/>
    </>
  );
}
