import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EmblaCarousel2 from "../components/slider2";
import Image from "next/image";

const Event = () => {
  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Navbar />
      <div id="event">
        <div className="event__container">
          <h1>Brasero</h1>

          <div className="brasero__container">
            <EmblaCarousel2 slides={slides} />
            <div className="brasero__textdiv">
              <p>
                La Taverne peut aussi venir jusqu'à vous, pour vos évènements
                festifs :
                <br /> Nous vous proposons une location du brasero seul ou avec
                viandes et accompagnements, ou même une prestation complète
                (formule traiteur et cuisine sur place)
                <br /> Nous sommes à votre disposition pour plus de
                renseignements.
              </p>
              <br />
            </div>
          </div>
          <h1>Privatisation</h1>
          <div className="test"></div>
          {/* DIV TEST = POUR FAIRE UNE LARGEUR, POUR QUE LA NAVBAR SOIT NORMALE... */}
          <div className="privatisation__container">
            <Image
              src="/assets/fb/salle.jpg"
              alt="Salle"
              width={730}
              height={600}
              className="salle"
            />
            <div className="privatisation__textdiv">
              <p>
                Vous pouvez également privatiser notre salle et bénéficier d'un
                service complet.
                <br />
                <br /> Nous sommes à votre disposition pour plus de
                renseignements.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
