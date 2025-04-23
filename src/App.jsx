import { useState } from 'react'
import { Select, Button } from 'antd'
import BallContainer from './components/BallContainer'
import { GAMES, GAME_CONFIGS } from './consts'
import { generateGameBalls } from './utils'
import './App.css'

function App() {
  const [ primaryDraw, setPrimaryDraw ] = useState([])
  const [ secondaryDraw, setSecondaryDraw ] = useState([])
  const [ selectedGame, setSelectedGame ] = useState(undefined)
  const [ secondaryDrawName, setSecondaryDrawName ] = useState(undefined)

  function randomizeBalls(b) {
    let currentIndex = b.length

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      [b[currentIndex], b[randomIndex]] = [
        b[randomIndex], b[currentIndex]]
    }
  
    return b
  }

  function generateNumbers() {
    const config = GAME_CONFIGS[selectedGame]
    const {
      mainBallMax,
      mainCount,
      hasAdditional,
      additionalBallMax,
      additionalCount,
      additionalName
    } = config

    const primaryDrawnBalls = []
    const secondaryDrawnBalls = []

    let gameBalls = [ ...generateGameBalls(mainBallMax) ]

    do {
      gameBalls = [...randomizeBalls(gameBalls)]
      const c = gameBalls[Math.floor(Math.random() * gameBalls.length)]
      gameBalls = gameBalls.filter(f => f !== c)
      primaryDrawnBalls.push(c)

    } while(primaryDrawnBalls.length < mainCount)

    if (hasAdditional) {
      setSecondaryDrawName(additionalName)

      let gameBalls = [ ...generateGameBalls(additionalBallMax)]

      do {
        gameBalls = [...randomizeBalls(gameBalls)]
        const c = gameBalls[Math.floor(Math.random() * gameBalls.length)]
        gameBalls = gameBalls.filter(f => f !== c)
        secondaryDrawnBalls.push(c)
  
      } while(secondaryDrawnBalls.length < additionalCount)
    }

    setPrimaryDraw([ ...primaryDrawnBalls.sort((a, b) => a - b) ])
    secondaryDrawnBalls.length && setSecondaryDraw(secondaryDrawnBalls)
  }

  function handleOnGenerate() {
    setPrimaryDraw([])
    setSecondaryDraw([])
    setSecondaryDrawName(undefined)
    generateNumbers()
  }

  function handleOnSelectGame(game) {
    setPrimaryDraw([])
    setSecondaryDraw([])
    setSelectedGame(game)
  }

  return (
    <>
      <Select
        placeholder="Select Game"
        onChange={handleOnSelectGame}
        value={selectedGame}
        options={GAMES.map(g => ({
          value: g,
          label: g
        }))}
      />
      <Button type="primary" onClick={handleOnGenerate} disabled={!selectedGame}>Generate Numbers</Button>
      {primaryDraw.length > 0 && (
        <BallContainer numbers={primaryDraw} game={selectedGame} isMainBall={true} />
      )}
      {secondaryDraw.length > 0 && (
        <>
          <hr />
          <div>{secondaryDrawName}</div>
          <BallContainer numbers={secondaryDraw} game={selectedGame} isMainBall={false} />
        </>
      )}
    </>
  )
}

export default App
