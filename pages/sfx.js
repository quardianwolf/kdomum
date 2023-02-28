import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Sfx from "../src/views/Sfx";

const SfxPage = () => {
  return <WithLayout component={Sfx} layout={Minimal} />;
};

export default SfxPage;
