import {ChangeEvent, useState, useEffect ,ReactElement } from 'react';
import { useNavigate } from 'react-router-dom'
import * as CONSTANTS from '../Constants';
import Logo from "../assets/JWJLogo.png";

interface practiceSelectionsType  {
    name:string;
    page:string;
    type:string;
}

const practiceSelections:practiceSelectionsType[] = [
    {name:"Hiragana", page:CONSTANTS.CHARACTER_STRING, type:CONSTANTS.HIRAGANA_STRING},
    {name:"Katakana", page:CONSTANTS.CHARACTER_STRING, type:CONSTANTS.KATAKANA_STRING},
    {name:"Words", page:CONSTANTS.WORD_STRING , type:"hiragana"},
    // {name:"51 - 100", page:"word", type:"hiragana" },
    // {name:"101 - 150", page:"word", type:"hiragana"},
    // {name:"Leaderboard", page:"leaderboard", type:"hiragana"},
    {name:"Chat", page:CONSTANTS.CHAT_STRING, type:"hiragana"}

]



const Menu  = ():ReactElement => {

    const navigate = useNavigate();

    const redirect = (selected:practiceSelectionsType) => {
        
        switch(selected.page){
            case CONSTANTS.CHARACTER_STRING:
                navigate("../" + CONSTANTS.NAV_CHARACTER_PRACTICE , {state:{type:selected.type}});
                break;
            case CONSTANTS.WORD_STRING:
                navigate("../" + CONSTANTS.NAV_WORD_PRACTICE_SELECTION);
                break;
            case CONSTANTS.CHAT_STRING:
                navigate("../"+ CONSTANTS.NAV_CHAT);
                break;
            default:
                console.log("🚀 ~ file: Menu.tsx:18 ~ redirect ~ page", selected);
        }
    }

return(
    <div className='container'>
        <img src={Logo} alt="Logo"/>
        <div className='container' style={{width:"50%", minWidth:"300px",marginTop:"20px"}}>
        {practiceSelections.map((selection) =>
            <input key={selection.name} type="submit" className='secondary' onClick={ ()=>redirect(selection)} value={selection.name}/>
        )}
        </div>

    </div>
)
}

export default Menu;