import NavBar from "../components/NavBar";
import GameCard from "../components/GameCard";

function Home() {
  return (
    <div className="home">
      <NavBar/>
      <div>
        <h1>Best Browser Games</h1>
        <h2>Recomendados para você</h2>
        <GameCard gameCategory='Action' gameName='Boom Runner' rating='5,0' gameImg='https://www.wallpaperup.com/uploads/wallpapers/2012/11/25/22436/a0df04c40df437f6bb08a237b3d22a6d-700.jpg' />
        <GameCard gameCategory='Action' gameName='Dunno Where' rating='4,3' gameImg='https://www.wallpaperup.com/uploads/wallpapers/2012/11/25/22436/a0df04c40df437f6bb08a237b3d22a6d-700.jpg' />

        <h2>Mais populares</h2>
        <GameCard gameCategory='RPG' gameName='Aiu Koda 3' rating='5,0' gameImg='https://www.wallpaperup.com/uploads/wallpapers/2012/11/25/22436/a0df04c40df437f6bb08a237b3d22a6d-700.jpg' />
        <GameCard gameCategory='Puzzle' gameName='Crash n Solve' rating='4,9' gameImg='https://www.wallpaperup.com/uploads/wallpapers/2012/11/25/22436/a0df04c40df437f6bb08a237b3d22a6d-700.jpg' />

        <h2>Novidades</h2>
        <GameCard gameCategory='Strategy' gameName='Sovereign 2' rating='4,0' gameImg='https://www.wallpaperup.com/uploads/wallpapers/2012/11/25/22436/a0df04c40df437f6bb08a237b3d22a6d-700.jpg' />
        <GameCard gameCategory='Sports' gameName='Gooo' rating='3,1' gameImg='https://www.wallpaperup.com/uploads/wallpapers/2012/11/25/22436/a0df04c40df437f6bb08a237b3d22a6d-700.jpg' />

      </div>
    </div>
  );
}

export default Home;