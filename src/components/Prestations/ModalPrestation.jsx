import { useState } from "react";
import "./ModalPrestation.css";
import close from "../../assets/icons/close.svg";

export default function ModalPrestation({ closeModal, prestation }) {
  const [imageActive, setImageActive] = useState(0);

  const imagePrincipale = prestation.galerie[imageActive];
  const vignette = prestation.galerie;

  return (
    <div
      className="prestation-modal d-flex justify-content-center align-items-center"
      onClick={closeModal}
    >
      <div
        className="prestation-modal-container justify-content-center align-items-center d-flex flex-column"
        onClick={(e) => e.stopPropagation()}
        // e.stopPropagation pour ne pas que le clic s'active sur la modale
      >
        {/* Container */}
        <div className="modal-content-container d-flex flex-column">
          {/* Bouton close */}
          <button
            onClick={closeModal}
            className="btn-modal-close align-self-end"
            aria-label="Fermer la fenêtre"
          >
            <img className="close-icon" src={close} alt="" />
          </button>
          {/* Image principale */}
          <div className="image-principale-container d-flex">
            <img src={imagePrincipale.src} alt={imagePrincipale.alt} />
          </div>
          {/* Separateur */}
          <div
            className={`modal-divider divider-${prestation.couleur} align-self-center`}
          ></div>
          {/* Vignettes */}
          <div className="modal-gallery row">
            {vignette.map((image, index) => (
              <div className="col-6 col-md-3 my-2" key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`vignette ${imageActive === index ? "active" : ""}`}
                  onClick={() => setImageActive(index)}
                />
              </div>
            ))}
          </div>
          {/* titre */}
          <h2 className="mt-2">{prestation.titre}</h2>
        </div>
      </div>
    </div>
  );
}
