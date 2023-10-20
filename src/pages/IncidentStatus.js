import { Link } from "react-router-dom";
import { BrandIcon } from "../components/BrandIcon";
import { Container } from "../components/Container";
import { PageTitle } from "../components/PageTitle";
import { Table } from "../components/Table";

export function IncidentStatus() {
  return (
    <Container className="pt-5">
      <div className="card mt-5 mx-auto shadow-sm">
        <div className="card-body px-4 py-3">
          <div className="text-center mt-3">
            <BrandIcon />
          </div>
          <PageTitle>Estado del siniestro N°12345678</PageTitle>
          <Table
            headers={["Descripción", "Detalle"]}
            rows={[
              ["Vehículo siniestrado", "Suzuki Swift, patente ABXC82"],
              ["Liquidador", "Julio Ponte"],
              [
                "Grúa asignada",
                "Vehículo de empresa Mega Grúas, conducido por Juan Moya. Patente BDEH93.",
              ],
              [
                "Taller asignado",
                "Super Repairs Las Condes, Av. Apoquindo 3397.",
              ],
              ["Fecha de retiro", "Martes 01 de noviembre de 2023"],
            ]}
          />
          <Link
            to="/siniestros/consultar"
            className="btn btn-outline-secondary my-4"
          >
            Volver
          </Link>
        </div>
      </div>
    </Container>
  );
}
