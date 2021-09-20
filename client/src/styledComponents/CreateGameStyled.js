import styled from "styled-components";
const CreateGameStyled=styled.div`
     background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,36,236,1) 41%, rgba(111,91,128,1) 100%);
     margin-top: 18vh;
     color: white;
    
    h1{
        font-size: 2rem;
        text-align: center;
    }
    p{
        font-size: 0.8rem;
        text-align: center;
    }
    .form-container{
    // opacity: .80;
     display: flex;
     flex-direction: column;
     width: 50%;
     margin: 0 auto;
     border-radius: 6px;
     border: solid 1px #6f5b80;
     padding: 1rem;
     box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

     .input-error{
        border: 2px solid red;
    }
    select{
        border: 4px solid #6f5b80;
        border-radius: 0.5rem;
        height: 2rem;
        font-size: 1.5rem;  
    }
    input{
        border: 4px solid #6f5b80;
        border-radius: 0.5rem;
        height: 2rem;
        font-size: 1.5rem;
      
    }
    textarea{
        border: 4px solid #6f5b80;
        border-radius: 0.5rem;
        height: 2rem;
        font-size: 1.5rem;
    }
    .genres-container{
      // max-width: 100%;
        .checkbox-container{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 25vh;
            max-width: 100%;
            
            }
        .selected-genres{
            border-radius: 0.5rem;
            text-align: center;
            color: black;
            font-size: 1rem;
            font-weight: bold;
            background: white;
            padding:0.5rem ;
        }
        }
    .submit-game{
        display: flex;
        flex-direction: row;
      
    }
    .form-submit{
        color: white;
        background-color: #6f5b80;
        padding: 1rem;
        margin-bottom: 1rem;
        margin-left: 250px;
        margin-top: 1rem;
        text-align: center;
        height: 3rem;
        width: 10rem;
        font-weight: bold;
        font-size: 1rem;
        transition: 0.3s linear;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        
        &:hover{
            background-color: #6f5b80;
            color:$secondary;   
        }
    }
    input:disabled, input[disabled] {
        background: #ccc;
        color: #666;
        cursor: not-allowed;
        &:hover{
            background: #666;
            color: #ccc

        }
    }
    .alert{
        color: red;
        transition: 0.3s linear;
    }
}
  
   
`

export default CreateGameStyled;