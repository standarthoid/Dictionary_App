import React from "react";
import PlayIcon from "./PlayIcon.js";
import "./Phonetics.css";
export default function Phonetics(props) {
  if (props.phonetics.text) {
    return (
      <div className="Phonetics">
        <PlayIcon audio={props.phonetics.audio} className="audio" />
        <span className="Phonetics-text">{props.phonetics.text}</span>
      </div>
    );
  } else return <div></div>;
}
