import { useEffect } from "react";

export default function CGU() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | CGU | Création et entretien d’espaces verts à Montauban";

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
      <h1>Conditions Générales d’Utilisation</h1>

      <h2>1. Objet</h2>
      <p>L’utilisation du site implique l’acceptation des présentes CGU.</p>

      <h2>2. Accès au site</h2>
      <p>Le site est accessible gratuitement.</p>

      <h2>3. Services</h2>
      <p>Présentation des prestations de Canopées.</p>

      <h2>4. Responsabilité</h2>
      <p>Les informations sont fournies à titre indicatif.</p>

      <h2>5. Utilisateur</h2>
      <p>L’utilisateur s’engage à un usage conforme.</p>

      <h2>6. Propriété intellectuelle</h2>
      <p>Contenus protégés.</p>

      <h2>7. Données personnelles</h2>
      <p>Droits RGPD applicables.</p>

      <h2>8. Liens externes</h2>
      <p>Responsabilité limitée.</p>

      <h2>9. Modification</h2>
      <p>CGU modifiables à tout moment.</p>

      <h2>10. Droit applicable</h2>
      <p>Droit français.</p>
    </section>
  );
}
