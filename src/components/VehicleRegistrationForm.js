import { useState } from "react";
import { Link } from "react-router-dom";

export function VehicleRegistrationForm({ isEnterVehicle }) {
  const [values, setValues] = useState({
    recipientName: "null",
    registrationNumber: "",
  });

  const handleChange = (event, field) => {
    const { value } = event.target;

    setValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="recipientName" className="form-label">
          Recepcionista
        </label>
        <select
          id="recipientName"
          className="form-select"
          value={values.recipientName}
          onChange={(event) => handleChange(event, "recipientName")}
        >
          <option value="null" disabled>
            Selecciona una opción
          </option>
          <option value="1">Max Verstappen</option>
          <option value="2">Lando Norris</option>
          <option value="3">Carlos Sainz</option>
          <option value="4">Fernando Alonso</option>
          <option value="5">Charles Leclerc</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="registrationNumber" className="form-label">
          Número de registro
        </label>
        <input
          type="text"
          className="form-control"
          id="registrationNumber"
          placeholder="1234567890"
          value={values.registrationNumber}
          onChange={(event) => handleChange(event, "registrationNumber")}
        />
      </div>
      {isEnterVehicle ? (
        <Link className="btn btn-primary d-block my-4" to="/taller/siniestros">
          Guardar
        </Link>
      ) : (
        <div className="my-4">
          <Link className="btn btn-primary" to="/taller/siniestros">
            Aceptar entrega
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#rejectProposalModal"
          >
            Rechazar entrega
          </button>
        </div>
      )}
    </form>
  );
}
