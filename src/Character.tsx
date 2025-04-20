 import React from "react";


type CharacterProps = {
name: String,
baseHealth: number,
moveName: String,
currentHealth: number,
onAttack: () => void,
disable: boolean
}


const Character = ({name, baseHealth, moveName, currentHealth, onAttack, disable}: CharacterProps) => {
    return (    
        <div>
            <h2>{name} | health: {currentHealth} / {baseHealth}  </h2>
                <h3><div>Moves: <button disabled = {disable} onClick= {() => onAttack()}> {moveName}</button></div></h3>
        </div>
    )

}


export default Character

    


