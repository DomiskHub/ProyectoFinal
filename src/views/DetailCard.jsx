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
          <Card.Img className="cat-detail-img" variant="top" src={cat.imagen} />
          <Card.Body>
            <Card.Title>
              <strong>{cat.nombre}</strong>
            </Card.Title>
            <Card.Text>{cat.descripcion}</Card.Text>
            <div>
            <Link to="/adopta">
                  <Button className="button-card button-card-gallery">Adoptar</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default DetailCard;