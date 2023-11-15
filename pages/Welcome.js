import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div className='welcome'>
          <h1>Welcome to <br></br> Best Browser Games!</h1>
          <p>Uma comunidade para compartilhar suas opiniões sobre os melhores (e piores) browser games da web</p>
          <p>&#127911; &#x1f3ae; &#129299; &#129302; &#128187;</p>
          <div>
          <Link to='login' className='link'>Fazer login</Link>
          <Link to='cadastro' className='link'>Criar uma conta</Link> 
          </div>
        </div>
      );
}

export default Welcome;