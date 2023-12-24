import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Button, Card, Toast } from "react-bootstrap";
import { GlobalContext } from "../context/CardContext";

const CreatePost = () => {
  const { addPost } = useContext(GlobalContext);

  const initialFormData = {
    formFirstName: "",
    formSexo: "",
    formColor: "",
    formEdad: "",
    formDescripcion: "",
    formPhoto: "",
  };

  const [crearPost, setCrearPost] = useState({ ...initialFormData });
  const [error, setError] = useState(""); // Estado para manejar mensajes de error
  const [showToast, setShowToast] = useState(false); // Estado para mostrar el Toast

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "formEdad") {
      // Limitar la entrada a dos dígitos para la edad
      const maxLength = 2;
      const newValue = value.slice(0, maxLength);
      setCrearPost((prevCrearPost) => ({
        ...prevCrearPost,
        [id]: newValue,
      }));
    } else {
      setCrearPost((prevCrearPost) => ({
        ...prevCrearPost,
        [id]: id === "formColor" ? capitalizeFirstLetter(value.toLowerCase()) : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const { id, files } = e.target;
    const reader = new FileReader();
    reader.onloadend = () => {
      setCrearPost((prevCrearPost) => ({
        ...prevCrearPost,
        [id]: reader.result,
      }));
    };
    reader.readAsDataURL(files[0]);
  };

  useEffect(() => {
    localStorage.setItem("formPhoto", crearPost.formPhoto);
  }, [crearPost.formPhoto]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (
      !crearPost.formFirstName ||
      !crearPost.formSexo ||
      !crearPost.formColor ||
      !crearPost.formEdad ||
      !crearPost.formDescripcion ||
      !crearPost.formPhoto
    ) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    const uniquePost = { ...crearPost, id: new Date().getTime() };
    addPost(uniquePost);
    setCrearPost({ ...initialFormData }); // Reiniciar los campos del formulario
    setError(""); // Limpiar mensaje de error
    setShowToast(true); // Mostrar el Toast
  };

  return (
    <div>
      <Container className="create-post-container">
        <Card className="create-post-card mt-5">
          <Card.Body>
            <h2>Formulario para crear publicación</h2>
            <Form className="form-crear-publicacion" onSubmit={handleSubmit}>
              <Form.Group
                controlId="formFirstName"
                className="create-post-input"
              >
                <Form.Control
                  type="text"
                  placeholder="Nombre del gato *"
                  value={crearPost.formFirstName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formSexo" className="create-post-input">
                <Form.Control
                  as="select"
                  value={crearPost.formSexo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar sexo</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formColor" className="create-post-input">
                <Form.Control
                  as="select"
                  className="input-adoption-form"
                  name="color"
                  value={crearPost.formColor}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar color</option>
                  <option value="negro">Negro</option>
                  <option value="blanco">Blanco</option>
                  <option value="gris">Gris</option>
                  <option value="calico">Calico</option>
                  <option value="siames">Siames</option>
                  <option value="otro">Otro</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formEdad" className="create-post-input">
                <Form.Control
                  type="number"
                  placeholder="Edad del gato"
                  value={crearPost.formEdad}
                  onChange={handleInputChange}
                  required
                  inputMode="numeric"
                  min="0"
                  max="99"
                />
              </Form.Group>
              <Form.Group
                controlId="formDescripcion"
                className="create-post-input"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Descripción"
                  value={crearPost.formDescripcion}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhoto" className="create-post-input">
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
              <div className="container-btn">
                <Button className="btn-footer" type="submit">
                  Publicar
                </Button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
              {/* Mostrar mensaje de error si existe */}
              <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                autohide
                delay={3000}
                style={{
                  position: "fixed",
                  top: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              >
                <Toast.Header>
                  <strong className="me-auto">Publicación</strong>
                </Toast.Header>
                <Toast.Body>Publicación creada con éxito</Toast.Body>
              </Toast>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CreatePost;
