import React from "react";
import dictionary from "./dictionary.svg";
import "./App.css";
import Dictionary from "./Dictionary.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} className="App-logo" alt="logo" />
        <h1 className="Dictionary-Header">Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="banana" />
      </main>
      <footer className="text-center">
        {" "}
        <div>
          {" "}
          <div className="Footer">
            <p className="myName">
              <a
                className="openSource"
                href="https://github.com/standarthoid/Dictionary_App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coded
              </a>{" "}
              by{" "}
              <a
                className="openSource"
                href="https://tourmaline-haupia-d1577a.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Miriam Hanke
              </a>{" "}
              and hosted on{" "}
              <a
                className="openSource"
                href="https://incandescent-torte-0f5e78.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
