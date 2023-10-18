import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { PageTitle } from "../components/PageTitle";
import { UserForm } from "../components/UserForm";

export function CreateUser() {
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
        <div className="card mt-5 mx-auto shadow-sm" style={{ width: "600px" }}>
          <div className="card-body px-4 py-3">
            <PageTitle>Crear usuario</PageTitle>
            <UserForm />
          </div>
        </div>
      </Container>
    </>
  );
}
