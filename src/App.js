import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/Index";
import { Users } from "./pages/Users";
import { CreateUser } from "./pages/CreateUser";
import { EditUser } from "./pages/EditUser";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
