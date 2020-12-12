import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ onClick }) => {
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
        onClick={(e) => onClick(e.target.value)}
        style={clearStyle}
        value="AC"
      >
        AC
      </button>
      <button
        id="divide"
        onClick={(e) => onClick(e.target.value)}
        style={operatorStyle}
        value="/"
      >
        /
      </button>
      <button
        id="multiply"
        onClick={(e) => onClick(e.target.value)}
        style={operatorStyle}
        value="*"
      >
        x
      </button>
      <button id={"seven"} onClick={(e) => onClick(e.target.value)} value="7">
        7
      </button>
      <button id={"eight"} onClick={(e) => onClick(e.target.value)} value="8">
        8
      </button>
      <button id={"nine"} onClick={(e) => onClick(e.target.value)} value="9">
        9
      </button>
      <button
        id="subtract"
        onClick={(e) => onClick(e.target.value)}
        style={operatorStyle}
        value="-"
      >
        -
      </button>
      <button id={"four"} onClick={(e) => onClick(e.target.value)} value="4">
        4
      </button>
      <button id={"five"} onClick={(e) => onClick(e.target.value)} value="5">
        5
      </button>
      <button id={"six"} onClick={(e) => onClick(e.target.value)} value="6">
        6
      </button>
      <button
        id="add"
        onClick={(e) => onClick(e.target.value)}
        style={operatorStyle}
        value="+"
      >
        +
      </button>
      <button id={"one"} onClick={(e) => onClick(e.target.value)} value="1">
        1
      </button>
      <button id={"two"} onClick={(e) => onClick(e.target.value)} value="2">
        2
      </button>
      <button id={"three"} onClick={(e) => onClick(e.target.value)} value="3">
        3
      </button>
      <button
        id={"equals"}
        style={equalsStyle}
        onClick={(e) => onClick(e.target.value)}
        value="="
      >
        =
      </button>
      <button
        className="jumbo"
        id="zero"
        onClick={(e) => onClick(e.target.value)}
        value="0"
      >
        0
      </button>
      <button id="decimal" onClick={(e) => onClick(e.target.value)} value=".">
        .
      </button>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;
