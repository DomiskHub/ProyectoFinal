import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
  <footer className="bg-dark text-white py-2 fixed-bottom">
    <Container>
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <footer className="d-flex justify-content-start">
            {/* Logos de redes sociales */}
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} className="m-3 icons" />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} className="m-3 icons" />
            </a>
            <a href="https://wa.me/">
              <FontAwesomeIcon icon={faWhatsapp} className="m-3 icons"/>
            </a>
          </footer>
        </Col>
        <Col md={6} className="text-md-right d-flex align-items-center justify-content-end">
          {/* Enlace de contacto */}
          <p href="/contacto" className="text-white ml-auto">Contacto</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
