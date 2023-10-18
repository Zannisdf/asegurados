import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Poner acá cada página siguiendo el formato
        <Route path="/" Component={MyPageComponent} /> */}
        <Route path="/" Component={Index} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
