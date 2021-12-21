import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Mentions = (props) => {
  console.log("props", props);

  return (
    <>
      <Navbar />

      <div className="mentions" id="mentions">
        <div className="mention__container">
          <h1>Mentions légales</h1>
          <ul>
            <li>Nom du restaurant : <span>La Taverne</span></li>
            <li>Nom de la société : <span>LE CHRONO</span></li>
            <li>Forme juridique : <span>SAS</span></li>
            <li>Capital Social : <span>10 000</span></li>
            <li>Adresse du Siège Social :  <span>23 Boulevard Ampère , 38230 Tignieu-Jameyzieu, France</span></li>
            <li>Numéro de téléphone : <span>+33671121181</span></li>
            <li>Adresse e-mail : <span>latavernetignieu@gmail.com</span></li>
            <li>Numéro de Siret : <span>815261920</span></li>
            <li>Immatriculation au registre du commerce : <span>81526192000012</span></li>
            <li>Nº d'identification TVA : <span>30 815261920</span></li>
            <li>Responsable  : <span>MR SICILIA TONELLO ROMAIN</span></li>
          
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mentions;
