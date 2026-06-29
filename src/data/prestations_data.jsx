import prestation1 from "../assets/images/prestations/img_prestation_01.png"
import prestation2 from "../assets/images/prestations/img_prestation_02.png"
import prestation3 from "../assets/images/prestations/img_prestation_03.png"
import prestation4 from "../assets/images/prestations/img_prestation_04.png"
import prestation5 from "../assets/images/prestations/img_prestation_05.png"

import { galeries } from "./galeries"

export const prestations = [
    {
      id: 1,
      titre: "Conception et réalisation d’espace verts",
      image: prestation1,
      texte: [
        <p key="1">La conception et la réalisation d’espaces verts consistent à imaginer et créer des <strong>aménagements extérieurs harmonieux</strong>, en tenant compte des contraintes du terrain, du climat et des attentes du client. Chaque projet est pensé comme un ensemble cohérent, où végétaux, matériaux et volumes s’équilibrent pour créer un <strong>lieu esthétique, fonctionnel et durable.</strong></p>,
        <p key="2">De l’étude initiale à la mise en œuvre, chaque étape est réalisée avec soin : choix des plantations, création des massifs, installation des éléments paysagers et structuration des espaces. L’objectif est de concevoir un environnement vivant, agréable à parcourir et évolutif dans le temps, en respectant <strong>les équilibres naturels et la biodiversité</strong>.</p>
      ],
      couleur:"vert",
      galerie: galeries["conception"]
    },
    {
      id: 2,
      titre: "Entretien des espaces verts",
      image: prestation2,
      texte: [
        <p key="1">L’entretien des espaces verts permet de préserver la qualité, l’esthétique et la santé des aménagements paysagers au fil des saisons. Il comprend des interventions régulières telles que la tonte, la taille des haies, le désherbage ou encore le soin apporté aux plantations. Chaque action est réalisée en tenant compte des spécificités du lieu et du rythme naturel des végétaux.</p>,
        <p key="2">Au-delà de l’aspect visuel, un entretien adapté favorise la durabilité des aménagements et le développement d’un environnement équilibré. Grâce à un suivi rigoureux et des techniques respectueuses du vivant, les espaces verts restent harmonieux, fonctionnels et agréables à vivre tout au long de l’année.</p>
      ],
      couleur: "rose",
      galerie: galeries["entretien"]
    },
    {
      id: 3,
      titre: "Taille des haies",
      image: prestation3,
      texte: [
        <p key="1">La taille des haies est essentielle pour maintenir des espaces extérieurs soignés, structurés et harmonieux. Elle permet de contrôler la croissance des végétaux, de conserver des formes nettes et d’assurer une séparation esthétique entre les différents espaces. Chaque intervention est adaptée aux essences présentes et réalisée au bon moment afin de respecter leur cycle de développement.</p>,
        <p key="2">Au-delà de l’aspect visuel, une taille régulière favorise la densité et la bonne santé des haies. En supprimant les branches abîmées ou déséquilibrées, elle stimule la repousse et renforce la vitalité des végétaux. Réalisée avec précision, cette prestation garantit des haies durables, équilibrées et parfaitement intégrées à leur environnement.</p>
      ],
      couleur: "orange",
      galerie: galeries["taille"]
    },
    {
      id: 4,
      titre: "Élagage et abattage d’arbres",
      image: prestation4,
      texte: [
        <p key="1">L’élagage et l’abattage d’arbres sont des interventions techniques visant à assurer la sécurité, la santé et la longévité des végétaux. L’élagage consiste à tailler les branches afin de maîtriser le développement de l’arbre, améliorer sa structure et limiter les risques de chute. Chaque intervention est réalisée avec précision, en respectant les caractéristiques de l’essence et son environnement.</p>,
        <p key="2">Lorsque l’arbre présente un danger ou ne peut être conservé, l’abattage devient nécessaire. Cette opération délicate est menée dans le respect des normes de sécurité et des contraintes du terrain, notamment en milieu urbain ou difficile d’accès. L’objectif est d’intervenir de manière contrôlée et responsable, tout en préservant au maximum l’équilibre des espaces environnants.</p>
      ],
      couleur: "mauve",
      galerie: galeries["elagage"]
    },
    {
      id: 5,
      titre: "Valorisation des déchets verts",
      image: prestation5,
      texte: [
        <p key="1">La valorisation des déchets verts consiste à transformer les résidus issus de l’entretien des espaces extérieurs en ressources utiles. Branches, feuilles, tontes ou tailles sont récupérées puis traitées afin d’être réutilisées, notamment sous forme de compost ou de paillage. Cette approche permet de limiter les déchets tout en favorisant un cycle naturel et durable.</p>,
        <p key="2">En réintégrant ces matières organiques dans le sol, la valorisation contribue à enrichir la terre, à préserver l’humidité et à améliorer la qualité des plantations. Elle s’inscrit dans une démarche respectueuse de l’environnement, visant à réduire l’impact des interventions tout en soutenant la biodiversité et la vitalité des espaces verts.</p>
      ],
      couleur: "vert",
      galerie: galeries["dechets"]
    },
  ]