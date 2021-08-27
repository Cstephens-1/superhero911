import styled from "styled-components"
import {Link} from "react-router-dom"
import {useState} from "react"


function SendHelp({alertSendHelp}){

    const [mission, setMission] = useState("")

    //what happens when user clicks submit
    function submitHandler(e){
        e.preventDefault()
        handlePost(mission)
        alertSendHelp(mission)
    }

    //function to handle POST fetch
    function handlePost(missionName){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "mission": missionName })
        };

        fetch('http://localhost:3000/missions', requestOptions)
            .then(response => response.json())
            .then(missionUpdate=>{
                setMission(missionUpdate)
            });
    }
    
    //function to set the mission
    function handleChange(e){
        setMission(e.target.value)
        
    }

    return(
        <>
        <Title className="help">REQUEST YOUR HERO</Title>
        <FormStyler onSubmit={submitHandler}>
            <Label>
            Please select which emergency you need assistance with:
            <Select onChange={handleChange}>
                <OptionStyler value=""></OptionStyler>
                <OptionStyler value="alien invasion">Alien Invasion</OptionStyler>
                <OptionStyler value="assault">Assault</OptionStyler>
                <OptionStyler value="certain death (of hero) rescue operation">Certain Death (of Hero) Rescue Operation</OptionStyler>
                <OptionStyler value="deep sea rescue">Deep Sea Rescue</OptionStyler>
                <OptionStyler value="evacuation">Evacuation</OptionStyler>
                <OptionStyler value="failed parachute or other freefall emergency">Failed Parachute or Other Freefall Emergency</OptionStyler>
                <OptionStyler value="fire">Fire</OptionStyler>
                <OptionStyler value="gang crime">Gang Crime</OptionStyler>
                <OptionStyler value="human dna altered mutants">Human DNA Altered Mutants</OptionStyler>
                <OptionStyler value="kidnapping">Kidnapping</OptionStyler>
                <OptionStyler value="marine life threat">Marine Life Threat</OptionStyler>
                <OptionStyler value="mind control">Mind Control</OptionStyler>
                <OptionStyler value="natural weather emergency">Natural Weather Emergency</OptionStyler>
                <OptionStyler value="radioactivity">Radioactivity</OptionStyler>
                <OptionStyler value="robbery">Robbery</OptionStyler> 
                <OptionStyler value="terrorism">Terrorism</OptionStyler>
            </Select>
            
            <Button type="submit">Request Assistance</Button>
            <Link to="/login"><Button>Go Home</Button></Link>
            <Link to="/addfunds"><Button>Add Funds</Button></Link>
           
            </Label>
        </FormStyler>
        <div>
            <h2> The following heroes are willing to help you:</h2>
        </div>
        </>
    )
}

export default SendHelp


//Style section

const FormStyler=styled.form`
    text-align: center;
    background-color: red;
    font-size: large;
    height: 100px;
    width: 900px;
    margin-left: 26%;
    padding-bottom: 10px;
    border-radius: 6px;
    font-weight: 700;
`

const OptionStyler=styled.option`
    font-size: x-large;
`
const Button = styled.button`
    padding: 16px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    transition: 2000ms ease;
    text-decoration: none;
    font: large sans-serif;
    margin-bottom: 5px;
    margin: 3px;;
    ;
`

const Select = styled.select`
    font-size: large;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;
    ;
`

const Title = styled.h1`
    font-size: x-large;
    text-align: center;
    padding-top: 30px;
    background-color: red;
    height: 75px;
    width: 700px;
    margin-left: 32%;
    border-radius: 8px;
    top: 0px;
    ;
`

const Label=styled.label`
    font-size: large;

`