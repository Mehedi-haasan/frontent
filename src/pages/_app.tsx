import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from '../Redux/provider';
import '../AmplifyConfigure'
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </StoreProvider>
  );
}

export default MyApp;