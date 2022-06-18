import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log("No Easter Eggs here.");

  return (
    <>
      <DefaultSeo
        defaultTitle="Adam Turaj - Coming Soon"
        description="This is the temporary placeholder for a new and improved website."
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
              url: "/adamturaj.png",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
