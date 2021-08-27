import styled, {keyframes} from "styled-components"
import  {NavLink} from "react-router-dom"

function LoginButton(){
    return(
        <NavLink to="/login">
            <LoginButtonStyling>Sign In</LoginButtonStyling>
        </NavLink>
    )
}

export default LoginButton

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
     opacity: 100%;
  }
  `

const LoginButtonStyling = styled.button`
    position: absolute;
    left: 48%;
    width: 200px;
    height: 75px;
    margin-left: -50px;
    bottom:200px;
    background-color: red;
    font-size: larger;
    border-radius: 12px;
    font-size: x-large;
    animation: ${fadeIn} 7s linear;
    `
