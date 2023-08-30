import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-title-div">
          <h1>La taverne</h1>
          <h3>Restaurant - Pub</h3>
          <h5>"Le gras c'est la vie"</h5>
        </div>
        <Link href="#down">
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>

      <a href="#down" id="down"></a>
    </>
  );
};

export default Hero;

