import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

export const PLAYERS = {
    X: "Player 1",
    O: "Player 2",
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
};

export const deriveGameBoard = (gameTurns) => {
    // Modifying a variable defined outside a component is not allowed,
    // and we should not try to edit the original in-memory array.
    // we must create a deep copy when we derive the game board !!!
    // let gameBoard = initialGameBoard;
    let gameBoard = [...INITIAL_GAME_BOARD.map((e) => [...e])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
};

export const deriveWinner = (gameBoard) => {
    
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];

        // improved logic to avoid issues, explicitly check for valid player symbols
        // This is more robust because it guarantees that only an actual player's symbol 
        // can produce a winning combination.
        if (
            (firstSquareSymbol === "X" || firstSquareSymbol === "O") &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            return firstSquareSymbol;
        }
    }

    return null;
};
