import Category from "../components/Category";
import NavBar from "../components/NavBar";

function Explore() {
  return (
    <div className="explore">
      <NavBar/>
      <div>
        <h2>Busque um browser game pelo nome ou categoria</h2>
        <input placeholder="Pesquise o nome de um browser game"/>
        <Category cName='Action'/>
        <Category cName='Adventure'/>
        <Category cName='Arcade'/>
        <Category cName='Puzzle'/>
        <Category cName='RPG'/>
        <Category cName='Shooter'/>
        <Category cName='Sports'/>
        <Category cName='Strategy'/>
      </div>
    </div>
  );
}

export default Explore;