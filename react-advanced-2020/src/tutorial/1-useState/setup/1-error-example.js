import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const clickHandler = () => {
    title = "Hello People";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
