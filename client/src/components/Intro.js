import React from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import IntroStyled from '../styledComponents/IntroStyled'
import intro from "../audios/intro.mp3"

export default function Intro(){
   
const [play, {stop}] = useSound(intro,{ volume: 0.5 });

const st = ()=>{
    stop()
}



    return(
    <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
    
    <IntroStyled >
    <div className="music">
     <button className="music-button" onClick={play} >🔊</button> 
     <button className="music-button" onClick={st} >🔇 </button>      
    </div>  
        <div className="intro-text">
            <h1>GamesApp</h1>
        </div>
        
            <Link className="intro-link"to="/home">
                <button className="intro-home-link" onClick={st} >Comenzemos...</button>
            </Link>
           
    </IntroStyled>
    </div>
    )






}