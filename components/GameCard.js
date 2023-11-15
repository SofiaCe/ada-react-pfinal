import { Component } from 'react'

class GameCard extends Component {
  render() {
    return(
        <div className="gamecard">
            <img src={this.props.gameImg} width={'194px'} height={'110px'} alt="Imagem do jogo"></img>
            <small>{this.props.gameCategory}</small>
            <h3>{this.props.gameName}</h3>
            <p>&#11088; {this.props.rating}</p>
        </div>
    )
  }

}

export default GameCard