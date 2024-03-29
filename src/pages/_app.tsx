import type { AppProps } from "next/app";
import "styles/globals.css";

import { Nav } from "components/Nav";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
