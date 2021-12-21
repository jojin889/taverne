import { useState, useContext } from "react";
import Navbar from "../components/navbar";
import Client from "../components/contentFul";

import Footer from "../components/footer";

const Menu = (props) => {
  console.log("props", props);

  return (
    <>
      <Navbar />

      <div className="menu" id="menu">
        <div className="menu__container">
          <h1 className="menu__title">La carte</h1>
          <div className="menu__categories">
            <h3>Entrées</h3>

            <div className="menu__categorie flex">
              <ul>
                {props.entreeItems.map((entree) => (
                  <div className="menu__container2">
                    <li>{entree.fields.entreeText}</li>
                    <span className="menu__span">
                      {entree.fields.entreePrice}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
            <h3>Viande</h3>

            <div className="menu__categorie flex">
              <p className="details_viande">
                L’origine de nos viandes varie selon la sélection de la Taverne.               
              </p>
              <p className="details_viande">
                  Concernant les :
                  <ul>
                    <li>Faux filet de bœuf</li>
                    <li>Filet de bœuf</li>
                    <li>Entrecôte de bœuf</li>
                    <li>Côte de bœuf</li>
                  </ul>
                  
                </p>
                <p>Merci de se référer à l’ardoise située à l’intérieur du
                  restaurant.</p>
              <ul>
                {props.viandeItems.map((viande) => (
                  <div className="menu__container2">
                    <li>{viande.fields.viandeText}</li>{" "}
                    <span className="menu__span">
                      {viande.fields.viandePrice}
                    </span>
                  </div>
                ))}
              </ul>
              <p className="italic__comment">
                <i class="fas fa-arrow-right"></i>{" "}
                <span style={{ fontStyle: "italic", fontSize: "14px" }}>
                  Nos plats sont accompagnés de pomme de terre grenaille et de
                  légumes frais rôtis
                </span>
              </p>
            </div>
            <h3>Poissons</h3>

            <div className="menu__categorie">
              <ul>
                {props.poissonItems.map((poisson) => (
                  <div className="menu__container2">
                    <li>{poisson.fields.poissonText}</li>{" "}
                    <span className="menu__span">
                      {poisson.fields.poissonPrice}
                    </span>
                  </div>
                ))}
              </ul>

              <p className="italic__comment">
                <i class="fas fa-arrow-right"></i> Nos plats sont accompagnés de
                pomme de terre grenaille et de légumes frais rôtis
              </p>
            </div>
            <h3>Fromages et Desserts</h3>

            <div className="menu__categorie">
              <ul>
                {props.dessertItems.map((dessert) => (
                  <div className="menu__container2">
                    <li>{dessert.fields.dessertText}</li>{" "}
                    <span className="menu__span">
                      {dessert.fields.dessertPrice}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
            <br />
            <p>
              Tous nos plats sont faits maison et élaborés à partir de produits
              frais et de saison ! Notre sélection de viande est issue
              d’élevages respectueux de l’animal.
            </p>
            <h3>Menu "Le petit Tavernier"</h3>

            <div className="menu__categorie">
              <p style={{ fontSize: "24px" }}>Plat - Dessert - Boisson<span style={{ fontSize: "22px",marginLeft: '9vh' }}>
                9,00 €
              </span></p>
              <p style={{ fontSize: "16px" }}>
                Steak haché Angus, pommes de terre rissolées, <br />
                Boule de glace vanille avec chantilly – Sirop au choix{" "}
              </p>
            </div>
            <br />
            <br />
            <h3>Formule du jour</h3>

            <div className="menu__categorie">
              <span style={{ fontSize: "24px"}}>
                14,50 €
              </span>
              <p style={{ fontSize: "24px" }}>
                Plat du jour, dessert du jour et café
              </p>
              <p style={{ fontSize: "24px" }}>(Ou Plat du jour &nbsp;10,50€)</p>
            </div>
            <h3>Menu "La Taverne"</h3>

            <div className="menu__categorie">
              <span style={{ fontSize: "24px"}}>
                29,00 €
              </span>
              <h2>Entrées</h2>
              <p>Velouté de potimarron et chantilly au chèvre</p>
              <p>OU</p>
              <p>
                Reblochon rôti, oignons confits au vin blanc et guanciale grillé
              </p>
              <p>OU</p>
              <p>Tataki de faux filet</p>
              <h2>Plats</h2>
              <p>Bavette de bœuf Angus</p>
              <p>OU</p>
              <p>Magret de canard</p>
              <p>OU</p>
              <p>Saumon et sa crème au safran</p>
              <h2>Desserts</h2>
              <p>Baby Irish Slap</p>
              <p>OU</p>
              <p>Fondant au chocolat et sa crème anglaise</p>
              <p>OU</p>
              <p>Demi-Saint-Marcellin</p>
            </div>
            <h3>La Formule de KARADOC</h3>

            <div className="menu__categorie">
              <span style={{ fontSize: "22px", marginLeft: "7vh" }}>
                A partager- 29,00 €
              </span>
              <p>(Selon arrivage)</p>
              <p>A partir de 6 personnes</p>
              <h2>-Planche de viandes à partager</h2>
              <p style={{ fontSize: "22px" }}>
                Environ 350gr de viande/personne
              </p>
              <p>(Détail à la voix)</p>
              <p>+ Accompagnements</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;

export async function getStaticProps() {
  const entreeData = await Client.getEntries({
    content_type: "entres",
  });
  const sauceData = await Client.getEntries({
    content_type: "sauces",
  });
  const poissonData = await Client.getEntries({
    content_type: "poisson",
  });
  const viandeData = await Client.getEntries({
    content_type: "viande",
  });
  const dessertData = await Client.getEntries({
    content_type: "desserts",
  });

  return {
    props: {
      entreeItems: entreeData.items,
      poissonItems: poissonData.items,
      viandeItems: viandeData.items,
      sauceData: sauceData.items,
      dessertItems: dessertData.items,
    },
  };
}
