import mapa from './mapa.png';

export const Footer = () => (
  <section className="dark">
    <div className="container columns-2">
      <div className="columns">
        <h2>Kontakt</h2>
        <p>
          Hotel Stříbrava <br /> Ke Kamenné Lávce 12 317 24 <br /> Libnice nad
          Stříbravou
        </p>

        <a href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a>
      </div>
      <img src={mapa} />
    </div>
  </section>
);
