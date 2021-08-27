import styled from "styled-components"
import Hero from "./Hero"
import {useState} from "react"

function SuperheroContainer({superheroArray, alertLandingPage, mission}){


console.log(mission)

    function heroWasClicked(clickedHero){
        alertLandingPage(clickedHero)

    };

    // change .map to .filter, and filter by hero.specialties.includes the selected emergency. logic: if x === clickedhero, then return else filter
    
    const superheroMissionArrays=[]
    
    superheroArray.forEach(superhero=>{
        superheroMissionArrays.push(superhero.specialties)
    })

    console.log(superheroMissionArrays)

    superheroMissionArrays.filter(missionArray => missionArray.includes(mission)) ? console.log("match found!") : console.log("no matches found") 




    return(
        <>
        <SuperheroContainerStyle>
        {superheroArray.map(eachHero=>{
            return(
                <Hero handleClickedHero={heroWasClicked} key={eachHero.id} eachHero={eachHero}/>
                )
        })}
        
        </SuperheroContainerStyle>
        </>


    )
}

export default SuperheroContainer

const SuperheroContainerStyle= styled.div`
    background: red;
    margin: 2rem;
    display: inline-flex;
    flex-wrap: wrap;
    text-align: left;
    position: relative;
    width: auto
    
`

