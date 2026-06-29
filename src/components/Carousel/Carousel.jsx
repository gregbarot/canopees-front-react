import { useState } from "react";
import "./Carousel.css";

import real_01 from "../../assets/images/realisations/img_realisations_01.png";
import real_02 from "../../assets/images/realisations/img_realisations_02.png";
import real_03 from "../../assets/images/realisations/img_realisations_03.png";
import real_04 from "../../assets/images/realisations/img_realisations_04.png";
import real_05 from "../../assets/images/realisations/img_realisations_05.png";

const realisations = [
  {
    id: 1,
    image: real_01,
    alt: "Réalisation d'aménagement de jardin",
  },
  {
    id: 2,
    image: real_02,
    alt: "Réalisation d'aménagement de jardin",
  },
  {
    id: 3,
    image: real_03,
    alt: "Réalisation d'aménagement de jardin",
  },
  {
    id: 4,
    image: real_04,
    alt: "Réalisation d'aménagement de jardin",
  },
  {
    id: 5,
    image: real_05,
    alt: "Réalisation d'aménagement de jardin",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // on cree une fonction qui retournera un tableau des 3 images qui seront affichées à partir de notre liste d'images contenues dans realisations

  const getVisibleImages = () => {
    const previousIndex =
      currentIndex === 0 ? realisations.length - 1 : currentIndex - 1;

    const nextIndex =
      currentIndex === realisations.length - 1 ? 0 : currentIndex + 1;

    return [
      {
        ...realisations[previousIndex],
        className: "side-image",
        index: previousIndex,
      },
      {
        ...realisations[currentIndex],
        className: "center-image",
        index: currentIndex,
      },
      { ...realisations[nextIndex], className: "side-image", index: nextIndex },
    ];
  };

  // Création des fonctions pour changer d'image en cliquant sur une zone de l'image centrale
  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? realisations.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === realisations.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="realisations-carousel d-flex justify-content-center gap-1">
      <div className="carousel-container d-flex align-items-center justify-content-center gap-1">
        {/* Je cree les div qui contiennent les images à afficher dans l'ordre que je veux et je cree une fonction de clic pour l'afficher au centre*/}
        {getVisibleImages().map((realisation) => (
          <div
            className={`carousel-image ${realisation.className}`}
            key={realisation.id}
            onClick={() => setCurrentIndex(realisation.index)}
          >
            <img src={realisation.image} alt={realisation.alt} />

            {/* creation d'une zone de clic sur l'image centrale car j'ai enlever le scroll y */}
            {realisation.className === "center-image" && (
              <div>
                <div
                  className="carousel-click-zone carousel-click-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(
                      currentIndex === 0
                        ? realisations.length - 1
                        : currentIndex - 1,
                    );
                  }}
                />

                <div
                  className="carousel-click-zone carousel-click-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(
                      currentIndex === realisations.length - 1
                        ? 0
                        : currentIndex + 1,
                    );
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
