import media1 from "./media-1.jpeg";
import media2 from "./viande2.jpg";
import media3 from "./viande3.jpg";
import media4 from "./viande4.jpg";
import media5 from "./viande5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
