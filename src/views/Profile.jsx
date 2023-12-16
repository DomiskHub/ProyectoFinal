import React from 'react'
import { Button, Card } from 'react-bootstrap'
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
              <Tab eventKey="Dar en Adopción" title="Dar en Adopción">Formulario Dar en Adopción</Tab>
              <Tab eventKey="Favoritos" title="Favoritos">Gatos Favoritos</Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Profile
