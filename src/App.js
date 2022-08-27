import logo from "./logoHankemacht.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        {" "}
        <div>
          {" "}
          <div>
            <p className="myName">
              <a
                className="openSource"
                href="https://github.com/standarthoid/Dictionary_App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coded by
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
