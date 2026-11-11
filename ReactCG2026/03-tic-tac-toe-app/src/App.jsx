import { useState } from "react";
import { Log } from "./components/Log.jsx";
import { Player } from "./components/Player.jsx";
import { GameOver } from "./components/GameOver.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";
import "./App.css";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
};

export const App = () => {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    // Modifying a variable defined outside a component is not allowed,
    // and we should not try to edit the original in-memory array.
    // we must create a deep copy when we derive the game board !!!
    // let gameBoard = initialGameBoard;
    let gameBoard = [...initialGameBoard.map((e) => [...e])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol !== undefined &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = firstSquareSymbol;
        }
    }

    // check if we have a draw
    const hasDraw = gameTurns.length === 9 && !winner;

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

    const handleRestart = () => {
        setGameTurns([]);
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
                {(winner || hasDraw) && (
                    <GameOver winner={winner} onRestart={handleRestart} />
                )}
                <GameBoard
                    onSelectSquareFn={onSelectSquareClickHandler}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
};
