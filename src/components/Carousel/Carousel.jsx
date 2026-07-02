import { useState } from "react";
import "./Carousel.css";

//j'appelle mon api via mon hook perso
import { useRealisationImages } from "../../hooks/useRealisationImages";

export default function Carousel() {
  const backUrl = import.meta.env.VITE_BACK_URL;
  const { realisationImages, loading, error } = useRealisationImages();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) {
    return <p>Chargement des réalisations...</p>;
  }

  if (error) {
    return <p>Impossible de charger les réalisations.</p>;
  }

  if (realisationImages.length === 0) {
    return null;
  }

  // on cree une fonction qui retournera un tableau des 3 images qui seront affichées à partir de notre liste d'images contenues dans realisations

  const getVisibleImages = () => {
    const previousIndex =
      currentIndex === 0 ? realisationImages.length - 1 : currentIndex - 1;

    const nextIndex =
      currentIndex === realisationImages.length - 1 ? 0 : currentIndex + 1;

    return [
      {
        ...realisationImages[previousIndex],
        className: "side-image",
        index: previousIndex,
      },
      {
        ...realisationImages[currentIndex],
        className: "center-image",
        index: currentIndex,
      },
      { ...realisationImages[nextIndex], className: "side-image", index: nextIndex },
    ];
  };

  // Création des fonctions pour changer d'image en cliquant sur une zone de l'image centrale
  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? realisationImages.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === realisationImages.length - 1 ? 0 : prevIndex + 1,
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
            <img 
              src={`${backUrl}${realisation.imageUrl}`}
              alt={realisation.altText}
            />

            {/* creation d'une zone de clic sur l'image centrale car j'ai enlever le scroll y */}
            {realisation.className === "center-image" && (
              <div>
                <div
                  className="carousel-click-zone carousel-click-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(
                      currentIndex === 0
                        ? realisationImages.length - 1
                        : currentIndex - 1,
                    );
                  }}
                />

                <div
                  className="carousel-click-zone carousel-click-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(
                      currentIndex === realisationImages.length - 1
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
