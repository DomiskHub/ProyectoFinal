import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://www.shutterstock.com/image-photo/funny-ginger-cat-sitting-cardboard-600nw-1939653673.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Título de la diapositiva 1</h3>
            <p>Descripción de la diapositiva 1.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-photo/funny-ginger-cat-sitting-cardboard-600nw-1939653673.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Título de la diapositiva 2</h3>
            <p>Descripción de la diapositiva 2.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-photo/funny-ginger-cat-sitting-cardboard-600nw-1939653673.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Título de la diapositiva 2</h3>
            <p>Descripción de la diapositiva 2.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
