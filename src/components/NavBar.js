
import styled from "styled-components"
import {NavLink} from "react-router-dom"


function NavBar(){

  
    return(
        <NavLink to="/">

            <NavBarStyling>
                <LeftButton>My Profile</LeftButton>
                <RightButton>Sign Out</RightButton>
            </NavBarStyling>
        </NavLink>
    )
}

export default NavBar

const NavBarStyling = styled.div`
height: 70px;
background-color: silver;
text-align:right;
padding-bottom: 10px;
width: 101.6%;
margin-top: -15px;
margin-left: -15px;
`

const RightButton = styled.button`
    padding: 16px;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: 2000ms ease;
    background-color: red;
    text-decoration: none;
    font: x-large sans-serif;
    margin: 10px;
    width: 10rem;
    margin-left: 500px;
    `

const LeftButton = styled.button`
padding: 16px;
border: 2px solid black;
border-radius: 5px;
cursor: pointer;
transition: 2000ms ease;
background-color: red;
text-decoration: none;
font: x-large sans-serif;
margin: 10px;
width: 10rem;
margin-right: 1075px;
`