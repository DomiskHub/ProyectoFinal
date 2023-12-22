import React from "react";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import fotoPerfil from "../assets/imgs/foto-perfil.jpg"; // Importa la imagen
import CreatePost from "./CreatePost";
import Favorites from "./Favorites";
import MyPosts from "./MyPosts";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-sm-12 boxDatos-miPerfil p-5">
          <div>
            <h1>Mi Perfil</h1>
            <img src={fotoPerfil} alt="Foto de perfil" className="img-fluid rounded-circle mb-5" />
            <ul>
              <li>Nombre:</li>
              <li>Dirección:</li>
              <li>Correo:</li>
            </ul>
            <div className="btns-perfil mb-5">
              <Button className="btn-editarPerfil">Editar Perfil</Button>
              <Button className="btn-cerrar-sesion" onClick={logout}>
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 p-5">
          <div className="tab-Profile1">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab className="text-center mt-5" eventKey="Mis Publicaciones" title="Mis Publicaciones">
                Mis Publicaciones <MyPosts />
              </Tab>
              <Tab className="text-center mt-5" eventKey="Dar en Adopción" title="Dar en Adopción">
                Crear publicacion <CreatePost />
              </Tab>
              <Tab className="text-center mt-5" eventKey="Favoritos" title="Favoritos">
                <strong>Gatos Favoritos</strong>
                <Favorites />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
