import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Output from "./Output";
import { useState } from "react";

const Calculator = (props) => {
  const [currentVal, updateCurrentVal] = useState("0");
  const [prevVal, updatePrevVal] = useState("0");
  const [formula, updateFormula] = useState("");
  const [currentSign, updateCurrentSign] = useState("pos");
  const [lastClicked, updateLastClicked] = useState("");

  const initialize = () => {
    updateCurrentVal("0");
    updatePrevVal("0");
    updateFormula("");
    updateCurrentSign("pos");
    updateLastClicked("");
  };

  const maxDigitWarning = () => {
    updateCurrentVal("Digit Limit Met");
    updatePrevVal(currentVal);
    setTimeout(() => {
      updateCurrentVal(prevVal);
    }, 1000);
  };

  const handleEvaluate = () => {
      
  }
  return (
    <div>
      <div className={"calculator"}>
        <Output currentValue={currentVal} initialize={initialize} />
        <Buttons />
      </div>
    </div>
  );
};

Calculator.propTypes = {};

export default Calculator;
