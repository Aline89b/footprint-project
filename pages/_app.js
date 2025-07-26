import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Footprint calculator</title>
        <meta
          name="Footprint calculator for your travel emissions"
          content="Calculate your travel emissions with our footprint calculator. Enter your origin, destination, and travel mode to get accurate CO2 emissions data."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
