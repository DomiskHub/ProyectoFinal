import React, { useContext,useEffect, useState, } from "react";
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
  const [selectedSex, setSelectedSex] = useState("Todos");
  const [selectedColor, setSelectedColor] = useState("Todos");
  const { cats, toggleFavoritePhoto, isLoggedIn, gallery , setGallery } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (!cats) {
    return <div>Cargando gatos...</div>;
  }


  const filteredCats = cats.filter((cat) => {
    const isNameMatch = cat.nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const isSexMatch = selectedSex === "Todos" || cat.sexo === selectedSex;
    const isColorMatch = selectedColor === "Todos" || cat.color === selectedColor;

    return isNameMatch && isSexMatch && isColorMatch;
  });
  const galleryPosts = gallery.map((post, index) => (
    <Card className="text-center" key={index} style={{ width: "18rem" }}>
      <Card.Img className="catcard-img" variant="top" src={post.formPhoto} />
      {isLoggedIn && (
        <div className="icon" onClick={() => toggleFavoritePhoto(post)}>
          <IconHeart filled={post.liked} />
        </div>
      )}
      <Card.Body>
        <Card.Title>{post.formFirstName}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Sexo:</strong> {post.formSexo}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Color:</strong> {post.formColor}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Edad:</strong> {post.formEdad}
        </ListGroup.Item>
        <ListGroup.Item>
          {isLoggedIn ? (
            <div className="d-flex justify-content-between">
              <Link to="/adopta">
                <Button className="button-card button-card-gallery me-2">Adoptar</Button>{" "}
              </Link>
              <Button className="button-card" onClick={() => navigate(`/detalle-gato/${post.id}`)}>
                Mas info
              </Button>
            </div>
          ) : (
            <Button className="button-card" onClick={() => navigate(`/detalle-gato/${post.id}`)}>
              Mas info
            </Button>
          )}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  ));
  
  return (
    <Container>
      <div>
        <h1 className="m-4 text-center">Gatitos en adopción</h1>
        <div className="input-search">
          <input type="text" placeholder="Buscar por nombre..." value={search} onChange={(e) => setSearch(e.target.value)} className="m-2 p-2 input-style" />
          <select value={selectedSex} onChange={(e) => setSelectedSex(e.target.value)} className="m-2 p-2 input-style">
            <option value="Todos">Sexo</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
          <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="m-2 p-2 input-style">
            <option value="Todos">Color</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris">Gris</option>
            <option value="Calico">Calico</option>
            <option value="Siames">Siames</option>
          </select>
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
                {isLoggedIn ? (
                  <div className="d-flex justify-content-between">
                    <Link to="/adopta">
                      <Button className="button-card button-card-gallery me-2">Adoptar</Button>{" "}
                    </Link>
                    <Button className="button-card" onClick={() => navigate(`/detalle-gato/${cat.id}`)}>
                      Mas info
                    </Button>
                  </div>
                ) : (
                  <Button className="button-card" onClick={() => navigate(`/detalle-gato/${cat.id}`)}>
                    Mas info
                  </Button>
                )}
              </ListGroup.Item>
            </ListGroup >
          </Card  >
        ))}
        {galleryPosts}
      </div>
    </Container>
  );
};

export default Gallery;