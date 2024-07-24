import { useState } from "react";

function Square({ value, onSquareClick }) {
  // when value got a flag, add css
  // const [isPaused, setIsPaused] = useState(false);
  // className={`App-logo ${isPaused ? `paused` : " "}`}
  //   const [isWon, setIsWon] = useState(false);
  //   console.log(win);
  //   if (win !== null && win.includes(value)) {
  //     setIsWon(true);
  //   } else {
  //     setIsWon(false);
  //   }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );

  //   return (
  //     <button className={`square ${isWon ? `win` : " "}`} onClick={onSquareClick}>
  //       {value}
  //     </button>
  //   );
}

function Board({ xIsNext, squares, currentMove, onPlay }) {
  function handleClick(i) {
    //You will call calculateWinner(squares) in the Board component’s handleClick function to check if a player has won.
    //You can perform this check at the same time you check if a user has clicked a square that already has a X or and O.
    //We’d like to return early in both cases:
    // 함수 값이 있거나. string 그래서 true or null 어레이의 두번째 값을 비교해야할듯
    const calculateResult = calculateWinner(squares)[1];
    console.log("calculateResult");
    console.log(calculateResult);
    if (squares[i] || calculateResult) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  //const winner = calculateWinner(squares);
  const [winningLines, winner] = calculateWinner(squares);
  console.log(winningLines, winner); // [0, 3, 6]
  //squares array has no null and winner false means draw
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!winner && !squares.includes(null)) {
    status = "Result: Draw";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  // draw case
  //  oxo
  //  xxo
  //  xox

  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const boardRows = rows.map((row) => (
    <div className="board-row">
      {row.map((item) => (
        <Square
          value={squares[item]}
          onSquareClick={() => handleClick(item)}
          win={winningLines}
        />
      ))}
    </div>
  ));

  return (
    <>
      <div className="status">{status}</div>
      <h4>You are at move #{currentMove}</h4>
      {boardRows}
    </>
  );
}

const INITIAL_VALUE = [Array(9).fill(null)];
export default function Game() {
  // shared state : to collect the data from multiple children
  const [history, setHistory] = useState(INITIAL_VALUE);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDescending, setisDescending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // nextSquares is an array
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setCurrentMove(nextHistory.length - 1);
    setHistory(nextHistory);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  let moves = history.map((squares, move) => {
    let description;
    if (move === 0) {
      description = "Go to game start ";
    } else if (move > 0) {
      description = "Go to move #" + move;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const handleSort = () => {
    setisDescending(!isDescending);
  };

  const handleReset = () => {
    setHistory(INITIAL_VALUE);
    setCurrentMove(0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          currentMove={currentMove}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleReset}>Reset</button>
        <ol>{isDescending ? moves : moves.reverse()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(lines[i], squares[a]);
      // winner is decided, send the a b c as value as array?
      //return squares[a]; //string value'x'
      return [lines[i], squares[a]];
    }
  }
  return [null, null];
}
