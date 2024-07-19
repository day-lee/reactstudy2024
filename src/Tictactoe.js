import { useState } from "react";

function Sqaure() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    // when clicked, value changes to 'X'
    setValue("X");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
    </>
  );
}
