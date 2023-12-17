import { useContext } from "react";
import { GlobalContext } from "../context/CardContext.jsx";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

const Gallery = () => {
  const { cats } = useContext(GlobalContext);

  return (
    <Container>
      <div className="grid-container">
        {cats &&
          cats.map((cat, index) => (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img className="catcard-img" variant="top" src={cat.imagen} />
              <Card.Body>
                <Card.Title>{cat.nombre}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Sexo:</strong> {cat.sexo}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Color:</strong> {cat.color}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Edad:</strong> {cat.edad}
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-flex justify-content-center">
                    <Button className="button-card" variant="primary">
                      Adopta
                    </Button>
                    <Button className="button-card-detail" variant="primary">
                      Detalles
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default Gallery;
