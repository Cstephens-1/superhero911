import styled from "styled-components"
import React, {useState, useEffect} from 'react';
import SuperheroContainer from "./SuperHeroContainer";
import SelectedSuperheroContainer from "./SelectedSuperHeroContainer";
import SelectEmergency from "./SelectEmergency"


function LandingPage() {
    //superhero fetch
    const [superheroes, setSuperheroes] = useState([])
    const [selectedHero, setSelectedHero] = useState([])

    const [mission, setMission]=useState([])
  
    useEffect(()=>{
      fetch("http://localhost:3000/superheroes")
      .then(resp=> resp.json())
      .then(superhero=> {
          setSuperheroes(superhero)
      })
    }, [])
  
    //function to add hero to the selected list
    function addHeroToSelectedHeroList(clickedHero){
        // let filteredBotList = botArmy.filter(anyBot=>
        //     anyBot.id !== botObj.id
        //   )
        //   setBotArmy([...filteredBotList])
        // }

            
      if(selectedHero.length < 1){
        setSelectedHero([...selectedHero, clickedHero])
        
      } else {
        console.log("IM BUSY")
      }
    }
  
    //function to remove hero from the selected list
    function removeHeroFromSelection(){
      setSelectedHero([])
    }

    function addMissionToSendHelpPage(mission){
        console.log("SendHelp knows about the mission", mission)
        setMission(mission)
    }

    return (
        <div className="landingPageContainer">


          <SelectEmergency alertSendHelp={addMissionToSendHelpPage}/>
          
          
          <ChosenOnesStyler>
            <SelectedSuperheroContainer selectedHero={selectedHero} alertLandingPage={removeHeroFromSelection} />
          </ChosenOnesStyler>
          
    
    
          <SuperheroContainerStyle>
            <SuperheroContainer  superheroArray={superheroes} alertLandingPage={addHeroToSelectedHeroList} mission={mission}/>
          </SuperheroContainerStyle >
    
    
        </div>
      );
    }

export default LandingPage;

const ChosenOnesStyler = styled.div`
  text-align: center;
  height: 800px;
`

const SuperheroContainerStyle= styled.div`
    margin: 2rem;
    display: inline-flex;
    flex-wrap: wrap;
    text-align: left;
    position: relative;
    width: auto;
    
`