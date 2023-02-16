import React, { useState,ReactElement  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import hiragana from '../character.json';
import * as CONSTANTS from '../Constants';


const CharacterPractice = ():ReactElement  => {
  const [currentChar, setCurrentChar] = useState(hiragana[0]);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [score, setScore] = useState(0);
  const {state} = useLocation();
  const navigate =  useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput.toLowerCase() === currentChar.romaji) {
      setScore(score => score + 1);
      const random = Math.floor(Math.random() * hiragana.length);
      setCurrentChar(hiragana[random]);
      setUserInput("");
      setIsCorrect(true);
    } else {
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
      <h1 style={{fontSize:"8em"}}>{state.type == CONSTANTS.HIRAGANA_STRING? currentChar.hiragana : currentChar.katakana}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Romanization:
          <input type="text" value={userInput} onChange={handleChange}  aria-invalid={!isCorrect} />
        </label>
        <input type="submit" className='primary' value={"Submit"}  />
        <input type="submit" className='secondary' value={"Return"} onClick={returnToMenu}  />
      </form>
      <p><label>Score: {score}</label></p>
      </div>
  );
};

export default CharacterPractice;
