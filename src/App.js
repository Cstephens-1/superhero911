import './App.css';
import styled, {keyframes} from "styled-components"
import LoginButton from "./components/LoginButton"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Wallet from './components/Wallet';
import SendHelp from "./components/SendHelp"
import superhero911logo from "/home/cory/Development/code/projects/Superhero911/superhero911-v2/superhero911-v2/src/superhero911logo.PNG"
import multiverselogo from "/home/cory/Development/code/projects/Superhero911/superhero911-v2/superhero911-v2/src/multiverselogo.png"



function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <>
          <AppWrapper>
              <Imgstyler img src={superhero911logo} alt=""/>
              <LogoImgStyler src={multiverselogo} alt="" />
              <LoginButton />
          </AppWrapper>
          </>
        </Route>

        <Route exact path="/login">
            <LandingPage />
        </Route>
    
          <Route exact path="/addfunds">
            <WalletStyler>
              <Wallet />
            </WalletStyler>
          </Route>

        <SendHelpStyler>
        <Route exact path="/sendhelp">
            <SendHelp />
        </Route>
        </SendHelpStyler>

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;


const AppWrapper = styled.div`
  background-color: black;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  text-align: center;
  padding: 10px;
  display: block;
  /* margin-left: ; */
  
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `

const fadeIn = keyframes`
from {
  opacity: 0%;
}
to {
   opacity: 100%;
}
`

const Imgstyler =  styled.img`
margin-top: 75px;
margin-left: 34%;
display: block;
animation: ${fadeIn} 7s linear;
`;

const LogoImgStyler = styled.img`
  /* display: inline-block; */
  animation: ${rotate} 25s linear infinite;
  padding: 0rem 1rem;
  font-size: 1.2rem;
`;

const WalletStyler=styled.div`
  background-color: green;
`;


const SendHelpStyler = styled.div`
  background-color: black;
`;

