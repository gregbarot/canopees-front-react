import { useEffect, useState } from "react";

export function useServiceImages(serviceId) {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [serviceImages, setServiceImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceId) {
      return;
    }

    setLoading(true);

    fetch(`${apiUrl}/service_images`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des images de prestation");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        const imagesForService = items.filter((image) => {
          if (typeof image.service === "string") {
            return Number(image.service.split("/").pop()) === serviceId;
          }

          return image.service?.id === serviceId;
        });

        setServiceImages(imagesForService);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl, serviceId]);

  return {
    serviceImages,
    loading,
    error,
  };
}