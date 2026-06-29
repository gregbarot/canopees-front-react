export default function Rgpd({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <div className="form-group">
        <div className="checkbox-group d-flex align-items-start">
          <input
            id="rgpd"
            type="checkbox"
            name="rgpd"
            checked={inputsStates.rgpd}
            onChange={(e) =>
              setInputsStates({ ...inputsStates, rgpd: e.target.checked })
            }
            className={`form-input ${showValidation.rgpd ? "input-error" : ""}`}
          />

          <label htmlFor="rgpd">
            En soumettant ce formulaire, j’accepte que mes données soient
            utilisées dans le cadre de ma demande *
          </label>
        </div>
        {showValidation.rgpd && (
          <p className="error-message">
            Vous devez accepter cette condition pour envoyer le formulaire.
          </p>
        )}
      </div>
    </>
  );
}
