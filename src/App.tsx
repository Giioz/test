import { useState } from 'react'
import './App.css'
import JumpScare from './JumpScare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <JumpScare imagePath="./images.jpeg" soundPath="./Jumpscare Sound Effect.mp3"/>
  )
}

export default App
