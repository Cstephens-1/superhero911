import styled from "styled-components"
import {NavLink} from "react-router-dom"
import NavBar from "./NavBar"

function LandingPage(){
    return(
        <LandingPageStyler>
        <NavBar />
        <ButtonContainer>

        <NavLink to="/sendhelp">
            <Button>Ask For Help</Button>
        </NavLink>
        <NavLink to="/addfunds">
            <Button>Add Funds</Button>
        </NavLink>
        
        </ButtonContainer>
        </LandingPageStyler>
    )
}

export default LandingPage


const Button = styled.button`
    height: 700px;
    width: 500px;
    padding: 16px;
    border-width: 2px;
    border-color: silver;
    border-radius: 8px;
    cursor: pointer;
    transition: 1000ms ease;
    background-color: red;
    text-decoration: none;
    font: 1rem sans-serif;
    margin: 9px;
    color: white;
    margin-top: 7%;
    font-size: 80px;

    &:hover{
        transform: translateY(-30px);
        background-color: silver;
        border-color: red;
        color: black;


    }
    `

const ButtonContainer=styled.div`
    text-align: center;
`

const LandingPageStyler=styled.div`
background-color: black   ;
position:absolute;
top:0px;
right:0px;
bottom:0px;
left:0px;
text-align: center;
padding: 16px;
`;