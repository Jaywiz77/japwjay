import React, { useState, useEffect, createFactory, ReactElement} from 'react';
import { useNavigate } from 'react-router-dom'


const WordTest = ():ReactElement  => {
    const [selectedWord,setSelectedWord] = useState<string>("");
    const navigate = useNavigate();
    const onClick = () => {
        navigate('../japwjay/menu');
    }
    return (
        <form >
            <input style={{maxWidth:"70%", textAlign:"center"}} type="text" onChange={(e)=>{setSelectedWord(e.target.value)}} placeholder="Enter your name" name='name'/>
            <input style={{maxWidth:"70%"}} className={"primary"} type="submit" onClick={onClick} value="Enter"/>
        </form>
    )
}

export default WordTest;