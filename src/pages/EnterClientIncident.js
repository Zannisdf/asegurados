import { useState } from "react";
import { Container } from "../components/Container";
import { BrandIcon } from "../components/BrandIcon";
import { Link } from "react-router-dom";

export function EnterClientIncident() {
  const [policyId, setPolicyId] = useState("");
  const [policeReport, setPoliceReport] = useState();
  const [driversLicense, setDriversLicense] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      policyId,
      policeReport,
      driversLicense,
    });
  };

  return (
    <Container className="pt-5">
      <div className="card mt-5 mx-auto shadow-sm" style={{ width: "600px" }}>
        <div className="card-body px-4 py-3">
          <div className="text-center mt-3">
            <BrandIcon />
          </div>
          <h3 className="card-title text-center mt-4 mb-5">
            Ingresar denuncia
          </h3>
          <form onSubmit={handleSubmit}>
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
                value={policyId}
                onChange={(e) => setPolicyId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="policeReport" className="form-label">
                Constancia o parte
              </label>
              <input
                className="form-control"
                type="file"
                id="policeReport"
                accept="image/*"
                required
                onChange={(event) => {
                  setPoliceReport(event.target.files[0]);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="driversLicense" className="form-label">
                Licencia de conducir (foto frontal)
              </label>
              <input
                className="form-control"
                type="file"
                id="driversLicense"
                accept="image/*"
                required
                onChange={(event) => {
                  setDriversLicense(event.target.files[0]);
                }}
              />
            </div>
            <Link to="/siniestros/123" className="btn btn-primary d-block my-4">
              Enviar
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
}
