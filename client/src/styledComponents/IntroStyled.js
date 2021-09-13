import styled from "styled-components";
const IntroStyled=styled.div`
    margin-top: 12vh;
    //background-image: url("https://media2.giphy.com/media/9LZTcawH3mc8V2oUqk/giphy.gif?cid=ecf05e47h1xf64lde05sqx6nq3nutfaexexddlosgvycg4tq&rid=giphy.gif&ct=g");
    background-image: url("https://i.pinimg.com/originals/59/bf/96/59bf96fde108d05bbaa2f096de0934d5.gif");
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-position: center;
    align-items: center;
    justify-content: center;
    height: 88vh;
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