import React, { Component } from "react";
import "./App.css";

class App extends Component{
  state = {
    identificacao: [{
      nome: "Charles", 
      idade: 35, 
      comidaFavorita: "Lasanha"
    }],
    musica: ["Breaking The Habit - Linkin Park"," Chop Suey! - System Of A Down","Come As You Are - Nirvana"]
  }
  
  render(){
    return(
      <section className="sec wrap">
        <div className="h1 verde">
          <h1>Meu nome é {this.state.identificacao[0].nome}</h1> 
        </div>

        <div className="h2  rosa">
          <h2>Minha idade é {this.state.identificacao[0].idade}</h2>
        </div>

        <div className="h3  azul">
          <h3>Minha comida favorita é {this.state.identificacao[0].comidaFavorita}</h3>
        </div>
        
        <div className="ol laranja">
          <p className="p preto">Segue uma lista com 3 musicas que escuto</p>
          {this.state.musica.map((item) => (
            <ol>
              <li>{item}</li>
            </ol>
        ))}
        </div>
      </section>
    )
  }
};

export default App;