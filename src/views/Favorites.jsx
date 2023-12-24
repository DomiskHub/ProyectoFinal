import { GlobalContext } from "../context/CardContext";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import IconHeart from "../components/IconHeart";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, toggleFavoritePhoto} =
    useContext(GlobalContext);

  // Combine both favorites and posts into a single array
  const combinedArray = [...favorites];

  
  

  return (
    <Container>
      <div className="grid-container-favorites mt-5">
        {combinedArray.map((cat, index) => (
          <Card
            className="text-center mx-auto"
            key={index}
            style={{ width: "18rem" }}
          >
            <Card.Img
              className="catcard-img"
              variant="top"
              src={
                cat.imagen ||
                (cat.formPhoto instanceof File
                  ? URL.createObjectURL(cat.formPhoto)
                  : cat.formPhoto)
              }
            />
            <div className="icon" onClick={() => toggleFavoritePhoto(cat )}>
              <IconHeart filled={cat.liked} />
            </div>
            <Card.Body>
              <Card.Title>{cat.nombre || cat.formFirstName}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <strong>Sexo:</strong> {cat.sexo || cat.formSexo}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Color:</strong> {cat.color || cat.formColor}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Edad:</strong> {cat.edad || cat.formEdad}
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex justify-content-center">
                  <Link to="/adopta">
                    <Button className="button-card button-card-gallery">
                      Adoptar
                    </Button>
                  </Link>
                  <Button
                    className="button-card"
                    onClick={() => navigate(`/detalle-gato/${cat.id}`)}
                  >
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

export default Favorites;
