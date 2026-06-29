export default function Demande({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="demande">
          Demande <span className="required">Choisissez une option</span>
        </label>
        <select
          id="demande"
          value={inputsStates.demande}
          onChange={(e) =>
            setInputsStates({ ...inputsStates, demande: e.target.value })
          }
          className={`form-input ${showValidation.demande ? "input-error" : ""}`}
        >
          <option value="" disabled>
            Sélectionnez votre demande
          </option>
          <option value="conception-realisation">
            Conception et réalisation d’espaces verts
          </option>
          <option value="entretien">Entretien d’espaces verts</option>
          <option value="taille-haies">Taille de haies</option>
          <option value="elagage-abattage">Élagage et abattage d’arbres</option>
          <option value="dechets">Valorisation des déchets verts</option>
          <option value="autre">Autre demande</option>
        </select>
        {showValidation.prestation && (
          <p className="error-message">Veuillez choisir une prestation.</p>
        )}
      </div>
    </>
  );
}
