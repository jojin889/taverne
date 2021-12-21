import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-title">
          <h1>La taverne</h1>
          <h3>Restaurant - Pub</h3>
          <h5>" Le gras c'est la vie "</h5>
        </div>
        <Link href="#lol">
          <i className="fas fa-chevron-down" id="lol"></i>
        </Link>
      </div>
    </>
  );
};

export default Hero;
