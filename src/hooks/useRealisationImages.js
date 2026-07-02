import { useEffect, useState } from "react";

export function useRealisationImages() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [realisationImages, setRealisationImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/realisation_images`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des réalisations");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        setRealisationImages(items);
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
    realisationImages,
    loading,
    error,
  };
}