import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/fonts/style.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://mozilla.github.io/foundation-icons/assets/foundation-icons.css"
            type="text/css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
            integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link
            href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css"
            type="text/css"
            rel="stylesheet"
          />{" "}
    {/* <title>La Taverne</title> */}

        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/index.js"></script>
          <script src="https://use.fontawesome.com/a6aee08d63.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
