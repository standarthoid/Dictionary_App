import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <section className="synonyms">
        <h4 className="SynonymsHeading">Synonyms:</h4>
        <ul className="List">
          {props.synonyms.map(function(synonym, index) {
            return (
              <li key={index} className="synonym">
                {synonym}
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
