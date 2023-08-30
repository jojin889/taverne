import EmblaCarousel1 from "./slider1";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Evenements = (props) => {
  return (
    <>
      <div className="evenements" id="evenements">
        <h4>Nos évènements</h4>
        <EmblaCarousel1 slides={slides} img={props}/>
      </div>
    </>
  );
};

export default Evenements;
