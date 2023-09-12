import React, { useState, useEffect, useCallback } from "react";
import { PrevButton2, NextButton2 } from "./EmblaCarouselButtons2";
import useEmblaCarousel from "embla-carousel-react";
import media2 from "../public/assets/brasero3-min.webp";
import media1 from "../public/assets/braseroBadQuality-min.webp";
import media4 from "../public/assets/brasero3-min.webp";
import media3 from "../public/assets/braseroBadQuality-min.webp";
import media6 from "../public/assets/brasero3-min.webp";
import media5 from "../public/assets/braseroBadQuality-min.webp";
import Image from "next/image";

const EmblaCarousel2 = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    loop: true,
  });
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
                <Image
                  layout="fill"
                  className="embla2__slide__img"
                  src={media[index].src}
                  alt="Photos de brasero"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton2 onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton2 onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel2;
