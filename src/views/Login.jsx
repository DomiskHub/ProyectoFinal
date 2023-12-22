import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/CardContext";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(GlobalContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedIn = loginUser(user, password);
    if (loggedIn) {
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
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formFirstName" className="login-input">
              <Form.Control type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formLastName" className="login-input password-input">
              <div className="password-container">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              </div>
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
