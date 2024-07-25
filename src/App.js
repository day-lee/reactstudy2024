import logo from "./pedro.png";
import "./App.css";
import Game from "./Tictactoe";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const pauseHandle = () => {
    setIsPaused(!isPaused);
  };

  const hideHandle = () => {
    setIsClicked(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            {" "}
            <button className="hidden" onClick={hideHandle}>
              {!isClicked ? (
                <Link to="/tictactoe">
                  Click here for Tic-Tac-Toe Game ✖️✖️✖️{" "}
                </Link>
              ) : (
                <Link to="/tictactoe"> Enjoy the Tic-Tac-Toe Game ✖️✖️✖️ </Link>
              )}
            </button>
          </p>
          {/* <img
            src={logo}
            className={`App-logo ${isPaused ? `paused` : " "}`}
            alt="logo"
          />
          <button onClick={pauseHandle}>
            Click here to start/pause his spin
          </button>
          <p>Let's Learn React with Pedro the Raccoon! 🦝</p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=CN0aLonHiIc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for Pedro's one hour loop 🎵
          </a> */}

          <Routes>
            <Route path="/tictactoe" element={<Game />} />
          </Routes>
        </header>
      </div>
      <footer className="footer">
        <p>
          <span> © Daylee 2024</span>
        </p>
      </footer>
    </Router>
  );
}

export default App;
