export default function Message({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="message">
          Votre message <span className="required">Précisez votre demande</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Bonjour..."
          rows="10"
          value={inputsStates.message}
          onChange={(e) =>
            setInputsStates({ ...inputsStates, message: e.target.value })
          }
          className={`form-input ${showValidation.message ? "input-error" : ""}`}
        />
        {showValidation.message && (
          <p className="error-message">
            Votre message doit contenir au moins 10 caractères.
          </p>
        )}
      </div>
    </>
  );
}
