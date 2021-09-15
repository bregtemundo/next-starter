import Document, { Html, Head, Main, NextScript } from "next/document";


// Custom Document
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
