import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__left">
        <div className="menu-circle">
          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/latavernetignieu" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/la_taverne_tignieu/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="div__logo_shield">
        <img
          className="logo_shield inactive"
          src="/assets/logo_shield7.webp"
        ></img>
      </div>

      <div className="navbar__right">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/_menu">La carte</a>
          </li>
          <li>
            <a href="/_event">Prestations</a>
          </li>
        </ul>
      </div>

      {/* burger overlay */}
      <div className="burger__overlay">
        <div className="burger">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/_menu">La carte</a>
            </li>
            <li>
              <a href="/_event">Prestations</a>
            </li>
            <li>
              <a href="https://taverne-green.vercel.app/#horaire">Horaires</a>
            </li>
            <li>
              <a href="https://taverne-green.vercel.app/#mail">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
