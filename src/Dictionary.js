import React, { useState } from "react";
import Results from "./Results.js";
import "./Dictionary.css";
import axios from "axios";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="input-search"
          onChange={handleKeywordChange}
        />
        <button type="button" className="btn button-search" onClick={search}>
          Search
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
