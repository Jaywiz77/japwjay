import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from "./assets/JWJLogo.png"
import './App.css'
import CharacterPractice from "./components/CharacterPractice"
import Login from './components/Login'
import '@picocss/pico/css/pico.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'
import Leaderboard from './components/Leaderboard'
import WordPracticeSelection from './components/WordPracticeSelection';
import WordPractice from './components/WordPractice'
function App() {
  const [count, setCount] = useState(0);
  const url = "japwjay/" ;
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route index path="*" element={<Login />} />
        <Route path="japwjay/characterPractice" element={<CharacterPractice />} />
        <Route path="japwjay/menu" element={<Menu />} />
        <Route path="japwjay/leaderboard" element={<Leaderboard/>}/>
        <Route path="japwjay/wordPracticeSelection" element={<WordPracticeSelection/>}/>
        <Route path="japwjay/wordPractice" element={<WordPractice/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
