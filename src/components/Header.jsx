import Hero from "./Hero";

const Header = () => {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <br />
      <h2 className="header-2">ADOPTA UN GATITO 
      <br /> 
      Y CONVIERTETE EN LA KAREN QUE SIEMPRE SOÑASTE SER </h2>
      <div className="adoption-text text-center">
      <h2>Bienvenido a nuestra página de adopción de gatos</h2>
      <br />
      <p>Estamos emocionados de que estés considerando darle un hogar a un gatito amoroso y afectuoso.</p>
      <p>Al adoptar un gato, estás brindando un hogar amoroso a un ser que lo necesita desesperadamente. Estás cambiando su vida, dándole la oportunidad de sentirse amado y seguro. Además, estás contribuyendo a una causa noble al abrir espacio en refugios y organizaciones de rescate para ayudar a más gatos sin hogar.</p>
      <p>Nuestros gatos en adopción provienen de diversas historias, pero todos comparten una cualidad: desean encontrar un lugar al que puedan llamar hogar. Tenemos gatitos juguetones, gatos adultos tranquilos, algunos curiosos y otros más independientes. Sea cual sea tu estilo de vida, ¡hay un gato perfecto para ti!</p>
      <h5>¿Estás listo para dar el paso y adoptar a tu nuevo compañero peludo? Explora nuestra galería de adopción, conoce a nuestros adorables gatitos y encuentra a tu nuevo amigo de cuatro patas. 
        <br/>
        <br />
        ¡No te arrepentirás de abrir tu corazón y tu hogar a un gato necesitado! 
        <br />
        <br />
        ¡Adopta hoy y cambia dos vidas para siempre!</h5>
    </div>
    </div>
  );
};

export default Header;
