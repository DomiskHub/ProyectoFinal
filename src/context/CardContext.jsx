import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cats, setCats] = useState();
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

  return <GlobalContext.Provider value={{ cats }}>{children}</GlobalContext.Provider>;
};
export default GlobalProvider;
