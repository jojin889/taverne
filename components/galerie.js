import DztImageGalleryComponent from "reactjs-image-gallery";

const Gallery = (props) => {

  var data = [];

  for (var i = 0; i < props.img.length; i++) {
    data.push({
      url: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
      thumbUrl: `https:${props.img[i].fields.galleryImage.fields.file.url}`,
    });
  }

  return (
    <div
      className="gallery">
      <DztImageGalleryComponent images={data} hideZoom="true" hideRotate="true" hideDownload="true" width='100px' height='100px'  />
    </div>
  );
};

export default Gallery;
