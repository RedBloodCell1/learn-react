import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Hello World");

  const clickHandler = () => {
    const newTitle = "Duarrr!!!!";
    const oldTitle = "Hello World!!!";

    if (title === oldTitle) {
      setTitle(newTitle);
    } else {
      setTitle(oldTitle);
    }
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="btn" className="btn" onClick={clickHandler}>
        Don't Click This Button
      </button>
      <h1>{title}</h1>
      <button type="btn" className="btn" onClick={clickHandler}>
        Don't Click This Button
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
