import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "JASON",
    message: "I AM ",
    message1: "",
    message2: "HANDSOME",
    num: 1,
  });

  var very = "";

  const changeMessage = () => {
    for (let i = 0; i < person.num; i++) {
      very += "VERY ";
    }

    setPerson({ ...person, message1: very, num: (person.num += 1) });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>
        {person.message}
        {person.message1}
        {person.message2}
      </h3>
      <button className="btn" onClick={changeMessage}>
        Put more confidence
      </button>
    </>
  );
};

export default UseStateObject;
