import { Container } from "../components/Container";
import { PageTitle } from "../components/PageTitle";
import { Navbar } from "../components/Navbar";
import { VehicleRegistrationForm } from "../components/VehicleRegistrationForm";

export function EnterVehicle() {
  return (
    <>
      <Navbar links={[{ href: "/taller/siniestros", text: "Siniestros" }]} />
      <Container>
        <div className="card mt-5 mx-auto shadow-sm" style={{ width: "600px" }}>
          <div className="card-body px-4 py-3">
            <PageTitle>Recepcionar Vehículo</PageTitle>
            <VehicleRegistrationForm isEnterVehicle />
          </div>
        </div>
      </Container>
    </>
  );
}
