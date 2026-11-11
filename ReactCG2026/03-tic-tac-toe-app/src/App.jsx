import { useState } from "react";
import { Log } from "./components/Log.jsx";
import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import "./App.css";

const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = "X";
    if (gameTurns.length > 0) {
        gameTurns[0].player === "X"
            ? (currentPlayer = "O")
            : (currentPlayer = "X");
    }

    return currentPlayer;
};

export const App = () => {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

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
            <Log turns={gameTurns} />
        </main>
    );
};
