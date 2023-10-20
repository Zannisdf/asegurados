import { useState } from "react";
import { PageTitle } from "../components/PageTitle";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export function ReviewIncident() {
  const [rejectionComment, setRejectionComment] = useState("");

  const handleRejectionCommentChange = (event) => {
    const { value } = event.target;
    setRejectionComment(value);
  };

  return (
    <>
      <Navbar
        links={[
          { href: "/callcenter/ingresar-denuncia", text: "Ingresar denuncia" },
          { href: "/siniestros", text: "Siniestros" },
        ]}
      />
      <Container className="pt-5">
        <div className="row">
          <div className="col-lg-7">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h3 className="card-title text-center my-2">
                  Estado del siniestro N°1234567
                </h3>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">N° Siniestro</h6>
                </div>
                <span style={{ width: "60%" }}>1234567</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Patente</h6>
                </div>
                <span style={{ width: "60%" }}>ABXC82</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Póliza</h6>
                </div>
                <span style={{ width: "60%" }}>1234567890</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Cliente</h6>
                </div>
                <span style={{ width: "60%" }}>Abrahams Sarmiento</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Teléfono cliente</h6>
                </div>
                <span style={{ width: "60%" }}>+56911223344</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Correo electrónico cliente</h6>
                </div>
                <span style={{ width: "60%" }}>
                  a.sarmientoluna@uandresbello.edu
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Taller asignado</h6>
                </div>
                <span style={{ width: "60%" }}>Super Repairs Las Condes</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Duración de reparación</h6>
                </div>
                <span style={{ width: "60%" }}>1 semana</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Día de entrega</h6>
                </div>
                <span style={{ width: "60%" }}>01 de octubre de 2023</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h3 className="card-title text-center my-2">Presupuesto</h3>
              </li>
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
            <Link className="btn btn-primary d-block mb-3" to="/siniestros">
              Aprobar
            </Link>
            <a
              role="button"
              className="btn btn-outline-danger d-block"
              data-bs-toggle="modal"
              data-bs-target="#rejectProposalModal"
            >
              Rechazar
            </a>

            <div
              className="modal fade"
              id="rejectProposalModal"
              tabIndex="-1"
              aria-labelledby="rejectProposalModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="rejectProposalModalLabel"
                    >
                      Rechazar presupuesto
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Cerrar"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="rejectionComment" className="form-label">
                        Observaciones
                      </label>
                      <textarea
                        className="form-control"
                        id="rejectionComment"
                        value={rejectionComment}
                        onChange={handleRejectionCommentChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Rechazar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
