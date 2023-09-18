const Map = () => {
  return (
    <div className="map_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22273.47157095274!2d5.192163923910203!3d45.747458127074225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4cb470c4e9aff%3A0x18be1b9a8b9b5332!2sLa%20Taverne!5e0!3m2!1sfr!2sfr!4v1643100201254!5m2!1sfr!2sfr"
        width="800"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="map"
        title="Map to find the restaurant"
      ></iframe>
    </div>
  );
};

export default Map;
