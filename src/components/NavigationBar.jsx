import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logoKaren from '../assets/imgs/logo-karen.svg';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="custom-navbar text-dark py-4  " variant="light">
        <Container>
          <Link to="/" className="ms-auto">
            <img className="logo-karen" type="image/svg+xml" src={logoKaren}/>

          </Link>
          <Nav className="ml-auto" style={{ flex: 1 }}></Nav>
          <Nav className="justify-content-end cat-links">
          <NavLink className={({ isActive }) => (isActive ? "cat-nav" : undefined)} to="/">
              HOME
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "cat-nav" : undefined)} to="/quienes_somos">
              QUIENES SOMOS
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "cat-nav" : undefined)} to="/galeria">
              VER GALERÍA
            </NavLink>
            <div>
              <Link to="/adopta" className="m-1">
                <Button className="nav-adopt-button">ADOPTAR</Button>
              </Link>
              <Link to="/iniciar_sesion" className="m-1 nav-login-button">
                <button className="btn btn-success">INICIAR SESIÓN</button>
              </Link>
              <Link to="/crear_cuenta" className="m-1 nav-signup-button">
                <button className="btn btn-dark">CREAR CUENTA</button>
              </Link>
              <Link to="/perfil" className="m-1 nav-signup-button">
                <button className="btn btn-dark">PERFIL</button>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
