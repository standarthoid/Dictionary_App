import React, { useState } from "react";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";
import axios from "axios";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001aefdb91cb0b74dec946758b5d63ea792";
    let pexelsUrlApi = `https://api.pexels.com/v1/search?query=${keyword}&per_page=16`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrlApi, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section className="section-look">
          <div className="Word-Search">Which word are you looking for?</div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="input-search"
              onChange={handleKeywordChange}
            />
            <button
              type="button"
              className="btn button-search"
              onClick={search}
            >
              Search
            </button>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
