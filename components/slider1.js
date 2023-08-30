import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel1 = ({ slides, img }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);


  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    // src={`https:${media[index].fields.eventImage.file.url}`}
                    // src={media[index].src}
                    src={`https:${img.img[index].fields.eventImage.fields.file.url}`}
                    alt="An event"

                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel1;





// import React, { useState, useEffect, useCallback } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
// import useEmblaCarousel from "embla-carousel-react";
// import media1 from "../public/assets/fb/salle.jpg";
// import media2 from "../public/assets/fb/salle.jpg"
// import media3 from "../public/assets/fb/salle.jpg"
// import media4 from "../public/assets/fb/salle.jpg";
// import media5 from "../public/assets/fb/salle.jpg"
// import media6 from "../public/assets/fb/salle.jpg"

// const EmblaCarousel1 = ({ slides }) => {
//   const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false,loop: true, });
//   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
//   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

//   const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
//   const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
//   const onSelect = useCallback(() => {
//     if (!embla) return;
//     setPrevBtnEnabled(embla.canScrollPrev());
//     setNextBtnEnabled(embla.canScrollNext());
//   }, [embla]);

// const media = [media1, media2, media3, media4, media5, media6];

//   useEffect(() => {
//     if (!embla) return;
//     embla.on("select", onSelect);
//     onSelect();
//   }, [embla, onSelect]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={viewportRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__inner">
//                 <img
//                   className="embla__slide__img"
//                   src={media[index].src}
//                   alt="events to come"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
//       <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
//     </div>
//   );
// };

// export default EmblaCarousel1;
