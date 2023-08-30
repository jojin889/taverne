import Utilities from "./utilities";

const News = () => {
  return (
    <div className="news" id="news">
      <div className="present">
        <h3>La TAVERNE... qui sommes-nous ?</h3>
        <p>
        Un bar restaurant, situé à Tignieu, à 30mn à l'est de Lyon.</p>
<p>Ouvert le midi et le soir selon les jours, à la carte ou en formule, nous vous proposons des plats préparés exclusivement à base de produits frais, des viandes d'exception maturées et des desserts gourmands faits maison.</p>

<p>Sans oublier nos apéritifs : vins choisis, bières diverses et savoureuses et cocktails originaux !</p>

<p>Et pour terminer votre repas en beauté, à vous de choisir parmi une large gamme de rhums et de whiskys, celui que vous dégusterez, avec modération, bien sûr !</p>
<br />

<p>Alors, amateurs de très bonnes viandes, n'hésitez plus ! A très vite !
        </p>
        <Utilities />
      </div>
    </div>
  );
};

export default News;
