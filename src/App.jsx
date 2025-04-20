import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Character from './Character'
import Logo from './logo'

function App() {
 
const [hitmonLeeHealth, setHitmonLeeHealth] = useState(120)
const handleHitmonChanAttack = () => {setHitmonLeeHealth(hitmonLeeHealth - 10);}

const [hitmonChanHealth, setHitmonChanHealth] = useState(120)
const handleHitmonLeeAttack = () => {setHitmonChanHealth(hitmonChanHealth - 10);}

  return (
    <>
    <Logo/>
    <Character name = "HitmonLee" currentHealth = {hitmonLeeHealth} baseHealth={120} moveName="Kick" onAttack={handleHitmonLeeAttack} />

    <Character name = "HitmonChan"currentHealth = {hitmonChanHealth} baseHealth={120} moveName="Punch" onAttack={handleHitmonChanAttack}/>
    </>
   
  )
}

export default App
