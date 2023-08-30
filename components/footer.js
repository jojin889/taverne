const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__left">
          <quote className="quote">"Le gras c'est la vie"</quote>
          <p>
          <a href="https://www.facebook.com/latavernetignieu" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
            <a
              target="_blank"
              href="https://www.instagram.com/la_taverne_tignieu/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> &nbsp;23 Boulevard Ampère
            38230 Tignieu-Jameyzieu
          </p>
          <p>
            <i className="fas fa-phone-alt"></i><span className="cursive">06 49 79 69 74</span>
          </p>
          <p><a href="/_mentions">Mentions légales</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
