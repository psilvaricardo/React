import { useState } from "react";

import Log from "./components/Log";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, SetACtivePlayer] = useState('X');

  const handleSelectSquare = (rowIndex, colIndex) => {
    SetACtivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X' );

    setGameTurns( prevTurns => {
      let currentPlayer = 'X';
      // the first element in our array will always be the latest turn
      if ( prevTurns.length > 0 && prevTurns[0].player === 'X' ) {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: currentPlayer }, 
        ...prevTurns
      ];

      return updatedTurns;
    });

  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={() => handleSelectSquare()} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App;
