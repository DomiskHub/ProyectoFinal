import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rut: "",
    email: "",
    phoneNumber: "",
    sterilization: "",
    livingEnvironment: "",
    hasOtherCats: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="adoption-form">
      <Container className={`mt-5 container-style`}>
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
                  placeholder="Ingresa tu RUT"
                  name="rut"
                  value={formData.rut}
                  onChange={handleInputChange}
                  required
                />
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
    </div>
  );
};
export default AdoptionForm;
