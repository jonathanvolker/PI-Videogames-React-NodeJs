import React,{useState, useEffect}  from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import IntroStyled from '../styledComponents/IntroStyled'
import intro from "../audios/intro.mp3"

export default function Intro(){
   
const [play, {stop}] = useSound(intro,{ volume: 0.5 });



    return(
        <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
           
    <IntroStyled >
    
        <div className="intro-text">
            <h1>GamesApp</h1>
        </div>
        <div>
            <Link className="intro-link"to="/home">
                <h4 className="intro-home-link">Comenzemos...</h4>
            </Link>
        </div>
    </IntroStyled>
    </div>
    )






}