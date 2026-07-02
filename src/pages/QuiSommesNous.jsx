import { useEffect } from "react";

import { usePageContents } from "../hooks/usePageContents";
import { useBios } from "../hooks/useBios";


// import { bio } from "../data/Bio";
import "../styles/QuiSommesNous.css";
import PortraitCard from "../components/QuiSommesNous/PortraitCard";
// import portrait from "../assets/images/portrait/bob-et-tom.png";

export default function QuiSommesNous() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
    "Canopées | Qui sommes-nous ? | Création et entretien d’espaces verts à Montauban";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Découvrez l’histoire de Canopées, entreprise fondée par deux passionnés de nature. Une approche durable pour des espaces verts vivants et harmonieux.",
      );
    }
  }, []);
  

  const backUrl = import.meta.env.VITE_BACK_URL;

  const { getContent, loading, error } = usePageContents("qui-sommes-nous");

  const {
    bios,
    loading: biosLoading,
    error: biosError,
        } = useBios();

  const companyBio = bios.find((bio) => bio.name === "Canopées");
  const teamBios = bios.filter((bio) => bio.name !== "Canopées");
  
  
  if (loading || biosLoading) {
    return <p>Chargement de la page...</p>;
  }

  if (error || biosError) {
    return <p>Impossible de charger les contenus de la page.</p>;
  }

  return (
    <section className="pt-4" id="qui-sommes-nous">
      <h1>{getContent("societe")?.title}</h1>

      <div className="presentation">
        <div className="presentation-image col-12 col-md-6 mb-4 mb-lg-0">
          <img src={`${backUrl}${companyBio?.imageUrl}`} alt="portrait de Bob et Tom"></img>
        </div>
        <div className="presentation-texte"
              dangerouslySetInnerHTML={{
                __html: companyBio?.description,
              }}
        />
      </div>

      <h2>{getContent("equipe")?.title}</h2>
      <div className="portraits row g-4 pb-5">
        {teamBios.map((element) => (
          <div className="col-12 col-lg-6" key={element.id}>
            <PortraitCard bio={element} />
          </div>
        ))}
      </div>
    </section>
  );
}
