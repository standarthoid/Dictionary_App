import React from "react";
import Examples from "./Examples.js";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <Examples examples={definition.example} />
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
