import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Contact from "../src/views/Contact";

const ContactPage = () => {
  return <WithLayout component={Contact} layout={Minimal} />;
};

export default ContactPage;
