import DztImageGalleryComponent from "reactjs-image-gallery";

const Gallery = (props) => {

  var data = [];

  // for (var i = 0; i < props.img.length; i++) {
  //   data.push({
  //     url: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
  //     thumbUrl: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
  //   });
  // }

  for (var i = 0; i < props.img.length; i++) {
    data.push({
      url: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
      thumbUrl: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
    });
  }
  console.log(data);

  return (
    <div
      className="gallery">
      <DztImageGalleryComponent images={data} hideZoom={true} hideRotate={true} hideDownload={true} width='100px' height='100px'  />
    </div>
  );
};

export default Gallery;

// import { useEffect, useState } from "react";
// import DztImageGalleryComponent from "reactjs-image-gallery";
// import { groq } from "next-sanity";
// import { client } from "../sanity/lib/client";
// import urlFor from "../sanity/lib/urlFor";

// export default function Gallery() {
//   const [images, setImages] = useState("");

//   var data = [{
//     url: "https://images.ctfassets.net/j3gyfjtzmr82/1psJSzt9mXa0sanPPJIQ5I/3cc5e47cfa0c468490cdc8fcc3c1ead8/271804102_459786938859368_8394237403943684420_n.jpg",
//     thumbUrl:
//       "https://images.ctfassets.net/j3gyfjtzmr82/1psJSzt9mXa0sanPPJIQ5I/3cc5e47cfa0c468490cdc8fcc3c1ead8/271804102_459786938859368_8394237403943684420_n.jpg",
//   }];

//   // for (var i = 0; i < props.img.length; i++) {
//   //   data.push({
//   //     url: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
//   //     thumbUrl: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
//   //   });
//   // }

  

//   useEffect(() => {
//     async function getData() {
//       const queryImages = groq`
//       *[_type=='images']
//       `;
  
//       const request = await client.fetch(queryImages);
//       setImages(request);
  
//       for (var i = 0; i < request.length; i++) {
//         data.push({
//           url: urlFor(request[i].mainImage).url(),
//           thumbUrl: urlFor(request[i].mainImage).url(),
//         });
//       }
//       for (var i = 0; i < request.length; i++) {
//         data.push({
//           url: "https://images.ctfassets.net/j3gyfjtzmr82/1psJSzt9mXa0sanPPJIQ5I/3cc5e47cfa0c468490cdc8fcc3c1ead8/271804102_459786938859368_8394237403943684420_n.jpg",
//           thumbUrl:
//             "https://images.ctfassets.net/j3gyfjtzmr82/1psJSzt9mXa0sanPPJIQ5I/3cc5e47cfa0c468490cdc8fcc3c1ead8/271804102_459786938859368_8394237403943684420_n.jpg",
//         });
//       }
  
//       // console.log(urlFor(request[0].mainImage).url());
//       console.log(data);
//     }
//     getData();
//   }, []);

//   return (
//     <div className="gallery">
//       <DztImageGalleryComponent
//         images={data}
//         hideZoom={true}
//         hideRotate={true}
//         hideDownload={true}
//         width="100px"
//         height="100px"
//       />
//     </div>
//   );
// }
