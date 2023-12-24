import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cats, setCats] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loginData, setLoginData] = useState([
    {
      user: "usuario1",
      password: "contraseña1",
    },
    {
      user: "usuario2",
      password: "contraseña2",
    },
    {
      user: "usuario3",
      password: "contraseña3",
    },
    {
      user: "usuario4",
      password: "contraseña4",
    },
  ]);

  // JSON
  const getData = async () => {
    try {
      const res = await fetch("cats.json");
      const json = await res.json();
      setCats(json);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getData();

  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  useEffect(() => {
    const savedLoginData = localStorage.getItem("loginData");
    if (savedLoginData) {
      setLoginData(JSON.parse(savedLoginData));
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(loginData));
  }, [loginData]);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setUserData(JSON.parse(savedFormData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("formData", JSON.stringify(userData));
    }
  }, [userData]);

  const loginUser = (username, pass) => {
    if (userData && userData.user && userData.password) {
      if (username === userData.user && pass === userData.password) {
        localStorage.setItem("token", "test_token_123456789");
        setIsLoggedIn(true);
        setUser(userData);
        return true;
      }
    } else {
      const usuarioFiltrado = loginData.find((usuario) => usuario.user === username);
      if (usuarioFiltrado && pass === usuarioFiltrado.password) {
        localStorage.setItem("token", "test_token_123456789");
        setIsLoggedIn(true);
        setUser(usuarioFiltrado);
        return true;
      }
    }
  
    return false;
  };
  

  const logoutUser = (navigate) => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleFavoritePhoto = (cat) => {
    cat.liked = !cat.liked;
    const exist = favorites.includes(cat);
    exist
      ? setFavorites(favorites.filter((favorite) => favorite.id !== cat.id))
      : setFavorites([...favorites, cat]);
  };

  const submitForm = (formData) => {
    console.log("Datos del formulario enviados:");
    setUserData(formData);
    localStorage.setItem("token", "test_token_123456789");
  setIsLoggedIn(true);
    setLoginData((prevLoginData) => [
      ...prevLoginData,
      {
        user: formData.username,
        password: formData.password,
      },
    ]);
  };



  const updateUserData = (newUserData) => {
    setUserData(newUserData); //para guardar cambios cuando se edita el perfil
  };


  return (
    <GlobalContext.Provider
      value={{
        cats,
        toggleFavoritePhoto,
        favorites,
        loginUser,
        logoutUser,
        isLoggedIn,
        user,
        submitForm,
        userData,
        updateUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;