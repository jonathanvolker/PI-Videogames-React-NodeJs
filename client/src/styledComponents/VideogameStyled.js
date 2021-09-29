import styled from "styled-components";
const VideogameStyled=styled.div`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 12vh;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,36,236,1) 41%, rgba(111,91,128,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,36,236,1) 41%, rgba(111,91,128,1) 100%);
        width: 70%;
        border-radius:6px;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    }
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
        width: 80%;
        text-align: center;
        border-radius:2px;
        padding: 1rem;

    }

    .videogame-img{

        width: 67.5rem;
        border-radius: 4px;
        img{
            width: 100%
        }
    }

`

export default VideogameStyled;