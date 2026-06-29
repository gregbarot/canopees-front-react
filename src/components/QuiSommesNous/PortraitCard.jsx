import "./PortraitCard.css";

export default function PortraitCard({ bio }) {
  return (
    <div className="portrait-card p-4">
      <div className="portrait-header pb-2">
        <div className="portrait-image">
          <img src={bio.image} alt={`Portait de ${bio.nom}`} />
        </div>
        <div className="portrait-text">
          <h3>{bio.nom}</h3>
          <p>{bio.role}</p>
        </div>
      </div>

      <div className="portrait-content">
        <div className="portrait-body">{bio.texte}</div>
      </div>
    </div>
  );
}
