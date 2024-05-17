import { useState } from "react";

const Player = ({name, symbol}) => {
    const[isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing( !isEditing );
    }

    let playerName = isEditing ? 
                     <input type="text" required /> : 
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
