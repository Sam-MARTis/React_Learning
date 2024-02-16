import Square from "./Square";
import { useState } from "react";
import "./styles/Board.css";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const handleClick = () => {
    console.log("clicked ");
    const newState = state.slice();
    newState[0] = "X";
    setState(newState);
  };
  return (
    <>
      <div className="board-row">
        <Square value={state[0]} onClick={handleClick} />
        <Square value={state[1]} onClick={handleClick} />
        <Square value={state[2]} onClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={state[3]} onClick={handleClick} />
        <Square value={state[4]} onClick={handleClick} />
        <Square value={state[5]} onClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={state[6]} onClick={handleClick} />
        <Square value={state[7]} onClick={handleClick} />
        <Square value={state[8]} onClick={handleClick} />
      </div>
    </>
  );
};
export default Board;
