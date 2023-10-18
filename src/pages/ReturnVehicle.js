import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { ObservationsForm } from "../components/ObservationsForm";
import { VehicleRegistrationForm } from "../components/VehicleRegistrationForm";

export function ReturnVehicle() {
  return (
    <>
      <Navbar links={[{ href: "/taller/siniestros", text: "Siniestros" }]} />
      <Container className="pt-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="card mx-auto shadow-sm">
              <div className="card-body px-4 py-3">
                <h3 className="card-title mt-2 mb-4">Entregar vehículo</h3>
                <VehicleRegistrationForm />
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
                          <ObservationsForm />
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
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Cobertura póliza</h6>
                </div>
                <span className="text-success">−$550.000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total deducible a pagar</span>
                <strong>$60.000</strong>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
