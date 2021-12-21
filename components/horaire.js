const Horaire = () => {
  return (
    <div className="horaire" id="horaire">
        <h4>Horaires d'ouverture</h4>

        <table>
            <tr>
                <td>Lundi</td>
                <td>Fermé</td>
            </tr>
            <tr>
                <td>Mardi</td>
                <td>11:30 – 15:00</td>
            </tr>
            <tr>
                <td>Mercredi</td>
                <td>11:30 – 15:00</td>
            </tr>
            <tr>
                <td>Jeudi</td>
                <td>11:30 – 15:00 / 18:30 – 00:00</td>
            </tr>
            <tr>
                <td>Vendredi</td>
                <td>11:30 – 15:00 / 18:30 – 00:00</td>
            </tr>
            <tr>
                <td>Samedi</td>
                <td>11:30 – 15:00 / 18:30 – 00:00</td>
            </tr>
            <tr>
                <td>Dimanche</td>
                <td>Fermé</td>
            </tr>
        </table>

        <p>Nous vous conseillons de réserver au :  0649796974</p>
      {/* <ul>
        <li>Lundi - <span>Fermé</span></li>
        <li>Mardi - <span>11:30 – 15:00</span></li>
        <li>Mercredi - <span>11:30 – 15:00</span></li>
        <li>Jeudi - <span>11:30 – 15:00 / 18:30 – 00:00</span></li>
        <li>Vendredi - <span>11:30 – 15:00 /18:30 – 00:00</span></li>
        <li>Samedi - <span>11:30 – 15:00 / 18:30 – 00:00</span></li>
        <li>Dimanche - <span>Fermé</span></li>
      </ul> */}
    </div>
  );
};

export default Horaire;
