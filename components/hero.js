import { motion } from "framer-motion";
import { navVariants2, navVariants3, navVariants4 } from "../public/motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-title-div">
          <motion.div
            variants={navVariants2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1>La taverne</h1>
          </motion.div>
          <motion.div
            variants={navVariants3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3>Restaurant - Pub</h3>
          </motion.div>

          <motion.div
            variants={navVariants4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h5>"Le gras c'est la vie"</h5>
          </motion.div>
        </div>
        <Link href="#down">
        <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </div>

      <a href="#down" id="down"></a>
    </>
  );
};

export default Hero;
