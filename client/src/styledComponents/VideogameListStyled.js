import styled from "styled-components";
const VideogameListStyled=styled.div`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
.await{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    margin-top:5vh;
}
.spinner-container{
    display: flex ;
    margin-top: 10px;
    height: 100%;
    width: 70%;
    margin-left: 5rem;
.spinner{  
       display: inline-block;
        width: 1000px;
        height: 350px;
        margin-left:350px ;
        border-radius:6px;
    }
     
}
.search-bar {
    display: flex;
    justify-content: center;
    background-image: url("https://64.media.tumblr.com/0aed23aeea0762ccda0e1cc2451ac19c/7825a676d6da44b5-a9/s1280x1920/e7cabee9361013cd4679ad65cda46b9fb2b58428.gifv");
    height: 35vh;
    width: 100%;
    background-position: center;
    margin-bottom: 1rem;
    .search-form {
        display: flex;
        margin-top: 40px;
        width: 30%;
        height: 10%;
        .input-search{
            padding: 10px;
            font-size: 17px;
            border: 1px solid #6f5b80;
            float: left;
            width: 80%;
            background: #f1f1f1;
            border-radius: 6px;
        }
        .search {
            float: left;
            width: 20%;
            padding: 1px;
            background: #6f5b80;
            color: white;
            font-size: 17px;
            border: 1px solid #6f5b80;
            border-radius:5px;
            border-left: none; /* Prevent double borders */
            
        }
        
    }
}
.filters {
    display: flex;  
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
       select{
        background: #8740c4;
        padding: 2px;
        border: 1px solid #6f5b80;
        border-radius: 0.5rem;
        height: 1.5rem;
        font-size: 1rem; 
        color: white;
    }
       .orders-container{
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       margin-bottom: 1rem;

       }
       
}



.list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
         .list-item {
            border: 4px solid #6f5b80;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1rem;
            width: 20rem;
            height: 25rem;
            background-color: #8740c4;//#32bde8 ;
            border-radius: 0.5rem;
            text-align: center;
            padding-bottom: 2rem;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                h1{
                    font-size: 1.4rem;
                }
                h4{
                    font-size: 1rem;
                }
                &:hover {
                        background-color: #7e24ec;
                      }
            .link-container {
                display: flex;
                align-items: center;
                height: 100%;

                    .list-item-link {
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                    background-color: $blue;;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    border-radius: 0.5rem;
                    transition: 0.3s linear;
                    
                      &:hover {
                        background-color: #6f5b80;
                      }
                    } 
                }
            
                    .list-item-img {
                        img {
                            width: 300px;
                            height: 200px;
                            border-radius: 1em;
                        }
                    }
        }
        
        
}
.loading-games{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
}
.games-not-found{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
}

.order-button{
    background: #7e24ec;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;

}
.pagination {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    .pagination-button{
        float: left;
        width: 10%;
        padding: 10px;
        background: #7e24ec;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.5rem;
             &:hover {
                        background-color: #6f5b80;
                      }

    }
    button:disabled, button[disabled] {
        background: #ccc;
        color: #666;
        cursor: not-allowed;
    }
}
`

export default VideogameListStyled;