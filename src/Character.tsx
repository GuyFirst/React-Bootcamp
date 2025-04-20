 import React from "react";


type CharacterProps = {
name: String,
baseHealth: number,
moveName: String,
currentHealth: number,
onAttack: () => void,
}


const Character = ({name, baseHealth, moveName, currentHealth, onAttack}: CharacterProps) => {
    return (    
        <div>
            <h2>{name} | health: {currentHealth} / {baseHealth} </h2>
            <div>Moves: <button onClick= {() => onAttack()}>  {moveName}</button></div>
        </div>
    )

}


export default Character

    


