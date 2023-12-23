import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/CardContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useContext(GlobalContext);

  if (isLoggedIn || user) {
    return children;
  } else {
    return <Navigate to="/iniciar_sesion" />;
  }
};

export default ProtectedRoute;
