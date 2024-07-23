import logo from "./pedro.png";
import "./App.css";
import Game from "./Tictactoe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
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
            Click here for Pedro's one hour loop 🎵
          </a>
          <p>
            <Link to="/tictactoe">Click here for Tic-tac-toe Game 🕹️</Link>
          </p>
          <Routes>
            <Route path="/tictactoe" element={<Game />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
