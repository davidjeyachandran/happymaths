import React, { Component } from "react";

function ChooseType({ chooseTypeFunction }) {
  return (
    <div id="setup">
      <button onClick={() => chooseTypeFunction("ADDITION")}>Addition</button>
      <button onClick={() => chooseTypeFunction("SUBTRACTION")}>
        Subtraction
      </button>
      <button onClick={() => chooseTypeFunction("MULTIPLICATION")}>
        Multiplication
      </button>
      <button onClick={() => chooseTypeFunction("DIVISION")}>Division</button>
    </div>
  );
}

export default ChooseType;
