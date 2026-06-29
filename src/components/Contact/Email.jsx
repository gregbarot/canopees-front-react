export default function Email({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="email">
          E-mail * <span className="required">Saisissez votre email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="bob.tom@email.com"
          value={inputsStates.email}
          onChange={(e) =>
            setInputsStates({ ...inputsStates, email: e.target.value })
          }
          className={`form-input ${showValidation.email ? "input-error" : ""}`}
        />
        {showValidation.email && (
          <p className="error-message">
            Veuillez saisir une adresse e-mail valide.
          </p>
        )}
      </div>
    </>
  );
}
