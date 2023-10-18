import { Link, NavLink } from "react-router-dom";
import { BrandIcon } from "./BrandIcon";

// isLoggedIn={true} para las pantallas que son con inicio de sesión
// links es un arreglo de objetos como se muestra en el ejemplo:
// const links = [
//   { href: '/mi-ruta', text: 'Texto visible del link' },
//   ... otros links
// ]
export function Navbar({ isLoggedIn, links = [] }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <BrandIcon />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          ariaControls="navbarNav"
          ariaExpanded="false"
          ariaLabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li className="nav-item" key={`nav-link-${index}`}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  ariaCurrent="page"
                  to={link.href}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {isLoggedIn ? (
          <div>
            <Link clLinkssName="btn btn-outline-secondary" to="/">
              Salir
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
