const Utilities = () => {
  return (
    <>
      <div className="utilities" id="utilities">
        <div className="utilities__container">
          <div className="utilities__div">
            <div className="utilities__logo_div">
            <i className="fas fa-parking"></i>
            </div>
            <div className="utilities__text">
            Parking gratuit et à proximité du restaurant
            </div>
          </div>

          <div className="utilities__div">
            <div className="utilities__logo_div">
            <i className="fab fa-accessible-icon"></i>
            </div>
            <div className="utilities__text">
            Accès handicapés extérieur et intérieur
            </div>
          </div>

          <div className="utilities__div">
            <div className="utilities__logo_div">
            <i className="fas fa-umbrella-beach"></i>
            </div>
            <div className="utilities__text">Terrasse ombragée</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilities;
