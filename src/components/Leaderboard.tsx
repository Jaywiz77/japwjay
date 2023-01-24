import React, { useState, useEffect, createFactory, ReactElement} from 'react';
import Logo from "../assets/JWJLogo.png";
import { useNavigate } from 'react-router-dom'

type leadarboardType = {
    name:string,
    score:number,
}

const leadarboard:leadarboardType[] = [
    {name:"Jay",score:36},
    {name:"JH",score:35},
]

const Leaderboard = ():ReactElement  => {

    const navigate = useNavigate();
    const returnToMenu = () => {
        navigate('../japwjay/menu');
    }
    return (
        < >
            <table >
                <thead>
                    <tr >
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Words Completed</th>
                    </tr>
                </thead>
                <tbody >
                    {leadarboard.map((info, i) => <tr><td>{i}</td> <td>{info.name}</td> <td>{info.score}</td></tr> ) }
                </tbody>
            </table>
            <input type="submit" className="secondary" onClick={returnToMenu} value="return" />
        </>
    )
}

export default Leaderboard;