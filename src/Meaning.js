import React from "react";
import Examples from "./Examples.js";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <div className="headingDefinition">Definition: </div>
            <div className="wordDefinition">{definition.definition}</div>
            <br />
            <section>
              <Examples examples={definition.example} className="examples" />
            </section>
          </div>
        );
      })}
    </div>
  );
}
