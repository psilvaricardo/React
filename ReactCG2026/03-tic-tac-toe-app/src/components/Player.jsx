import { useState } from "react";

export const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    // using array destructuring to save the values
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    // fixing empty names, and rejecting empty names and keeping
    // the user in editing mode until a valid name is provided.
    const onClickHandler = () => {
        if (!isEditing) {
            setIsEditing(true);
            return;
        }

        // This prevents an empty name from being saved
        // or displayed as the final player name.
        const trimmedName = playerName.trim();
        if (trimmedName === "") {
            return;
        }

        setPlayerName(trimmedName);
        onChangeName(symbol, trimmedName);
        setIsEditing(false);
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
            <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {editablePlayerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button
                    onClick={onClickHandler}
                    disabled={isEditing && playerName.trim() === ""}
                >
                    {btnCaption}
                </button>
            </li>
        </>
    );
};
