import React from 'react';
import NavStyled from '../styledComponents/NavStyled'
import ico from "../img/ico.png"

export default function Nav(){
    return (
        <>
        <NavStyled >
            <div className="container logo-nav-container">
                <img className="logo-nav" src={ico} />
                <a href="/" className="logo">GamesApp</a>
                <nav className="navigation">
                <ul className="show">
                    <li>
                        <a href="/home">Inicio</a>
                    </li>
                    <li>
                        <a className="createYourGame" href="/createyourgame">Agrega el tuyo!</a>
                    </li>  
                    <li>
                        <a href="/about">Sobre GameApp</a>
                    </li>  
                </ul> 

                </nav>
                
            </div>
        </NavStyled>
        </>
    )
}
