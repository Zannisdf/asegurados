import { useState } from "react";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export function EnterCallcenterIncident() {
  const [policyId, setPolicyId] = useState("");
  const [garage, setGarage] = useState("null");
  const [tow, setTow] = useState("null");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar
        links={[
          { href: "/callcenter/ingresar-denuncia", text: "Ingresar denuncia" },
          { href: "/siniestros", text: "Siniestros" },
        ]}
      />
      <Container>
        <div className="card mt-5 mx-auto shadow-sm" style={{ width: "600px" }}>
          <div className="card-body px-4 py-3">
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
                <label htmlFor="garage" className="form-label">
                  Taller
                </label>
                <select
                  className="form-select"
                  id="garage"
                  name="garage"
                  value={garage}
                  onChange={(e) => setGarage(e.target.value)}
                >
                  <option value="null" disabled>
                    Selecciona una opción
                  </option>
                  <option value="1">Taller 1</option>
                  <option value="2">Taller 2</option>
                  <option value="3">Taller 3</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tow" className="form-label">
                  Grúa
                </label>
                <select
                  className="form-select"
                  id="tow"
                  value={tow}
                  onChange={(e) => setTow(e.target.value)}
                >
                  <option value="null" disabled>
                    Selecciona una opción
                  </option>
                  <option value="1">Grúa 1</option>
                  <option value="2">Grúa 2</option>
                  <option value="3">Grúa 3</option>
                </select>
              </div>
              <Link to="/siniestros/123" className="btn btn-primary d-block my-4">
                Enviar
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
