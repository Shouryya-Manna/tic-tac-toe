import React, { useState } from "react";
import Box from "./Box";
function TicTacToe() {

  function handleShow(index){
    let updatedBoard = [...board]
    updatedBoard[index]="X";
    setBoard(updatedBoard);
  }
    
    const [board,setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    return (
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-5xl mt-[100px]">Tic Tac Toe</h1>
        <div className="items-center mt-[100px] grid gap-3 grid-cols-3 grid-rows-3 ">
          {board.map((value, index) => (
            <div className="flex w-[100px] h-[100px] border-2 justify-center items-center " 
            key={index}
            onClick={()=>handleShow(index)}>{value}</div>
          ))}
        </div>
      </div>                  
    );
}
export default TicTacToe;
