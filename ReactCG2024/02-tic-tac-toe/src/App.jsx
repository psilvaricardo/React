import { useState } from "react";

import Log from "./components/Log";
import Player from "./components/Player";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

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
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });
  
  const activePlayer = deriveActivePlayer(gameTurns);

  // fixing a bug, as ummutability matters and we must have a copy of the array.
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
      // let's (derived state) destructure the properties of our turn and everything we need
      const { square, player } = turn;
      const { row, col } = square;
      // update the gameBoard with the 
      gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && 
       (firstSquareSymbol === secondSquareSymbol) &&
       (firstSquareSymbol === thirdSquareSymbol)
      ){
        // fixing the name of the winner and stop using the symbol
        winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers( prevPlayers => {
      return {
        ...prevPlayers, 
        [symbol]: newName
      }
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initialName="Player 1" 
            symbol="X" 
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange} 
          />
          <Player 
            initialName="Player 2" 
            symbol="O" 
            isActive={activePlayer === 'O'} 
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard} 
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
