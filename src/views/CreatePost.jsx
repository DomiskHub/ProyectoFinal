import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const CreatePost = ({ onSubmit }) => {
  const [crearPost, setCrearPost] = useState({
    formFirstName: '',
    formLastName: '',
    formEmail: '',
    formDescrip: '',
    formPhoto: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCrearPost((prevCrearPost) => ({
      ...prevCrearPost,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(crearPost);
  };

  return (
    <div>
      <Container className='create-post-container'>
        <Card className="create-post-card mt-5">
          <Card.Body>
            <h2>Formulario para crear publicación</h2>
            <Form className='form-crear-publicacion' onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName" className="create-post-input">
                <Form.Control
                  type="text"
                  placeholder="Nombre del gato *"
                  value={crearPost.formFirstName}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formLastName" className="create-post-input">
                <Form.Control
                  type="text"
                  placeholder="Edad del gato *"
                  value={crearPost.formLastName}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="create-post-input">
                <Form.Control
                  type="text"
                  placeholder="Sexo del gato*"
                  value={crearPost.formEmail}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formDescrip" className="create-post-input input-descripcion">
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Descripcion*"
                  value={crearPost.formDescrip}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formPhoto" className="create-post-input">
                <Form.Control
                  type="text"
                  placeholder="Subir foto*"
                  value={crearPost.formPhoto}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <div className="container-btn">
                <Button className='btn-footer' type="submit">
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