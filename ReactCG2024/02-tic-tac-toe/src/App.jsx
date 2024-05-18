import { useState } from "react";

import Log from "./components/Log";
import Player from "./components/Player";
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
  
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
      // let's (derived state) destructure the properties of our turn and everything we need
      const { square, player } = turn;
      const { row, col } = square;
      // update the gameBoard with the 
      gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[];
    const secondSquareSymbol = '';
    const thirdSquareSymbol = '';
  }

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
          board={gameBoard} 
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
