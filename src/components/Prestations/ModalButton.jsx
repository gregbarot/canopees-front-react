import { useState } from "react";
import { createPortal } from "react-dom";
import ModalPrestation from "./ModalPrestation";
import "./ModalButton.css";

export default function ModalButton({ prestation, images }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="prestation-button">
        Découvrir la prestation en images.
      </button>
      {showModal &&
        createPortal(
          <ModalPrestation
            closeModal={() => setShowModal(false)}
            prestation={prestation}
            images={images}
          />,
          document.body,
        )}
    </>
  );
}
