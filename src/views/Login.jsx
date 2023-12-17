import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className='login-container'>
      <Card className="login-card mt-5">
      <h1>Iniciar Sesión</h1>
        <Card.Body>
          <Form>
            <Form.Group controlId="formFirstName" className="login-input">
              <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="login-input">
              <Form.Control type="password" placeholder="Contrasena *" />
            </Form.Group>

            <div className="container-btn">
              <Button className="sesion-submit-btn" type="submit">
                Iniciar Sesion
              </Button>
              <Button className="login-submit-btn" type="submit">
                Crear cuenta
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
