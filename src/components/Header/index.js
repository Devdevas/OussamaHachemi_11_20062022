import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo kasa" />
      </Link>
      <nav>
        <NavLink to="/" className="link-text">
          Accueil
        </NavLink>
        <NavLink to="/about" className="link-text">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
