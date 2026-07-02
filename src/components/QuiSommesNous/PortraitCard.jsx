import "./PortraitCard.css";

export default function PortraitCard({ bio }) {
  const backUrl = import.meta.env.VITE_BACK_URL;

  return (
    <div className="portrait-card p-4">
      <div className="portrait-header pb-2">
        <div className="portrait-image">
          <img src={`${backUrl}${bio?.imageUrl}`} alt={`Portait de ${bio?.name}`} />
        </div>
        <div className="portrait-text">
          <h3>{bio?.name}</h3>
          <p>{bio?.role}</p>
        </div>
      </div>

      <div className="portrait-content">
        <div
          className="portrait-body"
          dangerouslySetInnerHTML={{
            __html: bio?.description,
          }}
        />
      </div>
    </div>
  );
}
