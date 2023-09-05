import News from "../components/news";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Mail from "../components/contact_mail";
import Navbar from "../components/navbar";
import Horaire from "../components/horaire";
import Gallery from "../components/galerie";
import Evenements from "../components/evenements";
import Client from "../components/contentFul";


const Home = (props) => {
  // console.log('props from index', props)
  const GalleryImages = props.galleryImages;
  const eventImages = props.eventImages;
  

  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Evenements img={eventImages} />
      <Horaire />

      <Gallery img={GalleryImages} />
      <Mail />
      <Footer />
    </>
  );
};

export default Home;


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

  const galleryImages = await Client.getEntries({
    content_type: "galleryImages",
  });

  const eventImages = await Client.getEntries({
    content_type: "event",
  })






  return {
    props: {
      entreeItems: entreeData.items,
      poissonItems: poissonData.items,
      viandeItems: viandeData.items,
      sauceData: sauceData.items,
      dessertItems: dessertData.items,
      galleryImages : galleryImages.items,
      eventImages: eventImages.items,
    },
  };
}
