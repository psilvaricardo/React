import { useState, useRef } from "react";

export const Player = () => {
    /* A ref is a value managed by React that you can use
    to connect to JSX elements using the 'ref' property */
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    const onClickHandler = () => {
        // we can access all the properties and methods of the native
        // inpput element (in this case) using the current property of the ref
        setEnteredPlayerName(playerName.current.value);
    };

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={onClickHandler}>Set Name</button>
            </p>
        </section>
    );
};
