import { useState } from "react";

import Log from "./components/Log";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  // the first element in our array will always be the latest turn
  if ( gameTurns.length > 0 && gameTurns[0].player === 'X' ) {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns( prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

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
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          turns={gameTurns} 
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
