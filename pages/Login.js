// import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="cadastro">
      {/* <NavBar/> */}
      <div className="container">
        <div className="container-texto">
            <h1>Acesse sua conta no <span>BestBrowserGames</span></h1>
            <p id="ir-entrar">Ainda não tem um cadastro? <Link to="../cadastro">Criar uma conta</Link></p>
        </div>
    
        <div className="container-form">
          <form action="" method="post">
            <div className="form-item">
              <h3>Coloque seus dados para acessar a conta</h3>   
            </div>
        
            <div className="form-item">
              <label htmlFor="e-mail">E-mail</label>
              <input type="email" id="e-mail" required/>
            </div>
        
            <div className="form-item">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" required/>
              {/* <small><a href="">Esqueceu a senha?</a></small> */}
            </div>
        
            <button type="button" onclick="verificarLogin()"><a href='home'>Entrar</a></button> {/*a provisório*/}
            <p id="mensagemErroL"></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;