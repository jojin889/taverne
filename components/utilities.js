import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareParking, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

const Utilities = () => {
  return (
    <>
      <div className="utilities" id="utilities">
        <div className="utilities__container">
          <div className="utilities__div">
            <div className="utilities__logo_div">
            <FontAwesomeIcon icon={faSquareParking} />
            </div>
            <div className="utilities__text">
            Parking gratuit devant le restaurant
            </div>
          </div>

          <div className="utilities__div">
            <div className="utilities__logo_div">
            <FontAwesomeIcon icon={faAccessibleIcon} />
            </div>
            <div className="utilities__text">
            Accès handicapés extérieur et intérieur
            </div>
          </div>

          <div className="utilities__div">
            <div className="utilities__logo_div">
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            </div>
            <div className="utilities__text">Terrasse ombragée pour votre confort</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilities;
