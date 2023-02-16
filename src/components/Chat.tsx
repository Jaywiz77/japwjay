
import {useState ,ReactElement } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CryptoJS from "crypto-js";
//interface for the Helper
interface Params {
        url: string
    method: string

}



const postConfig: Params = {
    url: "https://api.openai.com/v1/completions",

    method: 'post'
}


const Chat  = ():ReactElement => {
    const [userText,setUserText] = useState<string>("");
    const [chatReplyEnglish, setChatReplyEnglish] = useState<string>("Hello I am Jay bot!");
    const [chatReplyJapanese, setChatReplyJapanese] = useState<string>("こんにちは Jay bot です!");
    const navigate = useNavigate();
    const returnToMenu = () => {
        navigate('../japwjay/menu');

    }

    const postAPI = async ( ): Promise<any> =>{
        setUserText("");

        let bytes = CryptoJS.AES.decrypt(import.meta.env.VITE_API_KEY, 'japwjay');
        const ak:string = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        
        return await axios({
            ...postConfig,
            headers: {
                "Authorization": `Bearer ${ak}`,
            },
            
            data:{
                "model":"text-davinci-003",
                "prompt":`${userText} | Output in English and Japanese`,
                "temperature": 0.7,
                "max_tokens": 160
                
            }
        }).then ( (response) => {
            setChatReplyEnglish(response.data.choices[0].text.split("Japanese:")[0].replace("English:",""));
            setChatReplyJapanese(response.data.choices[0].text.split("Japanese:")[1]);
        }).catch( ()=>{
            // console.log(error);
            setChatReplyJapanese("エラー > <\"");
            setChatReplyEnglish("Error ")

        })
    }

    return (

        <form onSubmit={postAPI}>
        <article style={{maxWidth:"1200px"}}>
            <h4>{chatReplyJapanese}</h4>
            <h4>{chatReplyEnglish}</h4>
            <label> JayBot </label>
        </article>
        <div className='container' style={{maxWidth:"300px"}}>
        <input type="text" placeholder="Enter your thoughts" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setUserText(e.target.value)}} value={userText}/>
        <input type="submit"  onClick={postAPI} value="Enter" />
        <input type="submit"  className="secondary" value="Return" onClick={returnToMenu} />
        </div>
        
        </form>
    )
}
export default Chat;