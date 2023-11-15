import NavBar from "../components/NavBar"

function MeuPerfil() {
  return(
    <div className="perfil">
      <NavBar/>
      <div>
        <h2>Seu perfil</h2>
        <div>
          <div>
            <h4>Nome</h4>
            <p>Nome Do Cidadão</p>
          </div>
          <div>
            <h4>E-mail</h4>
            <p>meuemail@email.com</p>
          </div>
          <div>        
            <h4>Data de nascimento</h4>
            <p>00/00/00</p>
          </div>
        </div>
        <div>
          <div>        
            <h4>País</h4>
            <p>Brasil</p>
          </div>
          <div>       
            <h4>Estado</h4>
            <p>XX</p>
          </div>
        </div>
        <button>Editar</button>
      </div>
    </div>
  )
}

export default MeuPerfil