import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";
import "./Results.css";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
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
