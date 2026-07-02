import { useEffect, useState } from "react";

export function useServices() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/services`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des prestations");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        setServices(items);
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
    services,
    loading,
    error,
  };
}