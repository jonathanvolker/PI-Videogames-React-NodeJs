import React from 'react'
import AboutStyled from '../styledComponents/AboutStyled'
import useSound from 'use-sound';
import ending from "../audios/ending.mp3"

export default function About() {
    const [play, {stop}] = useSound(ending,{ volume: 0.5 });



    return(
        
        <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
        <AboutStyled>
        <div clasName="about">
            <h1>GamesApp</h1>
            <h4>Es una app desarrollada para demostrar los conocimientos aprendidos en el bootcamp FullStack Henry. </h4>
            <h4>Utilizacion de React Hooks, React Redux, Styled components.   </h4> 
            <h4>Base de datos PostgresSQL con express para manejar el server de la app. </h4> 
        </div>
   
    </AboutStyled>
        </div>
    )
}
