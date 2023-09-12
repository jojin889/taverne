// import DztImageGalleryComponent from "reactjs-image-gallery";

// const Gallery = (props) => {

//   var data = [];

//   for (var i = 0; i < props.img.length; i++) {
//     data.push({
//       url: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
//       thumbUrl: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
//     });
//   }

//   // for (var i = 0; i < props.img.length; i++) {
//   //   data.push({
//   //     url: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
//   //     thumbUrl: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
//   //   });
//   // }
//   console.log(data);

//   return (
//     <div
//       className="gallery">
//       <DztImageGalleryComponent images={data} hideZoom={true} hideRotate={true} hideDownload={true} width='100px' height='100px'  />
//     </div>
//   );
// };

// export default Gallery;

import { useEffect, useState } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import urlFor from "../sanity/lib/urlFor";

export default function Gallery() {
  const [images, setImages] = useState([]);
  var data = [];

  const fetchData = async () => {
    const queryImages = groq`
    *[_type=='images']
    `;

    const request = await client.fetch(queryImages);

    for (var i = 0; i < request.length; i++) {
      if (!Object.is(data[i], urlFor(request[i].mainImage))) {
        data.push({
          url: urlFor(request[i].mainImage).url(),
          thumbUrl: urlFor(request[i].mainImage).url(),
        });
      }
    }
    setImages(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="gallery">
      {/* <DztImageGalleryComponent
        lazyLoad={true}
        images={images}
        hideZoom={true}
        hideRotate={true}
        hideDownload={true}
        width="100px"
        height="100px"
      /> */}
    </div>
  );
}
