import React, { useState, useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/CardContext";

const SignUp = () => {
  const { submitForm } = useContext(GlobalContext);
  const [campos, setCampos] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoggedIn] = useState(true)
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setError(false);
    setPasswordError(false);
    setPasswordMatchError(false);

    setCampos({ ...campos, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, email, address, password, confirmPassword } = campos;

    if (!firstName || !lastName || !username || !email || !address || !password || !confirmPassword) {
      setError(true);
      return;
    }
    if (password.length < 6 || !/\d/.test(password)) {
      setPasswordError(true);
      return;
    }
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Llama al método submitForm del contexto para guardar los datos del usuario
    await submitForm(campos);

    // Después de crear la cuenta, navega automáticamente al perfil del usuario
    navigate("/perfil");
  };
  return (
    <Container className="signup-container">
      <Card className="signup-card mt-5">
        <Card.Body>
          <h1>Crear mi cuenta</h1>
          <Form className="form-sign-up" onSubmit={handleSubmit}>
            <Form.Group controlId="firstName" className="signup-input">
              <Form.Control required type="text" placeholder="Nombre *" value={campos.firstName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="lastName" className="signup-input">
              <Form.Control required type="text" placeholder="Apellidos *" value={campos.lastName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="username" className="signup-input">
              <Form.Control required type="text" placeholder="Usuario *" value={campos.username} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="email" className="signup-input">
              <Form.Control required type="email" placeholder="Correo electrónico *" value={campos.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="address" className="signup-input">
              <Form.Control required type="text" placeholder="Dirección *" value={campos.address} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="password" className="signup-input">
              <Form.Control required type="password" placeholder="Contraseña *" value={campos.password} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="signup-input">
              <Form.Control required type="password" placeholder="Confirmar Contraseña *" value={campos.confirmPassword} onChange={handleChange} />
            </Form.Group>

            {error && <p className="text-danger">Por favor completa todos los campos obligatorios.</p>}
            {passwordError && <p className="text-danger">La contraseña debe tener al menos 6 caracteres y contener al menos un número.</p>}
            {passwordMatchError && <p className="text-danger">Las contraseñas no coinciden. Por favor verifica que las contraseñas sean iguales.</p>}

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