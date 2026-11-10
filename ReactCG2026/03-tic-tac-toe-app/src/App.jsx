import { useState } from "react";
import { Log } from "./components/Log.jsx";
import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import "./App.css";

export const App = () => {
    const [gameTurns, setGameTurns] = useState([]);
    // Liftting state up, as it is common for Player and GameBoard
    const [activePlayer, setActivePlayer] = useState("X");

    const onSelectSquareClickHandler = (e, rowIndex, colIndex) => {
        setActivePlayer((currActivePlayer) =>
            currActivePlayer === "X" ? "O" : "X",
        );

        setGameTurns((prevTurns) => {
            let currentPlayer = "X";
            if (prevTurns.length > 0) {
                prevTurns[0].player === "X"
                    ? (currentPlayer = "O")
                    : (currentPlayer = "X");
            }

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

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    />
                </ol>
                <GameBoard
                    onSelectSquareFn={onSelectSquareClickHandler}
                    turns={gameTurns}
                />
            </div>
            <Log />
        </main>
    );
};
