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
                    <li>- {entree.fields.entreeText}</li>
                    <span className="menu__span">
                      {entree.fields.entreePrice}
                    </span>
                  </div>
                ))}
              </ul>
            </div>


            <h3>Viande</h3>

            <div className="menu__categorie flex">
              <p className="details_viande--first">
                Race : KOD jersey (Danemark)
              </p>
              <p className="details_viande">
                <ul>
                  <li>- Faux filet de bœuf - 10.50€ / 100gr</li>
                  <li>- Entrecôte de bœuf - 10.50€ / 100gr</li>
                  <li>- Côte de bœuf - 10.50€ / 100gr</li>
                </ul>
              </p>
              <p className="details_viande--third">
                (Les différents poids des pièces disponibles vous seront communiqués lors de
                votre commande et le prix sera calculé en fonction de votre choix du poids.)
              </p>
              <ul>
                {props.viandeItems.map((viande) => (
                  <div className="menu__container2">
                    <li> - {viande.fields.viandeText}</li>{" "}
                    <span className="menu__span">
                      {viande.fields.viandePrice}
                    </span>
                  </div>
                ))}
              </ul>
              <p className="details_viande--third">
                Toutes nos sauces sont faites maison :
              </p>
              <ul>
                {props.sauceItems.map((sauce) => (
                  <div className="menu__container2--sauce">
                    <li> - {sauce.fields.sauceText}</li>
                  </div>
                ))}
              </ul>
              <p className="italic__comment">
                <i className="fas fa-arrow-right"></i> Nos plats sont accompagnés de mille feuilles de pommes de terre et de légumes frais rôtis
              </p>
            </div>
            <h3>Poissons</h3>

            <div className="menu__categorie">
              <ul>
                {props.poissonItems.map((poisson) => (
                  <div className="menu__container2">
                    <li>- {poisson.fields.poissonText}</li>{" "}
                    <span className="menu__span">
                      {poisson.fields.poissonPrice}
                    </span>
                  </div>
                ))}
              </ul>

              <p className="italic__comment">
                <i className="fas fa-arrow-right"></i> Nos plats sont accompagnés de mille feuilles de pommes de terre et de légumes frais rôtis
              </p>
            </div>

            <h3>Fromages et Desserts</h3>

            <div className="menu__categorie">
              <ul>
                {props.dessertItems.map((dessert) => (
                  <div className="menu__container2">
                    <li>- {dessert.fields.dessertText}</li>{" "}
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
              <p className="menu__descriptif-petitTavernier">
                Plat - Dessert - Boisson &nbsp;&nbsp;
                <span className="menu__descriptif-petitTavernier-price">
                  9,00 €
                </span>
              </p>
              <p>
                Steak haché Angus, pommes de terre rissolées, <br />
                1 Boule de glace vanille avec chantilly – Sirop au choix{" "}
              </p>
            </div>
            <br />
            <br />
            <h3>Formule du jour</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-FormuleJour-price">15,50 €</span>
              <p className="menu__descriptif-FormuleJour">
                Plat du jour, dessert du jour et café
              </p>
              <p className="menu__descriptif-FormuleJour-price2">(Ou Plat du jour &nbsp;11,50€)</p>
            </div>
            <h3>Menu "La Taverne"</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-MenuTaverne-price">38,00 €</span>
              {/* <span style={{ fontSize: "24px" }}>40,00 €</span> */}
              <h2>Entrées</h2>
              <p>{props.menuEntrée1[0].fields.menuEntre1}</p>
              <p>OU</p>
              <p>
                {props.menuEntrée2[0].fields.menuEntre2}
              </p>
              <p>OU</p>
              <p>{props.menuEntrée3[0].fields.menuEntre3}</p>
              <h2>Plats</h2>
              <p>{props.menuPlat1[0].fields.menuPlat1}</p>
              <p>OU</p>
              <p>{props.menuPlat2[0].fields.menuPlat2}</p>
              <p>OU</p>
              <p>{props.menuPlat3[0].fields.menuPlat3}</p>
              <h2>Desserts</h2>
              <p>Au choix à la carte</p>
              {/* <p>{props.menuDessert1[0].fields.menuDessert1}</p>
              <p>OU</p>
              <p>{props.menuDessert2[0].fields.menuDessert2}</p>
              <p>OU</p>
              <p>{props.menuDessert3[0].fields.menuDessert3}</p> */}
            </div>
            <h3>La Formule de KARADOC</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-Apartager-price">
                A partager- 25,00 €
              </span>
              <p>(Selon arrivage)</p>
              <p>A partir de 6 personnes !</p>
              <h2>-Planche de viandes à partager</h2>
              <p>
                Environ 350gr de viande/personne
              </p>
              <p>(Détail à la voix)</p>
              <p>+ Accompagnements</p>
              <p>(Formule imposée pour
les tables de 8 personnes et plus)</p>
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


  const MenuEntrée1 = await Client.getEntries({
    content_type: "menuEntre1",
  });
  const MenuEntrée2 = await Client.getEntries({
    content_type: "menuEntre2",
  });
  const MenuEntrée3 = await Client.getEntries({
    content_type: "menuEntre3",
  });

  const MenuPlat1 = await Client.getEntries({
    content_type: "menuPlat1",
  });
  const MenuPlat2 = await Client.getEntries({
    content_type: "menuPlat2",
  });
  const MenuPlat3 = await Client.getEntries({
    content_type: "menuPlat3",
  });


  const MenuDessert1 = await Client.getEntries({
    content_type: "menuDessert1",
  });
  const MenuDessert2 = await Client.getEntries({
    content_type: "menuDessert2",
  });
  const MenuDessert3 = await Client.getEntries({
    content_type: "menuDessert3",
  })



  return {
    props: {
      entreeItems: entreeData.items,
      poissonItems: poissonData.items,
      viandeItems: viandeData.items,
      sauceItems: sauceData.items,
      dessertItems: dessertData.items,
      menuEntrée1: MenuEntrée1.items,
      menuEntrée2: MenuEntrée2.items,
      menuEntrée3: MenuEntrée3.items,
      menuPlat1: MenuPlat1.items,
      menuPlat2: MenuPlat2.items,
      menuPlat3: MenuPlat3.items,
      menuDessert1: MenuDessert1.items,
      menuDessert2: MenuDessert2.items,
      menuDessert3: MenuDessert3.items,

    },
  };
}
