import React, { useState } from "react";
import { data } from "../../../data";
import { friend } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(friend);

  const clickHandler = () => {
    if (people === data) {
      setPeople(friend);
    } else {
      setPeople(data);
    }
  };

  const soloClickHandler = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => soloClickHandler(id)}
            >
              Delete {name}
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clickHandler}>
        Alternate Universe
      </button>
    </>
  );
};

export default UseStateArray;
