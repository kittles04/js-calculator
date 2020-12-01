import React from "react";
import PropTypes from "prop-types";

const Output = ({ currentValue, initialize }) => {
  return (
    <div className={"outputScreen"} id="display">
      {currentValue}
    </div>
  );
};

Output.propTypes = {};

export default Output;
