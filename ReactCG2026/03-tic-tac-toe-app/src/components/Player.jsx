import { useState } from "react";

export const Player = ({ name, symbol }) => {
    // using array destructuring to save the values
    const [isEditing, setIsEditing] = useState(false);

    const onClickHandler = () => {
        // Recommended for safe state updates
        setIsEditing((prev) => !prev);
    };

    return (
        <>
            <li>
                <span className="player">
                    {isEditing ? 
                      ( <input type="text" required /> ) 
                    : ( <span className="player-name">{name}</span> )
                    }
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={onClickHandler}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </li>
        </>
    );
};
