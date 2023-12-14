import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AboutUs from "./views/AboutUs";
import Gallery from "./views/Gallery";
import AdoptionForm from "./views/AdoptionForm";
import Notfound from "./views/NotFound";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Contact from "./views/Contact"
import Profile from "./views/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes_somos" element={<AboutUs />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/adopta" element={<AdoptionForm />} />
            <Route path="/iniciar_sesion" element={<Login />} />
            <Route path="/crear_cuenta" element={<SignUp />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/perfil" element={<Profile/>} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
