import React, { useState } from 'react';
import cellsgrid from './cellsgrid';

// iterates over the cellgrid which stores the player's selection
const allCellSpaces = [... new Set(cellsgrid.map((cell) => cell.spaces))]
const [selectedCells, setSelectedCells] = useState(allCellSpaces)

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

const WinningGamePatterns = ({clickCell}) => {
    let patternOne = winPat[0]
    let patternTwo = winPat[1]
    let patternThree =  winPat[2]
    console.log(`This is selectedCells[id]`) 
    selectedCells[id]

    winningPatterns.map((_, index) => {

        console.log("This is patternOne[index]")
        console.log(patternOne[index])
        console.log("This is selectedCells[id]")
        console.log(selectedCells[id])
       
         
       
       })

    return (
        <div>
           {WinningGamePatterns(selectedCells)}
        </div>
    )
}

export default WinningGamePatterns;
