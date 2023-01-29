
import {ChangeEvent, useState, useEffect ,ReactElement } from 'react';
import { useNavigate } from 'react-router-dom'
import * as CONSTANTS from '../Constants';
import axios from 'axios'
//interface for the Helper
interface Params {
        url: string
        headers:any,
    method: string

}



const api_key= process.env.VITE_API_KEY;

const postConfig: Params = {
    url: "https://api.openai.com/v1/completions",
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    method: 'post'
}


const Chat  = ():ReactElement => {
    const [userText,setUserText] = useState<string>("");
    const [chatReply, setChatReply] = useState<string>("こんにちは Jay bot です!");
    const navigate = useNavigate();
    const returnToMenu = () => {
        navigate('../japwjay/menu');

    }

    const postAPI = async ( ): Promise<any> =>{
        console.log("----- " + api_key);
        console.log("===" + import.meta.env.VITE_API_KEY);
        setUserText("");
        return await axios({
            ...postConfig,
            
            data:{
                "model":"text-davinci-003",
                "prompt":`${userText} | Output in English and Japanese`,
                "temperature": 0.7,
                "max_tokens": 160
                
            }
        }).then ( (response) => {
            console.log(response);
            setChatReply(response.data.choices[0].text);
            

        }).catch((error) =>{
            // console.log(error);
            setChatReply("エラー > <\"");

        })
    }

    return (
        <>
        <article style={{maxWidth:"1200px"}}>
            <h4>{chatReply}</h4>
            <label> JayBot </label>
        </article>
        <div className='container' style={{maxWidth:"300px"}}>
        <input type="text" placeholder="Enter your thoughts" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setUserText(e.target.value)}} value={userText}/>
        <input type="submit" className="primary" onClick={postAPI} value="Enter" />
        <input type="submit"  value="Return" onClick={returnToMenu} />
        </div>
        
        </>
    )
}
export default Chat;