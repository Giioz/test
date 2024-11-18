import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JumpScare from './JumpScare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <JumpScare imagePath="./images.jpeg" soundPath="./Jumpscare Sound Effect.mp3"/>
  )
}

export default App
