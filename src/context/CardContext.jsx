import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cats, setCats] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // LOGIN TOKEN
  const loginData = [
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
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const loginUser = (username, pass) => {
    const usuarioFiltrado = loginData.find((usuario) => usuario.user === username);
    if (usuarioFiltrado && pass === usuarioFiltrado.password) {
      localStorage.setItem("token", "test_token_123456789");
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };

  const logoutUser = (navigate) => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleFavoritePhoto = (cat) => {
    cat.liked = !cat.liked;
    const exist = favorites.includes(cat);
    exist ? setFavorites(favorites.filter((favorite) => favorite.id !== cat.id)) : setFavorites([...favorites, cat]);
  };

  return <GlobalContext.Provider value={{ cats, toggleFavoritePhoto, favorites, loginUser, logoutUser, isLoggedIn }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
