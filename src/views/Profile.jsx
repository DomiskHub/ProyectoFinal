import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import fotoPerfil from "../assets/imgs/foto-perfil.jpg";
import CreatePost from "./CreatePost";
import Favorites from "./Favorites";
import MyPosts from "./MyPosts";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { logoutUser, userData, updateUserData, profileImage, setProfileImage } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedData({
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      address: userData?.address,
      email: userData?.email,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveClick = () => {
    updateUserData(editedData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const logout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-sm-12 boxDatos-miPerfil p-5">
          <div>
            <h1>Mi Perfil</h1>
            <img src={profileImage} alt="Foto de perfil" className="fotoPerfil" />
            {isEditing ? (
              <form className="editar-perfil-form">
                <label>Nombre:</label>
                <input type="text" name="firstName" value={editedData.firstName} onChange={handleInputChange} />

                <label>Apellido:</label>
                <input type="text" name="lastName" value={editedData.lastName} onChange={handleInputChange} />

                <label>Dirección:</label>
                <input type="text" name="address" value={editedData.address} onChange={handleInputChange} />

                <label>Correo:</label>
                <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
                <label>Foto de perfil:</label>
                <img src={profileImage} alt="Profile" className="fotoPerfil" />
                <input type="file" onChange={handleFileChange} />

                <Button className="btn-guardar-cambios" onClick={handleSaveClick}>
                  Guardar Cambios
                </Button>
              </form>
            ) : (
              <ul>
                <li>
                  Nombre: {userData?.firstName} {userData?.lastName}
                </li>
                <li>Dirección: {userData?.address}</li>
                <li>Correo: {userData?.email}</li>
              </ul>
            )}
            <div className="btns-perfil mb-5">
              {isEditing ? null : (
                <Button className="btn-editarPerfil" onClick={handleEditClick}>
                  Editar Perfil
                </Button>
              )}
              <Button className="btn-cerrar-sesion-boton" onClick={() => logoutUser(navigate)}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} /> Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 p-5">
          <div className="tab-Profile1">
            <Tabs defaultActiveKey="Mis Publicaciones" id="uncontrolled-tab-example" className="mb-3">
              <Tab className="text-center mt-5" eventKey="Mis Publicaciones" title="Mis Publicaciones">
                Mis Publicaciones <MyPosts />
              </Tab>
              <Tab className="text-center mt-5" eventKey="Dar en Adopción" title="Dar en Adopción">
                Crear publicación <CreatePost />
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
