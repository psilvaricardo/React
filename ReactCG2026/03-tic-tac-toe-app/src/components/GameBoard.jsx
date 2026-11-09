const initialGameBoard = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
];

export const GameBoard = () => {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, i) => (
                <li key={i}>
                    <ol>
                        {row.map((playerSymbol, j) => (
                            <li key={j}>
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};
