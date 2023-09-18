import Map from "./map";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mail = () => {
  return (
    <div className="mail" id="mail">
      <h4>Nous contacter</h4>
      <form
        className="form"
        autoComplete="off"
        action="https://formsubmit.co/latavernetignieu@gmail.com"
        method="POST"
      >
        <div className="contact_mail__flex">
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="Prenom"
            placeholder="Prénom"
            autoComplete="off"
          />
        </div>
        <div className="contact_mail__flex">
          <input
            type="tel"
            name="Téléphone"
            placeholder="Téléphone"
            autoComplete="off"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            autoComplete="off"
          />
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://www.lataverne-tignieu.fr"
        />

        <input
          type="hidden"
          name="_subject"
          value="La Taverne - Nouvel email"
        />

        <textarea
          rows="3"
          cols="60"
          name="Message"
          placeholder="Votre message ici"
          required
          autoComplete="off"
          id="lol"
        />
        <button type="submit">Envoyer</button>
      </form>

      <div className="cursive">
        <FontAwesomeIcon icon={faEnvelope} />
        <span> &nbsp;latavernetignieu@gmail.com</span>
        <br />
        <br />
        <FontAwesomeIcon icon={faLocationDot} /> &nbsp;23 Boulevard Ampère 38230
        Tignieu-Jameyzieu
        <br />
        <br />
        <FontAwesomeIcon icon={faPhone} />
        <span className="cursive"> &nbsp;06 49 79 69 74</span>
      </div>

      <Map />
    </div>
  );
};

export default Mail;
