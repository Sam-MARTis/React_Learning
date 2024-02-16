import "./styles/Square.css";
import { useState } from "react";
const Square = ({value, onClick}) => {

    // const [value, setValue] = useState(null);
//     const handleClick = () => {
//       setValue("X");
//     console.log("clicked");
  //   };
    // const doHandleClick = () => {
    //     if (value === null) {
    //         onClick();
    //     }
    // };
  return (
    <>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
