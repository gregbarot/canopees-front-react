import { useEffect, useState } from "react";

export function useCompanyInfos(){
    const apiUrl = import.meta.env.VITE_API_URL;

  const [companyInfos, setCompanyInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/company_infos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des informations de la société");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        setCompanyInfos(items);
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
    companyInfos,
    loading,
    error,
  };
}
