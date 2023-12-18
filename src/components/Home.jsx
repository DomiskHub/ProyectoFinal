import Header from "./Header";
import glide from "../utils/glider.js";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/CardContext.jsx";
import Cards from "./Cards.jsx";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const { cats } = useContext(GlobalContext);

  useEffect(() => {
    if (cats) {
      glide(".glide");
    }
  }, [cats]);
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-center mb-4">Nuestros gatitos🐈</h1>
      </div>
      <div>
        <div className="glide cat-slider-container">
          {cats && (
            <div className="glide__track" data-glide-el="track">
              <Cards cats={cats} />
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                  prev
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                  next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="m-5">
      <Link to="/galeria">
        <Button className="mx-auto mt-3 mb-3 d-block btn-galeria-completa">Ver Galeria completa</Button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
