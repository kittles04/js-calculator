import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Output from "./Output";
import { useState } from "react";
import * as math from "mathjs";
import update from "immutability-helper";

const Calculator = (props) => {
  const [operations, setOperations] = useState(["0"]);

  const onClick = (button) => {
    switch (button) {
      case "AC":
        setOperations(["0"]);
        break;
      case "=":
        calculateOperations();
        break;
      default:
        const newData = update(operations, { $push: [button] });

        let str = operations.join("");
        var numberGroups = str.split(/[+*\/-]/);
        let operators = /[+*\/-]/;

        let currentNumber = numberGroups.length - 1;

        // if (currentNumber.match(operators) && button === "=") {
        //   calculateOperations();
        // }
        if (numberGroups[currentNumber].includes(".") && button === ".") {
          return;
        }

        const firstDigit = newData[0];

        if (firstDigit === "0") {
          newData.shift();
        }

        setOperations(newData);
        break;
    }
  };

  const calculateOperations = () => {
    let result = operations.slice(0).join("");

    if (result) {
      result = math.evaluate(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      setOperations([result]);
    }
  };

  return (
    <div>
      <div className={"calculator"}>
        <Output data={operations} />
        <Buttons onClick={onClick} />
      </div>
    </div>
  );
};

Calculator.propTypes = {};

export default Calculator;
