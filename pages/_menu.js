import Navbar from "../components/navbar";
import { groq } from "next-sanity";
import Footer from "../components/footer";
import { client } from "../sanity/lib/client";
import React, { useState, useEffect } from "react";

export default function Menu() {
  const [entrees, setEntrees] = useState(["1", "2"]);
  const [viandes, setViandes] = useState(["1", "2"]);
  const [desserts, setDesserts] = useState(["1", "2"]);
  const [poissons, setPoissons] = useState(["1", "2"]);
  const [sauces, setSauces] = useState(["1", "2"]);
  const [menuDuJour, setMenuDuJour] = useState(["1", "2"]);
  const [menuTaverne, setMenuTaverne] = useState(["1", "2"]);

  async function getData() {
    const queryEntrees = groq`
    *[_type=='entree']
  `;

    const queryViandes = groq`
    *[_type=='viande']
    `;
    const queryPoissons = groq`
    *[_type=='poisson']
    `;

    const queryDesserts = groq`
    *[_type=='dessert']
    `;

    const querySauces = groq`
    *[_type=='sauce']
    `;

    const queryMenuTaverne = groq`
    *[_type=='menuTaverne']
    `;

    const queryMenuDuJour = groq`
    *[_type=='menuDuJour']
    `;
    const entrees = await client.fetch(queryEntrees);
    setEntrees(entrees);
    const viandes = await client.fetch(queryViandes);
    setViandes(viandes);
    const desserts = await client.fetch(queryDesserts);
    setDesserts(desserts);
    const poissons = await client.fetch(queryPoissons);
    setPoissons(poissons);
    const sauces = await client.fetch(querySauces);
    setSauces(sauces);
    const menuTaverne = await client.fetch(queryMenuTaverne);
    setMenuTaverne(menuTaverne);
    const menuDuJour = await client.fetch(queryMenuDuJour);
    setMenuDuJour(menuDuJour);

    console.log(menuTaverne)
  }

  useEffect(() => {
    getData();
  }, []);

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
                {entrees.map((entree) => (
                  <div className="menu__container2">
                    <li>- {entree.name}</li>
                    <span className="menu__span">{entree.price} €</span>
                  </div>
                ))}
              </ul>
            </div>

            <h3>Viandes</h3>

            <div className="menu__categorie flex">
              <p className="details_viande--first">
                Race : KOD jersey (Danemark)
              </p>
              <p className="details_viande">
                {/* <ul>
                  <li>- Faux filet de bœuf - 10.50€ / 100gr</li>
                  <li>- Entrecôte de bœuf - 10.50€ / 100gr</li>
                  <li>- Côte de bœuf - 10.50€ / 100gr</li>
                </ul> */}
              </p>
              <p className="details_viande--third">
                (Les différents poids des pièces disponibles vous seront
                communiqués lors de votre commande et le prix sera calculé en
                fonction de votre choix du poids.)
              </p>
              <ul>
                {viandes.map((viande) => (
                  <div className="menu__container2">
                    <li> - {viande.name}</li>{" "}
                    <span className="menu__span">{viande.price} €</span>
                  </div>
                ))}
              </ul>
              <p className="details_viande--third">
                Toutes nos sauces sont faites maison :
              </p>
              <ul>
                {sauces.map((sauce) => (
                  <div className="menu__container2--sauce">
                    <li> - {sauce.name}</li>
                  </div>
                ))}
              </ul>
              <p className="italic__comment">
                <i className="fas fa-arrow-right"></i> Nos plats sont
                accompagnés de mille feuilles de pommes de terre et de légumes
                frais rôtis
              </p>
            </div>
            <h3>Poissons</h3>

            <div className="menu__categorie">
              <ul>
                {poissons.map((poisson) => (
                  <div className="menu__container2">
                    <li>- {poisson.name}</li>{" "}
                    <span className="menu__span">{poisson.price} €</span>
                  </div>
                ))}
              </ul>

              <p className="italic__comment">
                <i className="fas fa-arrow-right"></i> Nos plats sont
                accompagnés de mille feuilles de pommes de terre et de légumes
                frais rôtis
              </p>
            </div>

            <h3>Fromages et Desserts</h3>

            <div className="menu__categorie">
              <ul>
                {desserts.map((dessert) => (
                  <div className="menu__container2">
                    <li>- {dessert.name}</li>{" "}
                    <span className="menu__span">{dessert.price} €</span>
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
                Steak haché Angus, pommes de terre rissolées, <br />1 Boule de
                glace – Sirop au choix{" "}
              </p>
            </div>
            <br />
            <br />
            <h3>Formule du jour</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-FormuleJour-price">
                {menuDuJour[0].fullMenuPrice} €
              </span>
              <p className="menu__descriptif-FormuleJour">
                Plat du jour, dessert du jour et café
              </p>
              <p className="menu__descriptif-FormuleJour-price2">
                (Ou Plat du jour &nbsp;{menuDuJour[0].platDuJourPrice} €)
              </p>
            </div>
            <h3>Menu "La Taverne"</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-MenuTaverne-price">
                {menuTaverne[0].prix} €
              </span>
              {/* <span style={{ fontSize: "24px" }}>40,00 €</span> */}
              <h2>Entrées</h2>
              <p>{menuTaverne[0].entree1}</p>
              <p>OU</p>
              <p>
                {menuTaverne[0].entree2}
              </p>
              <p>{(menuTaverne[0].entree3 ? "OU" : "")}</p>
              <p>{menuTaverne[0].entree3}</p>
              <h2>Plats</h2>
              <p>{menuTaverne[0].plat1}</p>
              <p>OU</p>
              <p>{menuTaverne[0].plat2}</p>
              <p>{(menuTaverne[0].plat3 ? "OU" : "")}</p>
              <p>{menuTaverne[0].plat3}</p>
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
              <p>Environ 350gr de viande/personne</p>
              <p>(Détail à la voix)</p>
              <p>+ Accompagnements</p>
              <p>(Formule imposée pour les tables de 8 personnes et plus)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
