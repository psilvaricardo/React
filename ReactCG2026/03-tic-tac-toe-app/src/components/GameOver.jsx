export const GameOver = ({ winner, winnerName, onRestart }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>

            {winner !== null ? (
                <p>{winnerName?.trim() || `Player ${winner}`} won!!</p>
            ) : (
                <p>It's a draw</p>
            )}

            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    );
};
