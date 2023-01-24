import React, { useState, useEffect,ReactElement  } from 'react';

const hiragana = [
  { character: 'あ', romanization: 'a' },
  { character: 'い', romanization: 'i' },
  { character: 'う', romanization: 'u' },
  { character: 'え', romanization: 'e' },
  { character: 'お', romanization: 'o' },
  // ...
];

const hiraganaList = [
    { hiragana: "あ", romanization: "a", katakana: "ア" },
    { hiragana: "い", romanization: "i", katakana: "イ" },
    { hiragana: "う", romanization: "u", katakana: "ウ" },
    { hiragana: "え", romanization: "e", katakana: "エ" },
    { hiragana: "お", romanization: "o", katakana: "オ" },
    { hiragana: "か", romanization: "ka", katakana: "カ" },
    // ...
  ]
  
const HiraganaPractice= ():ReactElement  => {
  const [currentChar, setCurrentChar] = useState(hiragana[0]);
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex(index => (index + 1) % hiragana.length);
//       setCurrentChar(hiragana[index]);
//       setUserInput('');
//       setIsCorrect(true);
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

  useEffect(() => {
    if (!startTime) {
      setStartTime(Date.now());
    } else {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [startTime]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput === currentChar.romanization) {
        const random = Math.floor(Math.random() * hiragana.length);
        setCurrentChar(hiragana[random]);
        setUserInput("");
        setIsCorrect(true);
    } else {
        setUserInput("");
      setIsCorrect(false);
    }

  };

  return (
    <div>
      <h1>{currentChar.character}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Word:
          <input type="text" value={userInput} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? <p>Correct!</p> : <p>Incorrect</p>}
      <p>Time Elapsed: {timeElapsed} seconds</p>
    </div>
  );
};

export default HiraganaPractice;
