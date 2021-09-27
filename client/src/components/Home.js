import React from 'react'
import HomeStyled from "../styledComponents/HomeStyled"
import VideogameList from "./VideogameList"
import Nav from "./Nav"

export default function Home() {
    return (
        
        <HomeStyled>
            <Nav/>
           <VideogameList/>
        </HomeStyled>
            
    )
}
