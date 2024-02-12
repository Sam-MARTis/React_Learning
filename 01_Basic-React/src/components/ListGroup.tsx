import { MouseEvent } from "react";

const ListGroup = () => {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  // items = [];
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>This is a list</h1>
      {items.length == 0 ? "List is empty" : null}
      {items.length == 0 && <p>Empty list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
