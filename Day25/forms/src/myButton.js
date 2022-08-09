import React from "react";

const myButton = (props) => {
    console.log(props)
  return (
    <div>
      <button
        onClick={props.xyz}
      >
        Click Me
      </button>
    </div>
  );
};

export default myButton;
