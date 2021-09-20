import React from 'react'
import GameCreatedStyled from '../styledComponents/GameCreatedStyled'

export default function GameCreated() {

    return (
        <GameCreatedStyled>
            <div> juego creado, regresando al home en {setTimeout(() => {
            window.location.href = 'http://localhost:3000/home'
        }, 2000)} segundo... </div>
            
        </GameCreatedStyled>
    )
}
