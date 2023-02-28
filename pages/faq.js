import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Faq from "../src/views/Faq";

const FaqPage = () => {
  return <WithLayout component={Faq} layout={Minimal} />;
};

export default FaqPage;
