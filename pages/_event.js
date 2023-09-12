import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EmblaCarousel2 from "../components/slider2";

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

          <div className="privatisation__container">
            {/* <Image
              src="/assets/salle1.jpg"
              alt="Salle"
              layout='intrinsic'
              width={800}
              height={600}
              quality={100}
              className="salle"
            /> */}
            <img
              src="/assets/fb/salle.jpg"
              alt="Salle"
              width={630}
              height={500}
              className="salle"
              // border="1px solid #4a1801"
            />
            {/* <EmblaCarousel3 slides={slides} /> */}
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
