import Map from "./map";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__left">
          <quote className="quote">"Le gras c'est la vie"</quote>

          <p>
            <i className="fas fa-map-marker-alt"></i> &nbsp;23 Boulevard Ampère
            38230 Tignieu-Jameyzieu
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> 06 49 79 69 74
          </p>
          <p><a href="/_mentions">Mentions légales</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
