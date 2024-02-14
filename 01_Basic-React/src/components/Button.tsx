import { useState } from "react";

const Button = ({click, clickHandler}) => {
  return (
    <>
      <button onClick={clickHandler}>My count is {click}</button>
    </>
  );
};

export default Button;
