import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EmblaCarousel2 from "../components/slider2";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import React, { useState, useEffect } from "react";


const Test = () => {
    const [entrees, setEntrees] = useState(["1", "2"]);
    const [viandes, setViandes] = useState(["1", "2"]);
    const [desserts, setDesserts] = useState(["1", "2"]);
    const [poissons, setPoissons] = useState(["1", "2"]);
    const [sauces, setSauces] = useState(["1", "2"]);
    const [menuDuJour, setMenuDuJour] = useState(["1", "2"]);
    const [menuTaverne, setMenuTaverne] = useState(["1", "2"]);
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());
  
  
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
        <div id="event">
        <div className="event__container">
          <h1>Brasero</h1>

          <div className="brasero__container">
            <div className="brasero__textdiv">
              <p>
                La Taverne peut aussi venir jusqu'à vous, pour vos évènements
                festifs :
                <br /> Nous vous proposons une location du brasero seul ou avec
                viandes et accompagnements, ou même une prestation complète
                (formule traiteur et cuisine sur place)
                <br /> Nous sommes à votre disposition pour plus de
                renseignements.
              </p>
              <br />
            </div>
          </div>
          <h1>Privatisation</h1>

          <div className="privatisation__container">

            <Image
              src="/assets/fb/salle.jpg"
              alt="Salle"
              width={730}
              height={600}
              className="salle"
            />
            <div className="privatisation__textdiv">
              <p>
                Vous pouvez également privatiser notre salle et bénéficier d'un
                service complet.
                <br />
                <br /> Nous sommes à votre disposition pour plus de
                renseignements.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
        
        <Footer />
      </>
    );
}

export default Test