
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = ({ onSelectSquare, turns }) => {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        // let's (derived state) destructure the properties of our turn and everything we need
        const { square, player } = turn;
        const { row, col } = square;
        // update the gameBoard with the 
        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex) =>
                    <li key={rowIndex}>
                        <ol>
                            {row.map(
                                (playerSymbol, colIndex) => (
                                    <li key={colIndex}>
                                        <button
                                            disabled={playerSymbol !== null} 
                                            onClick={(e) => onSelectSquare(rowIndex,colIndex)}>
                                            {playerSymbol}
                                        </button>
                                    </li>
                                )
                            )}
                        </ol>
                    </li>
            )}
        </ol>
    );

};

export default GameBoard;