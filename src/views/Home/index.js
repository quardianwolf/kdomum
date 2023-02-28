import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Hero from "./hero";
import Boxes from "./boxes";
import Whyus from "./whyus";
import Trial from "./trial";
import Category from "./category";
import Browse_te from "./browse_te";
import Pricing from "./pricing";

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
   <div className="homepage-container">
   <Hero />
   <Boxes />
   <Whyus/>
   <Trial/>
   <Category />
   <Browse_te />
   <Pricing />
   </div>
  );
};

export default Home;
