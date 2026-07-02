import { useState, useEffect } from "react";
import "./Slider.css";

//j'appelle mon api via mon hook perso
import { useSliderImages } from "../../hooks/useSliderImages";

export default function Slider() {
  const backUrl = import.meta.env.VITE_BACK_URL;

  const { slides, loading, error } = useSliderImages();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    //si les slides ne sont pas encore chargées il ne se passe rien
    if (slides.length === 0){
      return;
    }

    //on change toutes les 3 secondes et on boucle quand on arrive a la fin avec le modulo
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSlide, slides.length]);
    
  //si la première image est pas encore définie ou s'il y a une erreur
 if (loading) {
    return <div className="slider-loading">Chargement du slider...</div>;
  }

  if (error) {
    return <div className="slider-error">Impossible de charger le slider.</div>;
  }

  if (slides.length === 0) {
    return null;
  }


  return (
    <section className="slider">
      {/* Image */}
      <img
        id={slides[currentSlide].id}
        src={`${backUrl}${slides[currentSlide].imageUrl}`}
        alt={slides[currentSlide].altText}
        className="slider-img"
      />

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => {setCurrentSlide(index)
              clearInterval(interval);}
            }
          ></span>
        ))}
      </div>
    </section>
  );
}
