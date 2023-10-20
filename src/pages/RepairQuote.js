import { useState } from "react";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export function RepairQuote() {
  const [repairType, setRepairType] = useState("partial");
  const [description, setDescription] = useState("");
  const [repairDuration, setRepairDuration] = useState("null");
  const [file, setFile] = useState();
  const [date, setDate] = useState("");

  const handleRepairTypeChange = (event) => {
    const { value } = event.target;

    setRepairType(value);
  };

  const handleDescriptionChange = (event) => {
    const { value } = event.target;

    setDescription(value);
  };

  const handleRepairDurationChange = (event) => {
    const { value } = event.target;

    setRepairDuration(value);
  };

  const handleFileChange = (event) => {
    const { files } = event.target;

    setFile(files[0]);
  };

  const handleDateChange = (event) => {
    const { value } = event.target;

    setDate(value);
  };

  return (
    <>
      <Navbar links={[{ href: "/taller/siniestros", text: "Siniestros" }]} />
      <Container>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/logo.jfif"
            alt=""
            width="230"
            height="160"
          />
          <p className="lead">Presupuesto de Reparacion</p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Presupuesto</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Reparación carrocería</h6>
                  <small className="text-muted">
                    Enderezar y corregir detalles de pintura
                  </small>
                </div>
                <span className="text-muted">$210.000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Cambio de aceite</h6>
                  <small className="text-muted">
                    Incluye filtro de aceite original
                  </small>
                </div>
                <span className="text-muted">$200.000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Cambio batería</h6>
                  <small className="text-muted">
                    Compra de batería nueva + instalación
                  </small>
                </div>
                <span className="text-muted">$200.000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (CLP)</span>
                <strong>$600.000</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation">
              <h4 className="mb-3">Tipo de Reparacion</h4>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="partial"
                    checked={repairType === "partial"}
                    onChange={handleRepairTypeChange}
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Parcial
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="full"
                    checked={repairType === "full"}
                    onChange={handleRepairTypeChange}
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Total
                  </label>
                </div>
              </div>

              <hr className="my-4" />
              <div className="mb-3">
                <div className="col-5-md-9 col-lg-12">
                  <label htmlFor="validationTextarea" className="form-label">
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Vehículo con choque frontal..."
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                  <div className="invalid-feedback">Descripción requerida.</div>
                </div>

                <div className="col-12 mb-3">
                  <label htmlFor="exampleFormControlSelect2">
                    Duración de reparacion
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect2"
                    value={repairDuration}
                    onChange={handleRepairDurationChange}
                  >
                    <option value="null" disabled>
                      Seleccione una opción
                    </option>
                    <option value="1">1 semana</option>
                    <option value="2">2 semanas</option>
                    <option value="3">3 semanas</option>
                    <option value="4">4 semanas</option>
                    <option value="5">5 semanas</option>
                    <option value="6">6 semanas</option>
                    <option value="7">7 semanas</option>
                    <option value="8">8 semanas</option>
                    <option value="9">9 semanas</option>
                    <option value="10">10 semanas</option>
                    <option value="11">11 semanas</option>
                    <option value="12">12 semanas</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="exampleFormControlFile1" className="form-label">
                    Subir pdf con detalle presupuesto
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlFile1"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-group mb-3">
                <label className="control-label" htmlFor="date">
                  Día de Entrega
                </label>
                <input
                  className="form-control"
                  id="date"
                  name="date"
                  placeholder="DD/MM/AAAA"
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>

              <Link className="w-100 btn btn-primary" to="/taller/siniestros">
                Guardar presupuesto
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
