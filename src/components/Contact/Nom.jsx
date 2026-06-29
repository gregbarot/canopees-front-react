export default function Nom({ inputsStates, setInputsStates, showValidation }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="nom">
          Nom * <span className="required">Saisissez votre nom complet</span>
        </label>
        <input
          id="nom"
          type="text"
          name="nom"
          placeholder="Bob et Tom"
          value={inputsStates.nom}
          onChange={(e) =>
            setInputsStates({ ...inputsStates, nom: e.target.value })
          }
          className={`form-input ${showValidation.nom ? "input-error" : ""}`}
        />
        {showValidation.nom && (
          <p className="error-message">
            Veuillez saisir un nom valide (au moins 2 caractères).
          </p>
        )}
      </div>
    </>
  );
}
