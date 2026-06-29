import { useEffect } from "react";

import { bio } from "../data/Bio";
import "../styles/QuiSommesNous.css";
import PortraitCard from "../components/QuiSommesNous/PortraitCard";
import portrait from "../assets/images/portrait/bob-et-tom.png";

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

  return (
    <section className="pt-4" id="qui-sommes-nous">
      <h1>Qui Sommes Nous?</h1>

      <div className="presentation">
        <div className="presentation-image col-12 col-md-6 mb-4 mb-lg-0">
          <img src={portrait} alt="portrait de Bob et Tom"></img>
        </div>
        <div className="presentation-texte">
          <p>
            La société <strong>Canopées</strong> est née en 2020 de la rencontre
            entre deux passionnés de nature, Bob et Tom. Amis de longue date,
            ils partageaient une conviction forte : les espaces verts ne sont
            pas seulement des éléments décoratifs, mais de véritables lieux de
            vie, essentiels au bien-être et à l’équilibre des environnements
            urbains et ruraux.
          </p>
          <p>
            Animés par cette vision, ils ont décidé de créer une entreprise
            capable d’accompagner particuliers, professionnels et collectivités
            territoriales dans la conception, la création et l’entretien de
            leurs espaces extérieurs. Dès ses débuts, <strong>Canopées</strong>{" "}
            s’est distinguée par une approche à la fois technique et sensible,
            mêlant savoir-faire paysager et respect profond du vivant.
          </p>
          <p>
            Au fil des projets, la société a développé une expertise complète
            couvrant l’ensemble des besoins liés aux espaces verts. De la
            conception sur mesure de jardins et d’aménagements paysagers à leur
            réalisation concrète, <strong>Canopées</strong> s’engage à créer des
            espaces harmonieux, durables et adaptés à chaque client. L’entretien
            régulier des espaces verts constitue également un pilier de son
            activité, garantissant la pérennité et la qualité des aménagements
            réalisés.
          </p>
          <p>
            L’entreprise intervient aussi dans des opérations plus techniques
            telles que la taille des haies, l’élagage ou encore l’abattage
            d’arbres, toujours dans le respect des règles de sécurité et de
            l’équilibre écologique. Chaque intervention est pensée pour
            préserver la santé des végétaux et favoriser la biodiversité.
          </p>
          <p>
            Fidèle à ses valeurs fondatrices, <strong>Canopées</strong> a
            intégré très tôt une démarche écoresponsable dans son
            fonctionnement. La valorisation des déchets verts, notamment par le
            compostage, s’inscrit au cœur de sa charte graphique et de son
            identité. Cette approche permet de limiter l’impact environnemental
            de ses activités tout en participant à un cycle vertueux de
            réutilisation des matières organiques.
          </p>
          <p>
            Aujourd’hui, <strong>Canopées</strong> incarne une entreprise
            engagée, qui place la nature au centre de ses préoccupations et qui
            œuvre chaque jour pour créer des espaces verts durables, vivants et
            porteurs de sens.
          </p>
        </div>
      </div>

      <h2>L'équipe</h2>
      <div className="portraits row g-4 pb-5">
        {bio.map((element) => (
          <div className="col-12 col-lg-6" key={element.id}>
            <PortraitCard bio={element} />
          </div>
        ))}
      </div>
    </section>
  );
}
