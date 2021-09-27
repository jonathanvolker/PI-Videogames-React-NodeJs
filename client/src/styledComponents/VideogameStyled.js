import styled from "styled-components";
const VideogameStyled=styled.div`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 12vh;
    color: white;
   // background-color: #8f6fab;
    background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,36,236,1) 41%, rgba(111,91,128,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;

    
    .videogame-data{
        display: flex;
        justify-content: space-evenly;
        width: 60%;
    }
    .videogame-name{
        background-color: #8740c4;
        color: white;
        padding: 1rem;
        border-radius: 1rem;
    }
    .videogame-description{
        display: flex;
        flex-direction: column;
        width: 60%;
        text-align: center;
        background: #B27CF0;
        border-radius:2px;
        padding: 1rem;

    }

    .videogame-img{
        width: 100%;
        img{
            width: 100%
        }
    }

`

export default VideogameStyled;