import React, { useState } from 'react'
import WinGamePatt from './WinGamePatt'
import cellsgrid from './cellsgrid';
import GameBoard from './GameBoard';



 const Players = (props) => {
    // creates the 
    const [cells, setCells] = React.useState(cellsgrid);
    const [player, setPlayer] = React.useState("X");

    const playerToken = {
        0: "X",
        1: "O",
        2: " ",
    }

    const WinningPlayers = (winPat) => {
        console.log("Hello from WinningPlayers")
        WinGamePatt(cells)
        return "You have won a game"
    }


    // XplayerToken is player X
    // let XplayerToken = playerToken[1]
    // console.log(`This is X in Board ${XplayerToken}`)
    // // OplayerToken is player O
    // let OplayerToken = playerToken[2]
    // console.log(`This is O in playerToken ${OplayerToken}`)

    // rendering function calls below
    return (
        <div>
            <p>Hello from players</p>
           <GameBoard 
              cells={cells}
              // updates gameboard here, through props, renders here
              setCells={setCells}
           />
           {WinningPlayers()}
        </div>
    )
}

export default Players;