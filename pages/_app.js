import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from "@component/Navbar";
import BottomPlater from "@component/BottomPlayer";
import Footer from "@component/Footer";

import '../styles/globals.css'





function App({ Component, pageProps }) {
  return <><Navbar/><Component {...pageProps} /><Footer/><BottomPlater/></>
}

export default App
