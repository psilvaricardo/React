import { useState } from "react";

const Player = ({name, symbol}) => {
    const[isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        // When updating the state based on the old state we MUST pass a funtion
        // because React is scheduling the update behind the scenes, and this way
        // we can warranty that we are using the latest value for the state.
        setIsEditing( (isEditing) => !isEditing );
    }

    let playerName = isEditing ? 
                     <input type="text" required value={name} /> : 
                     <span className="player-name">{name}</span> ;
    
    let buttonTxt = isEditing ? 'Save' : 'Edit';
    
    return (
        <>
          <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleClick() }> {buttonTxt} </button>
          </li>
        </>
    );
}

export default Player;
