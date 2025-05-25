import "./Header.css";
import logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <header className="hd-header">
      <img src={logo} alt="Logo" className="hd-logo" />
      <nav className="hd-nav-links">
        <a href="#" className="hd-nav-link hd-active">
          Home
        </a>
        <a href="#" className="hd-nav-link">
          Ver perfil
        </a>
      </nav>
      <button className="hd-btn-publicacao">Criar publicação</button>
    </header>
  );
}
