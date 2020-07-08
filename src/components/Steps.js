import React, { useState } from "react";
import GameReady from "./GameReady";
import ChooseType from "./ChooseType";
import Game from "./Game";
import Congratulations from "./Congratulations";

function Steps() {
  const [step, setStep] = useState(0);
  const [gameType, setGameType] = useState("");
  const [score, setScore] = useState(0);

  function endGameHandler() {
    setStep(3);
  }

  function chooseTypeFunction(gameType) {
    setGameType(gameType);
    setStep(1);
  }

  function updateScore() {
    setScore(score + 1);
  }

  function newGame(nextStep) {
    setScore(0);
    setStep(nextStep);
  }

  const startTime = 3;

  switch (step) {
    case 0:
      return <ChooseType chooseTypeFunction={chooseTypeFunction} />;

    case 1:
      return (
        <GameReady
          gameType={gameType}
          startTime={startTime}
          newGameFunction={newGame}
        />
      );

    case 2:
      return (
        <Game
          gameType={gameType}
          startTime={startTime}
          endGameHandler={endGameHandler}
          score={score}
          updateScoreFunction={updateScore}
        />
      );

    case 3:
      return <Congratulations score={score} newGameFunction={newGame} />;

    default:
      return <p>Step not defined: App</p>;
  }
}

export default Steps;
