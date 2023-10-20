import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { PageTitle } from "../components/PageTitle";
import { Table } from "../components/Table";

export function Incidents() {
  return (
    <>
      <Navbar
        links={[
          { href: "/callcenter/ingresar-denuncia", text: "Ingresar denuncia" },
          { href: "/siniestros", text: "Siniestros" },
        ]}
      />
      <Container>
        <div className="card mt-5 mx-auto shadow-sm">
          <div className="card-body px-4 py-3">
            <PageTitle>Administrar siniestros</PageTitle>
            <Table
              headers={[
                "Id",
                "Patente",
                "Póliza",
                "Cliente",
                "Estado",
                "Acciones",
              ]}
              rows={[
                [
                  "1234567",
                  "ABXC82",
                  "1234",
                  "Abrahams Sarmiento ",
                  <span
                    className="badge rounded-pill bg-warning"
                    style={{ color: "#000" }}
                  >
                    En evaluación
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
                  </Link>,
                ],
                [
                  "209348",
                  "TRJS92",
                  "4873",
                  "Giorgio Zanni",
                  <span
                    className="badge rounded-pill bg-warning"
                    style={{ color: "#000" }}
                  >
                    En evaluación
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
                  </Link>,
                ],
                [
                  "8475847",
                  "KL5687",
                  "3498",
                  "Mauricio Redoles",
                  <span
                    className="badge rounded-pill bg-info"
                    style={{ color: "#000" }}
                  >
                    En reparación
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
                  </Link>,
                ],
                [
                  "598437",
                  "SOEN13",
                  "3498",
                  "Héctor Navia",
                  <span className="badge rounded-pill bg-secondary">
                    Reingresado
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
                  </Link>,
                ],
                [
                  "0987345",
                  "LWHT25",
                  "2390",
                  "Katty Arias",
                  <span className="badge rounded-pill bg-primary">
                    Finalizado
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
                  </Link>,
                ],
                [
                  "3498752",
                  "XENT29",
                  "4542",
                  "Cristián Olguín",
                  <span
                    className="badge rounded-pill bg-warning"
                    style={{ color: "#000" }}
                  >
                    En evaluación
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
                  </Link>,
                ],
                [
                  "9837498",
                  "GH3681",
                  "4542",
                  "Mark Zukenberg",
                  <span className="badge rounded-pill bg-success">
                    Entregado
                  </span>,
                  <Link
                    className="btn btn-outline-secondary"
                    to="/siniestros/revisar/123"
                  >
                    Revisar
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
