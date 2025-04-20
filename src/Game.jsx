import { useState } from 'react'
import Character from './Character'
import Logo from './logo'
import './character.css'

function Game() {

  const accuracyLee = () => Math.random() <= 0.8
  const accuracyChan = () => Math.random() <= 0.3

  const [hitmonLeeHealth, setHitmonLeeHealth] = useState(120)
  const [hitmonChanHealth, setHitmonChanHealth] = useState(120)
  const [statusMessage, setStatusMessage] = useState('')
  const [disableClickToLee, setDisableClickToLee] = useState(false)
  const [disableClickToChan, setDisableClickToChan] = useState(false)

  const handleHitmonChanAttack = () => {
    if (hitmonLeeHealth >= 10 && hitmonChanHealth > 0) {
      if (accuracyChan()) {
        setHitmonLeeHealth(hitmonLeeHealth - 10);
        setStatusMessage("HitmonChan landed a punch! 👊");
      } else {
        setStatusMessage("HitmonChan missed! 😬");
      }
    }
  };

  const handleHitmonLeeAttack = () => {
    if (hitmonChanHealth >= 10 && hitmonLeeHealth > 0) {
      if (accuracyLee()) {
        setHitmonChanHealth(hitmonChanHealth - 10);
        setStatusMessage("HitmonLee kicked hard! 🦵");
      } else {
        setStatusMessage("HitmonLee missed the kick! 😵");
      }
    }
  };

  if (hitmonChanHealth === 0 && disableClickToLee === false) {
    setDisableClickToLee(true)
  }

  if (hitmonLeeHealth === 0 && disableClickToChan === false) {
    setDisableClickToChan(true)
  }

  const enableReset = () => {
    setHitmonChanHealth(120)
    setHitmonLeeHealth(120)
    setDisableClickToLee(false)
    setDisableClickToChan(false)
    setStatusMessage('')
  }

  return (
    <>
      <Logo />
        <div></div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '20px',
      }}>
        <div className="HitmonLee">
          <img className="HitmonPhoto" src="../src/assets/HitmonLee.png" />
          <Character
            name="HitmonLee"
            currentHealth={hitmonLeeHealth}
            baseHealth={120}
            moveName="Kick"
            onAttack={handleHitmonLeeAttack}
            disable={disableClickToLee}
          />
        </div>

        <div className="HitmonChan">
          <img className="HitmonPhoto" src="../src/assets/HitmonChan.png" />
          <Character
            name="HitmonChan"
            currentHealth={hitmonChanHealth}
            baseHealth={120}
            moveName="Punch"
            onAttack={handleHitmonChanAttack}
            disable={disableClickToChan}
          />
        </div>
      </div>

      <h2 style={{ textAlign: 'center', margin: '20px', fontFamily: 'sans-serif' }}>
        {statusMessage}
      </h2>

      <div style={{ height: '50px' }}></div>
      <button onClick={enableReset}> Reset </button>
    </>
  )
}

export default Game
