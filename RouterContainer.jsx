import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Welcome from './pages/Welcome'
import Explore from './pages/Explore'
import MeuPerfil from './pages/MeuPerfil'
import DescGame from './pages/DescGame'

class RouterContainer extends Component {
	render() {
		return(
			<Routes>
			<Route path="/" element={ <Welcome /> } />
            <Route path="home" element={ <Home /> } />
			<Route path="login" element={ <Login /> } />
            <Route path="cadastro" element={ <Cadastro /> } />
            <Route path="explore" element={ <Explore /> } />
            <Route path="perfil" element={ <MeuPerfil /> } />
			<Route path='descgame' element={ <DescGame /> } />
			</Routes>
		)
	}
}

export default RouterContainer