import Navbar from "../components/navbar";
import { groq } from "next-sanity";
import Footer from "../components/footer";
import { client } from "../sanity/lib/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Menu() {
  const [entrees, setEntrees] = useState(["1", "2"]);
  const [viandes, setViandes] = useState(["1", "2"]);
  const [desserts, setDesserts] = useState(["1", "2"]);
  const [poissons, setPoissons] = useState(["1", "2"]);
  const [sauces, setSauces] = useState(["1", "2"]);
  const [menuDuJour, setMenuDuJour] = useState(["1", "2"]);
  const [menuTaverne, setMenuTaverne] = useState(["1", "2"]);
  const [viandesRaces, setViandesRaces] = useState(["1", "2"]);
  const [accompagnement, setAccompagnement] = useState(["1", "2"]);

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

    const queryViandeRaces = groq`
    *[_type=='viandeRaces']
    `;
    const queryAccompagnement = groq`
    *[_type=='accompagnement']
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
    const viandesRaces = await client.fetch(queryViandeRaces);
    setViandesRaces(viandesRaces);
    const accompagnement = await client.fetch(queryAccompagnement);
    setAccompagnement(accompagnement);

    // console.log(entrees);
    
    function compareValues(key, order = 'desc') {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }
    
        const varA = (typeof a[key] === 'string')
          ? parseFloat(a[key]) : a[key];
        const varB = (typeof b[key] === 'string')
          ? parseFloat(b[key]) : b[key];
    
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    }

    entrees.sort(compareValues('price', 'desc'));
    viandes.sort(compareValues('price', 'desc'));
    desserts.sort(compareValues('price', 'desc'));
    poissons.sort(compareValues('price', 'desc'));

    console.log(menuTaverne[0])

    
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
          <a href="/assets/carte_boisson.pdf" download="carte_boisson">
            → Télécharger la carte des boissons
          </a>
          <a href="/assets/carte_boisson.pdf" download="carte_boisson">
            <Image
              src="/assets/img_pdf.webp"
              alt="pdf boisson"
              width={100}
              height={200}
            />
          </a>
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
              <p className="details_viande"></p>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>{viandesRaces[0].NomRace1}</th>
                      <th>{viandesRaces[0].NomRace2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Côte de bœuf</td>
                      <td>{viandesRaces[0].prix1Cote}</td>
                      <td>{viandesRaces[0].prix2Cote}</td>
                    </tr>
                    <tr>
                      <td>Entrecôte de bœuf</td>
                      <td>{viandesRaces[0].prix1Entrecote}</td>
                      <td>{viandesRaces[0].prix2Entrecote}</td>
                    </tr>
                  </tbody>
                </table>
              
              <p className="details_viande--third">
                Les différents poids des pièces disponibles vous seront
                communiqués lors de votre commande et le prix sera calculé en
                fonction de votre choix du poids.
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
                <i className="fas fa-arrow-right"></i> {accompagnement[0].text}
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
                <i className="fas fa-arrow-right"></i> {accompagnement[0].text}
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

            <h3>Menu "La Taverne"</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-MenuTaverne-price">
                {menuTaverne[0].prix} €
              </span>
              <h2>Entrées</h2>
              <p>{menuTaverne[0].entree1}</p>
              <p>OU</p>
              <p>{menuTaverne[0].entree2}</p>
              <p>{menuTaverne[0].entree3 ? "OU" : ""}</p>
              <p>{menuTaverne[0].entree3}</p>
              <h2>Plats</h2>
              <p>{menuTaverne[0].plat1}</p>
              <p>OU</p>
              <p>{menuTaverne[0].plat2}</p>
              <p>{menuTaverne[0].plat3 ? "OU" : ""}</p>
              <p>{menuTaverne[0].plat3}</p>
              <h2>Desserts</h2>
              <p>Au choix à la carte</p>
              {/* <p>{props.menuDessert1[0].fields.menuDessert1}</p>
              <p>OU</p>
              <p>{props.menuDessert2[0].fields.menuDessert2}</p>
              <p>OU</p>
              <p>{props.menuDessert3[0].fields.menuDessert3}</p> */}
            </div>
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
                Steak haché Angus, purée, <br />1 Boule de
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
              <p>Uniquement du mardi au vendredi midi</p>
              <p className="menu__descriptif-FormuleJour">
                Plat du jour, dessert du jour et café
              </p>
              <p className="menu__descriptif-FormuleJour-price2">
                (Ou Plat du jour &nbsp;{menuDuJour[0].platDuJourPrice} €)
              </p>
            </div>
            
            <h3>La Formule de KARADOC</h3>

            <div className="menu__categorie">
              <span className="menu__descriptif-Apartager-price">
                A partager- 27,00 €
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
