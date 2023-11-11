import { faCreditCard, faMoneyCheckDollar, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Horaire = () => {
  return (
    <div className="horaire" id="horaire">
      <h4>Horaires d'ouverture</h4>

      <table>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>Fermé</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>11:30 – 14:30</td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td>11:30 – 14:30</td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>11:30 – 14:30 / 18:30 – 00:00</td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>11:30 – 14:30 / 18:30 – 00:00</td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>11:30 – 14:30 / 18:30 – 00:00</td>
          </tr>
          <tr>
            <td>Dimanche</td>
            <td>Fermé</td>
          </tr>
        </tbody>
      </table>

      <p className="cursive1">
        Dernières prises de commandes à 13h30 le midi et 21h30 le soir.<br></br>
      </p>

      <p>
        Nous vous conseillons de réserver au : <br></br>
        <span className="cursive"> 06 49 79 69 74</span>
      </p>

      <p className="paiement_text">Moyens de paiement disponibles :</p>
      <div className="paiement">
        <div className="paiement_div">
          Carte bleue &nbsp;
          <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <div className="paiement_div">
          Carte & tickets restaurant
          <FontAwesomeIcon icon={faMoneyCheckDollar} />
        </div>
        <div className="paiement_div">
          Espèce &nbsp;
          <FontAwesomeIcon icon={faCoins} />
        </div>
      </div>
    </div>
  );
};

export default Horaire;
