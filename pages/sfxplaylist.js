import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Sfxplay from "../src/views/Sfxplay";

const SfxplayPage = () => {
  return <WithLayout component={Sfxplay} layout={Minimal} />;
};

export default SfxplayPage;
