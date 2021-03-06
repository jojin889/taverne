const Map = () => {
  return (
    <div className="map_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18727.774731392918!2d5.190891829944858!3d45.75314327070407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4cb470c4e9aff%3A0x18be1b9a8b9b5332!2sLa%20Taverne!5e0!3m2!1sfr!2sfr!4v1636891512726!5m2!1sfr!2sfr"
        width='800'
        height='450'
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        className="map"
      ></iframe>
      </div>
  );
};

export default Map;
