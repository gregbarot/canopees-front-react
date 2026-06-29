import { useEffect } from "react";

export default function CGV() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | CGV | Création et entretien d’espaces verts à Montauban";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Canopées conçoit, aménage et entretient vos espaces verts à Montauban. Jardins, élagage, abattage et solutions durables pour particuliers et professionnels.",
      );
    }
  }, []);

  return (
    <section className="pt-4">
      <h1>Conditions Générales de Vente</h1>

      <h2>1. Objet</h2>
      <p>Les présentes CGV encadrent les prestations de Canopées.</p>

      <h2>2. Prestations</h2>
      <p>Aménagement, entretien, élagage.</p>

      <h2>3. Devis</h2>
      <p>Le devis signé vaut acceptation.</p>

      <h2>4. Prix</h2>
      <p>Prix en euros, ajustables selon les conditions.</p>

      <h2>5. Paiement</h2>
      <p>Acompte puis solde à la fin.</p>

      <h2>6. Délais</h2>
      <p>Indicatifs, dépendants des conditions.</p>

      <h2>7. Client</h2>
      <p>Doit garantir l’accès et la sécurité.</p>

      <h2>8. Responsabilité</h2>
      <p>Obligation de moyens.</p>

      <h2>9. Rétractation</h2>
      <p>14 jours pour les particuliers.</p>

      <h2>10. Litiges</h2>
      <p>Droit français.</p>
    </section>
  );
}
