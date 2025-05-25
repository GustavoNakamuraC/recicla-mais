import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Perfil from "./pages/Perfil/Perfil";
import Publicacao from "./pages/Publicacao/Publicacao";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/publicacao" element={<Publicacao />} />
      </Routes>
    </Router>
  );
}

export default App;
