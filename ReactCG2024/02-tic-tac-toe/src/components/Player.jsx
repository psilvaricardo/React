import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const[isEditing, setIsEditing] = useState(false);
    const[playerName,setPlayerName] = useState(initialName);

    const handleClick = () => {
        // When updating the state based on the old state we MUST pass a funtion
        // because React is scheduling the update behind the scenes, and this way
        // we can warranty that we are using the latest value for the state.
        setIsEditing( (isEditing) => !isEditing );
        
        if (isEditing) {
          onChangeName(symbol, playerName);
        }
    };

    const handleOnTextChange = (event) => {
        setPlayerName(event.target.value);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setPlayerName(event.target.value);
        setIsEditing( (isEditing) => !isEditing );
        
        if (isEditing) {
          onChangeName(symbol, playerName);
        }
      }
    }; 

    let editablePlayerName = isEditing ? 
                      <input type="text" required value={playerName} 
                        onChange={(e) => handleOnTextChange(e) }
                        onKeyDown={(e) => handleKeyDown(e) } 
                      /> : 
                      <span className="player-name">{playerName}</span> ;
    
    let buttonTxt = isEditing ? 'Save' : 'Edit';
    
    return (
        <>
          <li className={isActive ? 'active' : undefined }>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleClick() }> {buttonTxt} </button>
          </li>
        </>
    );
};

export default Player;
