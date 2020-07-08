import React from "react";

function Congratulations({ score, newGameFunction }) {
  return (
    <>
      <h2>Congratulations</h2>
      <h3>
        Your scored: <strong>{score}</strong>
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button id="btn" onClick={() => newGameFunction(1)}>
        Play again
      </button>
      <br />
      <a onClick={() => newGameFunction(0)} href="#">
        Go to Start...
      </a>
    </>
  );
}

export default Congratulations;
