import styled from "styled-components";
const IntroStyled=styled.div`
    //margin-top: 12vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-image: url("https://i.pinimg.com/originals/59/bf/96/59bf96fde108d05bbaa2f096de0934d5.gif");
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-position: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .music{
        height: auto;
        width: auto;
        margin-top: 0px;
        margin-right: 900px;
    }
    .music-button{
        background: #6f5b80;
        border-radius:50%;
    }
    .intro-text{
        font-size: 2rem;
        color: white;
        padding: 0.1rem 1rem;
        transition: 0.3s linear;
        background-color: rgb(0, 102, 255,0.2);
        margin-bottom: 13rem;
        border-radius: 1rem;
    }
    .intro-link{
        text-decoration: none;
        
        
        .intro-home-link{
            background-color:#6f5b80;
            color: white;
            padding: 1rem;
            font-weight: bold;
            display: block;
            padding: 0.5rem 1rem;
            transition: 0.3s linear;
            border-radius: 5px;
        
        &:hover{
            background-color: #7e24ec;
            color: #222826;   
        }
    }

    }
`

export default IntroStyled;