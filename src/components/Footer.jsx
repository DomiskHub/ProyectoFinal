import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const Footer = () => (

  <div className="footer-container">

        <div className="form-map">
            {/* formulario */}
              <div className="footer-form">
                <h3>Contáctanos</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="E-mail  " />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Mensaje"/>
                        </Form.Group>
                    </Form>
                    <Button className='btn-footer'>Enviar</Button>
              </div>

            {/* mapa */}
              <div className="mapa-footer">
                  <h3>Ubicación</h3>
                  <iframe
                    title="Mapa de Google"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.846826780496!2d-70.59076392505936!3d-33.453296973388305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfb99970a24d%3A0xf5816042d8bc3c1b!2sAugusto%20Villanueva%20198%2C%207790730%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1702758986034!5m2!1ses!2scl"
                    width="500"
                    height="150"
                    style={{ border: '2' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  <p>#AugustoVillanueva 198, Ñuñoa</p>
              </div>
          </div>


        {/* RRSS y txt legal*/}
        <div className="rrss-legal">

          <div className="social-footer">

            <a href="https://www.instagram.com/" target="blank">
              <FontAwesomeIcon icon={faInstagram} className="m-3 icons" />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FontAwesomeIcon icon={faFacebook} className="m-3 icons" />
            </a>
            <a href="https://wa.me/" target="blank">
              <FontAwesomeIcon icon={faWhatsapp} className="m-3 icons" />
            </a>
          </div>
          <p className="text-center">© 2023 Se una KAREN</p>
        </div>
  </div>
);

export default Footer;
