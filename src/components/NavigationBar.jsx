import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoKaren from "../assets/imgs/logo-karen.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/CardContext";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { logoutUser, isLoggedIn } = useContext(GlobalContext);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Navbar className="custom-navbar text-dark py-4" expand="md" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="ms-auto">
          <img className="logo-karen" type="image/svg+xml" src={logoKaren} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end " id="responsive-navbar-nav">
          <Nav className="ml-md-auto cat-links">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/quienes_somos">
              QUIENES SOMOS
            </NavLink>
            <NavLink className="nav-link" to="/galeria">
              VER GALERÍA
            </NavLink>
          </Nav>
          <Nav className="justify-content-end cat-links mt-2">
            {isLoggedIn && ( // Verifica si el usuario ha iniciado sesión
              <Link to="/adopta" className="m-1 link">
                <button className={`btn nav-adopt-button ${activeButton === "adopta" ? "active-nav" : ""}`} onClick={() => handleButtonClick("adopta")}>
                  ADOPTA
                </button>
              </Link>
            )}
            {isLoggedIn ? (
              <>
                <Link to="/perfil" className="m-1 nav-signup-button link">
                  <button className={`btn btn-dark ${activeButton === "perfil" ? "active-nav" : ""}`} onClick={() => handleButtonClick("perfil")}>
                    PERFIL
                  </button>
                </Link>
                <Link to="/" className="m-1 nav-signup-button link">
                  <button className={`btn btn-dark ${activeButton === "perfil" ? "active-nav" : ""}`} onClick={() => logoutUser(navigate)}>
                    CERRAR SESION
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/iniciar_sesion" className="m-1 nav-login-button link">
                  <button
                    className={`btn btn-dark ${activeButton === "iniciar_sesion" ? "active-nav" : ""}`}
                    onClick={() => handleButtonClick("iniciar_sesion")}
                  >
                    INICIAR SESIÓN
                  </button>
                </Link>
                <Link to="/crear_cuenta" className="m-1 nav-signup-button link">
                  <button className={`btn btn-dark ${activeButton === "crear_cuenta" ? "active-nav" : ""}`} onClick={() => handleButtonClick("crear_cuenta")}>
                    CREAR CUENTA
                  </button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
