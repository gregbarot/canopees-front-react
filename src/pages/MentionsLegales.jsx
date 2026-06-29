import { useEffect } from "react";

export default function MentionsLegales() {
  // Titre et Description de ma page.
  useEffect(() => {
    document.title =
      "Canopées | Mentions Légales | Création et entretien d’espaces verts à Montauban";

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
      <h1>Mentions légales</h1>

      <h2>1. Éditeur du site</h2>
      <p>
        <strong>Canopées</strong> <br />
        Société spécialisée dans la conception et l’entretien d’espaces verts
        <br />
        Adresse : 820 Boulevard des Capucines, 82000 Montauban, France
        <br />
        Email : contact@canopees.com
      </p>

      <h2>2. Hébergement</h2>
      <p>IONOS</p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu du site (textes, images, graphismes, logo, vidéos,
        icônes, etc.) est la propriété exclusive de Canopées, sauf mention
        contraire. Toute reproduction, distribution, modification ou utilisation
        de ces éléments, sans autorisation préalable écrite, est strictement
        interdite.
      </p>

      <h2>4. Données personnelles</h2>
      <p>
        Conformément au RGPD, vous disposez d’un droit d’accès, modification et
        suppression.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Le site peut utiliser des cookies pour améliorer l’expérience
        utilisateur.
      </p>

      <h2>6. Responsabilité</h2>
      <p>Les informations sont fournies à titre indicatif.</p>

      <h2>7. Droit applicable</h2>
      <p>Droit français.</p>
    </section>
  );
}
