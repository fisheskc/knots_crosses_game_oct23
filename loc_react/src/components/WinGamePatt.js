import React, { useState } from 'react';
import cellsgrid from './cellsgrid';

// iterates over the cellgrid which stores the player's selection

// const [selectedCells, setSelectedCells] = useState(allCellSpaces)

const WinGamePatt = (squares) => {
    console.log("Hello from WinGamePatt")
    let winningPatterns = [
        [1, 5, 9],
        [1, 2, 3],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ];

  for(let i = 0; i < winningPatterns.length; i++) {
    const [a,b,c] = winningPatterns[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
    }
  }
      return null;
}

export default WinGamePatt;