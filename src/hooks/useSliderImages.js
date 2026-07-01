import { useEffect, useState } from "react";

export function useSliderImages() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/slider_images`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des images du slider");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        const activeSlides = items
          .filter((slide) => slide.active)
          .sort((a, b) => a.position - b.position);

        setSlides(activeSlides);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  return {
    slides,
    loading,
    error,
  };
}