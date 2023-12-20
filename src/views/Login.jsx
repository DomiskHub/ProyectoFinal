import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginData = [
    {
      user: "usuario1",
      password: "contraseña1",
    },
    {
      user: "usuario2",
      password: "contraseña2",
    },
    {
      user: "usuario3",
      password: "contraseña3",
    },
    {
      user: "usuario4",
      password: "contraseña4",
    },
  ];

  const login = (e) => {
    e.preventDefault();

    const usuarioFiltrado = loginData.find((usuario) => usuario.user === user);
    console.log(usuarioFiltrado);

    if (password === usuarioFiltrado.password) {
      localStorage.setItem("token", "test_token_123456789");
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Card className="login-card mt-5 login-container">
        <h1>Iniciar Sesión</h1>
        <Card.Body>
          <Form onSubmit={(e) => login(e)}>
            <Form.Group controlId="formFirstName" className="login-input">
              <Form.Control type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formLastName" className="login-input">
              <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <div className="container-btn">
              <Button className="sesion-submit-btn" type="submit">
                Iniciar Sesión
              </Button>
              <Button className="login-submit-btn" type="submit">
                Crear cuenta
              </Button>
            </div>
            {error && <small>* Usuario o contraseña incorrecto(s)</small>}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Login;
