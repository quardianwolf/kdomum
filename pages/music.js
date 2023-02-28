import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Music from "../src/views/Music";

const MusicPage = () => {
  return <WithLayout component={Music} layout={Minimal} />;
};

export default MusicPage;
