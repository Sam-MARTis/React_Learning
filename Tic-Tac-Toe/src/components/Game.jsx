import Board from "./Board";
import { useState } from "react";

const Game = () => {
  const [isX, setIsX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [state, setState] = useState(Array(9).fill(null));

  const handlePlay = (newState) => {
    setIsX(!isX);

    setState(newState);

    setHistory([...history, newState]);
  };
  const jumpTo = (index) => {
    const newHistory = history.slice(0, index + 1);
    setHistory(newHistory);
    setState(newHistory[newHistory.length - 1]);
  };
  const moves = history.map((value, index) => {
    if (index != 0) {
      console.log("Value is " + value);
      return (
        <li
          key={index}
          onClick={() => {
            jumpTo(index);
          }}
        >
          Move #{index}
        </li>
      );
    } else
      return (
        <li
          key={index}
          onClick={() => {
            jumpTo(index);
          }}
        >
          Go to Game start
        </li>
      );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board isX={isX} state={state} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ul>{moves}</ul>
        </div>
      </div>
    </>
  );
};

export default Game;
