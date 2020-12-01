import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Output from "./Output";
import { useState } from "react";

const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/;

const Calculator = (props) => {
  const [currentVal, updateCurrentVal] = useState("0");
  const [prevVal, updatePrevVal] = useState("0");
  const [formula, updateFormula] = useState("");
  const [currentSign, updateCurrentSign] = useState("pos");
  const [lastClicked, updateLastClicked] = useState("");
  const [evaluated, updateEvaluated] = useState(false);

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
    if (!currentVal.includes("Limit")) {
      let expression = formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, "*")
        .replace(/‑/g, "-")
        .replace("--", "+0+0+0+0+0+0+");
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      answer = answer.toString();
      console.log("answer", answer);
      //   updateCurrentVal(answer),
      updateFormula(
        expression
          .replace(/\*/g, "⋅")
          .replace(/-/g, "‑")
          .replace("+0+0+0+0+0+0+", "‑-")
          .replace(/(x|\/|\+)‑/, "$1-")
          .replace(/^‑/, "-") +
          "=" +
          answer
      );

      updatePrevVal(answer);
      updateEvaluated(true);
    }
  };

  const handleOperators = (e) => {
    if (!currentVal.includes("Limit")) {
      const value = e.target.value;
      updateCurrentVal(value);
      updateEvaluated(false);
      if (evaluated) {
        updateFormula(prevVal + value);
      } else if (!endsWithOperator.test(formula)) {
        updatePrevVal(formula);
        updateFormula(formula + value);
      } else if (!endsWithNegativeSign.test(formula)) {
        updateFormula(
          endsWithNegativeSign.test(formula + value) ? formula : prevVal
        ) + value;
      } else if (value !== "-") {
        updateFormula(prevVal + value);
      }
    }
  };

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
