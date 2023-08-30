import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="loading">
        <div className="lds_ellipsis">
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </div>
      <div>
        <div id="loloading">
      <Component {...pageProps}  />
        </div>
      </div>
    </>
  );
}

export default MyApp;
