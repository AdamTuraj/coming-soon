import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
