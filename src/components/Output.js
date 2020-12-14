import React from "react";
import PropTypes from "prop-types";

const Output = ({ data }) => {
  const string = data.join("");
  return (
    <div className={"outputScreen"} id="display">
      {string}
    </div>
  );
};

Output.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default Output;
