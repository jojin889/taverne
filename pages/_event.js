import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EmblaCarousel2 from "../components/slider2";
import EmblaCarousel3 from "../components/slider3";

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Event = () => {
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not
              </p>
              <br/>
              <p>Le prix est de 1000 dollars lol.</p>
            </div>
          </div>
          <h1>Privatisation</h1>

          <div className="privatisation__container">
            <EmblaCarousel3 slides={slides} />
            <div className="privatisation__textdiv">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not
              </p>
              <br/>
              <p>Le prix est de 1000 dollars lol.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
