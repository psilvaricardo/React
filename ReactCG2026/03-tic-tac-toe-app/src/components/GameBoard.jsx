export const GameBoard = ({ onSelectSquareFn, gameBoard }) => {
    return (
        <ol id="game-board">
            {gameBoard.map((row, i) => (
                <li key={i}>
                    <ol>
                        {row.map((playerSymbol, j) => (
                            <li key={j}>
                                <button
                                    onClick={(e) => onSelectSquareFn(e, i, j)}
                                    disabled={playerSymbol !== null}
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
