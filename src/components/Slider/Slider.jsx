import { useState, useEffect } from "react";
import "./Slider.css";

// import des images du slider
import slide1 from "../../assets/images/slider/slide_01.png";
import slide2 from "../../assets/images/slider/slide_02.png";
import slide3 from "../../assets/images/slider/slide_03.png";
import slide4 from "../../assets/images/slider/slide_04.png";

const slides = [
  {
    id: 1,
    image: slide1,
    alt: "Jardin paysager",
  },
  {
    id: 2,
    image: slide2,
    alt: "Élagage d'arbre",
  },
  {
    id: 3,
    image: slide3,
    alt: "Entretien espace vert",
  },
  {
    id: 4,
    image: slide4,
    alt: "Aménagement extérieur",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="slider">
      {/* Image */}
      <img
        id={slides[currentSlide].id}
        src={slides[currentSlide].image}
        alt={slides[currentSlide].alt}
        className="slider-img"
      />

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
