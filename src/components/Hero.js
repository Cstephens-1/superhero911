import styled from "styled-components"

function Hero({eachHero, handleClickedHero}){

function clickHandler(){
  handleClickedHero(eachHero)
}

    return (
        <div>
          <Card>
            <div className="card-body" onClick={clickHandler}>
              <h1 className="card-title">{eachHero.name}</h1>
              <CardImg src={eachHero.image} alt=""></CardImg>
              <p>{eachHero.cost}</p>
            </div>
          </Card>
        </div>
      );
    }
    export default Hero;

    const Card= styled.div`
      text-align: center;
      position: relative;
      display: inline-grid;
      margin: 1rem 1rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-image: url("https://static.vecteezy.com/system/resources/thumbnails/000/241/296/small/beautiful-colorful-comic-book-background-illustration.jpg");
      border-style: solid;
      border-width: 5px;
      border-color: black;
      background-size: contain;
    `

const CardImg= styled.img`

  height: 375px;
  width: 300px;
  border-radius: 8px;
  border-radius: 10px;
`