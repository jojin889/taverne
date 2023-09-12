import Image from "next/image";
import Utilities from "./utilities";

const News = () => {
  return (
    <div className="news" id="news">
      <div className="present">
        <div>
          <h3>La TAVERNE... qui sommes-nous ?</h3>
          <p>Un bar restaurant, situé à Tignieu, à 30mn à l'est de Lyon.</p>
          <p>
            Ouvert le midi et le soir selon les jours, à la carte ou en formule,
            nous vous proposons des plats préparés exclusivement à base de
            produits frais, des viandes d'exception maturées et des desserts
            gourmands faits maison.
          </p>

          <p>
            Sans oublier nos apéritifs : vins choisis, bières diverses et
            savoureuses et cocktails originaux !
          </p>

          <p>
            Et pour terminer votre repas en beauté, à vous de choisir parmi une
            large gamme de rhums et de whiskys, celui que vous dégusterez, avec
            modération, bien sûr !
          </p>
          <br />

          <p>
            Alors, amateurs de très bonnes viandes, n'hésitez plus ! A très vite
            !
          </p>
        </div>
        <div>
          <Image
            width={400}
            height={600}
            src="/assets/assetMeat7-min.webp"
            alt="meat picture"
            className="opacity-filter"
          />
        </div>
      </div>
      <Utilities />
    </div>
  );
};

export default News;
