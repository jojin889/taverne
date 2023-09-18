import News from "../components/news";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Mail from "../components/contact_mail";
import Navbar from "../components/navbar";
import Horaire from "../components/horaire";
import Gallery from "../components/galerie";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Horaire />
      {/* <Gallery /> */}
      {/* REMETTRE LE CLIQUE SUR LA GALLERIE DANS LE JS SI TU REMETS LA GALLERIE */}
      <Mail />
      <Footer />
    </>
  );
};

export default Home;
