import { Link } from "react-router-dom";
import { Table } from "../components/Table";
import { Navbar } from "../components/Navbar";
import { PageTitle } from "../components/PageTitle";
import { Container } from "../components/Container";

export function Users() {
  return (
    <>
      <Navbar
        links={[
          { href: "/denuncias/nuevo", text: "Nueva denuncia" },
          { href: "/siniestros", text: "Siniestros" },
          { href: "/usuarios", text: "Usuarios" },
        ]}
      />
      <Container>
        <div className="card mt-5 mx-auto shadow-sm">
          <div className="card-body px-4 py-3">
            <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
              <PageTitle>Administrar usuarios</PageTitle>
              <Link className="btn btn-primary" to="/usuarios/nuevo">
                Crear usuario
              </Link>
            </div>
            <Table
              headers={[
                "Rut",
                "Nombre",
                "Correo Electrónico",
                "Perfil",
                "Acciones",
              ]}
              rows={[
                [
                  "11.111.111-1",
                  "Abrahams Sarmiento",
                  "a.sarmientoluna@uandresbello.edu",
                  "Administrador",
                  <Link className="btn btn-outline-secondary" to="/usuarios/1">
                    Editar
                  </Link>,
                ],
                [
                  "11.111.111-1",
                  "Giorgio Zanni",
                  "g.zannicastillo@uandresbello.edu",
                  "Administrador",
                  <Link className="btn btn-outline-secondary" to="/usuarios/2">
                    Editar
                  </Link>,
                ],
                [
                  "11.111.111-1",
                  "Abrahams Sarmiento",
                  "a.sarmientoluna@uandresbello.edu",
                  "Administrador",
                  <Link className="btn btn-outline-secondary" to="/usuarios/3">
                    Editar
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
