import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__left">
          <quote className="quote">"Le gras c'est la vie"</quote>
          <p>
            <a href="https://www.facebook.com/latavernetignieu" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/la_taverne_tignieu/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> &nbsp;23 Boulevard Ampère
            38230 Tignieu-Jameyzieu
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <span className="cursive">06 49 79 69 74</span>
          </p>
          <p>
            <a href="/_mentions">Mentions légales</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
