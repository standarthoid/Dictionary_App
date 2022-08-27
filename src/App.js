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
      <footer className="text-center">Coded by Miriam Hanke</footer>
    </div>
  );
}

export default App;
