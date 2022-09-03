import React from "react";
import PlayIcon from "./PlayIcon.js";
export default function Phonetics(props) {
  if (props.phonetics.text) {
    return (
      <div className="Phonetics">
        <PlayIcon audio={props.phonetics.audio} />
        <div>{props.phonetics.text}</div>
      </div>
    );
  } else return <div></div>;
}
