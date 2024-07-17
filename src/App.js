import logo from "./pedro.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's Learn React with Pedro the Raccoon! 🦝</p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=CN0aLonHiIc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for Pedro's one hour loop
        </a>
      </header>
    </div>
  );
}

export default App;
