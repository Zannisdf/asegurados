import { useState } from "react";
import { Container } from "../components/Container";
import { PageTitle } from "../components/PageTitle";
import { BrandIcon } from "../components/BrandIcon";
import { Link } from "react-router-dom";

export function CheckIncidentStatus() {
  const [values, setValues] = useState({
    dni: "",
    policyId: "",
  });

  const handleChange = (event, field) => {
    const { value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <Container className="pt-5">
      <div className="card mt-5 mx-auto shadow-sm" style={{ width: "600px" }}>
        <div className="card-body px-4 py-3">
          <div className="text-center mt-3">
            <BrandIcon />
          </div>
          <PageTitle>Consultar siniestro</PageTitle>
          <form>
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
                value={values.dni}
                onChange={(event) => handleChange(event, "dni")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="policyId" className="form-label">
                Número de póliza
              </label>
              <input
                type="text"
                className="form-control"
                id="policyId"
                name="policyId"
                placeholder="123456789"
                value={values.policyId}
                onChange={(event) => handleChange(event, "policyId")}
              />
            </div>
            <Link
              to="/siniestros/consultar/123"
              className="btn btn-primary d-block my-4"
            >
              Consultar
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
}
