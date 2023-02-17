import React, { useState,ReactElement  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import hiragana from '../character.json';
import * as CONSTANTS from '../Constants';


const CharacterPractice = ():ReactElement  => {
  
  const [remainingChars, setRemainingChars] = useState(hiragana);
  const [currentChar, setCurrentChar] = useState(getRandomChar());
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [score, setScore] = useState(0);
  const location  = useLocation();
  const navigate =  useNavigate();

  const state = location.state as { type: string };
  

  function getRandomChar() {
    const index = Math.floor(Math.random() * remainingChars.length);
    return remainingChars[index];
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput.toLowerCase() === currentChar.romaji) {
      setScore(score => score + 1);
      // const random = Math.floor(Math.random() * hiragana.length);
      setRemainingChars(remainingChars.filter(char => char !== currentChar));
      setCurrentChar(getRandomChar());
      setUserInput("");
      setIsCorrect(true);
      console.log(remainingChars);
      console.log(currentChar);
    } else {
      setRemainingChars(hiragana);
      setCurrentChar(getRandomChar());
      setIsCorrect(false);
      setUserInput("");
      setScore(0);
    }
  };

  const returnToMenu = () => {
      navigate('../japwjay/menu');
  }

  return (
    <div>
      <p><label className=''>Score: {score}</label></p>
      <h1 style={{fontSize:"8em"}}>{state.type == CONSTANTS.HIRAGANA_STRING? currentChar.hiragana : currentChar.katakana}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Romanization:
          <input type="text" value={userInput} onChange={handleChange}  aria-invalid={!isCorrect} />
        </label>
        <input type="submit" className='primary' value={"Submit"}  />
        <input type="submit" className='secondary' value={"Return"} onClick={returnToMenu}  />
      </form>
      
      </div>
  );
};

export default CharacterPractice;
