import { useContext } from "react";
import { GlobalContext } from "../context/CardContext.jsx";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"


const Gallery = () => {
  const { cats } = useContext(GlobalContext);
  const navigate = useNavigate()


  return (
    <Container>
      <div className="grid-container">
        {cats &&
          cats.map((cat, index) => (
            <Card className="text-center" key={index} style={{ width: "18rem" }}>
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
                        {/* //al boton mas info le hice la funcion directamente (funcion anonima) */}
                        <Button variant="danger" onClick={() => navigate(`/detalle-gato/${cat.id}`)}> 
                            Mas info
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
