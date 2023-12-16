import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Hero from '../components/Hero';
import fotoPerfil from '../assets/imgs/foto-perfil.jpg'; // Importa la imagen





const Profile = () => {
  return (
    <div className='container-profileView'>
    <div className='boxDatos-miPerfil'>
      <h1>Mi Perfil</h1>
      <img src={fotoPerfil} alt="Foto de perfil" />
      <ul>
        <li>Nombre:</li>
        <li>Dirección:</li>
        <li>Correo:</li>
      </ul>
      <Button className='btn-editarPerfil'>Editar Perfil</Button>
    </div>

        <div className='tab-Profile'>
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example" 
            className="mb-3">
              <Tab eventKey="Mis Publicaciones" title="Mis Publicaciones">Mis Publicaciones <Hero/></Tab>
              <Tab eventKey="Dar en Adopción" title="Dar en Adopción"><Container className='create-post-container'>
      <Card className="create-post-card mt-5">
        <Card.Body>
          <div className="create-post-header">
            <div className="texto">FORMULARIO PARA CREAR PUBLICACION</div>
          </div>
          <Form>
            <Form.Group controlId="formFirstName" className="create-post-input">
              <Form.Control type="text" placeholder="Nombre del gato *" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="create-post-input">
              <Form.Control type="text" placeholder="Edad del gato *" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="create-post-input">
              <Form.Control type="text" placeholder="Sexo del gato*" />
            </Form.Group>

            <Form.Group controlId="formAddress" className="create-post-input " >
              <Form.Control type="text" as="textarea" rows={3} placeholder="Descripcion*" />
            </Form.Group>
            <Form.Group controlId="formAddress" className="create-post-input">
              <Form.Control type="text" placeholder="Subir foto*" />
            </Form.Group>

            <div className="container-btn">
              <Button className="create-post-submit-btn" type="submit">
                PUBLICAR
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container></Tab>
              <Tab eventKey="Favoritos" title="Favoritos">Gatos Favoritos</Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Profile
