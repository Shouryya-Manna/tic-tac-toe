import React, { useState, useEffect } from "react";
function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [turn, setTurn] = useState("X");
  const [winningLine, setWinningLine] = useState([]);
  const [won, setWon] = useState(false);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    winCondition();
    drawCondition();
  }, [board]);



  function winCondition() {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let i = 0;
    for (i = 0; i < win.length; i++) {
      if (
        (board[win[i][0]] == "X" &&
          board[win[i][1]] == "X" &&
          board[win[i][2]] == "X") ||
        (board[win[i][0]] == "O" &&
          board[win[i][1]] == "O" &&
          board[win[i][2]] == "O")
      ) {
        setWinningLine(win[i]);
        setWon(true);
      }
    }
  }

  function drawCondition() {
    if (board.every(cell => cell !== null) && !won) {
      setDraw(true);
    }
  }

  function handleShow(index) {
    if (board[index] || won==true || draw ==true) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = turn;
    setBoard(updatedBoard);

    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl mt-[100px]">Tic Tac Toe</h1>
      <div className="items-center mt-[100px] grid gap-3 grid-cols-3 grid-rows-3 ">
        {board.map((value, index) => (
          <div
            className={`flex w-[100px] h-[100px] border-2 border-stone-700 rounded-[20px] text-5xl justify-center items-center cursor-pointer transition ease-in duration-500
              ${winningLine.includes(index) ? "bg-green-300" : ""} `}
            key={index}
            onClick={() => handleShow(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {won && <div className="mt-10 text-2xl text-green-500">turn {turn === "X"  ? "O" : "X"} Wins!</div>}
      {draw && <div className="mt-10 text-2xl text-red-500">It's a Draw!</div>}
    </div>
  );
}
export default TicTacToe;
