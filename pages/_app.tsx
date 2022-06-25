import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter={true}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
