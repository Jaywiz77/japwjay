import React, { useState, useEffect,ReactElement  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import words from '../word_list.json';
import * as CONSTANTS from '../Constants';

type word= {
    word:string,
    meaning:string,
    romaji:string
}



const WordPractice = ():ReactElement  => {
    const [selectedWord,setSelectedWord] = useState<word>(words[0]);
    const [selectedCount, setSelectedCount] = useState<number>(0);
    const navigate = useNavigate();
    const nextWord = () =>{ 
        setSelectedCount(selectedCount+1);
        setSelectedWord(words[selectedCount])
    };
        
    const prevWord = () =>{
        setSelectedCount(selectedCount-1);
        setSelectedWord(words[selectedCount])
    }
    const returnToMenu = () => {
        navigate('../japwjay/menu');
    }
    
    return(
        <>
        <div className='container' style={{minWidth:"250px",display:"flex",flexDirection:"column",alignItems:"center"}} >

                <h1 style={{fontSize:"7em"}}>{selectedWord.word}</h1>
                <h2> {selectedWord.romaji}</h2>
                <h1 style={{fontSize:"4em"}}>{selectedWord.meaning}</h1>
                <div className='grid' style={{width:"300px"}} >
                    <input type="submit" value="Previous" onClick={prevWord} disabled={selectedCount == 0}/>
                    <input type="submit" value="Next" onClick={nextWord} />
                </div>
                <input type="submit" style={{width:"300px"}}  value="Return" onClick={returnToMenu}/>
        </div>
        </>
    )
}

export default WordPractice;