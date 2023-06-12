import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("A");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  // const errorHandler = () => {
  //   if (isError) {
  //     setIsError(false);
  //   } else {
  //     setIsError(true);
  //   }
  // };

  return (
    <>
      {/* <h1>First: {firstValue}</h1>
      <h1>Second: {secondValue}</h1> */}

      {isError || <h1>NOT ERROR</h1>}
      {isError && <h1>ERROR</h1>}
      {isError ? <h1>ERROR</h1> : <h1>NOT ERROR</h1>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toogle Error
      </button>
    </>
  );
};

export default ShortCircuit;
