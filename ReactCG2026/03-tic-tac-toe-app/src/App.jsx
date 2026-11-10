import { useState } from "react";
import { Log } from "./components/Log.jsx";
import { Player } from "./components/Player.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import "./App.css";

export const App = () => {
    const [gameTurns, setGameTurns] = useState([]);
    // Liftting state up, as it is common for Player and GameBoard
    const [activePlayer, setActivePlayer] = useState("X");

    const onSelectSquareClickHandler = () => {
        setActivePlayer((currActivePlayer) =>
            currActivePlayer === "X" ? "O" : "X",
        );
        setGameTurns();
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
                    activePlayerSymbol={activePlayer}
                />
            </div>
            <Log />
        </main>
    );
};
