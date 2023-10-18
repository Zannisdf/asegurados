import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { PageTitle } from "../components/PageTitle";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";

export function VehicleShopIncidents() {
  return (
    <>
      <Navbar links={[{ href: "/taller/siniestros", text: "Siniestros" }]} />
      <Container>
        <div className="card mt-5 mx-auto shadow-sm">
          <div className="card-body px-4 py-3">
            <PageTitle className="card-title text-center mt-4 mb-5">
              Administrar siniestros
            </PageTitle>
            <Table
              headers={["Id", "Patente", "Estado", "Acciones"]}
              rows={[
                [
                  "1234567",
                  "ABXC82",
                  "Recepción pendiente",
                  <Link
                    to="/taller/ingresar-vehiculo"
                    className="btn btn-outline-secondary"
                  >
                    Recepcionar
                  </Link>,
                ],
                [
                  "209348",
                  "TRJS92",
                  "Presupuesto pendiente",
                  <Link
                    to="/taller/cargar-presupuesto"
                    className="btn btn-outline-secondary"
                  >
                    Cargar presupuesto
                  </Link>,
                ],
                ["598437", "SOEN13", "Presupuesto aprobado", null],
                ["0987345", "LWHT25", "Presupuesto rechazado", null],
                [
                  "3498752",
                  "XENT29",
                  "Presupuesto pendiente",
                  <Link
                    to="/taller/cargar-presupuesto"
                    className="btn btn-outline-secondary"
                  >
                    Cargar presupuesto
                  </Link>,
                ],
                [
                  "4875873",
                  "WOEJ84",
                  "Entrega pendiente",
                  <Link
                    to="/taller/entregar-vehiculo"
                    className="btn btn-outline-secondary"
                  >
                    Entregar vehículo
                  </Link>,
                ],
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
