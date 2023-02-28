import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Playlist from "../src/views/Playlist";

const PlaylistPage = () => {
  return <WithLayout component={Playlist} layout={Minimal} />;
};

export default PlaylistPage;
