import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdoptionForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    rut: "",
    email: "",
    phoneNumber: "",
    sterilization: "",
    livingEnvironment: "",
    hasOtherCats: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [rutError, setRutError] = useState(false); // Nuevo estado para el error del RUT

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "rut" && !/^[0-9-]*$/.test(value)) {
      return;
    }
    // Agregar guion al RUT después del octavo dígito, "name" es el rut
    if (name === "rut" && value.length === 8) {
      setFormData({
        ...formData,
        [name]: value + "-",
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar el RUT :(
  const validateRut = (rut) => {
    if (!rut || rut.trim() === "") {
      return false;
    }

    const cleanRut = rut.replace(/\./g, "").replace(/-/g, "").toUpperCase();
    const rutDigits = cleanRut.slice(0, -1); // digitos del rurt
    const rutVerifier = cleanRut.slice(-1); // digito verificador
    const rutLength = rutDigits.length;

    if (rutLength < 7 || rutLength > 8) {
      return false; // largo invalido  del RUT
    }

    let sum = 0;
    let multiplier = 2;

    // Recorrer el rut de derecha a izquierda para calcular el dígito verificador
    for (let i = rutDigits.length - 1; i >= 0; i--) {
      sum += parseInt(rutDigits.charAt(i)) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const expectedVerifier = 11 - (sum % 11);
    const verifier = expectedVerifier === 11 ? "0" : expectedVerifier === 10 ? "K" : expectedVerifier.toString();

    return verifier === rutVerifier;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateRut(formData.rut)) {
      setRutError(true);
      return;
    }
    setShowSuccessMessage(true);
    // Reiniciar form
    setFormData(initialFormData);
    setRutError(false);
  };

  return (
    <div className="adoption-form">
      <Container className={`mt-5 mb-5 py-5 container-style`}>
        <h1>Formulario de adopción</h1>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  className="input-adoption-form"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  className="input-adoption-form"
                  type="text"
                  placeholder="Ingresa tu apellido"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formRut">
                <Form.Label>RUT</Form.Label>
                <Form.Control
                  className="input-adoption-form"
                  type="text"
                  placeholder="Ingresa tu RUT, sin puntos y con guión"
                  name="rut"
                  value={formData.rut}
                  onChange={handleInputChange}
                  required
                />
                {rutError && <p className="error-message">Por favor, completa el campo del RUT.</p>}
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  className="input-adoption-form"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Número de Teléfono</Form.Label>
                <Form.Control
                  className="input-adoption-form"
                  type="tel"
                  placeholder="Ingresa tu número de teléfono"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <div className="text-center mb-4">
                <Form.Group controlId="formSterilization">
                  <h5 className="mt-4">Compromiso de Esterilización</h5>
                  <Form.Check
                    type="checkbox"
                    label="Acepto comprometerme a esterilizar al gato"
                    name="sterilization"
                    checked={formData.sterilization}
                    onChange={(e) => setFormData({ ...formData, sterilization: e.target.checked })}
                    required
                  />
                </Form.Group>
              </div>

              <div className="text-center mb-4">
                <Form.Group controlId="formLivingEnvironment">
                  <Form.Label>Entorno de Vida</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Indoor"
                      name="livingEnvironment"
                      value="indoor"
                      checked={formData.livingEnvironment === "indoor"}
                      onChange={handleInputChange}
                      inline
                      required
                    />
                    <Form.Check
                      type="radio"
                      label="Outdoor"
                      name="livingEnvironment"
                      value="outdoor"
                      checked={formData.livingEnvironment === "outdoor"}
                      onChange={handleInputChange}
                      inline
                      required
                    />
                  </div>
                </Form.Group>
              </div>

              <div className="text-center mb-4">
                <Form.Group controlId="formHasOtherCats">
                  <Form.Label>¿Tienes otros gatos?</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Sí"
                      name="hasOtherCats"
                      value="yes"
                      checked={formData.hasOtherCats === "yes"}
                      onChange={handleInputChange}
                      inline
                      required
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="hasOtherCats"
                      value="no"
                      checked={formData.hasOtherCats === "no"}
                      onChange={handleInputChange}
                      inline
                      required
                    />
                  </div>
                </Form.Group>
              </div>

              <div className="text-center">
                <Button className="login-submit-btn" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* toast*/}
      {showSuccessMessage && (
        <Container className="mt-4">
          <Row className="justify-content-md-center">
            <Col xs={12} md={8}>
              <Toast
                show={showSuccessMessage}
                onClose={() => setShowSuccessMessage(false)}
                autohide
                delay={3000}
                style={{ position: "fixed", top: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}
              >
                <Toast.Header>
                  <strong className="me-auto">Éxito</strong>
                </Toast.Header>
                <Toast.Body>Solicitud enviada con éxito, te contactaremos si eres candidato para adoptar.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
export default AdoptionForm;
