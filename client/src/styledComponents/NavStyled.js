import styled from "styled-components";
const NavStyled=styled.div`
    background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,36,236,1) 41%, rgba(111,91,128,1) 100%);
    color: white;
    padding: 2rem 0;
    position: fixed;
    left: 0%;
    top:0%;
    width: 100%;
    a {
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
        text-decoration: none;
        
    }
    .logo-nav{
        width: 50px;
        height: 50px;
        margin-left: 2rem;
    }
    .logo-nav-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .logo {
            letter-spacing: 15px;
            font-size: 1.2em;
            margin-right: 60rem;
        }
        .navigation ul {
            margin: 0;
            padding: 0;
            list-style: none;
            li{
                display: inline-block;
                margin-right: 3rem;
                
                    .createYourGame{
                        background-color: $secondary;
                        color: $primary;
                        &:hover{
                            background-color: #7e24ec;
                            color:$secondary;   
                        }
                    }

                a {
                    font-weight: bold;
                    display: block;
                    padding: 0.5rem 1rem;
                    transition: 0.3s linear;
                    border-radius: 5px;
                    &:hover{
                        background: #7e24ec;
                    }
                }
            }
        }
    }
`

export default NavStyled;