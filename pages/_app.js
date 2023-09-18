import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/styles.scss";
import Head from "next/head";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>La Taverne</title>
      </Head>
      {/* <div id="loading"> */}
        <div id="page-loader">
          <div className="spinner"></div>
        {/* </div> */}
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
