import React, { useState, useEffect,ReactElement  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import words from '../character.json';
import * as CONSTANTS from '../Constants';


const WordPracticeSelection = ():ReactElement  => {
    const wordCount:number = 1000;
    const wordsPerSegment:number = CONSTANTS.WORD_SEGMENT_NUMBER;
    const segmentCount:number = wordCount/wordsPerSegment;
    const segments = new Array(segmentCount).fill(null);
    const [selectedWordIndex,setSelectedWordIndex] = useState<Number>(0);

    const navigate = useNavigate();
    const returnToMenu = () => {
        navigate('/menu');
    }


    return(
        <>
        <h1>Word Practice Selection</h1>
        <div className='container'  style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)",gap:"10px"}}>
            {/* {segments.map((_,index)=><input type="submit" key={index} className='secondary' value={ `${index*wordsPerSegment + 1} - ${(index+1)*wordsPerSegment}` } onClick={() =>{navigate("../japwjay/wordPractice",{state:{wordSelection:Math.max(index*wordsPerSegment,1)}});}} />)} */}
            {segments.map((_,index)=><input type="submit" key={index} className='secondary' value={ `set ${index+1}` } onClick={() =>{navigate("../japwjay/wordPractice",{state:{wordSelection:Math.max(index*wordsPerSegment,1)}});}} />)}            
        </div>
        <input type="submit" className="primary" onClick={returnToMenu} value="return" />
        </>
    )
}

export default WordPracticeSelection;