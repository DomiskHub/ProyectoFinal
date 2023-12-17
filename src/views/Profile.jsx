import React from 'react'
import { Button } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import fotoPerfil from '../assets/imgs/foto-perfil.jpg'; // Importa la imagen
import CreatePost from './CreatePost';
import Favorites from './Favorites';
import MyPosts from './MyPosts';





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
      <div className='btns-perfil'>
      <Button className='btn-editarPerfil'>Editar Perfil</Button>
      <Button className='btn-cerrar-sesion'>Cerrar Sesión</Button>
      </div>
    </div>

        <div className='tab-Profile'>
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example" 
            className="mb-3">
              <Tab eventKey="Mis Publicaciones" title="Mis Publicaciones">Mis Publicaciones <MyPosts/></Tab>
              <Tab eventKey="Dar en Adopción" title="Dar en Adopción"> Crear publicacion <CreatePost/></Tab>
              <Tab eventKey="Favoritos" title="Favoritos">Gatos Favoritos<Favorites/></Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Profile
