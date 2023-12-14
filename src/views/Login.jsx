import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className='login-container'>
      <Card className="login-card mt-5">
        <Card.Body>
          <div className="login-header">
            <div className="texto">INICIAR SESION</div>
          </div>
          <Form>
            <Form.Group controlId="formFirstName" className="login-input">
              <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="login-input">
              <Form.Control type="text" placeholder="Contrasena *" />
            </Form.Group>

            <div className="container-btn">
              <Button className="sesion-submit-btn" type="submit">
                Iniciar Sesion
              </Button>
            </div>
            <div className="container-btn">
              <Button className="login-submit-btn" type="submit">
                Crear mi cuenta
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
