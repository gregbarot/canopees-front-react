import { useState, useEffect } from "react";
import "./Slider.css";

export default function Slider() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const backUrl = import.meta.env.VITE_BACK_URL;

  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);


  // Chargement des images du slider depuis l'API Symfony
  useEffect(() => {
    fetch(`${apiUrl}/slider_images`)
      .then((response) => response.json())
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        const activeSlides = items
          .filter((slide) => slide.active)
          .sort((a, b) => a.position - b.position);

        setSlides(activeSlides);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du slider :", error);
      });
  }, []);


  // Auto slide toutes les 3 secondes
  useEffect(() => {
    //si les slides ne sont pas encore chargées
    if (slides.length === 0){
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSlide, slides.length]);
    
  //si la première image est pas encore définie
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
