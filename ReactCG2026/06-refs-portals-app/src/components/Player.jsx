import { useState } from "react";

export const Player = () => {
    const [submitted, setSubmitted] = useState(false);
    const [enteredPlayerName, setEnteredPlayerName] = useState("");

    const playerNameHandler = (e) => {
        setSubmitted(false);
        setEnteredPlayerName(e.target.value);
    };

    const onClickHandler = () => {
        setSubmitted(true);
    };

    return (
        <section id="player">
            <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
            <p>
                <input
                    type="text"
                    onChange={playerNameHandler}
                    value={enteredPlayerName}
                />
                <button onClick={onClickHandler}>Set Name</button>
            </p>
        </section>
    );
};
