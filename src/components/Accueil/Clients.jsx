import ClientCard from "./ClientCard";

import particuliersImg from "../../assets/images/clients/img_particuliers.png";
import professionnelsImg from "../../assets/images/clients/img_professionnels.png";
import collectivitesImg from "../../assets/images/clients/img_collectivites.png";

export default function Clients() {
  const clients = [
    {
      id: 1,
      titre: "Particuliers",
      image: particuliersImg,
      texte:
        "Nous créons et entretenons des jardins sur mesure, pensés pour votre confort, votre style de vie et votre environnement.",
    },
    {
      id: 2,
      titre: "Professionnels",
      image: professionnelsImg,
      texte:
        "Nous valorisons vos espaces extérieurs pour renforcer votre image, accueillir vos clients et améliorer le cadre de travail.",
    },
    {
      id: 3,
      titre: "Collectivités",
      image: collectivitesImg,
      texte:
        "Nous aménageons et entretenons des espaces publics durables, favorisant le bien-être des usagers et la biodiversité locale.",
    },
  ];

  return (
    <section className="pt-4 d-flex justify-content-center" id="clients">
      <div className="clients-section-container container">
        <h2>A qui s'adresse nos services ?</h2>
        <div className="card-container row justify-content-center gap-4">
          {clients.map((client) => (
            <ClientCard key={client.id} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
