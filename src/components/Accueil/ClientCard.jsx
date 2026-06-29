import "./ClientCard.css";

export default function ClientCard({ titre, image, texte }) {
  return (
    <div className="col-12 col-lg-3 mb-4 mx-1 justify-content-center">
      <div className={`client-card p-4 h-100 couleur${titre}`}>
        <p className="card-title mb-3">{titre}</p>

        <div className="card-divider"></div>

        <div className="client-image mb-3">
          <img src={image} alt={titre} />
        </div>

        <p className="description">{texte}</p>
      </div>
    </div>
  );
}
