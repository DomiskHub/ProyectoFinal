import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { GlobalContext } from "../context/CardContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DetailCard = () => {
  const { id } = useParams();
  const { cats, posts } = useContext(GlobalContext);
  const [cat, setCat] = useState(null);
  const [isUserPostedCat, setIsUserPostedCat] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userPostedCatDetail = posts.find((cat) => cat.id === parseInt(id));
    const defaultCatDetail = cats.find((cat) => cat.id === parseInt(id));

    if (userPostedCatDetail) {
      setCat(userPostedCatDetail);
      setIsUserPostedCat(true);
    } else if (defaultCatDetail) {
      setCat(defaultCatDetail);
    }

    setLoading(false);
  }, [id, cats, posts]);

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
              <Card.Img
                className="img-fluid"
                variant="top"
                src={isUserPostedCat ? cat.formPhoto : cat.imagen}
              />
            </div>
            <div className="col-12 col-md-6">
              <Card.Body className="d-flex flex-column justify-content-between h-100">
                <div>
                  <Card.Title className="mb-4 mt-4">
                    <strong>{isUserPostedCat ? cat.formFirstName : cat.nombre}</strong>
                  </Card.Title>
                  <Card.Text>
                    <strong> Color: </strong>
                    {isUserPostedCat ? cat.formColor : cat.color}
                  </Card.Text>
                  <Card.Text>
                    <strong>Sexo: </strong>
                    {isUserPostedCat ? cat.formSexo : cat.sexo}
                  </Card.Text>
                  <Card.Text>
                    <strong>Edad: </strong>
                    {isUserPostedCat ? cat.formEdad : cat.edad}
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
