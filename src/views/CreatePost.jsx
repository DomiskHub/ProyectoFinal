import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const CreatePost = () => {
  return (
    <div>
                      
    <Container className='create-post-container'>
      <Card className="create-post-card mt-5">
        <Card.Body>
            <h2>Formulario para crear publicación</h2>
          <Form className='form-crear-publicacion'>
            <Form.Group controlId="formFirstName" className="create-post-input">
              <Form.Control type="text" placeholder="Nombre del gato *" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="create-post-input">
              <Form.Control type="text" placeholder="Edad del gato *" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="create-post-input">
              <Form.Control type="text" placeholder="Sexo del gato*" />
            </Form.Group>

            <Form.Group controlId="formAddress" className="create-post-input input-descripcion" >
              <Form.Control type="text" as="textarea" rows={3} placeholder="Descripcion*" />
            </Form.Group>
            <Form.Group controlId="formAddress" className="create-post-input">
              <Form.Control type="text" placeholder="Subir foto*" />
            </Form.Group>

            <div className="container-btn">
              <Button className='btn-footer' type="submit">Publicar</Button>

            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </div>
  )
}

export default CreatePost
