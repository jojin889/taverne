import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="stylesheet" href="/fonts/style.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300&display=swap"
            rel="stylesheet"
          />
          <meta
            name="La Taverne"
            content="Restaurant de viande et pub à Tignieu-Jameyzieu"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/index.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
