import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import About from "../src/views/About";

const AboutPage = () => {
  return <WithLayout component={About} layout={Minimal} />;
};

export default AboutPage;
