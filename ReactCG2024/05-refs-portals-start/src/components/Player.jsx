import { useState } from "react";

const Player = () => {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  };

  const handleClick = (e) => {
    setSubmitted(true);
  };

    return (
        <section id="player">
          <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
          <p>
            <input type="text" onChange={(e) => handleChange(e)} value={enteredPlayerName} />
            <button onClick={(e) => handleClick(e)}>Set Name</button>
          </p>
        </section>
      );
};

export default Player;
