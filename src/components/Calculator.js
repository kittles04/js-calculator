import React from "react";
import Buttons from "./Buttons";
import Output from "./Output";
import { useState } from "react";
import * as math from "mathjs";
import update from "immutability-helper";

const OPERATORS_ARRAY = ["+", "*", "/", "-"];

const isOperator = (val) => {
  return OPERATORS_ARRAY.includes(val);
};

const Calculator = () => {
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
        const lastItem = operations[operations.length - 1];
        const secondToLastItem = operations[operations.length - 2];

        if (
          isOperator(lastItem) &&
          isOperator(secondToLastItem) &&
          isOperator(button)
        ) {
          operations.pop();
          operations.pop();
        } else if (
          button !== "-" &&
          isOperator(button) &&
          isOperator(lastItem)
        ) {
          operations.pop();
        }

        const newData = update(operations, { $push: [button] });

        let str = operations.join("");

        let numberGroups = str.split(/[+*\/-]/);
        let currentNumber = numberGroups.length - 1;
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

export default Calculator;
