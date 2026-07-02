import { useEffect, useState } from "react";

export function useTargetAudiences() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [targetAudiences, setTargetAudiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/target_audiences`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des publics cibles");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        setTargetAudiences(items);
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
    targetAudiences,
    loading,
    error,
  };
}