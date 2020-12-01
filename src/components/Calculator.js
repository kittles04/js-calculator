import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Output from "./Output";

const Calculator = (props) => {
  return (
    <div>
      <div className={"calculator"}>
        <Output />
        <Buttons />
      </div>
    </div>
  );
};

Calculator.propTypes = {};

export default Calculator;
