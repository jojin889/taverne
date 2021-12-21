import { useState } from "react";
import Map from "./map";

const Mail = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      nom: nom,
      prenom: prenom,
      téléphone: phone,
      email: email,
      message: message,
    });
    console.log("nom", data);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("laaaaaaaaaaaaaaaaaaaaa");
    } catch (error) {
      console.log("loldddddddd");
    }

    // fetch("/backend.php", {
    //   method: "POST",
    //   body: data,
    // }).then((response) => {
    //   if (response.ok) {
    //       console.log('bravo le veau')
    // }});
  };

  return (
    <div className="mail" id="mail">
      <h4>Nous contacter</h4>
      <form
        className="form"
        autocomplete="off"
        action="https://formsubmit.co/4eae7c07b29141d35c1a2bd3e0b2cd4e"
        method="POST"
      >
        <div className="contact_mail__flex">
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            required
            autocomplete="off"
          />
          <input
            type="text"
            name="Prenom"
            placeholder="Prénom"
            autocomplete="off"
          />
        </div>
        <div className="contact_mail__flex">
          <input
            type="tel"
            name="Téléphone"
            placeholder="Téléphone"
            autocomplete="off"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            autocomplete="off"
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
          autocomplete="off"
          id="lol"
        />
        <button type="submit">Envoyer</button>
      </form>

      {/* <form className="Form" onSubmit={handleSubmit}>
        <label>Contact</label>
        <input
          onChange={(e) => setNom({ nom: e.target.value })}
          required
          type="search"
          className="input"
          placeholder="Nom"
        />
        <input
          onChange={(e) => setPrenom({ prenom: e.target.value })}
          type="search"
          className="input"
          placeholder="Prénom"
        />
        <input
          onChange={(e) => setPhone({ téléphone: e.target.value })}
          required
          type="number"
          className="input"
          placeholder="Téléphone"
        />
        <input
          onChange={(e) => setEmail({ email: e.target.value })}
          type="email"
          className="mail input"
          placeholder="Email"
        />
        <textarea
          placeholder="Message"
          required
          type="textarea"
          className="input textarea"
          onChange={(e) => setMessage({ message: e.target.value })}
        />

        <button type="submit">Envoyer</button>
      </form> */}

<Map />

    </div>
  );
};

export default Mail;
