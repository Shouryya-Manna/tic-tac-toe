import React, { useState, useEffect } from "react";
import Box from "./Box";
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
  const [player, setPlayer] = useState("X");
  const [winningLine, setWinningLine] = useState([]);
  const [won,setWon] = useState(0);

  useEffect(() => {
    winCondition();
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
        setWon(1);
      }
    }
  }

  function handleShow(index) {
    let updatedBoard = [...board];
    updatedBoard[index] = player;
    if (won == 0) {
      setBoard(updatedBoard);
    }

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl mt-[100px]">Tic Tac Toe</h1>
      <div className="items-center mt-[100px] grid gap-3 grid-cols-3 grid-rows-3 ">
        {board.map((value, index) => (
          <div
            className={`flex w-[100px] h-[100px] border-2 justify-center items-center 
              ${winningLine.includes(index) ? "bg-green-200" : ""} `}
            key={index}
            onClick={() => handleShow(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TicTacToe;
