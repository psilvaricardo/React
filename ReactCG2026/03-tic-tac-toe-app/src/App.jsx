import { useState } from "react";
import { Log } from "./components/Log.jsx";
import { Player } from "./components/Player.jsx";
import { GameOver } from "./components/GameOver.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import "./App.css";
import {
    PLAYERS,
    deriveActivePlayer,
    deriveGameBoard,
    deriveWinner,
} from "./util.js";

export const App = () => {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    // fixing issue if player names are empty
    const winnerSymbol = deriveWinner(gameBoard);
    const winnerName = winnerSymbol ? players[winnerSymbol] : null;

    // check if we have a draw
    const hasDraw = gameTurns.length === 9 && winnerSymbol === null;

    const onSelectSquareClickHandler = (e, rowIndex, colIndex) => {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    };

    const onRestartHandler = () => {
        setGameTurns([]);
    };

    const handlePlayerNameChange = (symbol, newName) => {
        setPlayers((prevPlayers) => {
            return {
                // I'll spread my old player's object into,
                // I use this aproach to make sure I keep the name
                // and symbol of the player that's not changing
                ...prevPlayers,
                // and then, override the one that was updated.
                [symbol]: newName,
            };
        });
    };

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialName={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winnerSymbol !== null || hasDraw) && (
                    <GameOver
                        winner={winnerSymbol}
                        winnerName={winnerName}
                        onRestart={onRestartHandler}
                    />
                )}
                <GameBoard
                    onSelectSquareFn={onSelectSquareClickHandler}
                    board={gameBoard}
                    isGameOver={winnerSymbol !== null || hasDraw}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
};
