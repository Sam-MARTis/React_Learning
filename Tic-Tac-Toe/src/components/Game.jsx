import Board from "./Board";
import { useState } from "react";

const Game = () => {
  const [isX, setIsX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [state, setState] = useState(Array(9).fill(null));

  const handlePlay = (newState) => {
    // console.log("Recieving newState " + newState);
    setIsX(!isX);

    setState(newState);
    console.log("History is " + history);
    console.log;
    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
          console.log("Setting history to " + [...history, newState]);
        setHistory([...history, newState]);
        resolve;
      }, 300);
    });
    myPromise
      .then(() => {
        // console.log("History after " + history);
      })
      .then(() => {
        // console.log("History after " + history);
      });

  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board isX={isX} state={state} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
