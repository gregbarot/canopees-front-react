import { useState } from "react";
import Demande from "./Demande";
import Message from "./Message";
import Nom from "./Nom";
import Telephone from "./Telephone";
import Email from "./Email";
import Rgpd from "./Rgpd";
import "./Formulaire.css";

export default function Formulaire() {
  const [inputsStates, setInputsStates] = useState({
    demande: "",
    message: "",
    nom: "",
    telephone: "",
    email: "",
    rgpd: false,
  });

  const [showValidation, setShowValidation] = useState({
    demande: false,
    message: false,
    nom: false,
    telephone: false,
    email: false,
    rgpd: false,
  });

  // Ma fonction d'envoi du formulaire
  function handleSubmit(e) {
    e.preventDefault();

    if (validationCheck()) {
      alert(
        `Merci ${inputsStates.nom}.
Votre message a bien été envoyé.
✅🍀🌳`,
      );

      // RESET DU FORMULAIRE
      setInputsStates({
        demande: "",
        message: "",
        nom: "",
        telephone: "",
        email: "",
        rgpd: false,
      });

      setShowValidation({
        demande: false,
        message: false,
        nom: false,
        telephone: false,
        email: false,
        rgpd: false,
      });
    }
  }
  // Ma fonction de validation - je cree un objet avec chaque input qui sera valide ou non.
  function validationCheck() {
    const areValid = {
      demande: false,
      message: false,
      nom: false,
      telephone: false,
      email: false,
      rgpd: false,
    };

    // Je cree les conditions pour faire passer l'input en true ou en false

    // Selection de la demande
    if (inputsStates.demande === "") {
      setShowValidation((state) => ({ ...state, demande: true }));
    } else {
      areValid.demande = true;
      setShowValidation((state) => ({ ...state, demande: false }));
    }
    //La longueur du message
    if (inputsStates.message.length < 10) {
      setShowValidation((state) => ({ ...state, message: true }));
    } else {
      areValid.message = true;
      setShowValidation((state) => ({ ...state, message: false }));
    }
    //La longueur du nom
    if (inputsStates.nom.length < 2) {
      setShowValidation((state) => ({ ...state, nom: true }));
    } else {
      areValid.nom = true;
      setShowValidation((state) => ({ ...state, nom: false }));
    }
    //le numero de telephone avec regex de base
    if (!/^0[1-9](\d{2}){4}$/.test(inputsStates.telephone)) {
      setShowValidation((state) => ({ ...state, telephone: true }));
    } else {
      areValid.telephone = true;
      setShowValidation((state) => ({ ...state, telephone: false }));
    }
    //l'email avecregex de base
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputsStates.email)) {
      setShowValidation((state) => ({ ...state, email: true }));
    } else {
      areValid.email = true;
      setShowValidation((state) => ({ ...state, email: false }));
    }
    //le consentement est coché ou pas
    if (!inputsStates.rgpd) {
      setShowValidation((state) => ({ ...state, rgpd: true }));
    } else {
      areValid.rgpd = true;
      setShowValidation((state) => ({ ...state, rgpd: false }));
    }

    //l'objet retourné 
    return Object.values(areValid).every((value) => value);
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <Demande
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <Message
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <Nom
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <Telephone
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <Email
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <Rgpd
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <p className="required-note">*Ces champs sont obligatoires</p>

      <button type="submit" className="btn-submit align-self-center">
        Envoyer
      </button>
    </form>
  );
}
