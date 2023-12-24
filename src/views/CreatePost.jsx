import React, { useState, useContext } from "react";
import { Container, Form, Button, Card } from 'react-bootstrap';
import { GlobalContext } from "../context/CardContext";
import { useEffect } from "react";

const CreatePost = () => {
  const { addPost } = useContext(GlobalContext);
  const [crearPost, setCrearPost] = useState({
    formFirstName: '',
    formSexo: '',
    formColor: '',
    formEdad: '',
    formPhoto: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCrearPost((prevCrearPost) => ({
      ...prevCrearPost,
      [id]: value,
    }));
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
    localStorage.setItem('formPhoto', crearPost.formPhoto);
  }, [crearPost.formPhoto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniquePost = { ...crearPost, id: new Date().getTime() };
    addPost(uniquePost);
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
                />
              </Form.Group>

              <Form.Group controlId="formSexo" className="create-post-input">
                <Form.Control
                  type="text"
                  placeholder="Sexo del gato *"
                  value={crearPost.formSexo}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formColor" className="create-post-input">
                <Form.Control
                  type="text"
                  placeholder="Color del gato*"
                  value={crearPost.formColor}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formEdad"
                className="create-post-input input-descripcion"
              >
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Edad del gato*"
                  value={crearPost.formEdad}
                  onChange={handleInputChange}
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
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CreatePost;