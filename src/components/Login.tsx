import React, { useState, useEffect, createFactory, ReactElement} from 'react';
import Logo from "../assets/JWJLogo.png";
import { useNavigate } from 'react-router-dom'
const Login = ():ReactElement  => {
    const [selectedWord,setSelectedWord] = useState<String>("");
    const navigate = useNavigate();
    const onClick = () => {
        navigate('../japwjay/menu');
    }
    return (
        <form >
            <img src={Logo} alt="Logo" style={{maxWidth:"70%"}}/>
            <input style={{maxWidth:"70%", textAlign:"center"}} type="text" onChange={(e)=>{setSelectedWord(e.target.value)}} placeholder="Enter your name" name='name'/>
            <input style={{maxWidth:"70%"}} className={"primary"} type="submit" onClick={onClick} value="Enter"/>
        </form>
    )
}

export default Login;