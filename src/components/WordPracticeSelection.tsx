import React, { useState, useEffect,ReactElement  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import words from '../character.json';
import * as CONSTANTS from '../Constants';


const WordPracticeSelection = ():ReactElement  => {
    const wordCount:number = 1000;
    const wordsPerSegment:number = 50;
    const segmentCount:number = wordCount/wordsPerSegment;
    const segments = new Array(segmentCount).fill(null);

    const navigate = useNavigate();
    const returnToMenu = () => {
        navigate('/menu');
    }

    return(
        <>
        <h1>Word Practice Selection</h1>
        <div className='container'  style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)",gap:"10px"}}>
            {segments.map((_,index)=><input type="submit" className='secondary' value={ `${Math.max(index*wordsPerSegment,1)} - ${(index+1)*wordsPerSegment}` }/>)}
            
        </div>
        <input type="submit" className="primary" onClick={returnToMenu} value="return" />
        </>
    )
}

export default WordPracticeSelection;