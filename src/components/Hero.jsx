import { Carousel } from "react-bootstrap";
import imgHero1 from "../assets/imgs/hero1.jpg";
import imgHero2 from "../assets/imgs/somos-gif.gif";
import imgHero3 from "../assets/imgs/hero3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Carousel className="carousel-hero">
        <Carousel.Item>
          <img className="d-block w-100 header-img" src={imgHero1} alt="Adopta un gato" />
          <Carousel.Caption className="caption-hero">
            <h3>Adopta, NO COMPRES!</h3>
            <p>Hay gatitos esperando por ti</p>
            <Link to="/galeria" className="m-1">
              <button className="btn nav-adopt-button">Ver Gatitos</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 header-img" src={imgHero2} alt="Adopta un gato" />
          <Carousel.Caption className="caption-hero">
            <h3>¿Quieres saber más sobre nosotros?</h3>
            <p>Somos un grupo de Karens</p>
            <Link to="/quienes_somos" className="m-1">
              <button className="btn nav-adopt-button">Quiénes Somos</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 header-img" src={imgHero3} alt="Adopta un gato" />
          <Carousel.Caption className="caption-hero">
            <h3>¿Tienes dudas?</h3>
            <p>Escríbenos o visitanos</p>
            <a href="#footer" className="m-1 btn nav-adopt-button">
              Contáctanos
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
