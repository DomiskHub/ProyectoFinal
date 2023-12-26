import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const DetailCardPosts = () => {
  const { id } = useParams();
  const { posts } = useContext(GlobalContext);
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID from useParams:", id);
    console.log("posts from GlobalContext:", posts);
    // parseInt(id) se utiliza para convertir id a un número entero antes de realizar la comparación en el find.
    const catDetail = posts.find((cat) => cat.id === parseInt(id));
    console.log(catDetail);

    if (catDetail) {
      setCat(catDetail);
      setLoading(false);
    }
  }, [id, posts]);

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
              <Card.Img className="img-fluid" variant="top" src={cat.formPhoto} />
            </div>
            <div className="col-12 col-md-6">
              <Card.Body className="d-flex flex-column justify-content-between h-100">
                <div>
                  <Card.Title className="mb-4 mt-4">
                    <strong>Nombre:{cat.formFirstName}</strong>
                  </Card.Title>
                  <Card.Text>
                    <strong> Color: </strong>
                    {cat.formColor}
                  </Card.Text>
                  <Card.Text>
                    <strong>Sexo: </strong>
                    {cat.formSexo}
                  </Card.Text>
                  <Card.Text>
                    <strong>Edad: </strong>
                    {cat.formEdad}
                  </Card.Text>
                  <Card.Text>
                    <strong>Descripción:</strong>
                    {cat.formDescripcion}
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

export default DetailCardPosts;
