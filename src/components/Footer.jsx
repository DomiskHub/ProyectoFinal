import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-white py-2 fixed-bottom">
    <Container>
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <footer className="d-flex justify-content-start">
            <a href="https://www.instagram.com/" target="blank">
              <FontAwesomeIcon icon={faInstagram} className="m-3 icons" />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FontAwesomeIcon icon={faFacebook} className="m-3 icons" />
            </a>
            <a href="https://wa.me/" target="blank">
              <FontAwesomeIcon icon={faWhatsapp} className="m-3 icons" />
            </a>
          </footer>
        </Col>
        <Col md={6} className="text-md-right d-flex align-items-center justify-content-end">
          <Link to="/contacto" className="text-white ml-auto">
            Contacto
          </Link>
        </Col>
      </Row>
      <p className="text-center m-1">© 2023 Se una KAREN</p>
    </Container>
  </footer>
);

export default Footer;
