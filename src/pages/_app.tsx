import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log("No Easter Eggs here.");

  return (
    <>
      <DefaultSeo
        defaultTitle="Adam Turaj - Coming Soon"
        description="Adam Turaj is a frontend developer based in Ottawa, Canada. This will be his personal website."
        additionalMetaTags={[
          {
            name: "keywords",
            content: "software developer,freelancer,portfolio",
          },
          {
            name: "icon",
            content: "/favicon.ico",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://adamturaj.com",
          images: [
            {
              url: "/images/adamturaj.png",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
