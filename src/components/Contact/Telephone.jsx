export default function Telephone({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="telephone">
          Téléphone * <span className="required">Saisissez votre numéro</span>
        </label>

        <input
          id="telephone"
          type="tel"
          name="telephone"
          placeholder="06 12 34 56 78"
          value={inputsStates.telephone}
          onChange={(e) =>
            setInputsStates({ ...inputsStates, telephone: e.target.value })
          }
          className={`form-input ${showValidation.telephone ? "input-error" : ""}`}
        />

        {showValidation.telephone && (
          <p className="error-message">
            Veuillez saisir un numéro de téléphone valide.
          </p>
        )}
      </div>
    </>
  );
}
