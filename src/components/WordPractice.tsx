import React, { useState, useEffect,ReactElement  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import words from '../word_list.json';
import * as CONSTANTS from '../Constants';
import voiceIcon from "../assets/voiceIcon.png";

interface word {
    word:string,
    meaning:string,
    romaji:string
}



const WordPractice = ():ReactElement  => {
    const {state} = useLocation();

    const [selectedWord,setSelectedWord] = useState<word>(words[state.wordSelection]);
    const [selectedCount, setSelectedCount] = useState<number>(state.wordSelection);
    const navigate = useNavigate();
    const msg = new SpeechSynthesisUtterance()
    
    useEffect(() => {
        setSelectedWord(words[selectedCount]);
        
    },[selectedCount])

    useEffect(()=>{
        speak();
    },[selectedWord]);

    const nextWord = () =>{ 
        setSelectedCount(selectedCount+1);
        
    };
        
    const prevWord = () =>{
        setSelectedCount(selectedCount-1);
    }
    const returnToMenu = () => {
        navigate('../japwjay/menu');
    }

    const navigateToTest = () =>{
        navigate('../japwjay/wordtest');
    }

    const speak = () => {
        msg.lang = "ja-JP";
        msg.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name === "Google japanese"; })[0];
        msg.text = selectedWord.romaji
        window.speechSynthesis.speak(msg);
      }
    
    return(
        <>
        <div className='container' style={{minWidth:"250px",display:"flex",flexDirection:"column",alignItems:"center"}} >
            <h1 style={{fontSize:"7em"}}>{selectedWord.word}</h1>
            <h2> {selectedWord.romaji}</h2>
            <h1 style={{fontSize:"4em"}}>{selectedWord.meaning}</h1>
            <div className='grid' style={{width:"300px",display:"flex",flexDirection:"row"}} >
                <input type="submit" value="Prev" onClick={prevWord} disabled={selectedCount == state.wordSelection}/>
                <button className={"playBtn"}  type="submit" onClick={speak}><img src={voiceIcon} alt="Logo" style={{maxWidth:"70%"}}/></button>
                <input type="submit"  value="Next" onClick={nextWord} disabled={selectedCount >= (state.wordSelection + CONSTANTS.WORD_SEGMENT_NUMBER - 1)} />
            </div>
            <input type="submit" style={{width:"300px"}}  value="Test" onClick={returnToMenu} />
            <input type="submit" className="secondary" style={{width:"300px"}}  value="Return" onClick={returnToMenu} />
        </div>
        </>
    )
}

export default WordPractice;