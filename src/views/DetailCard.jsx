import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/CardContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const DetailCard = () => {
  const { id } = useParams();
  const { cats } = useContext(GlobalContext);
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID from useParams:", id);
    console.log("Cats from GlobalContext:", cats);
    // parseInt(id) se utiliza para convertir id a un número entero antes de realizar la comparación en el find.
    const catDetail = cats.find((cat) => cat.id === parseInt(id));

    if (catDetail) {
      setCat(catDetail);
      setLoading(false);
    }
  }, [id, cats]);

  if (loading) {
    return <div className="container-detail-card-dani">Cargando...</div>;
  }

  return (
    <div className="container-detail-card-dani">
      {loading ? (
        <>cargando</>
      ) : (
        <Card className="detail-card-dani">
          <div className="row">
            <div className="col-12 col-md-6">
              <Card.Img className="img-fluid" variant="top" src={cat.imagen} />
            </div>
            <div className="col-12 col-md-6">
              <Card.Body className="d-flex flex-column justify-content-between h-100">
                <div>
                  <Card.Title className="mb-4 mt-4">
                    <strong>{cat.nombre}</strong>
                  </Card.Title>
                  <Card.Text>
                    <strong> Color: </strong>
                    {cat.color}
                  </Card.Text>
                  <Card.Text>
                    <strong>Sexo: </strong>
                    {cat.sexo}
                  </Card.Text>
                  <Card.Text>
                    <strong>Edad: </strong>
                    {cat.edad}
                  </Card.Text>
                  <Card.Text>
                    <strong>Pelaje: </strong>
                    {cat.pelaje}
                  </Card.Text>
                  <Card.Text>
                    <strong>Detalle: </strong>
                    {cat.descripcion}
                  </Card.Text>
                  <Card.Text>
                    <strong>Ubicacion:</strong> {cat.ubicacion}
                  </Card.Text>
                  <Card.Text>
                    <strong>Esterilizado:</strong> {cat.esterilizado}
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Link to="/adopta">
                    <Button className="button-card button-card-gallery mt-3">Adoptar</Button>
                  </Link>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DetailCard;
