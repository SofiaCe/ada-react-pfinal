import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
            <Link to="../home">BestBrowserGames</Link>
            <Link to="../explore">Explore</Link>
            <Link to="../perfil">Meu perfil</Link>
            <Link to="../login">Sair</Link>
        </div>
    )
}

export default NavBar