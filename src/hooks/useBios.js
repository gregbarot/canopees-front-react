import { useEffect, useState } from "react";

export function useBios() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [bios, setBios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/bios`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des biographies");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        setBios(items);
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
    bios,
    loading,
    error,
  };
}
