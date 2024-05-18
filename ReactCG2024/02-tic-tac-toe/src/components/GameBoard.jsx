
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = ({ onSelectSquare }) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectedSquare = (rowIndex, colIndex) => {
    //     if your state is an array or an object, we must update the state
    //     in an Immutable way, making a copy and updating the copy.
    //     https://academind.com/tutorials/reference-vs-primitive-values
    //    setGameBoard((prevGameBoard) => {
    //        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //        return updatedBoard;
    //    });

    //    onSelectSquare();
    // };

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex) =>
                    <li key={rowIndex}>
                        <ol>
                            {row.map(
                                (playerSymbol, symbolIndex) => (
                                    <li key={symbolIndex}>
                                        <button onClick={(e) => onSelectSquare()}>{playerSymbol}</button>
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