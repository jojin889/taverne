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
      <DztImageGalleryComponent
        lazyLoad={true}
        images={images}
        hideZoom={true}
        hideRotate={true}
        hideDownload={true}
        width="100px"
        height="100px"
      />
    </div>
  );
}
