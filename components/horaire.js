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

      <p>
        Nous vous conseillons de réserver au : <br></br>
        <span className="cursive"> 06 49 79 69 74</span>
      </p>

      <p className="paiement_text">Moyens de paiement disponibles :</p>
      <div className="paiement">
        <div className="paiement_div">
          Carte bleue &nbsp;
          <i className="fas fa-credit-card"></i>
        </div>
        <div className="paiement_div">
          Ticket restaurant
          <i className="fas fa-money-check-alt"></i>
        </div>
        <div className="paiement_div">
          Espèce &nbsp;
          <i className="fas fa-coins"></i>
        </div>
      </div>
    </div>
  );
};

export default Horaire;
