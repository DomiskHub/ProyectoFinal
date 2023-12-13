import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="about-us">
        <div className="aboutUs-container">
          <h2 className="section-title">Sobre Nosotros</h2>
          <img src="https://www.animalfiel.com/wp-content/uploads/2021/04/mi-gato-me-muerde.jpg" alt="Gatito" className="about-us-image" />
          <div className="mission">
            <h3>Nuestra Misión</h3>
            <p>
              En <span className="highlight">Se una Karen</span>, nos apasiona la protección y el cuidado de nuestros amigos felinos. Nos dedicamos a rescatar, rehabilitar y encontrar hogares amorosos para gatitos necesitados. Nuestra misión es proporcionar una segunda oportunidad a estos adorables compañeros, asegurando que cada uno de ellos reciba el amor, cuidado y atención que merecen.
            </p>
          </div>
          <div className="commitment">
            
            <h3>Compromiso con los Gatitos</h3>
            <p>
              Somos un equipo comprometido de amantes de los gatos y defensores de su bienestar. Trabajamos incansablemente para garantizar que cada gatito que llega a nuestras manos reciba atención veterinaria integral, alimentación adecuada, y, sobre todo, mucho cariño. Nuestro objetivo es encontrar hogares permanentes y amorosos para todos nuestros rescatados.
            </p>
          </div>
          <div className="what-we-do">
          <img src="https://www.codigosanluis.com/wp-content/uploads/2020/02/gatos-1.jpg" alt="Gatito" className="about-us-image" />
            <h3>¿Qué Hacemos?</h3>
            <ul>
              <li>Rescate y rehabilitación de gatitos abandonados o en situación de calle.</li>
              <li>Cuidado médico, esterilización y vacunación para garantizar su salud y bienestar.</li>
              <li>Búsqueda de hogares responsables y cariñosos a través de procesos cuidadosos de adopción.</li>
              <li>Sensibilización y educación sobre la importancia de la esterilización y el cuidado adecuado de los gatos.</li>
            </ul>
          </div>
          <div className="our-history">
          
            <h3>Nuestra Historia</h3>
            <p>
              <span className="highlight">Se una Karen</span> se inició con la visión de un grupo de amantes de los gatos que querían marcar la diferencia en la vida de estos animales. Desde nuestros humildes comienzos, hemos crecido gracias al apoyo y la dedicación de nuestra comunidad y voluntarios comprometidos. Cada historia de adopción exitosa nos impulsa a seguir adelante en nuestra causa.
            </p>
          </div>
          <p className="final-message">
            En <span className="highlight">Se una Karen</span>, no solo estamos comprometidos con el rescate y la adopción de gatitos, sino que también buscamos crear conciencia sobre el bienestar animal y fomentar un mundo donde todos los gatos puedan vivir felices y saludables.
            Únete a nosotros en esta noble misión y haz la diferencia en la vida de estos increíbles compañeros peludos.
          </p>
          <div className="karen text-center">
          <img src="https://www.fokkerpetfood.com/files/images/331-img-765_o.jpg" alt="Gatito" className="about-us-image" />
            <h3>¿De dónde viene el nombre "Karen"?</h3>
            <p>
              En la actualidad, en redes como Instagram o Tik Tok, son frecuentes los videos en los que los gatos aparecen como protagonistas y se los dobla o subtitula traduciendo sus voz para demostrar cómo hablan de sus dueños refiriéndose a ellos como Karen, ya sea para criticarlos o para darles órdenes o consejos.
              Si tienes gato, tal vez no sepas que eres una Karen, o si alguna vez se han referido a ti de esa manera y no tenías ni idea de por qué, ahora ya lo sabes. El término proviene de una gata valiente que quería salvar a sus crías y de una amante de los animales que anhelaba cuidarlos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
