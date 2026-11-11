const initialGameBoard = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
];

export const GameBoard = ({ onSelectSquareFn, turns }) => {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        // modifying a variable defined outside a component
        // is not correct and not allowed.
        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, i) => (
                <li key={i}>
                    <ol>
                        {row.map((playerSymbol, j) => (
                            <li key={j}>
                                <button
                                    onClick={(e) => onSelectSquareFn(e, i, j)}
                                    disabled={playerSymbol !== undefined}
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
