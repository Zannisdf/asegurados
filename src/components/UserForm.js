import { Link } from "react-router-dom";
import { useState } from "react";

const DEFAULT_VALUES = {
  dni: "",
  name: "",
  email: "",
  phone: "",
  role: "null",
};

export function UserForm({ initialValues = DEFAULT_VALUES }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event, field) => {
    const { value } = event.target;

    setValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  return (
    <form>
      <div className="mb-3">
        <label for="dni" className="form-label">
          Rut
        </label>
        <input
          type="text"
          className="form-control"
          id="dni"
          placeholder="11.111.111-1"
          value={values.dni}
          onChange={(event) => handleChange(event, "dni")}
        />
      </div>
      <div className="mb-3">
        <label for="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Max Verstappen"
          value={values.name}
          onChange={(event) => handleChange(event, "name")}
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="max@verstappen.com"
          value={values.email}
          onChange={(event) => handleChange(event, "email")}
        />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="+56911223344"
          value={values.phone}
          onChange={(event) => handleChange(event, "phone")}
        />
      </div>
      <div className="mb-3">
        <label for="role" className="form-label">
          Perfil
        </label>
        <select
          className="form-select"
          id="role"
          value={values.role}
          onChange={(event) => handleChange(event, "role")}
        >
          <option value="null" disabled>
            Selecciona una opción
          </option>
          <option value="1">Grúa</option>
          <option value="2">Taller</option>
          <option value="3">Call Center</option>
          <option value="4">Analista Siniestro</option>
          <option value="5">Analista Negocio</option>
          <option value="6">Liquidador</option>
        </select>
      </div>
      <Link href="/usuarios" className="btn btn-primary d-block my-4">
        Guardar
      </Link>
    </form>
  );
}
