import "./PrestationCard.css";
import ModalButton from "./ModalButton";

export default function PrestationCard({ prestation }) {
  const isOdd = prestation.id % 2 !== 0;

  return (
    // mon container pour le fond
    <article className={`prestation-card ${isOdd ? "odd" : "even"} py-4 px-4`}>
      <div className="container">
        {/* mon conatainer pour l'ordre */}
        <div className={`row ${!isOdd ? "flex-lg-row-reverse" : ""} g-4`}>
          {/* ma div info */}
          <div className="prestation-info col-12 col-lg-7 d-flex">
            <div className="d-flex flex-column justify-content-start">
              <h2 className="text-lg-start">{prestation.titre}</h2>

              <div
                className={`prestation-divider divider-${prestation.couleur} align-self-center align-self-lg-start`}
              ></div>

              <div className="prestation-description">{prestation.texte}</div>

              <div className="d-none d-lg-flex mt-auto">
                <ModalButton prestation={prestation} />
              </div>
            </div>
          </div>
          {/* Ma div image */}
          <div className="prestation-img col-12 col-lg-5">
            <img
              src={prestation.image}
              alt={prestation.titre}
              className={`img-fluid border-${prestation.couleur}`}
            />
          </div>
          <div className="d-lg-none d-flex justify-content-center my-5">
            <ModalButton prestation={prestation} />
          </div>
        </div>
      </div>
    </article>
  );
}
