import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Profile from "../src/views/Profile";

const ProfilePage = () => {
  return <WithLayout component={Profile} layout={Minimal} />;
};

export default ProfilePage;
