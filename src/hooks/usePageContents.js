//Hook perso pour l'appel des pageContents de l'api

import { useEffect, useState } from "react";

export function usePageContents(pageName) {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pageName) {
      return;
    }

    setLoading(true);

    fetch(`${apiUrl}/page_contents`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des contenus de page");
        }

        return response.json();
      })
      .then((data) => {
        const items = data.member || data["hydra:member"] || [];

        const pageContents = items.filter(
          (item) => item.page === pageName
        );

        setContents(pageContents);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl, pageName]);

  const getContent = (section) => {
    return contents.find((content) => content.section === section);
  };

  return {
    contents,
    getContent,
    loading,
    error,
  };
}