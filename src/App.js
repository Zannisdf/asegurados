import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/Index";
import { Users } from "./pages/Users";
import { CreateUser } from "./pages/CreateUser";
import { EditUser } from "./pages/EditUser";
import { VehicleShopIncidents } from "./pages/VehicleShopIncidents";
import { EnterVehicle } from "./pages/EnterVehicle";
import { ReturnVehicle } from "./pages/ReturnVehicle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Poner acá cada página siguiendo el formato
        <Route path="/" Component={MyPageComponent} /> */}
        <Route path="/" Component={Index} />
        <Route path="/usuarios" Component={Users} />
        <Route path="/usuarios/nuevo" Component={CreateUser} />
        <Route path="/usuarios/:userId" Component={EditUser} />
        <Route path="/taller/siniestros" Component={VehicleShopIncidents} />
        <Route path="/taller/ingresar-vehiculo" Component={EnterVehicle} />
        <Route path="/taller/entregar-vehiculo" Component={ReturnVehicle} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
