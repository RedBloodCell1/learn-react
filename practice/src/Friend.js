import React from "react";

const Friend = ({ img, name, skinColor }) => {
  //attribute, eventHandler

  const clickHandler = () => {
    alert("WHY DO YOU CLICK ME!!!!!!!!!");
  };

  const clickHandler2 = (a) => {
    console.log(a);
  };
  return (
    <article
      className="friend"
      onMouseOver={() => {
        console.log(name);
      }}
    >
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h4>{skinColor}</h4>
      <button type="button" onClick={clickHandler}>
        Don't Click Me
      </button>
      <button type="button" onClick={() => clickHandler2(skinColor)}>
        Don't Click Me 2
      </button>
    </article>
  );
};

export default Friend;
