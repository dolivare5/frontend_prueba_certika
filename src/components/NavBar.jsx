import React from "react";
// import '../utils/navScroll'
import { Link, NavLink } from "react-router-dom";
import { useBook } from "../context/BookContext";
const NavBar = () => {
  const { user, logOut, token } = useBook();

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <NavLink className="navbar-brand text-white fs-3 name-bank" to="/">
          Library Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="bi bi-list hamIcon"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-lg-8 py-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>

              { token ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/catalogue">
                      Catalogo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/prestamos">
                      Prestamos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Perfil
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            {token ? (
              <>
                <NavLink
                  className="btn-custom ms-lg-2 btn-login"
                  
                  onClick={() => logOut()}
                >
                  Cerrar sesión
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="btn-custom ms-lg-2 btn-login" to="/login">
                  Iniciar sesión
                </NavLink>
                <NavLink
                  className="btn-custom ms-lg-2 btn-register"
                  to="/singup"
                >
                  Registrarse
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
