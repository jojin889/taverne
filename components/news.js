import EmblaCarousel from "./slider";
import Utilities from "./utilities";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const News = () => {

  return (
    <div className="news" id="news">
      <div className="present">
        <h3>Qui sommes nous ?</h3>
        <p>
          La taverneLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not.
        </p>
      <Utilities />

      </div>
      {/* <h4>Actualités</h4>
      <EmblaCarousel slides={slides} /> */}

    </div>
  );
};

export default News;
