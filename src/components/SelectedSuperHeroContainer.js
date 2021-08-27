import Hero from "./Hero"
import styled from "styled-components"
import {useState}  from "react"

function SelectedSuperheroContainer({selectedHero, alertLandingPage}){

    
    const [mission, setMission]=useState(null)


    function heroWasClicked(clickedHero){
        alertLandingPage(clickedHero)
    };


    //fetch mission data from DB
    fetch("http://localhost:3000/missions")
    .then(resp=> resp.json())
    .then(data=> {
        let lastMission = data.pop()
        if(lastMission !== undefined){
            setMission(lastMission.mission)
        }
    })

    return(
        <MyHeroContainer>
        <h1>My Hero</h1>
        {selectedHero.map(eachHero=>{
            return(
                <>
                        <h3>Mission: {mission}</h3>
                        <Hero handleClickedHero={heroWasClicked} key={eachHero.id} eachHero={eachHero}/>
                        {/* this button should deduct the funds from your wallet and then remove the hero from your heros list */}
                        <Button>Submit</Button>
                </>
                )
        })}
        
        </MyHeroContainer>
    )
}

export default SelectedSuperheroContainer

//Styling section

const Button = styled.button`
    padding: 16px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    transition: 2000ms ease;
    text-decoration: none;
    font: 1rem sans-serif;
    margin-bottom: 5px;
    ;
    `

    const MyHeroContainer=styled.div`
        background-color: red;

    `