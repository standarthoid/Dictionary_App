import React from "react";
export default function Examples(props) {
  if (props.examples) {
    return (
      <div>
        <strong>Examples: </strong>
        {props.examples}
      </div>
    );
  } else {
    return null;
  }
}
