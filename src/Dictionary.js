import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for Jesus and ${keyword}`);
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
        <button type="button" className="btn button-search">
          Search
        </button>
      </form>
    </div>
  );
}
