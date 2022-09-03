import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <Synonyms synonyms={props.results.meanings[0].synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
