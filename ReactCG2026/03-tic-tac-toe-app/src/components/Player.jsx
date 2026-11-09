import { useState } from "react";

export const Player = ({ name, symbol }) => {
    // using array destructuring to save the values
    const [isEditing, setIsEditing] = useState(false);

    const onClickHandler = () => {
        // Recommended for safe state updates
        setIsEditing((prev) => !prev);
    };

    // adding some improvements
    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required />;
    }

    return (
        <>
            <li>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={onClickHandler}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </li>
        </>
    );
};
