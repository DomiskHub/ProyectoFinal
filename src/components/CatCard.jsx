import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CatCard = ({ cat }) => {
  return (
    <div>
      <Card className="d-flex justify-content-center align-items-center">
        <Card.Img className="catcard-img" variant="top" src={cat.imagen} />
        <Card.Body className="text-center">
          <Card.Title>
            <strong> {cat.nombre}</strong>
          </Card.Title>
          <Card.Text>
            <Card.Text>
              <strong>Sexo:</strong> {cat.sexo}
              <br />
              <strong>Color:</strong> {cat.color}
              <br />
              <strong>Edad:</strong> {cat.edad}
            </Card.Text>
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className="button-card" variant="primary">
              Adopta
            </Button>
            <Button className="button-card-detail" variant="primary">
              Detalles
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CatCard;
