import { useState, useRef } from "react";

const Player = () => {
  // when Refs are updated, the component is not re-executed/re-evaluated.
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  const handleClick = (e) => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  };

    return (
        <section id="player">
          <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
          <p>
            <input ref={playerName} type="text" />
            <button onClick={(e) => handleClick(e)}>Set Name</button>
          </p>
        </section>
      );
};

export default Player;
