// import { useState } from 'react';
import './App.css';
import CharacterPractice from "./components/CharacterPractice";
import '@picocss/pico/css/pico.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import WordPracticeSelection from './components/WordPracticeSelection';
import WordPractice from './components/WordPractice';
import Chat from './components/Chat';
import WordTest from './components/WordTest';
import * as CONSTANTS from './Constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="*" element={<Login />} /> */}
        <Route path={CONSTANTS.NAV_CHARACTER_PRACTICE} element={<CharacterPractice />} />
        <Route index path="*" element={<Menu />} />
        <Route path={CONSTANTS.NAV_WORD_TEST} element={<WordTest/>}/>
        <Route path={CONSTANTS.NAV_WORD_PRACTICE_SELECTION} element={<WordPracticeSelection/>}/>
        <Route path={CONSTANTS.NAV_WORD_PRACTICE} element={<WordPractice/>}/>
        <Route path={CONSTANTS.NAV_CHAT} element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
