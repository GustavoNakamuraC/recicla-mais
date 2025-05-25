import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Header({ fluxo }) {
  return (
    <header className="hd-header">
      <img src={logo} alt="Logo" className="hd-logo" />
      <nav className="hd-nav-links">
        <Link
          to="/home"
          className={`hd-nav-link ${fluxo === "Home" ? "hd-active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/perfil"
          className={`hd-nav-link ${fluxo === "Perfil" ? "hd-active" : ""}`}
        >
          Ver perfil
        </Link>
      </nav>
      <Link to="/publicacao">
        <button className="hd-btn-publicacao">Criar publicação</button>
      </Link>
    </header>
  );
}
