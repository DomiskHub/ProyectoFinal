import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <main>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
