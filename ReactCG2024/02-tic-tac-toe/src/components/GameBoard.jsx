
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = () => {
    return (
        <ol id="game-board">
            {initialGameBoard.map(
                (row, rowIndex) =>
                    <li key={rowIndex}>
                        <ol>
                            {row.map(
                                (playerSymbol, symbolIndex) => (
                                    <li key={symbolIndex}>
                                        <button>{playerSymbol}</button>
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