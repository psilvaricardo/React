import { useState } from "react";

export const Player = ({ initialName, symbol }) => {
    // using array destructuring to save the values
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const onClickHandler = () => {
        // Recommended for safe state updates based on a previous value
        // we will pass a function that will be called by react.
        setIsEditing((prev) => !prev);
    };

    const onChangeHandler = (e) => {
        setPlayerName(e.target.value);
    };

    // adding some improvements
    let btnCaption = "Edit";
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = (
            <input
                type="text"
                required
                value={playerName}
                onChange={(e) => onChangeHandler(e)}
            />
        );
        btnCaption = "Save";
    }

    return (
        <>
            <li>
                <span className="player">
                    {editablePlayerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={onClickHandler}>{btnCaption}</button>
            </li>
        </>
    );
};
