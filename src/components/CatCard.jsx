import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const CatCard = ({ cat }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card className="d-flex justify-content-center align-items-center">
        <Card.Img className="catcard-img" variant="top" src={cat.imagen} />
        <Card.Body className="text-center">
          <Card.Title>
            <strong> {cat.nombre}</strong>
          </Card.Title>
          <Card.Text>
            <strong>Sexo:</strong> {cat.sexo}
            <br />
            <strong>Color:</strong> {cat.color}
            <br />
            <strong>Edad:</strong> {cat.edad}
          </Card.Text>

          <div className="d-flex justify-content-center">
            <Link to="/adopta">
              <Button className="button-card button-card-gallery">Adoptar</Button>
            </Link>
            {/* //al boton mas info le hice la funcion directamente (funcion anonima) */}
            <Button className="button-card" onClick={() => navigate(`/detalle-gato/${cat.id}`)}>
              +Info
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CatCard;
