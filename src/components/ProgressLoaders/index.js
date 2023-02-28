import React from "react";
import propTypes from "prop-types";

const ProgressLoaders = ({ height }) => {
  const centerDiv = {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: height ? height : "100vh",
  };

  return (
    <div className="loaderWrapper">
      <div style={centerDiv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="loader"
        >
          <rect x="0" y="45" width="100" height="10" fill="#eee" rx="5"></rect>
          <rect
            x="2"
            y="47"
            width="6"
            height="6"
            fill="#000"
            rx="4"
            className="path4"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

ProgressLoaders.propTypes = {
  height: propTypes.string,
};

export default ProgressLoaders;
