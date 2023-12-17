import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Carousel className="carousel-hero">
        <Carousel.Item>
          <img
            className="d-block w-100 header-img"
            src="https://www.shutterstock.com/image-photo/funny-ginger-cat-sitting-cardboard-600nw-1939653673.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption-hero">
            <h3>Adopta, NO COMPRES!</h3>
            <p>Hay gatitos esperando por ti</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 header-img"
            src="https://www.shutterstock.com/image-photo/funny-ginger-cat-sitting-cardboard-600nw-1939653673.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption-hero">
            <h3>Título de la diapositiva 2</h3>
            <p>Descripción de la diapositiva 2.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 header-img"
            src="https://www.shutterstock.com/image-photo/funny-ginger-cat-sitting-cardboard-600nw-1939653673.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption-hero">
            <h3>Título de la diapositiva 3</h3>
            <p>Descripción de la diapositiva 3.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
