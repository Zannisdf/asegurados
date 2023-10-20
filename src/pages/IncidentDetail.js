import { Link } from "react-router-dom";
import { BrandIcon } from "../components/BrandIcon";
import { Container } from "../components/Container";
import { Table } from "../components/Table";

export function IncidentDetail() {
  return (
    <Container className="pt-5">
      <div className="card mt-5 mx-auto shadow-sm">
        <div className="card-body px-4 py-3">
          <div className="text-center mt-3">
            <BrandIcon />
          </div>
          <h3 className="card-title text-center mt-4 mb-5">
            Ficha de siniestro N°12345678
          </h3>
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
            ]}
          ></Table>
          <Link to="/ingresar-denuncia" className="btn btn-outline-secondary my-4">
            Volver
          </Link>
        </div>
      </div>
    </Container>
  );
}
