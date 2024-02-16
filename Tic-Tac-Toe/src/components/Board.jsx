import Square from "./Square";
import { useState } from "react";
import "./styles/Board.css";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    const newState = state.slice();
    if (newState[i] || calculateWinner(newState)) return;

    if (isX) {
      console.log("clicked ");

      newState[i] = "X";
    } else {
      console.log("clicked ");
      newState[i] = "O";
    }
    setIsX(!isX);

    setState(newState);
  };
  return (
    <>
      <div className="board-row">
        <Square
          value={state[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={state[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={state[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={state[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={state[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={state[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={state[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={state[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={state[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
};
export default Board;
