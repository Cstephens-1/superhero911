import styled from "styled-components"
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom"

function Wallet(){


    const [walletTotal, setWalletTotal] = useState(0);

    useEffect(()=>{
        fetch("http://localhost:3000/ledger/1")
        .then(resp=> resp.json())
        .then(ledgerInfo=> {
            setWalletTotal(ledgerInfo.walletTotal)}
            )
      }, [])

      function updateWallet(valueToUpdate){

        const postOptions = {
            method: 'PATCH',
            headers: {
            "Content-Type": "application/json",
             Accept: "application/json" },
             body: JSON.stringify({"walletTotal": valueToUpdate})
            }
        fetch("http://localhost:3000/ledger/1", postOptions)
        .then(resp=> resp.json())
        .then(ledgerUpdate=> {
            setWalletTotal(ledgerUpdate.walletTotal)
        })
      }

      function handleWalletSubmit(e){
        e.preventDefault()
        let inputNum = parseInt(e.target.previousSibling.value);
        if (isNaN(inputNum)){
            return "Not a number"
        } else {
            const WalletTotalNum = parseInt(walletTotal);
            const totalFunds=WalletTotalNum + inputNum;
            setWalletTotal(totalFunds)
            updateWallet(totalFunds)
            
        }
    };

    return(
        <WalletStyler>
            <Page>
                <h1>WALLET</h1>
        <TotalMoney> Your total balance is: ${walletTotal}</TotalMoney>
            <form >
                
                <Input name="add funds" type="text" placeholder="$0" ></Input>
                
               
                    <Button onClick={handleWalletSubmit} >Add funds</Button>
                    <Link to="/login"><Button>Go home</Button></Link>
                    <Link to="/sendhelp"><Button>Request Assistance</Button></Link>
               
               
                
                
            </form>
            </Page>
         </WalletStyler>
            
        

    )

}

export default Wallet


const WalletStyler = styled.div`

position: fixed;
right: 45%;
top: 10px;
z-index: 1;
`

const Button = styled.button`
    padding: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 2000ms ease;
    background-color: white;
    text-decoration: none;
    font: 1rem sans-serif;
    margin: 5px;
    background-color: white;
    color: black;
`
const TotalMoney= styled.h1`
    border-width: 10px;
    border-color: silver;
    border-radius: 10px;

`
const Page=styled.div`
    background-color: red;
    color: white;
    border: 2px solid black;
    border-width: 5px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
  height: 530x;
  font-size: x-large;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
`

const Input=styled.input`
    font-size: x-large;
    width: 250px;
    border-radius: 5px;
    margin-bottom: 10px;
`