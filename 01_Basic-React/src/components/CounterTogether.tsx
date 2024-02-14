import { useState } from "react";
import Button from "./Button";
import IsWorking from "./TestDisplay";

const CounterTogether = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <>
      <Button click={clickCount} clickHandler={handleClick}></Button>
          <Button click={clickCount} clickHandler={handleClick}></Button>
        {clickCount>5 && <IsWorking/>}
    </>
  );
};
export default CounterTogether
