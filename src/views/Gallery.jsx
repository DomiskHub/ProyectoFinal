import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/CardContext.jsx";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import IconHeart from "../components/IconHeart.jsx";

const Gallery = () => {
  const [search, setSearch] = useState("");
  const { cats, toggleFavoritePhoto, isLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (!cats) {
    return <div>Cargando gatos...</div>;
  }

  const filteredCats = cats.filter((cat) =>
    cat.nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Container>
      <div>
        <h1 className="m-4 text-center">Gatitos en adopción</h1>
        <div className="input-search">
          <input type="text" placeholder="Buscar por nombre..." value={search} onChange={(e) => setSearch(e.target.value)} className="m-2 p-2 input-style" />
        </div>
      </div>
      <div className="grid-container">
        {filteredCats.map((cat, index) => (
          <Card className="text-center" key={index} style={{ width: "18rem" }}>
            <Card.Img className="catcard-img" variant="top" src={cat.imagen} />
            {isLoggedIn && (
              <div className="icon" onClick={() => toggleFavoritePhoto(cat)}>
                <IconHeart filled={cat.liked} />
              </div>
            )}
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
                  <Link to="/adopta">
                    <Button className="button-card button-card-gallery">Adoptar</Button>
                  </Link>
                  <Button className="button-card" onClick={() => navigate(`/detalle-gato/${cat.id}`)}>
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
