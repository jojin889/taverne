import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import media1 from "../public/assets/fb/salle.jpg"
import media2 from "../public/assets/fb/salle.jpg"
import media3 from "../public/assets/fb/salle.jpg"
import media4 from "../public/assets/fb/salle.jpg";
import media5 from "../public/assets/fb/salle.jpg"
import media6 from "../public/assets/fb/salle.jpg"

const EmblaCarousel3 = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false,loop: true, });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

const media = [media1, media2, media3, media4, media5, media6];

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla2">
      <div className="embla2__viewport" ref={viewportRef}>
        <div className="embla2__container">
          {slides.map((index) => (
            <div className="embla2__slide" key={index}>
              <div className="embla2__slide__inner">
                <img
                  className="embla2__slide__img"
                  src={media[index].src}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel3;
