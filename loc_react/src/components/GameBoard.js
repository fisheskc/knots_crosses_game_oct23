import React, {Fragment} from 'react'
import Cell from './Cell';
import cellsgrid from './cellsgrid';
// import WinGamePatt from './WinGamePatt'

import classes from './Style.module.css'

const GameBoard = (props) => {
  
  // const [score, setScore] = React.useState("");
  const player = props.player;
  const setPlayer = props.setPlayer;
  const cells = props.cells;
  const setCells = props.setCells;


  // map to iterate through cells as a function & filter winning patterns here


  


  function clickCell(e) {
    console.log("Clicked here")
    let cellNumber = e.target.dataset.number
    // console.log(cellNumber)
    // cellNumber = 5;
    let displayValue = player
    let newPlayer = (player === 'X') ? 'O' : 'X'
    // console.log("This is cell id")

    let newCells = [...cells]

    newCells[cellNumber-1].value = displayValue
    console.log(cellNumber)
    console.log(`This is cell ${cellNumber}`)
    // console.log(cells)
    // console.log("This is player")
    // console.log(player)

    setCells(newCells)
   
    // this sets the alternative player on the game cellGrid
    // uses state on line 24
    console.log(setPlayer(newPlayer)) 
  }

 
    // renders every cell on the gameBoard
    const cellElements = () => {
    // console.log("This is cellElements")
    console.log(cells)
      return cells.map((cell)=> (  
      <Cell
        key={cell.id} 
        id={cell.id}
        clickCell={clickCell}
        value = {cell.value}
        
        />
      ))
    }
    return (
      <Fragment>
        <div>
          <h3>Hello from game Board</h3>
        </div>
        <div className={classes.container}>
            {cellElements()}  
        </div>
        
      </Fragment>
    ) 
}
export default GameBoard;








