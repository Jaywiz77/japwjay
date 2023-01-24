import {ChangeEvent, useState, useEffect ,ReactElement } from 'react';
import { useNavigate } from 'react-router-dom'
import * as CONSTANTS from '../Constants';
type practiceSelectionsType = {
    name:string;
    page:string;
    type:string;
}

const practiceSelections:practiceSelectionsType[] = [
    {name:"Hiragana", page:"character", type:"hiragana" },
    {name:"Katakana", page:"character", type:"katakana" },
    {name:"Words", page:"word" , type:"hiragana"},
    // {name:"51 - 100", page:"word", type:"hiragana" },
    // {name:"101 - 150", page:"word", type:"hiragana"},
    {name:"Leaderboard", page:"leaderboard", type:"hiragana"},
    {name:"Test", page:"character", type:"hiragana"}

]



const Menu  = ():ReactElement => {
    const [pageToRedirect, setpageToRedirect] = useState("")
    const navigate = useNavigate();

    const redirect = (selected:practiceSelectionsType) => {
        console.log("🚀 ~ file: Menu.tsx:25 ~ redirect ~ page", selected)
        
        switch(selected.page){
            case CONSTANTS.CHARACTER_STRING:
                navigate("../characterPractice" , {state:{type:selected.type}});
                break;
            case CONSTANTS.WORD_STRING:
                navigate("../wordPracticeSelection");
                break;
            case CONSTANTS.LEADERBOARD_STRING:
                navigate("../leaderboard");
                break;
            default:
                console.log("🚀 ~ file: Menu.tsx:18 ~ redirect ~ page", selected);
        }
    }

return(
    <>
    {practiceSelections.map((selection) =>
        <input key={selection.name} type="submit" className='secondary' onClick={ ()=>redirect(selection)} value={selection.name}/>
    )}
    </>
)
}

export default Menu;