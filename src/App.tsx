import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from "./assets/JWJLogo.png"
import './App.css'
import HiraganaPractice from './components/hiragana'
import CharacterPractice from "./components/CharacterPractice"
import Login from './components/Login'
import '@picocss/pico/css/pico.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'
import Leaderboard from './components/Leaderboard'
import WordPracticeSelection from './components/WordPracticeSelection';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="characterPractice" element={<CharacterPractice />} />
        <Route path="wordPractice" element={<HiraganaPractice />} />
        <Route path="menu" element={<Menu />} />
        <Route path="leaderboard" element={<Leaderboard/>}/>
        <Route path="wordPracticeSelection" element={<WordPracticeSelection/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
