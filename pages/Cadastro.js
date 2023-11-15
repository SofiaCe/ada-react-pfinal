// import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom'

function Cadastro() {
  return (
    <div className="cadastro" id='c1'>
      {/* <NavBar/> */}
      <div className="container">
        <div className="container-texto" id="texto-login">
          <h1>Cadastre-se no <span>BestBrowserGames</span></h1>
          <p>Já tem uma conta? <Link to='../login'>Entrar</Link></p>
        </div>

        <div className="container-form">
          <form action="" method="post">
            <div className="form-item">
              <h3>Cadastre suas informações para criar uma conta</h3>   
            </div>
                        
            <div className="form-item">
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" required/>
            </div>
        
            <div className="form-item">
              <label htmlFor="e-mail">E-mail</label>
              <input type="email" id="e-mail" required/>
            </div>

            <div className="form-item">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" required/>
            </div>

            <div className="form-item">
              <label htmlFor="nascimento">Data de nascimento</label>
              <input type="date" id="nascimento" required/>
            </div>

            <div className="form-item">
              <label htmlFor="pais">País</label>
              <input type="text" id="pais" required/>
            </div>

            <div className="form-item">
              <label htmlFor="estado">Estado</label>
              <input type="text" id="estado" required/>
            </div>

            <button type="button" onclick="verificarCadastro()"><a href='home'>Criar conta</a></button> {/*a provisório*/}
            <p id="mensagemErroC"></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;