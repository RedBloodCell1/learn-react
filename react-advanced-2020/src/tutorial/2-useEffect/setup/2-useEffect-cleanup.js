import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkSize = () => {
    setWidth([window.innerWidth]);
    setHeight([window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h2>Width: {width} PX</h2>
      <h2>Height: {height} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
