import React, {Component} from "react";

import laranja from "./imagem/laranja.jpg"

class App extends Component{
  state = {
    nome:"Alex",
    idade: 21,
    comidaFavorita: "Macarrão",
    musicasFavoritas: ["Dead Weight - Jack Stauber","Healty Moon - Diiv","Beach Song - Arcade Fire"],
    frutaFavorita: laranja
  }

  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicasFavoritas[0]}</li>
          <li>{this.state.musicasFavoritas[1]}</li>
          <li>{this.state.musicasFavoritas[2]}</li>
        </ul>
        <img src={this.state.frutaFavorita} alt="laranja"/>
      </div>
    )
  }
}
 export default App

