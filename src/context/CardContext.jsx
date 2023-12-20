import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("cats.json");
      const json = await res.json();
      setCats(json);
      console.log(json);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const toggleFavoritePhoto = (cat) => {
    cat.liked = !cat.liked;
    const exist = favorites.includes(cat);
    exist ? setFavorites(favorites.filter((favorite) => favorite.id !== cat.id)) : setFavorites([...favorites, cat]);
  };

  return <GlobalContext.Provider value={{ cats, toggleFavoritePhoto, favorites }}>{children}</GlobalContext.Provider>;
};
export default GlobalProvider;
