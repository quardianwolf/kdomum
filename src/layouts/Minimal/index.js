import React from "react";
import PropTypes from "prop-types";

const Minimal = ({ children }) => {
  return <>{children}</>;
};

Minimal.propTypes = {
  children: PropTypes.node,
};

export default Minimal;
