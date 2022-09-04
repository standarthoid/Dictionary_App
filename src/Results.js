import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2 className="results-heading">{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetics, index) {
          return (
            <section>
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            </section>
          );
        })}
        {props.results.meanings.map(function(meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
        <section>
          <Synonyms synonyms={props.results.meanings[0].synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
