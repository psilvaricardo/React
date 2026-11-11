export const GameBoard = ({ onSelectSquareFn, board }) => {
    return (
        <ol id="game-board">
            {board.map((row, i) => (
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
