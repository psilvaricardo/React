import { useState } from "react";

const initialGameBoard = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
];

export const GameBoard = ({ onSelectSquareFn, activePlayerSymbol }) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // when this is trigger, we want to change one of the squares
    // from undefined to either X or O, depending on who's clicking it.
    const onBoardClickHandler = (e, rowIndex, colIndex) => {
        // we need to preserve the previous state.
        setGameBoard((prevGameBoard) => {
            // following best practices, we need to create a copy of the array.
            // this is a new array with the old values
            const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];

            // we are updating the state in an immatable way!!
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        // calling the function reference
        onSelectSquareFn();
    };

    return (
        <ol id="game-board">
            {gameBoard.map((row, i) => (
                <li key={i}>
                    <ol>
                        {row.map((playerSymbol, j) => (
                            <li key={j}>
                                <button
                                    onClick={(e) =>
                                        onBoardClickHandler(e, i, j)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};
