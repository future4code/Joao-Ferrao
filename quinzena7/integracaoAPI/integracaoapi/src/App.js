import React from 'react';
import styled from 'styled-components';
import TelaCadastro from './Components/TelaCadastro';
import TelaListaUsuarios from './Components/TelaListaUsuarios';


export default class App extends React.Component {
  state={
    telaAtual: "cadastro",

  }
  escolheTela = () => {

    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} /> 
      default:
        return <div>Erro! Página não encontrada!</div>     
    }
  
  }
  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }
  
  render() {


    return (
      
      <div>

        <div>
          <h2>Labenusers</h2>
          
          <div>
            {this.escolheTela()}
          </div>
        </div>
        
      </div>

    );
  }
}

