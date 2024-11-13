import React from "react";

const ChildComponent = (props) => {
  return(
    <div>
      <h1>Child Component</h1>
      <p>{props.message}</p>
    </div>
  )
}

export default ChildComponent;