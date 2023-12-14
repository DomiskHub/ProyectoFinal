import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  return (
    <Container className='signup-container'>
      <Card className="signup-card mt-5">
        <Card.Body>
          <div className="signup-header">
            <div className="texto">CREAR MI CUENTA</div>
          </div>
          <Form>
            <Form.Group controlId="formFirstName" className="signup-input">
            
              <Form.Control type="text" placeholder="Nombre *" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="signup-input">
            
              <Form.Control type="text" placeholder="Apellidos *" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="signup-input">
            
              <Form.Control type="email" placeholder="Correo electronico *" />
            </Form.Group>

            <Form.Group controlId="formAddress" className="signup-input">
            
              <Form.Control type="text" placeholder="Direccion *" />
            </Form.Group>

            <div className="container-btn">
              <Button className="signup-submit-btn" type="submit">
                Crear mi cuenta
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;