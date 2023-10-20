import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/Index";
import { Users } from "./pages/Users";
import { CreateUser } from "./pages/CreateUser";
import { EditUser } from "./pages/EditUser";
import { VehicleShopIncidents } from "./pages/VehicleShopIncidents";
import { EnterVehicle } from "./pages/EnterVehicle";
import { ReturnVehicle } from "./pages/ReturnVehicle";
import { EnterCallcenterIncident } from "./pages/EnterCallcenterIncident";
import { IncidentStatus } from "./pages/IncidentStatus";
import { CheckIncidentStatus } from "./pages/CheckIncidentStatus";
import { ReviewIncident } from "./pages/ReviewIncident";
import { EnterClientIncident } from "./pages/EnterClientIncident";
import { IncidentDetail } from "./pages/IncidentDetail";
import { Incidents } from "./pages/Incidents";
import { RepairQuote } from "./pages/RepairQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/ingresar-denuncia" Component={EnterClientIncident} />
        <Route
          path="/callcenter/ingresar-denuncia"
          Component={EnterCallcenterIncident}
        />
        <Route path="/siniestros/:id" Component={IncidentDetail} />
        <Route path="/siniestros/consultar" Component={CheckIncidentStatus} />
        <Route path="/siniestros/consultar/:id" Component={IncidentStatus} />
        <Route path="/siniestros/revisar/:id" Component={ReviewIncident} />
        <Route path="/siniestros" Component={Incidents} />
        <Route path="/usuarios" Component={Users} />
        <Route path="/usuarios/nuevo" Component={CreateUser} />
        <Route path="/usuarios/:userId" Component={EditUser} />
        <Route path="/taller/siniestros" Component={VehicleShopIncidents} />
        <Route path="/taller/cargar-presupuesto" Component={RepairQuote} />
        <Route path="/taller/ingresar-vehiculo" Component={EnterVehicle} />
        <Route path="/taller/entregar-vehiculo" Component={ReturnVehicle} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
