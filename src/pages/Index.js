import { Container } from "../components/Container";
import { BrandIcon } from "../components/BrandIcon";
import { PageTitle } from "../components/PageTitle";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Index() {
  const [formData, setFormData] = useState({
    dni: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <Container className="pt-5">
      <div className="card mt-5 mx-auto shadow-sm" style={{ width: "600px" }}>
        <div className="card-body px-4 py-3">
          <div className="text-center mt-3">
            <BrandIcon />
          </div>
          <PageTitle>Inicio de sesión</PageTitle>
          <h6 className="card-subtitle mb-3 text-body-secondary">
            Ingresa tus credenciales para ingresar al portal
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="dni" className="form-label">
                Rut
              </label>
              <input
                type="text"
                className="form-control"
                id="dni"
                name="dni"
                placeholder="11.111.111-1"
                value={formData.dni}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Link to="/callcenter/ingresar-denuncia" className="btn btn-primary d-block my-4">
              Iniciar sesión
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
}
