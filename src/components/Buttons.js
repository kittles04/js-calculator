import React from "react";
import PropTypes from "prop-types";

const Buttons = (props) => {
  const clearStyle = { background: "#ac3939" },
    operatorStyle = { background: "#666666" },
    equalsStyle = {
      background: "#004466",
      position: "absolute",
      height: 130,
      bottom: 5,
    };
  return (
    <div>
      <button
        className="jumbo"
        id="clear"
        onClick={console.log("clear")}
        style={clearStyle}
        value="AC"
      >
        AC
      </button>
      <button
        id="divide"
        onClick={console.log("divide")}
        style={operatorStyle}
        value="/"
      >
        /
      </button>
      <button
        id="multiply"
        onClick={console.log("multiply")}
        style={operatorStyle}
        value="x"
      >
        x
      </button>
      <button id={"seven"} onClick={console.log("seven")} value="7">
        7
      </button>
      <button id={"eight"} onClick={console.log("eight")} value="eight">
        8
      </button>
      <button id={"nine"} onClick={console.log("nine")} value="nine">
        9
      </button>
      <button
        id="subtract"
        onClick={console.log("subtract")}
        style={operatorStyle}
        value="‑"
      >
        ‑
      </button>
      <button id={"four"} onClick={console.log("four")} value="four">
        4
      </button>
      <button id={"five"} onClick={console.log("five")} value="five">
        5
      </button>
      <button id={"six"} onClick={console.log("six")} value="six">
        6
      </button>
      <button
        id="add"
        onClick={console.log("add")}
        style={operatorStyle}
        value="+"
      >
        +
      </button>
      <button id={"one"} onClick={console.log("one")} value="one">
        1
      </button>
      <button id={"two"} onClick={console.log("two")} value="two">
        2
      </button>
      <button id={"three"} onClick={console.log("three")} value="three">
        3
      </button>
      <button
        id={"equals"}
        style={equalsStyle}
        onClick={console.log("equals")}
        value="="
      >
        =
      </button>
      <button className="jumbo" id="zero" onClick={console.log(0)} value="0">
        0
      </button>
      <button id="decimal" onClick={console.log("decimal")} value=".">
        .
      </button>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;
