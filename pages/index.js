import News from "../components/News";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Mail from "../components/contact_mail";
import Navbar from "../components/navbar";
import Horaire from "../components/horaire";

const Home = (props) => {

  return (
    <>
      <Navbar />
      {/* <div>{props.items[0].fields.menuText}</div> */}
      <Hero />
      <News />
      <Horaire />

      <Mail />
      <Footer />
    </>
  );
};

export default Home;
