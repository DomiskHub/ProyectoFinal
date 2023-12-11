import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



const NavigationBar = () => {
return (
  <div>
        <Navbar className="custom-navbar text-dark py-4"  variant="light">
      <Container>
        <Navbar.Brand href="#home" className="ms-auto">LOGO</Navbar.Brand>
        <Nav className="ml-auto" style={{ flex: 1 }}></Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#aboutUs">QUIENES SOMOS</Nav.Link>
          <Nav.Link href="#gallery">VER GALERÍA</Nav.Link>
          <Nav.Link href="#adoptionProcess">PROCESO DE ADOPCIÓN</Nav.Link>
          <Button className='m-1 nav-adopt-button'>ADOPTAR</Button>
          <Button className='m-1 nav-login-button'  variant="success">INICIAR SESION</Button>
          <Button className='m-1 nav-signup-button'  variant="dark">CREAR CUENTA</Button>
        </Nav>
      </Container>
    </Navbar>
    <br />
    <header>
    <h2 className='header-pic'>HEADER BLABLABLA</h2>
    </header>
    <br />
    <h2 className='header-2'>ADOPTA UN GATITO Y CONVIERTETE EN LA KAREN QUE SIEMPRE SOÑASTE SER </h2>
  </div>
)
}

export default NavigationBar
